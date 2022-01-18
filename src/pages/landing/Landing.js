// Components
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// Custom Components
import Footer from '../../components/footer/Footer';

export default function Landing(props){
    return(
        <div>
            <Helmet>
                <title>Covid NoTp Tracker</title>
            </Helmet>
            <h1>Landing Page...</h1>

            <p>
                Welcome to the NoTP Covid Tracker App!
            </p>

            <div id="link-container">
                <Link to="/">Guest</Link>
                <Link to="/account">Returning User</Link>
                <Link to="/signup">New User</Link>
            </div>
            <Footer />
        </div>
    )
}