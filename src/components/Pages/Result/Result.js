import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useSelector } from 'react-redux'

const Result =(props)=>{
    
    // const history =useHistory()
    // useEffect(()=>{
    //     if(!name){
    //         history.push("/")
    //     }

    // },[name,history])

    const result=useSelector((state)=>{
        return{
            score:state.values.score
        }
    })
    return(
        <Box sx={{my:10,p:2,display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}}>
            <Typography sx={{fontFamily:'Montserrat'}}component="span" variant="h3">Final Score :{' '}{((result.score)*100)/10} / 100</Typography>
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