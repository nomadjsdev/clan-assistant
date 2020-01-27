import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Home from 'View/Home'
import Register from 'View/Register'
import PasswordReset from 'View/PasswordReset'
import Login from 'View/Login'
import Dashboard from 'View/Dashboard'
import Profile from 'View/Profile'

import Navbar from 'Component/Navbar'

const App = () => {
	const { isLoggingIn, isLoggingOut, isVerifying, isAuthenticated } = useSelector(state => state.auth)
	const { isCreating, isLoading } = useSelector(state => state.user)

	if (isLoggingIn) {
		return (
			<>
				<h1>Logging in</h1>
			</>
		)
	}
	if (isLoggingOut) {
		return (
			<>
				<h1>Logging out</h1>
			</>
		)
	}
	if (isVerifying) {
		return (
			<>
				<h1>Verifying</h1>
			</>
		)
	}
	if (isCreating) {
		return (
			<>
				<h1>Creating user</h1>
			</>
		)
	}
	if (isLoading) {
		return (
			<>
				<h1>Loading</h1>
			</>
		)
	}

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/register">{!isAuthenticated ? <Register /> : <Redirect to="/" />}</Route>
				<Route path="/passwordreset">{!isAuthenticated ? <PasswordReset /> : <Redirect to="/" />}</Route>
				<Route path="/login">{!isAuthenticated ? <Login /> : <Redirect to="/" />}</Route>
				<Route path="/dashboard">{isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}</Route>
				<Route path="/profile">{isAuthenticated ? <Profile /> : <Redirect to="/login" />}</Route>
				<Route path="/">{!isAuthenticated ? <Home /> : <Redirect to="/dashboard" />}</Route>
			</Switch>
		</Router>
	)
}

export default App
