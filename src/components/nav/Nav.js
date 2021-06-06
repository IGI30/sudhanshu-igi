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
                <NavIcon icon="🏠" />
                <li className="nav-icon small-screen" onClick={toggleNavClass}>
                    <a className="icon text-white-50">
                        <i className={`fa ${isActive? 'fa-times': 'fa-bars'}`}></i>
                    </a>
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
            <a href="#" className="nav-item-title">
                { props.title }
            </a>
        </li>
    );
}

function NavIcon(props) {
    return (
        <li className="nav-icon">
            <a href="#" className="icon-button">
                { props.icon }
            </a>
        </li>
    );
}

export { NavBar, NavIcon, NavItem };