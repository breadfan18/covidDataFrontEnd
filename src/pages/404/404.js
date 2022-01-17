// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

export default function Broken(props){
    return(
        <div>
            <Helmet>
                <title>404 Server Error</title>
            </Helmet>
            <Header />
            <h1>404 Page...</h1>
            <Footer />
        </div>
    )
}