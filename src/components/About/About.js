import React from 'react';
import authorAvatar from '../../images/author-photo.png'

export default function About() {

    return (
        <section className='about'>
            <img
                src={authorAvatar}
                alt='author'
                className='about__author-picture'
            />
            <div className='about__text-container'>
                <h4 className='about__heading'>About the author</h4>
                <div className='about__paragraph-container'>
                    <p className='about__paragraph'>
                        This block describes the project author. Here you
                        should indicate your name, what you do, and which
                        development technologies you know.
                    </p>
                    <p className='about__paragraph'>
                        You can also talk about your experience with
                        Practicum, what you learned there, and how you can
                        help potential customers.
                    </p>
                </div>
            </div>
        </section>
    )
}