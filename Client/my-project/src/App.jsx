import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FirstReachComponent from "./Components/FirstReachComponent";
import SecondComponent from "./Components/SecondReachComponent";
import About from "./Components/About";
import Card from "./Components/Card";
import CollabIcon from "./Components/CollabIcon";
import TestinomialBox from "./Components/TestinomialBox";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/collabIcon" element={<CollabIcon />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/TestinomialBox" element={<TestinomialBox />}></Route>
          <Route path="/FirstReach" element={<FirstReachComponent />}></Route>
          <Route path="/SecondReach" element={<SecondComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
