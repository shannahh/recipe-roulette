import React from 'react';
import './Homepage.css';
import Header from "../../Components/header/Header";
import {Link} from "react-router-dom";
import Card from "../../Components/card/Card";
import fairytale from "../../assets/fairytale.jpg";

function Homepage(){
    return (
        <>

        <header className="page-container">
            <Header title="Recipe Roulette" />
            <h2> When choosing a recipe costs too much energy</h2>

        </header>
            <main>

                <Card className={"recipe"}
                      image={fairytale}
                      title="Step 1."
                      description="Make an account to get started. "
                />
                <Card

                    title="Step 2."
                    description="Get inspired with new meals. Browse through 2.3 million recipes!"
                />

                <Card

                    title="Step 3."
                    description="Add your favourite meals to your favourites list "
                />

            </main>

            <Link to={"/"}> </Link>
</>
    );
}
export default Homepage;