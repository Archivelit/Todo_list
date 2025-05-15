import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Navlist from '../navigation'

import '../../styles/components/container.css'
import '../../styles/components/header.css'

// import ToDoList from '../../assets/images/ToDoList.jpg'
// import VosASpse from '../../assets/images/VosASpse.jpg'
// import ToDoList2 from '../../assets/images/ToDoList2.jpg'

function Header() {
    // const images = [ToDoList, VosASpse, ToDoList2]
    // const [selectedIndex, setSelectedIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setSelectedIndex((selectedIndex + 1) % images.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [selectedIndex])

    return(
        <header className='container flex justify-center min-h-64 max-h-64'>
            <Navlist />
            {/* <ul id='slideshow' className='max-h-32'>
                {images.map((path, index) => (
                    <li key={uuidv4()} 
                    id={index === selectedIndex ? 'selected' : undefined}>
                        <img src={path} alt='slide'/>
                    </li>
                ))}
            </ul> */}
        </header>
    )
}

export default Header