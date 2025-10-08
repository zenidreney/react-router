import { CiYoutube } from "react-icons/ci";
import { RiPinterestLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

import "./Header.css"

export default function Header() {

    return (
        <header>
            <h1>Mock E-Plant Shop</h1>
            <div className="social-icons">

                <a href="https://www.youtube.com/"
                ><CiYoutube className="social-logo"/></a
                >
                <a href="https://www.pinterest.com/"
                ><RiPinterestLine className="social-logo"/></a
                >
                <a href="https://www.instagram.com/"
                ><CiInstagram className="social-logo"/></a
                >


            </div>
        </header>
    )
}