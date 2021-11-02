import { useDispatch } from "react-redux";
import { recieveQuestions,changeValue,changeCategoryValue,changeDifficultyValue,setErrorFalse,setErrorTrue,
    changeScoreValue,changeCurrQuesValue

} from '../actions';


export const useAppDispatch =()=>{

    const dispatch =useDispatch()
        const setQuestions=questions=>dispatch(recieveQuestions(questions))

    return{
        setQuestions
    }

}

export const useHomeDispatch =()=>{
    const dispatch =useDispatch()
        const changeNameValue=value=>dispatch(changeValue(value))
        const changeMyCategoryValue=value=>dispatch(changeCategoryValue(value))
        const changeMyDifficultyValue=value=>dispatch(changeDifficultyValue(value))
        const changeErrorToTrue=boolean=>dispatch(setErrorTrue(boolean))
        const changeErrorToFalse=boolean=>dispatch(setErrorFalse(boolean))

    return{
        changeNameValue,
        changeMyCategoryValue,
        changeMyDifficultyValue,
        changeErrorToFalse,
        changeErrorToTrue
    }
}

export const useQuestionDispatch=()=>{

    const dispatch =useDispatch()
        const settingErrorTrue=(error)=>dispatch(setErrorTrue(error))
        const settingErrorFalse=(error)=>dispatch(setErrorFalse(error))
        const changeMyScoreValue=()=>dispatch(changeScoreValue())
        const setCurrQuesValue=()=>dispatch(changeCurrQuesValue())

        return{
            settingErrorTrue,
            settingErrorFalse,
            changeMyScoreValue,
            setCurrQuesValue
        }
}