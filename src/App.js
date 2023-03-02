import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Red from "./red";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={ <Home/> } />
        <Route path='/red' element = { <Red/> } />
      </Routes>
    </Router>
  );
}

export default App;
