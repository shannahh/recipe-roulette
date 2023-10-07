import {Link, NavLink} from "react-router-dom";
import { Button } from "../button/Button";
import React, { useContext } from "react";
import { UserAuth } from "../../AuthContext"; // Import your authentication context here
import {auth, app} from "../../firebase"
import "./NavBar.css";
import Authentication from "../../Authentication";

function NavBar() {


    return (
        <nav>
            <div className="nav-container">
                <h2>
                    Recipe Roulette <i className="fa-solid fa-bowl-food"></i>{" "}
                </h2>

                <ul>
                    <NavLink to={"/"}>
                        <li>Home</li>
                    </NavLink>

                    <NavLink to={"/about"}> <li>About</li>
                    </NavLink>

                    <li>Contact us</li>
                    <Authentication/>
                </ul>





            </div>
        </nav>
    );
}

export default NavBar;








