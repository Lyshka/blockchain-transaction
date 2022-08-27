import {Navbar, Welcome, Footer, Services, Transactions} from "./components"

const App = () => {
	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar />
				<Welcome />
			</div>


			<Services />
			<Transactions />
			<Footer />
		</div>
	)
}
export default App

//0xAA4EB0bEd30c5498B71cbc450dC7Aec46EbE2124