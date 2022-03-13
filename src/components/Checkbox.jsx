function Checkbox({toggleClass}) {
    return (
        <div onClick={toggleClass} className="header__container__border">
            <div className="header__container__border__circle" id="dark-mode"></div>
        </div>
    );
}

export default Checkbox;