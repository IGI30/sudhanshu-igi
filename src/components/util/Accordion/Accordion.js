import React, { useState, useRef, useEffect } from "react";
import Chevron from "../Chevron";

import "./Accordion.css";

const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("rotate");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "" : "rotate"
        );
    };

    useEffect(() => {
        if (props.active) {
            setActiveState("active")
            setHeightState(`${content.current.scrollHeight}px`)
            setRotateState("rotate")
        }
    }, [props.active]);

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <Chevron className={`accordion__icon ${setRotate}`} width={10} fill={"lightgray"} />
            </button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }}
                className="accordion__content">
                
                <div className="accordion__text">{ props.children }</div>
                {/* <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                /> */}
            </div>
        </div>
    );
};

export default Accordion;