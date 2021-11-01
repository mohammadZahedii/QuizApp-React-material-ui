
import React,{useState} from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Footer from './../src/components/Footer/Footer'
import Box from '@mui/material/Box'
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Result';
import { recieveQuestions } from './actions';
import {connect} from 'react-redux'
import axios from 'axios'



function App(props) {

  // const[questions,setQuestions]=useState()
  
  const {setQuestions}=props
  const fetchQuestions=(category,difficulty)=>{

    axios.get(
     `https://opentdb.com/api.php?amount=10${
       category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
   )
   .then(Response=>setQuestions(Response.data.results))
   .catch(err=>console.log(err))
 
  

}
  return (

    <BrowserRouter>
      <Box className="app">
        <CssBaseline/>
        <Header/>
          <Switch> 
            <Route path="/" exact>
              <Home fetchQuestions={fetchQuestions}/>
            </Route>
            <Route path="/quiz">
              <Quiz/>
            </Route>
            <Route path="/result" component={Result}/>
          </Switch>
      </Box>
      <Footer />
    </BrowserRouter>
    

  );
}


const mapDispatchToProps=dispatch=>({


  setQuestions:questions=>dispatch(recieveQuestions(questions))

})


const mapStateToProps=state=>({
    questions:state.questions
})
export default connect(null,mapDispatchToProps)(App)
