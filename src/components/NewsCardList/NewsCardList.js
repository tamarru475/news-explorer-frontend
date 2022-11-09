import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { newsCardsArray } from '../../utils/Constants';


export default function NewsCardsList(props) {

    const arrayLength = props.isSearchResults ? newsCardsArray.slice(0, 3) : props.savedArticlesArray;
    return (
        <section className='newsCardsList'>
            <ul className='newsCardsList__list'>
                {arrayLength.map((card) => (
                    <NewsCard
                        key={card._id}
                        card={card}
                        isSearchResults={props.isSearchResults}
                        isLoggedIn={props.isLoggedIn}
                    />
                ))}
            </ul>
        </section>
    )
}