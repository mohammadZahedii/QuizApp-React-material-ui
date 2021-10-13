import './App.css';
import CssBaseline from '@mui/material/CssBaseline'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <CssBaseline/>
        <Header/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
