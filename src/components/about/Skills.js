import React from "react";

const Skills = (props) => {
    const skillDetails = [
        {
            'skill': 'Android',
            'value': 95
        },
        {
            'skill': 'Angular',
            'value': 85
        },
        {
            'skill': 'React',
            'value': 75
        },
        {
            'skill': 'Djano',
            'value': 85
        },
        {
            'skill': 'Data Science',
            'value': 65
        },
        {
            'skill': 'Laravel',
            'value': 90
        }
    ];

    const skillsRenderer = skillDetails.map((details, i) => 
        <div className="col-md-6" key={i}>
            <SkillBar skill={details.skill} value={details.value} colorClass={i+1} />
        </div>
    );

    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">My Speciality</h6>
                <h2 className="section-head">My Skills</h2><br/>
                <p>
                The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                </p>
                <div className="row mt-5">
                    { skillsRenderer }
                </div>
            </div>
        </section>
    );
};

const SkillBar = (props) => {
    const progressBarStyle = {
        'width': `${props.value}%`
    }

    return (
        <div className={`skill-bar-root`}>
            <h3>{ props.skill }</h3>
            <div className="progress">
                <div style={progressBarStyle} className={`progress-bar color-${ props.colorClass }`}>
                    <span>{ props.value }</span>

                </div>
            </div>
        </div>
    );
};

export default Skills;