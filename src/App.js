import './App.css';
import {NavBar, NavItem} from './components/nav/Nav';
import React from "react";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <div className="App">
        <NavBar>
            <NavItem title="About"/>
            <NavItem title="Skills"/>
            <NavItem title="Education"/>
            <NavItem title="Experience"/>
            <NavItem title="Work"/>
            <NavItem title="Blog"/>
            <NavItem title="Contact"/>
        </NavBar>
        <header className="masterhead">
          <Landing/>
        </header>
        <section>
          {/* Some body */}
        </section>
    </div>
  );
}

export default App;
