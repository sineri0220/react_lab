import FirstPage from "./App3";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Calculator from './App2';

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to ='/'>Home</Link>
      <Link to ='/calculator'>Calculator</Link>
    </nav>
      <Routes>
        <Route path="/" exact element={<FirstPage />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </BrowserRouter> 
   

  );
}

export default App;
