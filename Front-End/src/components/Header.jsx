import React from "react";
import Instructions from "./Instructions";
import Level from "./Levels";
import { VscDebugRestart, VscInfo } from "react-icons/vsc";

function Header() {
  return (
    <header>
      <h1>Bulls & Cows</h1>
      <nav>
        <div><Instructions /></div>
        <VscInfo />
        <VscDebugRestart />
        <Level />
      </nav>
    </header>
  );
}

export default Header;
