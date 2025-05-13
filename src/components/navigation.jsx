import { Link } from 'react-router-dom'

import '../styles/components/navigation.css'

// Fce pro render listu navigaci
function Navlist() {
    return(
        <nav className='absolute px-4 rounded-xl'>
            <ul className='text-sm md:text-xl'>
                <li className={location.pathname === "/" ? "selected" : ""}><Link to='/' className='md:p-0.5'>O projektu</Link></li> {/* využívá link aby změnit adresu, když mění adresa, tak mění obsah App.jsx (viz App.jsx)*/}
                <li className={location.pathname === "/" ? "" : "selected"}><Link to='/todo' className='md:p-0.5'>To do list</Link></li>
                <li><a href="https://github.com/Archivelit/Todo_list.git" alt='source' target='_blank' className='p-0.5'>Source</a></li>
            </ul>
        </nav>
    )
}

export default Navlist