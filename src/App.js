
import './App.css';
import {Route,Router,Routes} from "react-router-dom"
import Home from './components/Home';
import Creature from './components/Creature';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="creature/" element={<Creature/>}/>
    </Routes>
    
  );
}

export default App;
