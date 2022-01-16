// Components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function Home(props){
    console.log(props.data, 'are home page props')
    return(
        <>
            <Header />
            <h1>Home Page...</h1>
            <Footer />
        </>
    )
}