import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Events from './pages/Events.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Other from './pages/Other.jsx'

import Header from './components/header/Header.jsx'
import Footer from './components/Footer.jsx'

import './styles/global.css'
import './styles/print.css'

function App() {
  return (
    <>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/menu' element={<Menu/>}/>
				<Route path='/events' element={<Events/>}/>
				<Route path='/about' element={<About/>}/>
				<Route path='/contact' element={<Contact/>}/>
				<Route path='/other' element={<Other/>}/>
			</Routes>
			<Footer />
		</BrowserRouter>
    </>
  )
}

export default App;


