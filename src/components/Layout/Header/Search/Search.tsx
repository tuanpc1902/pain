import { ChangeEvent, useState } from 'react';
import './Search.scss';
import { isEmpty } from 'lodash';
function Search() {
    const [placeholder, setPlaceholder] = useState('____');
    const [searchValue, setSearchValue] = useState('');

    function handleFocus() {
        setPlaceholder('Input your search');
    }

    function handleBlur() {
        isEmpty(searchValue) && setPlaceholder('____');
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    return (
        <form className="bg-[#fff] search rounded-[5px] h-[30px] mr-[10px]">
            <input
                id="search-input"
                value={searchValue}
                type="text"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <button className="search-btn cursor-pointer" disabled={isEmpty(searchValue)}></button>
        </form>
    );
}
export default Search;
