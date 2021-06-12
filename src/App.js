import './App.css';
import {NavBar, NavItem} from './components/nav/Nav';
import React from "react";
import Landing from "./components/landing/Landing";
import About from './components/about/About';
import Expertise from './components/about/Expertise';
import Skills from './components/about/Skills';
import Education from './components/about/Education';
import Experience from './components/about/Experience';

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
        <Landing/>
        <About/>
        <Expertise/>
        <Skills/>
        <Education/>
        <Experience/>
    </div>
  );
}

export default App;
