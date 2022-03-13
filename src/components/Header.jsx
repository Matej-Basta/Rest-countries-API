//custom components
import Checkbox from "./Checkbox";

function Header() {

    const toggleClass = () => {
        document.getElementById("dark-mode").classList.toggle("header__container__border__circle--on");
    }

    return (
        <div className="header">
            <h4 className="header__heading">Countries of the world</h4>
            <div className="header__container">
                <Checkbox toggleClass={toggleClass} />
                <p className="header__container__text">Dark mode</p>
            </div>          
        </div>
    );
}

export default Header;