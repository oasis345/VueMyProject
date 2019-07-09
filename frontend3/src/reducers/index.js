import todo from './todoReducer'
import { combineReducers } from 'redux';

const todoApp = combineReducers(
    {
        todo:todo
    }
)
export default todoApp