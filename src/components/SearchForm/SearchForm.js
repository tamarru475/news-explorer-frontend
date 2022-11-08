import React from 'react';

export default function SearchForm({ onSubmit, isSearch }) {

    const [keyword, setKeyword] = React.useState('');

    React.useEffect(() => {
        setKeyword('');
    }, [isSearch]);

    const onKeywordChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <form className="searchForm" name="searchForm" onSubmit={onSubmit}>
            <fieldset className="searchForm__fieldset">
                <input
                    type="text"
                    className="searchForm__input"
                    id="text"
                    name="text"
                    placeholder="Yellowstone"
                    value={keyword || ''}
                    onChange={onKeywordChange}
                    required
                />
                <button
                    type="submit"
                    className="searchForm__button"
                >
                    Search
                </button>
            </fieldset>
        </form>
    )
}