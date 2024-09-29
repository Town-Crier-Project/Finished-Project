import NavBar from "../components/NavBar";
import imagePath from "../assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";
import "../FrontierNews.css";
import Header from "../components/Layout";
import CarouselPage from "../components/Articles";
import Gossip from "../components/Gossip";
import About from "../components/About";

function FrontierNews() {
  let items = [
    "Home",
    "Town Doctor",
    "Bounty Board",
    "Frontier News",
    "Duel Challenge",
  ];

  return (
    <div>
      <NavBar
        brandName="The Town Crier"
        imageSrcPath={imagePath}
        navItems={items}
        activePage="Frontier News"
      />

      <div className="body">
        <Header />
        <body className="body">
          <div className="container">
            <div className="item1">
              <CarouselPage />
            </div>
            <div className="container_vert">
              <div className="item2">
                <Gossip />
              </div>

              <div className="item3">
                <About />
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default FrontierNews;
