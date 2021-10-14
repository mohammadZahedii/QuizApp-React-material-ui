import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ErrorMessage from './../../components/ErrorMessage/ErrorMessage'
import './Question.css'
import Grid from '@mui/material/Grid'
import {useHistory} from 'react-router-dom'


export default function Question(props){

    const{currQues,setCurrQues,Questions,options,correct,setScore,setQuestions}=props
        const history =useHistory()
        const[selected,setSelected]=useState()
        const[error,setError]=useState(false)
// console.log(Questions)

const handleSelect=(item)=>{
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
    if(item === correct) setScore((prev)=>prev+1);
    setError(false)
}
const handleNext=()=>{
    if(currQues>8){
        history.push('/result')
    }else if(selected){
        setCurrQues(currQues + 1)
        setSelected()
    }else{
        setError('Please select an option first')
    }
}

console.log(currQues)

const handleQuite=()=>{
    
}
    return(
        <Box sx={{m:1,width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Typography sx={{fontWeight:'bold'}}component="h1" variant="h4">{`Question ${currQues + 1} :`}</Typography>
            <Box sx={{m:1,py:2,px:3,border:'4px solid gray',height:'100%',width:'100%'}}>
                <Typography gutterBottom component="h4" variant="h6">{Questions[currQues].question}</Typography>
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