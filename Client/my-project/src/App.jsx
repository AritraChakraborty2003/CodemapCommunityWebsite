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
import Success from "./Components/Success";
import CmsLogin from "./Components/CmsLogin";
import CMSApply from "./Components/CMSApply";
import CardApply from "./Components/CardApply";
import { InternLogin } from "./Components/InternLogin";
import { InternDashboard } from "./Components/InternDashboard";
import InternTraining from "./Components/InternTrainings";
import InternDocx from "./Components/InternDocx";
import InternApply from "./Components/InternApply";
import { InternTrainingCMS } from "./Components/InternTrainingCMS";
import { DataCardPost } from "./Components/DataCardPost";
import { InternAdd } from "./Components/InternAdd";
import { Interncomplaint } from "./Components/Interncomplaint";
import { InternAllocation } from "./Components/InternAllocation";
import { InternScore } from "./Components/InternScore";
import VideoCMS from "./Components/VideosCMS";
import InternSection from "./Components/InternSection";
import { VideoPlayer } from "./Components/VideoPlayer";
import RulesPage from "./Components/rulesPage";
import QuestionArea from "./Components/questionArea";
import { CMSAddQuestions } from "./Components/CMSAddQuestions";
import Scorepage from "./Components/ScorePage";
import TestResult from "./Components/TestResult";
import { LeaderboardPage } from "./Components/LeaderboardPage";
import CMSTaskManager from "./Components/CMSTaskManager";
import TaskCard from "./Components/TaskCard";
import { Termination } from "./Components/Termination";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/InternTrainingCMS"
            element={<InternTrainingCMS />}
          ></Route>
          <Route
            path="/InternAllocation"
            element={<InternAllocation />}
          ></Route>
          <Route path="/Termination" element={<Termination />}></Route>
          <Route path="Taskcard" element={<TaskCard />}></Route>
          <Route path="/CMSTaskManager" element={<CMSTaskManager />}></Route>
          <Route path="/LeaderboardPage" element={<LeaderboardPage />}></Route>
          <Route path="/InternResult" element={<TestResult />}></Route>
          <Route path="/ScorePage" element={<Scorepage />}></Route>
          <Route path="/CMSAddQuestions" element={<CMSAddQuestions />}></Route>
          <Route path="/questionArea" element={<QuestionArea />}></Route>
          <Route path="/rulesPage" element={<RulesPage />}></Route>
          <Route path="/InternSection" element={<InternSection />}></Route>
          <Route path="/VideoPlayer" element={<VideoPlayer />}></Route>
          <Route path="/VideoCMS" element={<VideoCMS />}></Route>
          <Route path="/InternScore" element={<InternScore />}></Route>
          <Route path="/InternComplaint" element={<Interncomplaint />}></Route>
          <Route path="/InternAdd" element={<InternAdd />}></Route>
          <Route path="/DataCardPost" element={<DataCardPost />}></Route>
          <Route path="/InternApply" element={<InternApply />}></Route>
          <Route path="/InternDocx" element={<InternDocx />}></Route>
          <Route path="/InternTraining" element={<InternTraining />}></Route>
          <Route path="/InternDashboard" element={<InternDashboard />}></Route>
          <Route path="/InternLogin" element={<InternLogin />}></Route>
          <Route path="/CardApply" element={<CardApply />}></Route>
          <Route path="/CMSApply" element={<CMSApply />}></Route>
          <Route path="/CMSLogin" element={<CmsLogin />}></Route>
          <Route path="/success" element={<Success />}></Route>
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
