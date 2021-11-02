import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {connect} from 'react-redux'
import './Question.css'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import {useSelector} from 'react-redux'
import {useQuestionDispatch} from './../../../dipatch/MyDispatch'

function Question(props){
    
    const[selected,setSelected]=useState()
    const[options,setOptions]=useState()


    const{settingErrorTrue,settingErrorFalse,changeMyScoreValue,setCurrQuesValue}=useQuestionDispatch()
    const results =useSelector((state)=>{
        let {currQues}=state.questions;
        let {questions}=state.questions

    return {
        questions,
        error:state.values.error,
        currQues:state.questions.currQues,
        correct:questions[currQues]?.correct_answer,
        question:questions[currQues]?.question
    }

    })

    const{questions,error,currQues,correct,question}=results
    

    const history =useHistory()

    console.log(props)


    useEffect(()=>{
        setOptions(
            questions && 
            handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
            ])
        
        );


    },[question,currQues])

    const handleShuffle=(optionss)=>{
        return optionss.sort(()=>Math.random()-0.5)
    }
   
    const handleSelect=(item)=>{
        console.log(item)
    if(selected === item && selected===correct){
        return 'select'
    }
    else if(selected === item && selected !== correct){
        return 'wrong'
    }else if(item===correct){
        return 'select'
    }

}
const handleCheck=(item)=>{
    setSelected(item);
    if(item === correct) changeMyScoreValue();
    settingErrorFalse(false)
}
const handleNext=()=>{
    if(currQues>8){
        history.push('/result')
    }else if(selected){
        setCurrQuesValue()
        setSelected()
    }else{
        settingErrorTrue('Please select an option first')
    }
}
const handleQuite=()=>{

}
    return(
        <Box sx={{m:1,width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{fontWeight:'bold'}} component="h1" variant="h4">{`Question ${currQues + 1} :`}</Typography>
            <Box sx={{m:1,py:2,px:3,border:'4px solid gray',height:'100%',width:'100%'}}>
                <Typography gutterBottom component="h4" variant="h6">{question}</Typography>
                <Box sx={{mt:3,display:'flex',flexDirection:'column',width:'100%',justifyContent:'space-between'}}>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Grid container spacing={2}>
                            {
                                options &&
                                options.map(item=>(
                                    <Grid key={item} item xs={12} md={6}>
                                    <button 
                                        disabled={selected}
                                        onClick={()=>handleCheck(item)}
                                        className={`singleOption ${selected && handleSelect(item)}`}
                                        >{item}</button>
                                    </Grid>
                                ))
                            }

                    </Grid>
                    <Box sx={{width:'100%',mt:5}}>

                        <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <Button 
                                    color="secondary"
                                    fullWidth
                                    size="large" 
                                    variant="contained"
                                    href="/"
                                    onClick={handleQuite}
                                    >Quit</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                    size="large"
                                    color="primary" 
                                    fullWidth 
                                    onClick={handleNext}
                                    variant="contained"
                                    >Next Question</Button>
                                </Grid>
                        </Grid>

                    </Box>
            
             
                
                
                </Box>
                
            </Box>
        </Box>
    )
}




export default Question;