import React,{useEffect} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {useHistory} from 'react-router-dom'
const Result =(props)=>{
    const{name,score}=props
    
    const history =useHistory()
    useEffect(()=>{
        if(!name){
            history.push("/")
        }

    },[name,history])
    console.log(name)
    return(
        <Box sx={{my:10,p:2,display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <Typography sx={{fontFamily:'Montserrat'}}component="span" variant="h3">Final Score : {score}</Typography>
            <Button 
                href="/"
                sx={{mt:2}} 
                size="large" 
                variant="contained" 
                color="secondary">Back to our HomePage</Button>
        </Box>
    )
}

export default Result;