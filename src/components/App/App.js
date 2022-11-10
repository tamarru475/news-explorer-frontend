import React from "react";
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SigninPopup from "../SigninPopup/SigninPopup";
import SignupPopup from '../SignupPopup/SignupPopup';
import NavPopup from '../NavPopup/NavPopup';
import InfoTooltip from '../InfoToolsTip/InfoTooltip';
import { Route, Switch } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ValidationContext, {
    errorMessages,
} from '../../contexts/ValidationContext';
import submitErrorMessages from '../../utils/Constants';
import mainApi from '../../utils/MainApi';
import newsApi from '../../utils/NewsApi';
import * as auth from '../../utils/Auth';



function App() {
    /// Auth hooks ///
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [submitError, setSubmitError] = React.useState('');

    ///Search hooks ///
    const [isSearch, setIsSearch] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSearchResults, setIsSearchResults] = React.useState(false);

    ///Popups hooks ///
    const [isSigninPopupOpen, setIsSigninPopupOpen] = React.useState(false);
    const [isSignupPopupOpen, setIsSignupPopupOpen] = React.useState(false);
    const [isInfoToolsTipOpen, setIsInfoToolsTipOpen] = React.useState(false);
    const [isPopupNavOpen, setIsPopupNavOpen] = React.useState(false);

    ///Articles hooks ///
    const [savedArticles, setSavedArticles] = React.useState([]);
    const [searchArticles, setSearchArticles] = React.useState([]);
    ///Context hooks ///

    const [valid, setValid] = React.useState(true);
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            auth.getContent(jwt).then((res) => {
                if (res) {
                    setIsLoggedIn(true);
                }
            })
                .catch(err => console.log(err))
        }
    }, []);

    React.useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi
                .getUserInfo(token)
                .then((userData) => {
                    setCurrentUser({
                        email: userData.email,
                        name: userData.name,
                        _id: userData._id,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    React.useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            mainApi.getSavedArticles(token)
                .then((articlesArray) => {
                    setSavedArticles(articlesArray);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [currentUser])


    function handleSigninClick() {
        setSubmitError('');
        setIsSigninPopupOpen(true);
    }

    function handleSignupClick() {
        setSubmitError('');
        setIsSignupPopupOpen(true);
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
        setIsPopupNavOpen(false);
    }

    function handleSearchSubmit(keyword) {
        setIsSearch(true);
        setIsLoading(true);
        newsApi.getArticles(keyword)
            .then((data) => {
                if (data.articles.length === 0) {
                    setIsSearchResults(false);
                } else {
                    setSearchArticles(data.articles);
                    setIsSearchResults(true);
                }
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false);
            })
    }


    function handleSignupSubmit(values) {
        console.log(values);
        auth.register(values).then(() => {
            setIsSignupPopupOpen(false);
            setIsInfoToolsTipOpen(true);
        }).catch((error) => {
            if (error === 'Error 409') {
                console.log(error);
                setSubmitError(submitErrorMessages.signupConflictError);
            } else {
                setSubmitError(submitErrorMessages.serverError);
            }
        });
    }


    function handleSigninSubmit(values) {
        auth.login(values)
            .then((user) => {
                setCurrentUser(user.user);
                setIsLoggedIn(true);
                setIsSigninPopupOpen(false);
            }).catch((error) => {
                if (error === 'Error 400') {
                    setSubmitError(submitErrorMessages.signinValidationError);
                } else {
                    setSubmitError(submitErrorMessages.serverError);
                }
            });
    }

    function handleSignout() {
        localStorage.removeItem('jwt');
        setIsLoggedIn(false);
    }


    return (
        <Switch>
            <ProtectedRoute path="/saved-news" loggedIn={isLoggedIn}>
                <div className='App'>
                    <div className='page'>
                        <CurrentUserContext.Provider value={currentUser}>
                            <SavedNewsHeader
                                onNavClick={handlePopupNavClick}
                                isOpen={isPopupNavOpen}
                                onSignoutClick={handleSignout}
                                savedArticlesArray={savedArticles}>
                                <NavPopup
                                    isOpen={isPopupNavOpen}
                                    isLoggedIn={isLoggedIn}
                                    onSigninClick={handleSigninClick}
                                    onSignoutClick={handleSignout}
                                    onNavClick={handlePopupNavClick}
                                />
                            </SavedNewsHeader>
                            <SavedNews isSearchResults={isSearchResults} savedArticlesArray={savedArticles} />
                            <Footer />
                        </CurrentUserContext.Provider>
                    </div>
                </div>
            </ProtectedRoute>
            <Route exact path='/'>
                <div className='App'>
                    <div className='page'>
                        <CurrentUserContext.Provider value={currentUser}>
                            <Header
                                isLoggedIn={isLoggedIn}
                                onSigninClick={handleSigninClick}
                                onSignoutClick={handleSignout}
                                onNavClick={handlePopupNavClick}
                                onSearchSubmit={handleSearchSubmit}
                                isSearch={isSearch}
                            />
                            <NavPopup
                                isOpen={isPopupNavOpen}
                                isLoggedIn={isLoggedIn}
                                onSigninClick={handleSigninClick}
                                onNavClick={handlePopupNavClick}
                                onSignoutClick={handleSignout}
                            />
                            <Main
                                isSearch={isSearch}
                                isSearchResults={isSearchResults}
                                isLoading={isLoading}
                                onNavClick={handlePopupNavClick}
                                isLoggedIn={isLoggedIn}
                                newsArticleArray={searchArticles}
                            >
                                <ValidationContext.Provider value={errorMessages}>
                                    <SigninPopup
                                        isOpen={isSigninPopupOpen}
                                        onClose={closeAllPopups}
                                        openSignupPopup={handleSignupClick}
                                        openSigninPopup={handleSigninClick}
                                        isValid={valid}
                                        onValidityChange={setValid}
                                        onSignin={handleSigninSubmit}
                                        submitError={submitError}
                                    />
                                    <SignupPopup
                                        isOpen={isSignupPopupOpen}
                                        onClose={closeAllPopups}
                                        openSignupPopup={handleSignupClick}
                                        openSigninPopup={handleSigninClick}
                                        onSignup={handleSignupSubmit}
                                        isValid={valid}
                                        onValidityChange={setValid}
                                        submitError={submitError}
                                    />
                                </ValidationContext.Provider>
                                <InfoTooltip
                                    isOpen={isInfoToolsTipOpen}
                                    onClose={closeAllPopups}
                                    openSigninPopup={handleSigninClick}
                                />
                            </Main>
                            <Footer />
                        </CurrentUserContext.Provider>
                    </div>
                </div>
            </Route>
        </Switch>
    )
}

export default App;