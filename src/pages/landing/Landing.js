// Components
import { Helmet } from 'react-helmet';
import Footer from '../../components/footer/Footer';

export default function Landing(props){
    return(
        <div>
            <Helmet>
                <title>Covid NoTp Tracker</title>
            </Helmet>
            <h1>Landing Page...</h1>
            <Footer />
        </div>
    )
}