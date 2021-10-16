
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

function App() {

  const[name,setName]=useState("");
  
  const fetchQuestions=()=>{

  }

  return (

    <BrowserRouter>
      <Box className="app">
        <CssBaseline/>
        <Header/>
          <Switch> 
            <Route path="/" exact>
              <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
            </Route>
            <Route path="/quiz" component={Quiz}/>
            <Route path="/result" component={Result}/>
          </Switch>
      </Box>
      <Footer />
    </BrowserRouter>
    

  );
}

export default App;
