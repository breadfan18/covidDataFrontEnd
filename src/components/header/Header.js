// Components
import Nav from '../nav/Nav';

// Assets
import logo from '../../assets/images/notp.png'

export default function Header(props) {
    return (
        <header>
            <img src={logo} alt="NoTP logo" id="notp-logo" />
            <Nav user={props.user}/>
        </header>
    )
}