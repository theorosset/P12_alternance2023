import { FC } from "react";
import logo from "../../assets/logo/logo.svg"
import { NavLink, Routes, Route } from "react-router-dom"
import "./Header.scss" 

const Header: FC = () => {
    return (
        <header className="header__container">
            <div className="header__container__item">
                <img className="header__container__item--img" src={logo} alt="logo" />
                <nav className="header__container__item__navigation">
                    <ul className="header__container__item__navigation--list">
                        <NavLink to={"/work-in-progress"}><li>Accueil</li></NavLink>
                        <NavLink to={"/"}><li>Profil</li></NavLink>
                        <NavLink to={"/work-in-progress"}><li>Réglage</li> </NavLink>
                        <NavLink to={"/work-in-progress"}><li>Communauté</li> </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header