import React from "react";

import narrowBg from "../../assets/images/narrow-bg.webp";

const NarrowContent = (props) => {
    const contentDetails = [
        {
            'name': 'Cups of Coffee',
            'value': 319
        },
        {
            'name': 'Projects',
            'value': 13
        },
        {
            'name': 'Girlfriend',
            'value': 404
        },
        {
            'name': 'Books Read',
            'value': 8
        }
    ];

    const contentRenderer = contentDetails.map((details, i) => 
        <Content key={i} name={details.name} value={details.value} />
    );

    return (
        <div className="colorlib-counters" style={ { backgroundImage : `url(${narrowBg})` } }>
            <div className="overlay"></div>
            <div className="colorlib-narrow-content">
                <div className="row">
                    { contentRenderer }
                </div>
            </div>
        </div>
    );
};

const Content = (props) => {
    return (
        <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <span className="colorlib-counter js-counter">{ props.value }</span>
            <span className="colorlib-counter-label">{ props.name }</span>
        </div>
    );
};

export default NarrowContent;