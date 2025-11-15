import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import Adoption from './Pages/Adoption';
import Release from './Pages/Release';
import AboutUs from './Pages/AboutUs';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const handleLogin = () => {setIsLoggedIn(true);};
	const handleLogout = () => {setIsLoggedIn(false);};

	return (
		<Router>
			<Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
			<div className="container">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/adoption" element={<Adoption />} />
					<Route path="/release" element={<Release />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/login" element={<Login onLogin={handleLogin} />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
