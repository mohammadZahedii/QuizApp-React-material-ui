import {RECIEVE_QUESTIONS} from './../actionTypes/actionTypes'


export const questions=(state=[],action)=>{
    switch (action.type) {
        case  RECIEVE_QUESTIONS:
           return [
               ...action.questions
           ]
        default:
           return state
    }


}

