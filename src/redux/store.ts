import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import favorite from './reducer/favorite'

const reducer = combineReducers({
    // here we will be adding reducers
    favorite
})

const store = configureStore({
    reducer,
    middleware: [thunk]
})

export default store;