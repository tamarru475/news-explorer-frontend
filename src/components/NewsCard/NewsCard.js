import React from 'react';


export default function NewsCard(props) {

    const [isSaved, setIsSaved] = React.useState(false);

    const keywordClass = props.isSearchResults ? '' : 'newsCard__keyword_active';
    const iconClass = props.isSearchResults ? 'newsCard__bookmark-icon' : 'newsCard__trash-icon';
    const iconWrapperClass = props.isSearchResults ? '' : 'newsCard__righthand-container_delete';
    const bookmarkActiceClass = isSaved ? 'newsCard__bookmark-icon_active' : '';

    const handleIconClick = () => {
        if (iconClass === 'newsCard__bookmark-icon') {
            if (isSaved === true) {
                return setIsSaved(false);
            }
            return setIsSaved(true);
        }
        return setIsSaved(false);
    }
    return (
        <div className='newsCard'>
            <div className='newsCard__image-container' style={{ background: `url(${props.card.image}) no-repeat center/cover` }}>
                <div className={`newsCard__keyword ${keywordClass}`}>{props.card.keyword}</div>
                <div className={`newsCard__righthand-container ${iconWrapperClass}`}>
                    <div className='newsCard__deleteMessage'>Remove from saved</div>
                    <div className='newsCard__icon-container'>
                        <div className={`${iconClass} ${bookmarkActiceClass}`} onClick={handleIconClick}></div>
                    </div>
                </div>
            </div>
            <div className='newsCard__text-container'>
                <p className='newsCard__date'>{props.card.date}</p>
                <h3 className='newsCard__title'>{props.card.title}</h3>
                <p className='newsCard__text'>{props.card.text}</p>
                <p className='newsCard__source'>{props.card.source}</p>
            </div>
        </div>
    )
}