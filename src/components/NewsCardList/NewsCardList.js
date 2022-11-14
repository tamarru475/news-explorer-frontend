import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { nanoid } from 'nanoid';


export default function NewsCardsList(props) {

    return (
        <section className='newsCardsList'>
            <ul className='newsCardsList__list'>
                {props.articleArray.map((card) => (
                    <NewsCard
                        key={card._id || nanoid()}
                        card={card}
                        isSearchResults={props.isSearchResults}
                        isLoggedIn={props.isLoggedIn}
                        onClickSave={props.onClickSave}
                        keyword={props.keyword}
                        onClickDelete={props.onClickDelete}
                        savedArticlesArray={props.savedArticlesArray}
                        openSigninPopup={props.openSigninPopup}
                    />
                ))}

            </ul>
        </section>
    )
}