import React from "react";

const Expertise = (props) => {
    const cardDetails = [
        {
            'icon': 'mobile',
            'title': 'Mobile App',
            'description': 'Full Production ready development of Android Application'
        },
        {
            'icon': 'globe',
            'title': 'Web App',
            'description': 'Web Separated they live in Bookmarksgrove right at the coast of the Semantics'
        },
        {
            'icon': 'database',
            'title': 'Data Science',
            'description': 'Separated they live in Bookmarksgrove right at the coast of the Semantics'
        },
        {
            'icon': 'gamepad',
            'title': 'Game Dev',
            'description': 'Separated they live in Bookmarksgrove right at the coast of the Semantics'
        },
        {
            'icon': 'mobile',
            'title': 'Game Dev',
            'description': 'Separated they live in Bookmarksgrove right at the coast of the Semantics'
        },
        {
            'icon': 'mobile',
            'title': 'Mobile App',
            'description': 'Separated they live in Bookmarksgrove right at the coast of the Semantics'
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
                <h2 className="section-head">Here are some of my expertise</h2><br/>
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