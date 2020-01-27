import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
	const isBungieLinked = useSelector(state => state.user?.details?.bungie?.isLinked)

	return (
		<>
			<h1>Dashboard</h1>
			{!isBungieLinked && (
				<>
					<p>Looks like you don't have any linked accounts - let's get started..</p>
				</>
			)}
		</>
	)
}

export default Dashboard
