import React from "react";

const About = (props) => {
    const aboutCardDetails = [
        {
            'icon': 'futbol-o',
            'title': 'Football'
        },
        {
            'icon': 'globe',
            'title': 'Books'
        },
        {
            'icon': 'male',
            'title': 'Workout'
        },
        {
            'icon': 'gamepad',
            'title': 'Video Games'
        }
    ];

    const cardRenderer = aboutCardDetails.map((details, i) => 
        <div className="col-md-3 col-sm-6 col-6" key={i}>
            <IconCard icon={details.icon} title={details.title} colorClass={i+1} />
        </div>
    );

    return (
        <section className="full-section" id="about">
            <div className="container">
                <h6 className="section-label">About Us</h6>
                <h2 className="section-head">Who am I?</h2><br/>
                <p>
                    <b><u>Hi I'm Sudhanshu IGI On his way to become Wealthy</u></b>. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                </p>
                <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <div className="row mt-5">
                    { cardRenderer }
                </div>
            </div>
        </section>
    );
};

const IconCard = (props) => {
    return (
        <div className={`card-icon-root mb-4 color-${ props.colorClass }`}>
            <span className="mb-3 d-block">
                <i className={`fa fa-3x fa-${ props.icon }`}></i>
            </span>
            <h3 className="card-title">{ props.title }</h3>
        </div>
    );
};

export default About;