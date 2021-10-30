import { CHANGE_NAME_VALUE,CHANGE_CATEGORY_VALUE,CHANGE_DIFFICULTY_VALUE } from "../actionTypes/actionTypes"
import {CHANGE_ERROR_TRUE,CHANGE_ERROR_FALSE} from "../actionTypes/actionTypes"

let initialValues={
    userName:'',
    category:'',
    difficulty:'',
    score:0,
    error:false,
    currQues:0
}

export const values=(state=initialValues,action)=>{
        switch (action.type) {
            case CHANGE_NAME_VALUE:
            
                return {
                    ...state,
                    userName:action.value
                }
            case CHANGE_CATEGORY_VALUE:
                return{
                    ...state,
                    category:action.value
                }
            case CHANGE_DIFFICULTY_VALUE:
                return{
                    ...state,
                    difficulty:action.value
                }   
            case CHANGE_ERROR_TRUE:
                return {
                    ...state,
                    error:true
                }
            case CHANGE_ERROR_FALSE:
                return {
                    ...state,
                    error:false
                }
            default:
                return state
        }
}