import React from "react";
import Accordion from "../util/Accordion";

const Education = (props) => {
    const eductionDetails = [
        {
            'title': 'Bachelor Degree of Computer Science',
            'name': 'Inderprastha Engineering College, Ghaziabad',
            'year': '2015-2019',
            'percentage': 78.8
        },
        {
            'title': 'Senior Secondary Education',
            'name': 'Lucknow Public School, Lucknow',
            'year': '2013-2015',
            'percentage': 76.6
        },
        {
            'title': 'High School Secondary Education',
            'name': 'Mary Gardiner\'s Convent School, Lucknow',
            'year': '2011-2013',
            'percentage': 81.7
        }
    ];

    const detailsRenderer = eductionDetails.map((education, i) => 
        <Accordion key={i} title={education.title} active={i === 0}>
            <EducationInfo name={education.name} year={education.year} percentage={education.percentage} />
        </Accordion>
    );

    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">Education</h6>
                <h2 className="section-head">Education</h2><br/>
                { detailsRenderer }
            </div>
        </section>
    );
};

const EducationInfo = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h5>{ props.name }</h5>
            </div>
            <div className="col-md-6">
                <div><b>Year</b></div>
                <div><i>{ props.year }</i></div>
            </div>
            <div className="col-md-6">
                <div><b>Percentage</b></div>
                <div><i>{ props.percentage }%</i></div>
            </div>
        </div>
    )
};

export default Education;