import React from 'react';
import notFoundIcon from '../../images/not-found-icon.svg';
export default function NotFoundPage({ isServerError }) {
    const errorTitle = isServerError ? 'Sorry, something went wrong during the request.' : 'Nothing Found';
    const errorText = isServerError ? 'here may be a connection issue or the server may be down. Please try again later.' : 'Sorry, but nothing matched your search terms.';

    return (
        <div className='notFoundPage'>
            <div className='notFoundPage__container'>
                <img
                    src={notFoundIcon}
                    alt='not found'
                    className='notFoundPage__image'
                />
                <h6 className='notFoundPage__title'>{errorTitle}</h6>
                <p className='notFoundPage__text'>{errorText}</p>
            </div>
        </div>
    )
}