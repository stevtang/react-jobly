import './App.css';
import { BrowserRouter} from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from './NavBar';
import Routes from './Routes';


/**
 *  Renders NavBar and Routes
 * 
 *  Props: None
 *  State: None
 * 
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
