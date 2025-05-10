import html from '../assets/images/html_logo.svg'
import css from '../assets/images/css_logo.svg'
import js from '../assets/images/js_logo.svg'
import vite from '../assets/images/vite_logo.svg'
import react from '../assets/images/react_logo.svg'
import tailwind from '../assets/images/tailwind_logo.svg'

import '../styles/pages/index.css'

function StackLogos() {
    return(
        <ul id='stack' className='lg:flex grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 my-10 sm:my-20  justify-self-center'>
            <li>
                <a href='https://html.spec.whatwg.org/'
                className='focus:rounded-xl'
                alt='html logo' target='_blank'
                tabIndex={-1}>
                    <img src={html} id='html' className=''/>
                </a>
            </li>
            <li>
                <a href='https://www.w3.org/Style/CSS/'
                className='focus:rounded-xl'
                alt='css logo' target='_blank'
                tabIndex={-1}>
                    <img id='css' src={css}/>
                </a>
            </li>
            <li>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                className='focus:rounded-xl'
                alt='javascript logo' target='_blank'
                tabIndex={-1}>
                    <img id='js' src={js}/>
                </a>
            </li>
            <li>
                <a href='https://vite.dev/' 
                className='focus:rounded-xl'
                alt='vite logo' target='_blank'
                tabIndex={-1}>
                    <img id='vite' src={vite}/>
                </a>
            </li>
            <li>
                <a href='https://react.dev/'
                className='focus:rounded-xl'
                alt='react logo' target='_blank'
                tabIndex={-1}>
                    <img id='react' src={react}/>
                </a>
            </li>
            <li>
                <a href='https://tailwindcss.com/'
                className='focus:rounded-xl'
                alt='tailwind logo' target='_blank'
                tabIndex={-1}>
                    <img id='tailwind' src={tailwind}/>
                </a>
            </li>
        </ul>
    )
}

export default StackLogos