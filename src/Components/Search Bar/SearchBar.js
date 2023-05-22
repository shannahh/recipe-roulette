import React from 'react'
import './SearchBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    return (

        <div className="search">
         <form>
             <input type={'text'}>
                 <button type={'button'}>Search</button>

             </input>
         </form>

        </div>

    );

}
 export default SearchBar;
