import React from 'react';
import NewsCardsList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

export default function Main(props) {
    return (
        <main className='main'>
            {props.isSearch ?
                props.isLoading ? <Preloader /> :
                    props.isSearchResults ?
                        <div className='main__container'>
                            <h2 className='main__header'>Search results</h2>
                            <div className='main__news-container'>
                                <NewsCardsList isSearchResults={props.isSearchResults} />
                                <button type='button' className='main__button'>Show more</button>
                            </div>
                        </div>
                        :
                        <NotFoundPage /> : ''}
            {props.children}
            <About />
        </main>
    )
}