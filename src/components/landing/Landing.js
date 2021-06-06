import React from "react";
import igiLogo from "../../assets/images/home_single_big_white.png";

const Landing = (props) => {
    const nameStyle = {
        display: 'inline',
        fontSize: '2rem',
        fontFamily: 'ui-monospace'
    };

    const logoStyle = {
        /* color: white; */
        display: 'inline',
        marginBottom: '20px',
        marginRight: '15px',
        marginLeft: '15px',
        width: '80px'
    };

    const hrStyle = {
        width: '100px',
        height: '1px',
        border: 'none',
        color: '#eee',
        backgroundColor: '#eee'
    };

    return (
        <div className="text-landing">
            <p style={ nameStyle } className="ps-2">SUDHANSHU</p>
            <img style={ logoStyle }
                 src={ igiLogo } alt="IGI" />
            <p style={ nameStyle }>IGI</p>
            <hr style={ hrStyle } />
            <br/>
            <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <a className="internal-anchor" href="https://twitter.com/SudhanshuIGI">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li className="list-inline-item social-buttons">
                    <a className="internal-anchor" href="https://github.com/IGI30">
                        <i className="fa fa-github text-white"></i>
                    </a>
                </li>
                <li className="list-inline-item social-buttons">
                    <a className="internal-anchor" href="https://www.linkedin.com/in/sudhanshuigi/">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </li>
            </ul>
            <br/>
            <p>Welcome to Sudhanshu IGI's <u>homepage</u>.<br/>I'm a data analysis and data visualisation
                specialist currently
                working as a Senior software Engineer for <a className="internal-anchor" href="https://research.samsung.com/sri-b">Samsung Research</a>.
            </p>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
               href="#description">Visit</a>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
               href="#contact">Contact</a>
        </div>
    );
};

export default Landing;