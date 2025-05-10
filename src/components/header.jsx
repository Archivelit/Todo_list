import Navlist from '../components/navigation'

import '../styles/components/container.css'

// Fce pro render hlavičky
function Header() {
    return(
        <header className='container flex justify-center min-h-64'>
            <Navlist />
        </header>
    )
}

export default Header