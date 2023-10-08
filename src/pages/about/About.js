import React from "react";
import "./About.css";
import {Link} from "react-router-dom"; // Import the CSS for styling

const AboutPage = () => {
    return (
        <>
        <div className="about-page">
            <h1>About Us</h1>
            <p>
               Recipe Roulette is a school project. Its purpose was to learn more about Frontend development
                using React Javascript. This is a basic application to search for recipes and for the indecisive that
                can't seem to pick a recipe. So far I've learned a lot, and hope to continue to optimize this application.
            </p>
            <Link to={"/about"}></Link>
        </div>

        </>
    );
};

export default AboutPage;
