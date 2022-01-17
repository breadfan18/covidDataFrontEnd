// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Helmet } from 'react-helmet';

export default function Home(props){
    console.log(props.data, 'are home page props')
    return(
        <div>
            <Helmet>
                <title>Covid NotP Tracker | Home</title>
            </Helmet>
            <Header />
            <h1>Home Page...</h1>
            <Footer />
        </div>
    )
}