import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
const Footer = () => {


    return (
        <footer>
        <p>Bob's Burgers Wiki is a FANDOM TV Community.</p>
        <Link to="https://www.instagram.com/bobsburgersfox/?hl=es" target="_blank">
        <img src={instagram} alt="login button" className="socialMedia" />
        </Link>

        <Link to="https://twitter.com/BobsBurgersFOX" target="_blank">
        <img src={twitter} alt="login button" className="socialMedia"/>
        </Link>

        <Link to="https://www.youtube.com/channel/UCI5fr6veZxMG0q5RVf5o_PQ" target="_blank">
        <img src={youtube} alt="login button" className="socialMedia" />
        </Link>

        <NavLink to="/contact" className="contactLink">
                Contacta con nosotros
        </NavLink>

        </footer>
    );
};

export default Footer;