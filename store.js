import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { mainReducer } from './reducers'
import socketMiddleware from './middleware'
import { createLogger } from 'redux-logger'


const loggerMiddleware = createLogger();


export default function configureStore() {
    return createStore(mainReducer,
        applyMiddleware(thunk, socketMiddleware, loggerMiddleware)
    )
}
