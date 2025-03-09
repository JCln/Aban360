import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

interface props {
    placeholder: string,
    classes?: string,
    showButton?: boolean
}
const SearchForm: FC<props> = ({ placeholder, showButton = true, classes }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = () => {
        localStorage.setItem('lastInputSearch', searchTerm);
        if (searchTerm.trim()) {
            navigate(`/summary?query=${searchTerm}`, {
                state: { from: location.pathname }
            });
        }
    };
    return (

        <div className={`flex-shrink-0 w-full md:w-auto bg-light-gray flex rounded-xl my-aut ${classes}`}>
            <input
                type="text"
                placeholder={placeholder}
                className="bg-transparent w-full my-auto px-4 py-2 rounded-md text-black focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />

            {showButton && (
                <div className="my-auto mx-1 cursor-pointer" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className="text-gray" />
                </div>)}
        </div>

    )
}
export default SearchForm