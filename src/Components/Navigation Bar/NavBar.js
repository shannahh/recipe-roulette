import './NavBar.css'
import React,{Component} from "react";
import {MenuItems} from "./MenuItems"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../button/Button"
import {faBowlFood} from "@fortawesome/free-solid-svg-icons";



/*
class NavBar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
}
    render() {
        return(
            <nav className={"NavBarItems"}>
                <h1 className={"navbar-logo"}>Recipe Roulette<i className="fa-solid fa-bowl-food"></i> </h1>
                <div className={"menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )

                    })}

                </ul>
                <Button> Sign Up/Login</Button>


            </nav>
        )
    }
} */
 function NavBar() {
    return (
        <nav>
            <div className="nav-container">
                <h2>Recipe Roulette <i className="fa-solid fa-bowl-food"></i> </h2>

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Search</li>
                    <li>Contact</li>
                </ul>
                <Button> Sign up</Button>
            </div>
        </nav>
    );
}

export default NavBar;