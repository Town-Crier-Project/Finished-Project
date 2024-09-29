import NavBar from "../components/NavBar";
import imagePath from "../assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";
import "../Home.css";

function Home() {
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
        activePage="Home"
      />
      <section className="hero">
        <div className="content">
          <h1>Welcome to The Town Crier!</h1>
          <p>
            Where we've got all of the things you need to tame the Wild West!
            Want news on what's goin' down on the frontier? Need medical advice
            and your town's doctor is dead in a ditch? We've got it all! You
            need it, we got it! We've got everything a frontiersman would neave
            to tame this wild west!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
