import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Card from "./Components/Card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
