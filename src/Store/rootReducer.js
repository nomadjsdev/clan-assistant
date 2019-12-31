import { combineReducers } from '@reduxjs/toolkit'

import authReducer from './Slice/auth'

export default combineReducers({
	auth: authReducer,
})
