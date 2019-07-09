import todoApp from '../reducers'
import {createStore} from 'redux'

let store = createStore(todoApp)

export default store