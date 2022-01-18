import { NavLink } from "react-router-dom"

export default function Nav(props) {

    const handleLogout = async () => {
        localStorage.removeItem("loggedInUser");
        await fetch("http://localhost:4001/users/logout", {
            method: "GET",
        })

    }

    return (
        <nav aria-label="main navigation">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/account">Account</NavLink></li>
                <li><NavLink to="/login" onClick={handleLogout}>Sign Out</NavLink></li>
            </ul>
        </nav>
    )
}