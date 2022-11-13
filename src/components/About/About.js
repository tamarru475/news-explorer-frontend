import React from 'react';
import authorAvatar from '../../images/developer-image.jpeg';

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
                        My name is Tamar Rubin, I am a web developer.
                        To develop this project I used my newly acquired knowledge with:
                        React.js, JavaScript Classes, RestApi, CSS, HTML, Node.js, MongoDB,
                        Google Cloud and more!
                    </p>
                    <p className='about__paragraph'>
                        Recently, I participated in the “Practicum 100” program by Yandex because I was
                        inspired by the world of coding. I feel like working in a way that is organized,
                        precise, cohesive, and proactive - trying to foresee problems and find solutions in
                        advance speaks to me in a very personal way.
                    </p>
                </div>
            </div>
        </section>
    )
}