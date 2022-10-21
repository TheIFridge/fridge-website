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
import Terms from './pages/Terms';
import Support from './pages/Support';

import Recipe1 from './pages/recipes/Recipe1';
import Recipe2 from './pages/recipes/Recipe2';
import Recipe3 from './pages/recipes/Recipe3';
import Recipe4 from './pages/recipes/Recipe4';

// styles
import './style/App.css';

import { userLoggedIn } from './util/Helpers';
import Recipe from './pages/Recipe';

// main function
function App() {
	const { changeTheme } = useContext(ThemeContext);

	useMemo(() => {
		changeTheme(getTheme());
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
						<Route exact path="/terms" element={<Terms/>} />
						<Route exact path="/support" element={<Support/>} />
						<Route exact path="/dm" element={<Recipe
							title="Chicken Karaage"
							brief="Japanese fried chicken"
							ingredientTitle="Ingredients"
							ingredientsList={["chicken thigh"+"~"+"soy sauce"+ "\n mirin \n sake \n sugar \n salt \n pepper \n corn starch \n oil"]}
							cookTime="40 mins"
							prepTime="20 mins"
							servings="4 servings"
							preview={"https://www.countdown.co.nz/Content/Recipes/bbq-corn-540.jpg"}
							methodTitle="Recipe Preparation"
							method={['step 1', 'dice chicken thigh and marinate with soy sauce, garlic, ginger, cornflour, egg, oil and salt', 'step 2', 'fry chicken in oil until golden brown', 'step 3', 'serve with rice and salad']}
							nutritionTitle="Nutrition"
							nutrition={["carlories - 250Kcal ", "carbs - 35g ", "protein - 6.8g "]}
						/>} />
						<Route exact path="/recipes/recipe1" element={<Recipe1/>} />
						<Route exact path="/recipes/recipe2" element={<Recipe2/>} />
						<Route exact path="/recipes/recipe3" element={<Recipe3/>} />
						<Route exact path="/recipes/recipe4" element={<Recipe4/>} />
					</Routes>
				</div>
			</AuthProvider>
		</div>
	)
}

export default App;