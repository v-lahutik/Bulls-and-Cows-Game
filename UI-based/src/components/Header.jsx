import React from "react";
import Instructions from "./Instructions";
import Restart from "./Restart";

function Header() {
  return (
    <nav>
      <h1> 🐂 Bulls and 🐄 Cows</h1>
      <Instructions />
      <Restart />
      
    </nav>
  );
}

export default Header;
