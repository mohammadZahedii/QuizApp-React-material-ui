import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Question from './../Question/Question';
import {connect} from 'react-redux'
const Quiz =(props)=>{
  
    const{questionCategory,score,name}=props
    // const[options,setOptions]=useState()
    // const[currQues,setCurrQues]=useState(0)


    // useEffect(()=>{
    //        if(questions){
    //             optionsShuffled(questions,currQues)

    //        }
            
   
    // },[]);

    
    // const handleShuffle=(optionss)=>{
    //     return optionss.sort(()=>Math.random()-0.5)
    // }
   


    return(
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',fontFamily:'Montserrat'}}>
            <Typography component="span" sx={{border:'1px solid black',p:t=>t.spacing(1,2),boxShadow:'4px 4px 2px black'}} variant="h5">Welcome {name}</Typography>
            {
                    questionCategory ? (
                    <React.Fragment>
                        <Box sx={{my:2,p:1,display:'flex',justifyContent:'space-between',width:'100%',textTransform:'uppercase'}}>
                            <Typography variant="body1"component="span">{questionCategory}</Typography>
                            <Typography variant="body1" components="span">Score: {score}</Typography>
                        </Box>
                        <Question/>
                    </React.Fragment>
    
                    
                ):(
                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:10}}>
                        <CircularProgress color="inherit" size={150} thickness={1}/>
                    </Box>
                )
            }
        </Box>
    )
    
}



const mapStateToProps=state=>{
    let {questions}=state.questions
    let {currQues}=state.questions
    return{
        score:state.values.score,
        name:state.values.userName,
        questionCategory:questions[currQues]?.category
    }
}



export default connect(mapStateToProps)(Quiz);