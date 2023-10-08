import {Link, NavLink} from "react-router-dom";
import React, { useContext } from "react";
import {app} from "../../firebase"
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

                    <NavLink to={"/contact"}> <li>Contact us</li>
                    </NavLink>
                    <Authentication/>
                </ul>





            </div>
        </nav>
    );
}

export default NavBar;








