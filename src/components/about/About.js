import React from "react";

const About = (props) => {
    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">About Us</h6>
                <h2 className="section-head">Who am I?</h2><br/>
                <p>
                    <b><u>Hi I'm Sudhanshu IGI On his way to become Wealthy</u></b>. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                </p>
                <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <IconCard icon="mobile" title="Mobile App" color="2c98f0" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <IconCard icon="globe" title="Web App" color="ec5453" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <IconCard icon="database" title="Data Science" color="f9c350" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <IconCard icon="gamepad" title="Game Dev" color="a84db8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const IconCard = (props) => {
    const boxStyle = {
        'box-shadow': `rgb(255 255 255 / 15%) 3px 3px 30px 0px`,
        'border-bottom': `2px solid #${props.color}`,
        'background-color': '#343a40',
        'padding': '1.5rem'
    }

    const iconStyle = {
        'color': `#${props.color}`
    }

    const titleStyle = {
        'font-family': '"Quicksand", Arial, sans-serif',
        'font-size': '1.2rem',
        'font-weight': '500'
    }

    return (
        <div style={boxStyle} className="mb-4">
            <span className="mb-3 d-block">
                <i style={iconStyle} className={`fa fa-3x fa-${ props.icon }`}></i>
            </span>
            <h3 style={titleStyle}>{ props.title }</h3>
        </div>
    );
};

export default About;