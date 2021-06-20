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
        width: '60px'
    };

    const hrStyle = {
        width: '100px',
        height: '1px',
        border: 'none',
        color: '#eee',
        backgroundColor: '#eee'
    };

    return (
        <header className="masterhead">
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
                    <li className="list-inline-item social-buttons">
                        <a className="internal-anchor" href="https://www.facebook.com/IGI.Sudhanshu/">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className="list-inline-item social-buttons">
                        <a className="internal-anchor" href="https://www.instagram.com/sudhanshuigi/">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <br/>
                <p>Welcome to Sudhanshu IGI's <u>homepage</u>.
                <br/>I'm a data analysis and data visualisation
                    specialist currently working as a Senior Software Engineer for <a className="internal-anchor" href="https://research.samsung.com/sri-b">Samsung Research</a>.
                </p><br/>
                <a className="btn m-btn-primary btn-xl text-uppercase"
                href="#description">Portfolio</a>
                <a className="btn m-btn-primary btn-xl text-uppercase ms-2"
                href="#contact">Contact</a>
            </div>
        </header>
    );
};

export default Landing;