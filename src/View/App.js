import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'View/Home'
import Register from 'View/Register'
import Login from 'View/Login'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
