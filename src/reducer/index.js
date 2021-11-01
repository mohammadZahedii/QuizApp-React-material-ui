import { combineReducers } from "redux";
import {values} from './values'
import { questions } from "./questions";

export default  combineReducers({
    values,
    questions,
})