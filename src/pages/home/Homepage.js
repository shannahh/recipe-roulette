import React from 'react';
import './Homepage.css';
import Header from "../../Components/header/Header";
import {Link} from "react-router-dom";
import Card from "../../Components/Card";


function Homepage(){
    return (
        <>
        <header className="page-container">
            <Header title="Recipe Roulette" />
            <h2> When choosing a recipe costs too much energy</h2>

        </header>
            <main>
                <Card

                title="2.3 million recipes"
                description="Not sure what to eat today? Or wanting to try something new? Search up some new recipes!"
                />
                <Card

                    title="Start today!"
                    description="Register now and start saving your favourite recipes. What are you waiting for?"
                />

                <Card

                    title="Over 2 million recipes"
                    description=""
                />

            </main>

            <Link to={"/"}> </Link>
</>
    );
}
export default Homepage;