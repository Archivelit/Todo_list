import { Link } from 'react-router-dom'

// Fce pro render listu navigaci
function Navlist() {
    return(
        <nav>
            <ul>
                <li><Link to='/'>O projektu</Link></li>
                <li><Link to='/todo'>To do list</Link></li>
            </ul>
        </nav>
    )
}

export default Navlist