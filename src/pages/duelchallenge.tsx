import NavBar from "../components/NavBar";
import imagePath from "../assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";

function DuelChallenge() {
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
        activePage="Duel Challenge"
      />

      <h1>This is the Duel Challenge page</h1>
    </div>
  );
}

export default DuelChallenge;
