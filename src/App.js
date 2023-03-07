import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Red from "./red";
import Blue from "./blue";
import Gold from "./gold";
import Ash from "./ash";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";


function App() {
  const location = useLocation();
  return (
      <AnimatePresence mode="wait">
        <Navbar/>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element ={ <Home/> } />
          <Route path='/red' element = { <Red/> } />
          <Route path='/blue' element = { <Blue/> } />
          <Route path='/gold' element = { <Gold/> } />
          <Route path='/ash' element = { <Ash/> } />
        </Routes>
      </AnimatePresence>
  );
}

export default App;
