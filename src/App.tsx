//import "./App.css";
// import NavBar from "./components/NavBar";
// import imagePath from "./assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/home";
import TownDoctor from "./pages/towndoctor";
import BountyBoard from "./pages/bountyboard";
import DuelChallenge from "./pages/duelchallenge";
import FrontierNews from "./pages/frontiernews";
import ArticleOne from "./pages/articleone";
// import "./FrontierNews.css";
import ArticleTwo from "./pages/ariticletwo";
import ArticleThree from "./pages/articlethree";
// import ArticleThree from "./pages/articlethree";

function App() {
  // let items = [
  //   "Home",
  //   "Town Doctor",
  //   "Bounty Board",
  //   "Frontier News",
  //   "Duel Challenge",
  // ];
  // return (
  //   <div>
  //     <NavBar
  //       brandName="The Town Crier"
  //       imageSrcPath={imagePath}
  //       navItems={items}
  //     />
  //   </div>
  // );

  //

  // https://main-site-r5xs.onrender.com/

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/towndoctor"
            Component={() => {
              window.location.href = "https://main-site-r5xs.onrender.com/";
              return null;
            }}
          />
          <Route path="/bountyboard" element={<BountyBoard />} />
          <Route path="/duelchallenge" element={<DuelChallenge />} />
          <Route path="/frontiernews" element={<FrontierNews />} />
          <Route path="/articleone" element={<ArticleOne />} />
          <Route path="/articletwo" element={<ArticleTwo />} />
          <Route path="/articlethree" element={<ArticleThree />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
