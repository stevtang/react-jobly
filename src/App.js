import './App.css';
import { BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './NavBar';
import Routes from './Routes';
import { useState } from 'react';


/**
 *  Renders NavBar and Routes
 * 
 *  Props: None
 *  State: None
 * 
 */
function App() {
console.log("Entering App Component");
  const [user, setUser] = useState({});

  
  function handleLogin(formData){

  }
 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes handleLogin={handleLogin}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
