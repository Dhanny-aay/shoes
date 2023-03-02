import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Red from "./red";
import Blue from "./blue";
import Gold from "./gold";
import Ash from "./ash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={ <Home/> } />
        <Route path='/red' element = { <Red/> } />
        <Route path='/blue' element = { <Blue/> } />
        <Route path='/gold' element = { <Gold/> } />
        <Route path='/ash' element = { <Ash/> } />
      </Routes>
    </Router>
  );
}

export default App;
