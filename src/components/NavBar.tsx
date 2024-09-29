import { useState } from "react";
import "../App.css";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  activePage:
    | "Home"
    | "Town Doctor"
    | "Bounty Board"
    | "Frontier News"
    | "Duel Challenge";
}

function NavBar({
  brandName,
  imageSrcPath,
  navItems,
  activePage,
}: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark shadow">
      <a className="navbar-brand" href="#">
        <img
          src={imageSrcPath}
          width="60"
          height="60"
          className="d-inline-block align-center"
          alt=""
        />
        <span className="fw-bolder fs-4">{brandName}</span>
      </a>

      <div className="navbar-nav ms-auto">
        {navItems.map((items, index) => (
          <a
            key={items}
            className={
              //selectedIndex == index ? "nav-link active fw-bold" : "nav-link"
              items == activePage ? "nav-link active fw-bold" : "nav-link"
            }
            href={"#/" + items.split(" ").join("")}
            onClick={() => setSelectedIndex(index)}
          >
            {items}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
