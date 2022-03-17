//custom components
import { ThemeContext } from "../context/ThemeContext";
import {useContext} from "react";
import Checkbox from "./Checkbox";

function Header() {

    const {theme, setTheme} = useContext(ThemeContext);

    const toggleClass = () => {
        document.getElementById("dark-mode").classList.toggle("header__container__border__circle--on");
    }

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const handleClick = () => {
        toggleTheme();
        toggleClass();
    }

    return (
        <div  className={theme === "light" ? "header" : "header--dark"}>
            <h4 className="header__heading">Countries of the world</h4>
            <div className="header__container">
                <Checkbox toggleClass={handleClick} />
                <p className="header__container__text">Dark mode</p>
            </div>          
        </div>
    );
}

export default Header;