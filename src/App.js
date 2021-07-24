import './App.css';
import React from "react";

import Landing from "./components/HomePage/Landing";
import About from './components/HomePage/About';
import Expertise from './components/HomePage/Expertise';
import Skills from './components/HomePage/Skills';
import Education from './components/HomePage/Education';
import Experience from './components/HomePage/Experience';
import Work from './components/HomePage/Work';
import NarrowContent from './components/HomePage/NarrowContent';
import RecentBlog from './components/HomePage/RecentBlog';
import Contact from './components/HomePage/Contact';

import { NavBar, NavItem } from './components/Nav';
import Footer from './components/Footer';

import 'fontsource-roboto';

function App() {
  return (
    <div className="App">
        <NavBar>
            <NavItem title="About" link="/#about" />
            <NavItem title="Skills" link="/#skills" />
            <NavItem title="Education" link="/#education" />
            <NavItem title="Experience" link="/#experience" />
            <NavItem title="Work" link="/#work" />
            <NavItem title="Blog" link="/#recentBlog" />
            <NavItem title="Contact" link="/#contact" />
        </NavBar>
        <Landing/>
        <About/>
        <Expertise/>
        <NarrowContent/>
        <Skills/>
        <Education/>
        <Experience/>
        <Work/>
        <RecentBlog/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
