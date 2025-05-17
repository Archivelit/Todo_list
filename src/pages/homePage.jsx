import { useLayoutEffect, useState, useEffect } from 'react'

import Header from '../components/layout/header'
import StackList from '../components/stackList'
import StackLogos from '../components/stackLogos'
import Footer from '../components/layout/footer'

import '../styles/main.css'
import '../styles/pages/homepage.css'
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
		document.title = 'O projektu';
	}, [])

	useEffect(() =>{
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => clearInterval(interval);
		}, []
	)

	const [date, setDate] = useState(getTodaysDate);

	// "Rozložení" úvodní stránky
	return (
		<>
		<Header />
			<main className='container flex min-h-fit'>
				<div className='py-4 mx-5 sm:mx-10'>
            		<h1 className='mb-4 text-4xl sm:ml-15 sm:text-5xl sm:justify-self-auto justify-self-center'>
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
					<h2>Open source</h2>
					<p>
						Tento projekt je open-source. To znamená že 
						kdokoliv a kdykoliv může zahlednout do zdrojového
						kodu projektu. Zdroj můžete najít v hlavičce stránky
						kliknutim tlačitka "Source"
					</p>
					<h1 className='mt-5 mb-4 text-4xl sm:ml-15 sm:text-5xl sm:justify-self-auto justify-self-center'>O autorovi</h1>
					<p>Autorem projektu je žák třídy 1.G Vladyslav Shumilo. 
						Studují VOŠ a SPŠE v Plzni v oboru informační technologie
					</p>
					<p className='flex justify-center mt-10 mb-4 text-2xl'>{formatDate(date)} {date.toLocaleTimeString('cs-CZ')}</p>
				</div>
            </main>
			<Footer />
		</>
	)
}

export default HomePage