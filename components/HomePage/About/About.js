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
                    <b><u>Hi, I'm Sudhanshu IGI On my way to help and inspire the world</u></b>. I'm an ambitious and 10x developer who is not restricted by any specific domain or technology. I have a learning attitude and when needed I will go out of my way to learn it.
                </p>
                <p>
                    I code daily. I read daily. I learn daily. I help others. I set my goals. I have a positive mindset and I am a good self-taught software engineer.
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