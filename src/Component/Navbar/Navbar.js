import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logoutUser } from 'Store/Feature/auth'

// TODO: Auth / non-auth navbar

const Navbar = () => {
	const dispatch = useDispatch()

	return (
		<>
			<p>
				<Link to="/">Home</Link>
			</p>
			<p>
				<Link to="/register">Register</Link>
			</p>
			<p>
				<Link to="/login">Login</Link>
			</p>
			<p>
				<button
					type="button"
					onClick={() => {
						dispatch(logoutUser())
					}}
				>
					Logout
				</button>
			</p>
		</>
	)
}

export default Navbar
