import NavBar from "../components/NavBar";
import imagePath from "../assets/pngtree-some-cowboy-character-icon-on-an-app-vector-png-image_15430298.png";

function TownDoctor() {
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
        activePage="Town Doctor"
      />

      <h1>This is the Town Doctor</h1>
    </div>
  );
}

export default TownDoctor;
