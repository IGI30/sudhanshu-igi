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
        <section className="full-section" id="skills">
            <div className="container">
                <h6 className="section-label">My Speciality</h6>
                <h2 className="section-head">My Skills</h2><br/>
                <p>
                My skills include the development of production-ready applications, memory and performance optimization, technological improvements for an organization or a business, and can deliver solutions to advanced problems using Artificial Intelligence and Machine Learning.
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