import { Link } from 'react-router-dom'

import '../styles/components/navigation.css'

// Fce pro render listu navigaci
function Navlist() {
    return(
        <nav>
            <ul>
                <li className={location.pathname === "/" ? "selected" : ""}><Link to='/' className='p-0.5'>O projektu</Link></li> {/* využívá link aby změnit adresu, když mění adresa, tak mění obsah App.jsx (viz App.jsx)*/}
                <li className={location.pathname === "/" ? "" : "selected"}><Link to='/todo' className='p-0.5'>To do list</Link></li>
            </ul>
        </nav>
    )
}

export default Navlist