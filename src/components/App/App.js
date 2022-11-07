import React from "react";
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigninPopup from "../PopupWithForm/SigninPopup";
import SignupPopup from '../PopupWithForm/SignupPopup';
import NavPopup from '../NavPopup/NavPopup';
import InfoTooltip from '../InfoToolsTip/InfoTooltip';
import { Route, Switch } from 'react-router-dom';
import ValidationContext, {
    errorMessages,
} from '../../contexts/ValidationContext';
function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSearchResults, setIsSearchResults] = React.useState(true);

    const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [isInfoToolsTipOpen, setIsInfoToolsTipOpen] = React.useState(false);
    const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);

    const [valid, setValid] = React.useState(true);


    function handleSigninClick() {
        setIsSigninPopupOpen(true);
    }

    function handleSignupClick() {
        setIsSignupPopupOpen(true);
    }

    function handleSignupSubmit() {
        setIsSignupPopupOpen(false);
        setIsInfoToolsTipOpen(true);
    }

    function handlePopupNavClick() {
        if (isPopupNavOpen) {
            setIsPopupNavOpen(false);
        } else {
            setIsPopupNavOpen(true);
        }
    }

    function closeAllPopups() {
        setIsSigninPopupOpen(false);
        setIsSignupPopupOpen(false);
        setIsInfoToolsTipOpen(false);
    }


    return (
        <Switch>
            <ProtectedRoute path="/saved-news" loggedIn={isLoggedIn}>
                <div className='App'>
                    <div className='page'>
                        <SavedNewsHeader />
                        <SavedNews isSearchResults={isSearchResults} />
                        <Footer />
                    </div>
                </div>
            </ProtectedRoute>
            <Route exact path='/'>
                <div className='App'>
                    <div className='page'>
                        <Header isLoggedIn={isLoggedIn} onSigninClick={handleSigninClick}>
                            <NavPopup
                                isOpen={isPopupNavOpen}
                                onNavClick={handlePopupNavClick}
                                isLoggedIn={isLoggedIn}
                                onSigninClick={handleSigninClick}
                            />
                        </Header>
                        <Main
                            isSearch={isSearch}
                            isSearchResults={isSearchResults}
                            isLoading={isLoading}
                            onNavClick={handlePopupNavClick}
                        >
                            <ValidationContext.Provider value={errorMessages}>
                                <SigninPopup
                                    isOpen={isSigninPopupOpen}
                                    onClose={closeAllPopups}
                                    openSignupPopup={handleSignupClick}
                                    openSigninPopup={handleSigninClick}
                                    isValid={valid}
                                    onValidityChange={setValid}
                                />
                                <SignupPopup
                                    isOpen={isSignupPopupOpen}
                                    onClose={closeAllPopups}
                                    openSignupPopup={handleSignupClick}
                                    openSigninPopup={handleSigninClick}
                                    openInfoToolsTip={handleSignupSubmit}
                                    isValid={valid}
                                    onValidityChange={setValid}
                                />
                            </ValidationContext.Provider>
                            <InfoTooltip
                                isOpen={isInfoToolsTipOpen}
                                onClose={closeAllPopups}
                                openSigninPopup={handleSigninClick}
                            />
                        </Main>
                        <Footer />
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default App;