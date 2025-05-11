import { useLayoutEffect, useState, useEffect } from 'react'

import Header from '../components/header'
import StackList from '../components/stackList'
import StackLogos from '../components/stackLogos'
import Footer from '../components/footer'

import '../styles/main.css'
import '../styles/pages/index.css'
import '../styles/components/container.css'

function formatDate(date) {
	return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

function getTodaysDate(){
	return new Date();
}

function HomePage(){

	//pomoci hooku useLayoutEffect měnime záhlaví stránky. Do něho pošleme anonymní funkci a pole
	useLayoutEffect(() => {
		document.title = 'O projektu'
	}, [])

	useEffect(() =>{
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(interval);
		}, []
	)

	const [date, setDate] = useState(getTodaysDate)

	// "Rozložení" úvodní stránky
	return (
		<div className='main'>
			<Header />
			<main className='container flex min-h-fit bg-zinc-100'>
				<div className='mx-5 py-4 sm:mx-10'>
            		<h1 className='mb-4 sm:ml-15 sm:text-5xl sm:justify-self-auto justify-self-center text-4xl'>
                		O projektu
        	    	</h1>
       		     	<h2>
				    	O čem je?
					</h2>
					<p>
				    	Tato aplikace je "To do list". To do list - 
						zápisník pro vaši plany. Tady můžete vytvářet
						plany na den. Kdyby jste chtěli něco změnit, 
						je možný kdykoliv vymazat jakoukoliv úlohu
					</p>
                	<StackList />
					<StackLogos />

					<h1 className='mb-4 sm:ml-15 sm:text-5xl sm:justify-self-auto justify-self-center text-4xl'>O autorovi</h1>
					<p>Autorem projektu je žák třídy 1.G Vladyslav Shumilo</p>
					<p className='flex justify-center text-2xl mt-10 mb-4'>{formatDate(date)} {date.toLocaleTimeString('cs-CZ')}</p>
				</div>
            </main>
			<Footer />
		</div>
	)
}

export default HomePage