import React from 'react';
import './Homepage.css';
import Header from "../../Components/header/Header";
import {Link} from "react-router-dom";
import Card from "../../Components/card/Card";
import plate from "../../assets/restaurant_562678.png"
import signup from "../../assets/sign-up_5705829.png"
import heart from "../../assets/heart_833472.png"
function Homepage(){
    return (
        <>

        <header className="page-container">
            <Header title="Recipe Roulette" />
            <h2> When choosing a recipe costs too much energy</h2>

        </header>
            <main>

                <Card className={"recipe"}
                      image={signup}
                      title="Step 1."
                      description="Make an account to get started. (Icon by Freepik) "
                />
                <Card
                    image={plate}


                    title="Step 2."
                    description="Get inspired with new meals. Browse through 2.3 million recipes! (Icon by Freepik)"
                />

                <Card
                    image={heart}

                    title="Step 3."
                    description="Add your favourite meals to your favourites list. (Icon by Kiranshatry)  "
                />

            </main>

            <Link to={"/"}> </Link>
</>
    );
}
export default Homepage;