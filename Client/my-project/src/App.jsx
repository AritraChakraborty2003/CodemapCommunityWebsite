import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import FirstReachComponent from "./Components/FirstReachComponent";
import SecondComponent from "./Components/SecondReachComponent";
import About from "./Components/About";
import Card from "./Components/Card";
import NavbarGeneral from "./Components/NavbarGeneral";
import CollabIcon from "./Components/CollabIcon";
import TestinomialBox from "./Components/TestinomialBox";
import CardEvent from "./Components/CardEvent";
import BuildProgress from "./Components/BuildProgress";
import { CMSOpenings } from "./Components/CMSOpenings";
import CareerCard from "./Components/CareerCard";
import Careers from "./Components/Careers";
import SearchBar from "./Components/SearchBar";
import SearchOpenings from "./Components/SearchOpenings";
import ApplyPortal from "./Components/ApplyPortal";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/applyPortal" element={<ApplyPortal />}></Route>
          <Route path="/searchOpenings" element={<SearchOpenings />}></Route>
          <Route path="/search" element={<SearchBar />}></Route>
          <Route path="/career" element={<Careers />}></Route>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/CareerCard" element={<CareerCard />}></Route>
          <Route path="/CMSOpenings" element={<CMSOpenings />}></Route>
          <Route path="/collabIcon" element={<CollabIcon />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/NavBarGeneral" element={<NavbarGeneral />}></Route>
          <Route path="/TestinomialBox" element={<TestinomialBox />}></Route>
          <Route path="/FirstReach" element={<FirstReachComponent />}></Route>
          <Route path="/SecondReach" element={<SecondComponent />}></Route>
          <Route path="/cardEvent" element={<CardEvent />}></Route>
          <Route path="/buildProgress" element={<BuildProgress />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
