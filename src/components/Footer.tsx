import { CiYoutube } from "react-icons/ci";
import { RiPinterestLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";

import "./Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="left">
                <img src="/images/mix-of-herbs.jpg" className="logo-icon" />
                <div>
                    <h4>Mock Shop </h4>
                    <p>Contact:</p>
                    <p>Utopia Hills</p>
                    <p>Pangea 123, TierraLand</p>
                    <p>E-mail: <a href="mailto:mock@plant.es" className="e-mail">mock@plant.es</a></p>
                </div>
            </div>

            <div className="right">
                <p>Follow us on</p>
                <div className="social-icons">
                    <a href="https://www.youtube.com/"
                    ><CiYoutube className="social-logo-footer" /></a
                    >
                    <a href="https://www.pinterest.com/"
                    ><RiPinterestLine className="social-logo-footer" /></a
                    >
                    <a href="https://www.instagram.com/"
                    ><CiInstagram className="social-logo-footer" /></a
                    >
                </div>
            </div>
        </footer>
    )
}