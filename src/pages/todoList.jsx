import React, { useEffect } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/main.css'

function TodoList(){

    //pomoci hooku useEffect měnime záhlaví stránky. Do něho pošleme anonymní funkci
    useEffect(() => {
        document.title = 'To do list'
    }, [])

    // "Rozložení" stránky s listem 
    return (
        <div className='main'>
			<Header />
            <Footer />
		</div>
    )
}

export default TodoList