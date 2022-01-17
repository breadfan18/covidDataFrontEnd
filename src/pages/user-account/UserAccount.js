// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

export default function UserAccount(props){
    return(
        <div>
            <Helmet>
                <title>Covid NoTP Tracker | Account</title>
            </Helmet>
            <Header />
            <h1>UserAccount Page...</h1>
            <Footer />
        </div>
    )
}