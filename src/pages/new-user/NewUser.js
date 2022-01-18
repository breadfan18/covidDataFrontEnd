import { Helmet } from "react-helmet";
import { useState } from "react";
import { Redirect } from "react-router-dom"

export default function NewUser(props) {
    const URL = 'http://localhost:4001/users/signup';
    const [user, setUser] = useState(null)

    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(formInputs),
        });

        const data = await response.json();
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        await setUser(data);

        setFormInputs({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        });
    }


    return (
        <div>
            <Helmet>
                <title>Covid NoTP Tracker | Create Account</title>
            </Helmet>
            <h1>New User Page...</h1>
            {user ? <Redirect to="/account" /> : (
                <form>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' name='firstName' id='firstName' value={formInputs.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' name='lastName' id='lastName' value={formInputs.lastName} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' id='email' value={formInputs.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' name='password' value={formInputs.password} onChange={handleChange} />
                    </div>
                    <input value='Submit' type='submit' onClick={handleSignup} />
                </form>
            )}
        </div>
    )
}