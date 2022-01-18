import { Helmet } from "react-helmet";
import { useState } from "react";
import { Redirect, Link } from "react-router-dom"

export default function ReturningUser(props) {
    const URL = 'http://localhost:4001/users/login';
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const [formInputs, setFormInputs] = useState({
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
        if (data.error) {
            setError(data.error);
        } else {
            localStorage.setItem("loggedInUser", JSON.stringify(data));
            await setUser(data);

            setFormInputs({
                email: "",
                password: "",
            });
        }
    }

    return (
        <div>
            <Helmet>
                <title>Covid NoTP Tracker | Sign In</title>
            </Helmet>
            <h1>ReturningUser Page...Login </h1>
            {user ? <Redirect to="/account" /> : (
                <>
                    <form>
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
                    {error && <p style={{
                        color: 'red',
                        fontSize: '1.25rem',
                        background: '#000',
                        padding: '1rem',
                        textAlign: 'center'
                    }}
                    >{error}</p>
                    }
                    <h2>Don't have an account</h2>
                    <Link to="/signup">Create Account</Link>
                </>
            )}
        </div>
    )
}








