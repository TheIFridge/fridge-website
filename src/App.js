// react
import { React, useState, useEffect, useContext, useMemo } from 'react'

// react router
import { Route, Routes } from 'react-router-dom';

// firebase
import { getAuth as auth, onAuthStateChanged } from "firebase/auth";
import {AuthProvider} from './auth/AuthContext'
import {ThemeContext} from './context/ThemeContext'
import { getTheme } from './util/Helpers';

// components
import NavigationBar from './components/Navbar';
// import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import VerifyEmail from './pages/VerifyEmail';
import ShoppingList from './pages/ShoppingList';
import Inventory from './pages/Inventory';
import PriceWatch from './pages/PriceWatch';
import Settings from './pages/Settings';
import Recipes from './pages/Recipes';
// styles
import './style/App.css';

import { userLoggedIn } from './util/Helpers';

// main function
function App() {
	const { changeTheme } = useContext(ThemeContext);

	useMemo(() => {
		changeTheme(getTheme());
		// console.log('This is useMemo')
	}, [changeTheme]);


	// create state for current user
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth(), (user) => {
			if(user !== currentUser) {
				setCurrentUser(user);
				if (!userLoggedIn()) {
					sessionStorage.setItem("loggedIn", "true");
				}
			}
		 })
	}, [currentUser, setCurrentUser]);

	// create state for email verification resend button
	const [timeActive, setTimeActive] = useState(false);

	// setup document title
	document.title = "iFridge";

	// const { changeTheme } = useContext(ThemeContext);
	// // const dark = getTheme();

	// useLayoutEffect(() => {
	// 	console.log("current: " + document.body.className);
	// 	changeTheme(getTheme());
	// });

	return (
		<div className="App">
			<AuthProvider value={{currentUser, timeActive, setTimeActive}}>
				<NavigationBar/>
				<br />
				<div className="container">
					<Routes>
						<Route exact path="/" element={<Home/>} title="Home"/>
						<Route exact path="/home" element={<Home/>} title="Home"/>
						<Route exact path="/login" element={<Login/>} title="Login"/>
						<Route exact path="/register" element={<Register/>} />
						<Route exact path="/verify-email" element={<VerifyEmail/>} />
						<Route exact path="/logout" element={<Logout/>} />
						<Route exact path="/shoppinglist" element={<ShoppingList/>} />
						<Route exact path="/inventory" element={<Inventory/>} />
						<Route exact path="/pricewatch" element={<PriceWatch/>} />
						<Route exact path="/recipes" element={<Recipes/>} />
						<Route exact path="/settings" element={<Settings/>} />
					</Routes>
				</div>
				{/* <Footer /> */}
			</AuthProvider>
		</div>
	)
}

export default App;