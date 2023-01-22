import './App.scss';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import About from './Components/About';
import Horror from './Components/Filter/Horror';
import Mystery from './Components/Filter/Mystery';
import Action from './Components/Filter/Action';
import Anime from './Components/Filter/Anime';
import Aos from 'aos';
import Romantic from './Components/Filter/Romantic';


function App() {
  Aos.init();
  // Initialize

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Horror' element = {<Horror/>}/>
            <Route path='/Romantic' element = {<Romantic/>}/>
            <Route path='/Mystery' element = {<Mystery/>}/>
            <Route path='/Action' element = {<Action/>}/>
            <Route path='/Anime' element = {<Anime/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
