import { NavLink } from "react-router-dom"

export default function Nav(props){
    return(
        <nav aria-label="main navigation">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
                <li><NavLink to="/login">Sign Out</NavLink></li>
            </ul>
        </nav>
    )
}