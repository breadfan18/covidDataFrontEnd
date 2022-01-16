// Components
import Nav from '../nav/Nav';

// Assets
import Logo from '../../assets/images/notp.png'

export default function header(props){
    return(
        <header>
            <img src="Logo" alt="NoTP logo"/>
            <Nav />
        </header>
    )
}