import React,{useEffect,useState} from 'react'



const Quiz =(props)=>{

    const{name,score,setScore,questions,setQuestions}=props

    const[options,setOptions]=useState()
    const[currQues,setCurrQues]=useState(0)


    useEffect(()=>{
        console.log(questions)
            setOptions(
                questions && 
                handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
                ])
            
            );

    
    },[questions]);

    
    const handleShuffle=(optionss)=>{
        return optionss.sort(()=>Math.random()-0.5)
    }
    console.log(options)


    return
    
}

export default Quiz;