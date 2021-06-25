import './App.css';
import {NavBar, NavItem} from './components/nav/Nav';
import React from "react";
import Landing from "./components/landing/Landing";
import About from './components/about/About';
import Expertise from './components/about/Expertise';
import Skills from './components/about/Skills';
import Education from './components/about/Education';
import Experience from './components/about/Experience';
import Work from './components/about/Work';
import NarrowContent from './components/about/NarrowContent';
import RecentBlog from './components/about/RecentBlog';
import Contact from './components/about/Contact';
import Footer from './components/footer/Footer';

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
