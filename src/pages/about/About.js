// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

export default function About(props){
    return(
        <div>
            <Helmet>
                <title>Covid NoTp Tracker | About Us</title>
            </Helmet>        
            <Header />
            <h1>About NoTP</h1>
            <Footer />
        </div>
    )
}