import React from "react";
import Instructions from "./Instructions";
import Restart from "./Restart";

function Header() {
  return (
    <nav>
      <Instructions />
      <Restart />
      
    </nav>
  );
}

export default Header;
