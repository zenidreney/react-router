import { CiYoutube } from "react-icons/ci";
import { RiPinterestLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { GiHerbsBundle } from "react-icons/gi";
import { type ReactNode } from "react";

import "./Header.css"

type HeaderProps = {
    children?: ReactNode
}

export default function Header({ children }: HeaderProps) {

    return (
        <header>
            <div className="name-container">
                <GiHerbsBundle />
                <h1>Mock E-Plant Shop</h1>
                <GiHerbsBundle />
            </div>
            <div className="social-icons">

                <a href="https://www.youtube.com/"
                ><CiYoutube className="social-logo" /></a
                >
                <a href="https://www.pinterest.com/"
                ><RiPinterestLine className="social-logo" /></a
                >
                <a href="https://www.instagram.com/"
                ><CiInstagram className="social-logo" /></a
                >
            </div>

            {children}

        </header>

    )
}