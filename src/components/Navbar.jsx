import { useContext,useState} from "react";
import { UserContext } from "../contexts/UserContext";
import { NavLink, useNavigate } from "react-router-dom";

import userPicture from "../assets/images/userPicture.png";
//----<NavLink> == <a>
//----<NavLink to="<path-escrito-en-router/index.jsx>">

//----Importar imagen: import <nombre_cualquiera> from "<ruta>";
//----Usar la imagen: <img src={nombre} />
import logo from "../assets/images/logo.png";
import login_button from "../assets/images/login_button.png";
const Navbar = () => {
    const [userLogged, setUserLogged] = useState(JSON.parse(localStorage.getItem('user')) || [])
    const { user, setUser } = useContext(UserContext)
    
    const navigate = useNavigate()

    

    return (
        <nav className="nav-pc">
            <NavLink to="/" >
                <img src={logo} className="logo" alt="logo" />
            </NavLink>
            <ul>
                <li className="nav-pc__li">
                    <NavLink to="/" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Home</p>
                    </NavLink>
                </li>
                <li className="nav-pc__li">
                    <NavLink to="/characters" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Characters</p>
                    </NavLink></li>
                <li className="nav-pc__li">
                    <NavLink to="/episodes" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Episodes</p>
                    </NavLink></li>
                <li className="nav-pc__li">
                    <NavLink to="/stores" className="btn btn-outline-primary">
                        <p className="nav-pc__p">Stores</p>
                    </NavLink></li>


            </ul>
            {user ? (
                <NavLink to="/profile">
                    {
                        userLogged.profileImage=="default"? (
                            <img src={userPicture} alt="default profile" className="userPicture" />
                        ):(
                            <img src={userLogged.profileImage} alt="default profile" className="userPicture" />
                        )
                    }
                    
                </NavLink>
            ) : (
                <NavLink to="/login">
                    <img src={login_button} alt="login button" className="loginButton" />
                </NavLink>
            )}
        </nav>
    );
};

export default Navbar;
