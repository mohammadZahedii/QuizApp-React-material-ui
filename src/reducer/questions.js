import {RECIEVE_QUESTIONS, SET_ANSWERS_SHUFFLED} from './../actionTypes/actionTypes'


const initialState={
    questions:[],
    currQues:0
    
}



export const questions=(state=initialState,action)=>{
    switch (action.type) {
        case  RECIEVE_QUESTIONS:
           return {
               ...state,
               questions:action.questions,
           }
        default:
           return state
    }


}

