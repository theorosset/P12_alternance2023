import { FC } from "react";
import logo from "../../assets/logo/logo.svg"
import "./Header.scss" 

const Header: FC = () => {
    return (
        <header className="header__container">
            <div className="header__container__item">
                <img className="header__container__item--img" src={logo} alt="logo" />
                <nav className="header__container__item__navigation">
                    <ul className="header__container__item__navigation--list">
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header