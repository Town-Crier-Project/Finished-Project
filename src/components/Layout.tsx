import "../App.css";
import Aggie from "../assets/Aggie.jpg";

const Header = () => {
  return (
    <div className="title">
      <img src={Aggie} alt="Title" className="Title" />
    </div>
  );
};

// const Header = () => {
//     return(
//         <div className =' title'>
//         <header style={{ padding: '40px', textAlign: 'center', fontPalette: 'white'}}>
//         <h1>The Witty Aggie Wrangler Weekly</h1>
//       </header>
//       </div>
// );
// }
export default Header;
