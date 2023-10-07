import React from "react";
import "./About.css";
import {Link} from "react-router-dom"; // Import the CSS for styling

const AboutPage = () => {
    return (
        <>
        <div className="about-page">
            <h1>About Us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor mi
                ut quam lacinia, vel luctus quam iaculis. Sed eget est id erat
                bibendum congue. Donec eget libero nec libero facilisis vehicula vel eu
                nulla. Sed sed neque ipsum. Sed non turpis eu ex dictum tempor. Nulla
                facilisi. Sed vel justo mi. Nullam venenatis urna auctor, tempus odio
                non, malesuada leo. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Etiam hendrerit erat non quam
                efficitur, non suscipit sapien euismod. Sed in fermentum elit.
            </p>
            <Link to={"/about"}></Link>
        </div>

        </>
    );
};

export default AboutPage;
