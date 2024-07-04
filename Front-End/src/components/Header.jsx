import React from "react";
import Instructions from "./Instructions";
import Level from "./Levels";

function Header() {
  return (
    <header>
      <h1>Bulls & Cows</h1>
      <nav>
        <div><Instructions /></div>
        
        <Level />
      </nav>
    </header>
  );
}

export default Header;
