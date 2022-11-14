import React from 'react';
import NewsCardsList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function Main(props) {
    const [arrayLength, setArrayLength] = React.useState(3);
    const [isShowMore, setIsShowMore] = React.useState(true);
    const newsArticles = props.newsArticleArray;
    const savedArticles = props.savedArticlesArray;
    const arrayType = props.isSearchResults ? newsArticles : savedArticles;
    const articleArray = arrayType === savedArticles ? savedArticles : newsArticles.slice(0, arrayLength);

    const buttonHiddenClass = isShowMore ? '' : 'main__button_hidden';

    React.useEffect(() => {
        setArrayLength(3);
        setIsShowMore(true);
    }, [newsArticles])

    React.useEffect(() => {
        if (arrayLength >= newsArticles.length) {
            setIsShowMore(false)
        }
    }, [arrayLength, newsArticles.length])

    function handleButtonClick() {
        if (arrayLength < newsArticles.length) {
            setArrayLength(arrayLength + 3);
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
                                    onClickSave={props.onClickSave}
                                    keyword={props.keyword}
                                    onClickDelete={props.onClickDelete}
                                    savedArticlesArray={savedArticles}
                                    articleArray={articleArray}
                                    openSigninPopup={props.openSigninPopup}
                                />
                                <button type='button' className={`main__button ${buttonHiddenClass}`} onClick={handleButtonClick}>Show more</button>
                            </div>
                        </div>
                        :
                        <NotFoundPage isServerError={props.isServerError} /> : ''}
            {props.children}
            <About />
        </main>
    )
}