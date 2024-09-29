import NavBar from "../components/NavBar";
import imagePath from "../assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";

function BountyBoard() {
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
        activePage="Bounty Board"
      />

      <h1>This is the Bounty Board</h1>
    </div>
  );
}

export default BountyBoard;
