import React from "react";

const Expertise = (props) => {
    const cardDetails = [
        {
            'icon': 'mobile',
            'title': 'Mobile App',
            'description': 'Full Production-ready development of Android apps based on social media, on-device AI, and gaming.'
        },
        {
            'icon': 'globe',
            'title': 'Web App',
            'description': 'Development of applications based on e-commerce, inventory management, blog, and dashboards.'
        },
        {
            'icon': 'database',
            'title': 'Data Science',
            'description': 'Expertise in training AI/ML models based on deep learning using CNN, image processing and recommendation systems.'
        },
        {
            'icon': 'gamepad',
            'title': 'Game Dev',
            'description': 'Experience in development of 2-dimensional games for android, windows and, cross-platform using Unity.'
        },
        {
            'icon': 'bar-chart',
            'title': 'Data Analytics',
            'description': 'Expertise in finding the solution to a problem through deep analysis of data and making data-driven decisions.'
        },
        {
            'icon': 'free-code-camp',
            'title': 'Technical Advisor',
            'description': 'Provide technical expertise, coordinate technicians activities and recommendation of technological improvements.'
        }
    ];

    const cardRender = cardDetails.map((card, i) => 
        <div className="col-md-4 col-sm-6 mb-4" key={i}>
            <DetailedCard icon={card.icon} title={card.title} description={card.description} colorClass={i+1} />
        </div>
    )

    return (
        <section className="full-section">
            <div className="container mb-5">
                <h6 className="section-label">What I Do?</h6>
                <h2 className="section-head col-md-6">Here are some of my expertise</h2><br/>
                <div className="row mb-5">
                    { cardRender }
                </div>
            </div>
        </section>
    );
};

const DetailedCard = (props) => {
    return (
        <div className={`card-detail-root text-center color-${ props.colorClass }`}>
            <span className="top-icon" >
                <i className={`fa fa-3x fa-${ props.icon }`}></i>
            </span>
            <h3 className="card-title">{ props.title }</h3>
            <p>{ props.description }</p>
        </div>
    );
};

export default Expertise;