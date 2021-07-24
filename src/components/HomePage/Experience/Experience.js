import React from "react";

import "./Timeline.css";

const Experience = (props) => {
    const experienceDetails = [
        {
            'organization': 'Samsung Research, Bangalore',
            'position': 'Senior Software Engineer',
            'year': 'Feb 2021 - Present',
            'description': `
                <ul>
                    <li>Won the Samsung's Silver Stars Annual Award for <u>Young Achiever of the Year</u> for year 2021.</li>
                    <li>Participated and got nominated for <u>Samsung Best Research Paper Award</u> for year 2021.</li>
                    <li>Development and delivery of android application using <u>On-Device AI.</u></li>
                </ul>
            `
        },
        {
            'organization': 'Samsung Research, Bangalore',
            'position': 'Software Engineer',
            'year': 'July 2019 - Jan 2021',
            'description': `
                <ul>
                    <li>Cleared <u>Samsung's Professional Software Competency Test</u>.</li>
                    <li>Written and published a technical article for <u>SE Beats Quaterly Magazine</u>.</li>
                    <li>Worked on development of a core camera feature to <u>Analyse Image Quality using Deep Learning and Image Processing.</u></li>
                    <li>Got Certification for <u>AI/ML with Deep Learning</u> Training.</li>
                    <li>Worked on finding and fixing <u>high priority Performance issues</u> at the closing deadlines.</li>
                    <li>Development and Code Optimization for projects based on: Android keyboard platform, Cloud application, Camera - Platform & Application level, AIDL APIs, Tensorflow Lite and AR.</li>
                    <li>Deep Analysis and Research on High Memory (RAM) utilization in Android devices.</li>
                </ul>
            `
        },
        {
            'organization': 'Zwing, Gurgaon',
            'position': 'Full Stack Developer Intern',
            'year': 'Oct 2018 - March 2019',
            'description': `
                <ul>
                    <li>Frontend development using <u>VueJs</u>, Backend development using <u>Laravel & Lumen</u>.</li>
                    <li>Admin panel dashboard development in production mode.</li>
                    <li><u>Android App development</u> in production mode.</li>
                    <li><u>iOS App Development</u> in development mode.</li>
                    <li>Full project planning, database structure planning & development of <u>Inventory Management</u> feature for <u>e-commerce based application</u>.</li>
                </ul>
            `
        }
    ];

    const experienceRenderer = experienceDetails.map((detail, i) => 
        <TimelineCard key={i} colorClass={i+1} timeline={detail} />
    );

    return (
        <section className="full-section" id="experience">
            <div className="container">
                <h6 className="section-label">Experience</h6>
                <h2 className="section-head">Work Experience</h2><br/>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="timeline-centered">
                            { experienceRenderer }
                            <TimelineCardEnd/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineCard = (props) => {
    return (
        <article className="timeline-entry">
            <div className="timeline-entry-inner">
                <div className={`timeline-icon color-${props.colorClass}`}>
                    <i className="fa fa-code"></i>
                </div>
                <div className="timeline-label">
                    <h2>{ props.timeline.position } <i>at { props.timeline.organization }</i></h2>
                    <h6><span>{ props.timeline.year }</span></h6>
                    <p dangerouslySetInnerHTML={{ __html: props.timeline.description }}></p>
                </div>
            </div>
        </article>
    );
};

const TimelineCardEnd = () => {
    return (
        <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
            <div className="timeline-entry-inner">
            <div className="timeline-icon color-none">
            </div> </div>
        </article>
    );
}

export default Experience;