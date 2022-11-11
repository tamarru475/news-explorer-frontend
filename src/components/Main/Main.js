import React from 'react';
import NewsCardsList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function Main(props) {

    const [isShowMore, setIsShowMore] = React.useState(false);

    const buttonText = isShowMore ? 'Show less' : 'Show more';

    function handleButtonClick() {
        if (!isShowMore) {
            setIsShowMore(true);
        } else {
            setIsShowMore(false);
        }
    }

    return (
        <main className='main'>
            {props.isSearch ?
                props.isLoading ? <Preloader /> :
                    props.isSearchResults ?
                        <div className='main__container'>
                            <h2 className='main__header'>Search results</h2>
                            <div className='main__news-container'>
                                <NewsCardsList
                                    isSearchResults={props.isSearchResults}
                                    isLoggedIn={props.isLoggedIn}
                                    newsArticleArray={props.newsArticleArray}
                                    isShowMore={isShowMore} />
                                <button type='button' className='main__button' onClick={handleButtonClick}>{buttonText}</button>
                            </div>
                        </div>
                        :
                        <NotFoundPage /> : ''}
            {props.children}
            <About />
        </main>
    )
}