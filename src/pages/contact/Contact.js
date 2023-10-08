import React from "react";
import "./Contact.css"
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <h1>Contact Us</h1>
                <p>
                    Coming Soon.
                </p>
                <Link to={"/contact"}></Link>
            </div>

        </>
    );
};

export default Contact;