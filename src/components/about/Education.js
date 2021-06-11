import React from "react";
import Accordion from "../util/Accordion";

const Education = (props) => {
    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">Education</h6>
                <h2 className="section-head">Education</h2><br/>
                <Accordion
                    active
                    title="Bachelor Degree of Computer Science"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <Accordion
                    title="Senior Secondary Education"
                    content="
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    "
                />
                <Accordion
                    title="High School Secondary Education"
                    content="
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    "
                />
            </div>
        </section>
    );
};

export default Education;