import React from 'react';
import { newsCardsArray } from '../../utils/constants';
import NewsCard from '../NewsCard/NewsCard';


export default function NewsCardsList(props) {

    const arrayLength = props.isSearchResults ? newsCardsArray.slice(0, 3) : newsCardsArray;
    return (
        <section className='newsCardsList'>
            <ul className='newsCardsList__list'>
                {arrayLength.map((card) => (
                    <NewsCard
                        key={card._id}
                        card={card}
                        isSearchResults={props.isSearchResults}
                    />
                ))}
            </ul>
        </section>
    )
}