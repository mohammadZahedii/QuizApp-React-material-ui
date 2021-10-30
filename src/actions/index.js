import * as types from './../actionTypes/actionTypes'


export const changeValue=(value)=>({
    type:types.CHANGE_NAME_VALUE,
    value
})

export const changeCategoryValue=(value)=>({
    type:types.CHANGE_CATEGORY_VALUE,
    value
})
export const changeDifficultyValue=(value)=>({
    type:types.CHANGE_DIFFICULTY_VALUE,
    value
})
export const recieveQuestions=(questions)=>({
    type:types.RECIEVE_QUESTIONS,
    questions
})

export const setErrorTrue=(boolean)=>({
    type:types.CHANGE_ERROR_TRUE,
    error:boolean
})
export const setErrorFalse=(boolean)=>({
    type:types.CHANGE_ERROR_FALSE,
    error:boolean
})