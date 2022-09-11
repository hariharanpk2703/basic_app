import './App.css';
import Contact from './Components/Contact';
import Forms from './Components/Forms';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Table from './Components/Table';

function App() {
  return (<>    
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Forms" element={<Forms/>}/>
      <Route exact path="/Contact" element={<Contact/>}/>
      <Route exact path="/Table" element={<Table/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
