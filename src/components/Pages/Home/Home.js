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

const Home =(props)=>{
    console.log(props)
    const{fetchQuestions,name,changeNameValue}=props


    const[category,setCategory]=useState("")
    const[difficulty,setDifficulty]=useState("")
    const[error,setError]=useState(false)

    const history = useHistory();

    
    const handlesubmit=()=>{
        if(!category || !difficulty || !name){
            setError(true)
            return
        }else{
            setError(false)
            fetchQuestions(category,difficulty);
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
                         onChange={(e=>changeNameValue(e.target.value))}
                         />
                        <TextField 
                        fullWidth 
                        select 
                        label="Select Category" 
                        variant="outlined" 
                        sx={{mb:t=>t.spacing(2)}}
                        onChange={(e)=>setCategory(e.target.value)}
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
                        onChange={(e)=>setDifficulty(e.target.value)}
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
    const {name}=state
    return {name}

}

const mapDispatchToProps=dispatch=>{

return{
    changeNameValue:value=>dispatch(changeValue(value))
}

}


export default connect(mapStateToProps,mapDispatchToProps)(Home);