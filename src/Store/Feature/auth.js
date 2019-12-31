import myFirebase from 'Service/Firebase'

import {
	requestRegister,
	receiveRegister,
	registerError,
	requestVerify,
	receiveVerify,
	requestLogin,
	receiveLogin,
	loginError,
	receiveLocalAuth,
	requestLogout,
	receiveLogout,
	logoutError,
	requestReset,
	receiveReset,
	resetError,
} from 'Store/Slice/auth'

export const registerUser = (email, password) => dispatch => {
	dispatch(requestRegister())

	myFirebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(response => {
			dispatch(receiveRegister())
			// return response
		})
		// TODO: create user
		// .then(userObj => {
		// dispatch(createUser(userObj.user.uid, userObj.user.email))
		// })
		.catch(error => {
			console.log(error)
			dispatch(registerError(error.message))
		})
}

export const verifyAuth = () => dispatch => {
	dispatch(requestVerify())

	const localUser = JSON.parse(localStorage.getItem('authUser'))
	if (localUser) {
		dispatch(receiveLocalAuth(localUser))
	}

	myFirebase.auth().onAuthStateChanged(user => {
		if (user !== null) {
			dispatch(receiveLogin(user))
			localStorage.setItem('authUser', JSON.stringify(user))
			// TODO: fetch user
			// dispatch(fetchUser(user.uid))
		} else {
			dispatch(receiveLogout())
			localStorage.removeItem('authUser')
			// TODO: clear user
			// dispatch(clearUserObject())
		}
		dispatch(receiveVerify())
	})
}

export const loginUser = (email, password) => dispatch => {
	dispatch(requestLogin())
	myFirebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(userObj => {
			dispatch(receiveLogin(userObj.user))
		})
		.catch(error => {
			console.log(error)
			dispatch(loginError(error.message))
		})
}

export const logoutUser = () => dispatch => {
	dispatch(requestLogout())

	myFirebase
		.auth()
		.signOut()
		.then(() => {
			dispatch(receiveLogout())
		})
		.catch(error => {
			console.log(error)
			dispatch(logoutError(error.message))
		})
}

export const resetPassword = email => dispatch => {
	dispatch(requestReset())

	myFirebase
		.auth()
		.sendPasswordResetEmail(email) // This doesn't act like a promise, what's going on?
		.then(() => {
			// TODO: Figure out why this isn't firing
			dispatch(receiveReset)
		})
		.catch(error => {
			console.log(error)
			dispatch(resetError(error.message))
		})
}
