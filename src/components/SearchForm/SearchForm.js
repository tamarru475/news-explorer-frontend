import React from 'react';

export default function SearchForm({ onSubmit }) {
    return (
        <form className="searchForm" name="searchForm" onSubmit={onSubmit}>
            <fieldset className="searchForm__fieldset">
                <input
                    type="text"
                    className="searchForm__input"
                    id="text"
                    name="text"
                    placeholder="Yellowstone"
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