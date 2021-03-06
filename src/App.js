
import React,{useState,useEffect} from 'react';
import axios from 'axios'
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

function App() {

  const[name,setName]=useState("");
  const[questions,setQuestions]=useState()
  const[score,setScore]=useState(0)
  

 
  const fetchQuestions=(category,difficulty)=>{

    axios.get(
      `https://opentdb.com/api.php?amount=10${
       category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
    .then(Response=>setQuestions(Response.data.results))
  
    .catch(err=>console.log(err))

  }
  

  console.log(questions)
  return (
    <BrowserRouter>
      <Box className="app">
        <CssBaseline/>
        <Header/>
          <Switch> 
            <Route path="/" exact>
              <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
            </Route>
            <Route path="/quiz" component={Quiz}>
              <Quiz name={name} 
              questions={questions} 
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              />
            </Route>
            <Route path="/result">
              <Result name={name} score={score}/>
            </Route>
          </Switch>
      </Box>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
