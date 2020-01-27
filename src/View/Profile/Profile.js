import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
	const isLinked = useSelector(state => state.user?.details?.bungie?.isLinked)

	return (
		<>
			<h1>Profile</h1>
			<div>
				<h2>Change your password</h2>
				<div>
					<input type="password" placeholder="Current password" />
					<input type="password" placeholder="New password" />
					<input type="password" placeholder="New password again" />
					<button type="button">Change</button>
				</div>
			</div>
			<div>
				<h2>Link your profile</h2>
				{isLinked && (
					<>
						<p>You're linked!</p>
					</>
				)}
				{!isLinked && (
					<>
						<p>You're not linked.</p>
						<div>
							<h3>Link to Bungie</h3>
							<button type="button">Link</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Profile
