import { NavLink } from "react-router-dom"
import { login, logout } from '../../services/firebase';

export default function Nav(props) {

    const handleLogout = async () => {
        localStorage.removeItem("loggedInUser");
        await fetch("http://localhost:4001/users/logout", {
            method: "GET",
        })
    }

    return (
        <nav aria-label="main navigation">
            {
                props.user ?
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/account">{props.user.displayName.split(' ')[0]}</NavLink></li>
                        <li><NavLink to="/login" onClick={handleLogout}>Sign Out</NavLink></li>
                    </ul>
                    :
                    <li><NavLink to="/login" onClick={login}>Sign In</NavLink></li>
           }
        </nav>
    )
}