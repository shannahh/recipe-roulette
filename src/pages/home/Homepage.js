import React from 'react';
import './Homepage.css';
import Header from "../../Components/header/Header";
import {Link} from "react-router-dom";
import Card from "../../Components/Card";


function Homepage(){
    return (
        <div className="page-container">
            <Header title="Recipe Roulette" />
            <h2> When choosing a recipe costs too much energy</h2>
            <Link to={"/"}> </Link>



        </div>

    );
}
export default Homepage;