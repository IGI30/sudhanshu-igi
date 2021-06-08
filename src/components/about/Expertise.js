import React from "react";
import styled from '@emotion/styled'

const Expertise = (props) => {
    return (
        <section className="full-section">
            <div className="container">
                <h6 className="section-label">What I Do?</h6>
                <h2 className="section-head">Here are some of my expertise</h2><br/>
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <DetailedCard icon="mobile" title="Mobile App" color="2c98f0" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <DetailedCard icon="globe" title="Web App" color="ec5453" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <DetailedCard icon="database" title="Data Science" color="f9c350" />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <DetailedCard icon="gamepad" title="Game Dev" color="a84db8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const DetailedCard = (props) => {
    const boxStyle = {
        'border-bottom': `2px solid #${props.color}`,
    }

    const titleStyle = {
        'font-family': '"Quicksand", Arial, sans-serif',
        'font-size': '1.2rem',
        'font-weight': '500'
    }

    const Span = styled.span`
        background: #${props.color};
        &:before {
            border-color: transparent transparent #${props.color} transparent;
        }
        &:after {
            border-color: #${props.color} transparent transparent transparent;
        }
        `

    return (
        <div className="card-detail-root text-center" style={boxStyle}>
            <Span className="top-icon" >
                <i className={`fa fa-3x fa-${ props.icon }`}></i>
            </Span>
            <h3 className="card-title">{ props.title }</h3>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
        </div>
    );
};

export default Expertise;