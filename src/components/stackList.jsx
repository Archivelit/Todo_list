import '../styles/pages/index.css'

function StackList(){
    return(
        <div>
			<h2>
			    Jaký je stack?
			</h2>
			<ul id='stack_list' className="sm:ml-5">
			    <li>
					<h3>Html</h3>
					<p>
					    HyperText Markup Language -  značkovací jazyk pro tvorbu 
						webových stránek
					</p>
				</li>
				<li>
					<h3>CSS</h3>
					<p>Cascade Style Sheets - jazyk pro nastavení 
						vzhledu webové stranky
					</p>
				</li>
				<li>
					<h3>Javascript</h3>
					<p>JavaScript - programovací jazyk, který "oživí" 
						webovou stránku. Pomoci něj často načítají
						data, pracují s hosty stránky a mnoho dalšího
					</p>
				</li>
				<li>
			  		<h3>Vite</h3>
					<p>Vite - moderní nástroj pro vývoj frontendu.
						Rychle spouští projekt, má hot-reload, podporuje React, Vue a další popularní frameworky
					</p>
				</li>
				<li>
					<h3>React</h3>
					<p>React - JavaScriptová knihovna pro tvorbu
						GUI(uživatelských rozhraní). Rozděluje 
						stránku na komponenty a umožňuje vytvářet 
						dynamické webové aplikace
					</p>
				</li>
				<li>
					<h3>Tailwind</h3>
					<p>Tailwind - utility-first CSS framework pro 
						rychlé nastavení stylu přimo v HTML kodu. 
						Místo toho, abys psál vlastní styly, 
						používaš hotové třidy
					</p>
				</li>
			</ul>
        </div>
    )
}

export default StackList