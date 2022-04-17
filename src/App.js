
import './App.css';
import react from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from './Components/Homepage/Homepage';
import { Aboutpage } from './Components/Aboutpage/Aboutpage';


const App = () => {
return (
  <>

<Routes>

<Route exact path="/" element={<Homepage/>}  />
<Route path="/about" element={<Aboutpage/>}  />


</Routes>

  
  </>
);


};

export default App;
