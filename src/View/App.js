import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from 'Store/createStore'

import Home from 'View/Home'
import Register from 'View/Register'
import PasswordReset from 'View/PasswordReset'
import Login from 'View/Login'

import Navbar from 'Component/Navbar'

const store = createStore()

const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Navbar />
				<Switch>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/passwordreset">
						<PasswordReset />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Provider>
		</Router>
	)
}

export default App
