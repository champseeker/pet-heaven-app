import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Adoption from './Pages/Adoption';
import Release from './Pages/Release';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const handleLogin = () => {setIsLoggedIn(true);};
	const handleLogout = () => {setIsLoggedIn(false);};

	return (
		<Router>
			<div className="App">
				<Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
				<main className="main-content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/adoption" element={<Adoption />} />
						<Route path="/release" element={<Release />} />
						<Route path="/login" element={<Login onLogin={handleLogin} />} />
						<Route path="/signup" element={<SignUp />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;