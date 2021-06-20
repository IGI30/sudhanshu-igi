import React, { useState, useRef, useEffect } from "react";

const NavBar = (props) => {
    const [isActive, setActive] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
    
    const toggleNavClass = () => {
        setActive(!isActive);
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setActive(false);
        }
    }

    return (
        <nav className="m-navbar" ref={navRef}>
            <ul className="m-navbar-home">
                <NavIcon icon="🏠" link="/" />
                <li className="nav-icon small-screen" onClick={toggleNavClass}>
                    <button onClick={ (event) => event.preventDefault() } className="btn-icon text-white-50">
                        <i className={`fa ${isActive? 'fa-times': 'fa-bars'}`}></i>
                    </button>
                </li>
            </ul>
            <ul className={`m-navbar-nav ${isActive? 'nav-mobile-expanded': ''}`}>
                { props.children }
            </ul>
        </nav>
    );
};

function NavItem(props) {
    return (
        <li className="nav-item-head">
            <a href={ props.link? props.link: '/' } className="nav-item-title">
                { props.title }
            </a>
        </li>
    );
}

function NavIcon(props) {
    return (
        <li className="nav-icon">
            <a href={ props.link? props.link: '/' } className="icon-button">
                { props.icon }
            </a>
        </li>
    );
}

export { NavBar, NavIcon, NavItem };