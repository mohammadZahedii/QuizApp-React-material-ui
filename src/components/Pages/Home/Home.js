import React,{useState} from 'react'
import Box from '@mui/material/Box'
import Image from './quiz.png'
import Typography from '@mui/material/Typography'
import {TextField} from '@mui/material'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Categories from './../../Categories/Categories'
import { useHistory } from 'react-router-dom'
import ErrorMessage from './../../ErrorMessage/ErrorMessage'
import { connect } from 'react-redux'
import { changeValue } from '../../../actions'
import { changeCategoryValue } from '../../../actions'
import { changeDifficultyValue } from '../../../actions'
import { recieveQuestions } from './../../../actions';
import { setErrorFalse } from '../../../actions';
import { setErrorTrue } from '../../../actions'
import axios from 'axios'


const Home =(props)=>{
    


    const{
        name,category,difficulty,error,
        changeNameValue,changeCategoryValue,changeDifficultyValue,
        fetchQuestions,changeErrorToFalse,changeErrorToTrue
    }=props



    const history = useHistory();

    
    const handlesubmit=()=>{
        if(!category || !difficulty ||!name){
            changeErrorToTrue(true)
            return
        }else{
            changeErrorToFalse(false)
            fetchQuestions(category,difficulty)
            history.push("/quiz")
        }


    }

    


    return(
        <Grid container spacing={1} sx={{flexDirection:['column','column','row-reverse']}}>
            <Grid item xs={12} md={6}>
                <img src={Image} style={{width:'100%'}} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{p:t=>t.spacing(1),my:t=>t.spacing(1),mr:t=>t.spacing(1),display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
                    <Typography gutterBottom component="span" variant="h4" sx={{display:'flex',justifyContent:'center'}}>Quiz Settings</Typography>
                    <Box sx={{width:'100%',m:t=>t.spacing(1),px:t=>t.spacing(2)}}>
                        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                        <TextField 
                         fullWidth
                         label="Enter your Name" 
                         variant="outlined" 
                         sx={{mb:t=>t.spacing(2)}}
                         onChange={(e)=>changeNameValue(e.target.value)}
                         />
                        <TextField 
                        fullWidth 
                        select 
                        label="Select Category" 
                        variant="outlined" 
                        sx={{mb:t=>t.spacing(2)}}
                        onChange={(e)=>changeCategoryValue(e.target.value)}
                        value={category}
                        >
                            {
                                Categories.map(cat=>(
                                    <MenuItem value={cat.value}  key={cat.category}>{cat.category}</MenuItem>
                                ))
                            }
                        </TextField>
                        <TextField 
                        fullWidth 
                        select 
                        label="Select Difficulty" 
                        variant="outlined" 
                        onChange={(e)=>changeDifficultyValue(e.target.value)}
                        value={difficulty}
                        sx={{mb:t=>t.spacing(2)}}>
                            <MenuItem value="easy">Easy</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="hard">Hard</MenuItem>
                        </TextField>
                        <Button 
                        onClick={handlesubmit}
                        variant="contained" color="primary" fullWidth size="large">
                            Start Quiz
                        </Button>
                    </Box>
                </Box>
            </Grid>
     
        </Grid>
    )
}



const mapStateToProps=(state)=>{
    return{
        name:state.values.userName,
        category:state.values.category,
        difficulty:state.values.difficulty,
        error:state.values.error

    }

}

const mapDispatchToProps=dispatch=>{

return{
    setQuestions:(questions)=>dispatch(recieveQuestions(questions)),
    changeNameValue:value=>dispatch(changeValue(value)),
    changeCategoryValue:value=>dispatch(changeCategoryValue(value)),
    changeDifficultyValue:value=>dispatch(changeDifficultyValue(value)),
    changeErrorToTrue:boolean=>dispatch(setErrorTrue(boolean)),
    changeErrorToFalse:boolean=>dispatch(setErrorFalse(boolean)),
}

}


export default connect(mapStateToProps,mapDispatchToProps)(Home);