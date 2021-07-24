import React from "react";

const NarrowContent = (props) => {
    const contentDetails = [
        {
            'name': 'Cups of Coffee',
            'value': 47
        },
        {
            'name': 'Projects',
            'value': 31
        },
        {
            'name': 'Girlfriend',
            'value': 404
        },
        {
            'name': 'Books Read',
            'value': 11
        }
    ];

    const contentRenderer = contentDetails.map((details, i) => 
        <Content key={i} name={details.name} value={details.value} />
    );

    return (
        <div className="narrow-counters" style={ { backgroundImage : `url(/assets/images/narrow-bg.webp)` } }>
            <div className="overlay"></div>
            <div className="counters-narrow-counters">
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
            <span className="narrow-counter js-counter">{ props.value }</span>
            <span className="narrow-counter-label">{ props.name }</span>
        </div>
    );
};

export default NarrowContent;