export default function Footer(props){
    return(
        <footer>
            <p>
                Copyright &copy; NoTP All Rights Reserved
                {' '}{new Date().getFullYear()}
            </p>
        </footer>
    )
}