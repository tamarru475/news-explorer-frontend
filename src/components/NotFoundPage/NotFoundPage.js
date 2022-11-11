import React from 'react';
import notFoundIcon from '../../images/not-found-icon.svg';
export default function NotFoundPage() {


    return (
        <div className='notFoundPage'>
            <div className='notFoundPage__container'>
                <img
                    src={notFoundIcon}
                    alt='not found'
                    className='notFoundPage__image'
                />
                <h6 className='notFoundPage__title'>Nothing found</h6>
                <p className='notFoundPage__text'>
                    Sorry, but nothing matched
                    your search terms.</p>
            </div>
        </div>
    )
}