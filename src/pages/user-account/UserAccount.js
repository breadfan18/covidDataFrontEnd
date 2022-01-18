// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

export default function UserAccount(props) {
    const [user, setUser] = useState(null);

    const loading = () => {
        return (
            <div>
                <Helmet>
                    <title>Covid NoTP Tracker | Account</title>
                </Helmet>

                <h1>Loading user information...</h1>
                <h2>Not seeing user information?</h2>
                <Link to='/login'>Please log in</Link>
                <Footer />
            </div>
        )
    }

    const loaded = () => {
        return (
            <div>
                <Helmet>
                    <title>Covid NoTP Tracker | Account</title>
                </Helmet>
                <Header />
                <h1>Welcome back {user.firstName} </h1>
                <div className="userAccContainer">
                    <div className="leftCont">
                        <div id="imgContainer" style={{ marginLeft: '0' }}>
                            <img src="https://i.imgur.com/f89UZyv.png" alt="" style={{
                                borderRadius: '10px',
                                width: '95.5%',
                                height: '200px',
                                border: '5px solid black'
                            }} />
                        </div>
                        <div id="userDetails">
                            <label htmlFor="">First Name</label>
                            <p className="eachUserDetail">{user.firstName}</p>
                            <label htmlFor="">Last Name</label>
                            <p className="eachUserDetail">{user.lastName}</p>
                            <label htmlFor="">Email Address</label>
                            <p className="eachUserDetail">{user.email}</p>
                            <label htmlFor="">Password</label>
                            <p className="eachUserDetail">** Hidden **</p>
                            <input type="submit" value="Edit Account" id="editAccBtn" />
                        </div>
                    </div>
                    <div className="rightCont">
                        <div>Display User Covid Saved Data list things stuff etc..</div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (localUser) {
            setUser(localUser.user);
        }
    }, []);

    return (
        <div>
            {user ? loaded() : loading()}
        </div>
    )
}