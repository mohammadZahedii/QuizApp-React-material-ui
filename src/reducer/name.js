import { CHANGE_NAME_VALUE } from "../actionTypes/actionTypes"


export const name=(state='',action)=>{
        switch (action.type) {
            case CHANGE_NAME_VALUE:
                return action.value
                
            default:
                return state
        }
}