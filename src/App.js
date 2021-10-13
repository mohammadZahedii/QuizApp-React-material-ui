import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';
import Footer from './../src/components/Footer/Footer'
import Box from '@mui/material/Box'


function App() {
  return (
    <BrowserRouter>
      <Box className="app">
        <CssBaseline/>
        <Header/>
      </Box>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
