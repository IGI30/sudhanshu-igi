import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const Contact = (props) => {
    
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    const onSubmit = async(data) => {
        console.log(data);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const cardDetails = [
        {
            'icon': 'envelope',
            'content': '<a target="_blank" rel="noopener noreferrer" href="mailto:sudhanshuigi@gmail.com">sudhanshuigi@gmail.com</a>'
        },
        {
            'icon': 'map',
            'content': 'Aishwarya Enclave, Kothanur, Bangalore, India 560077'
        },
        {
            'icon': 'mobile',
            'content': `<a href="tel://+917905307155">+91 79053 07155</a>`
        }
    ];

    const cardRenderer = cardDetails.map((card, i) => 
        <ContactCard {...card} key={i} />
    )

    return (
        <section className="full-section" id="contact">
            <div className="container">
                <h6 className="section-label">Get in Touch</h6>
                <h2 className="section-head">Contact</h2><br />
                <div className="row">
                    <div className="col-md-5">
                        { cardRenderer }
                    </div>
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-md-11 offset-md-1">
                                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <input {...register("name", { required: true })}
                                            type="text" className="form-control" placeholder="Name" autoComplete="off" />
                                        {errors.name && <span>May I ask you what your name is 😊</span>}
                                    </div>
                                    <div className="form-group">
                                        <input {...register("email", { required: true, pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Can you please check the email address 😅"
                                        } })}
                                            type="text" className="form-control" placeholder="Email" />
                                        {errors.email?.type === "required" && <span>Please mention your email address 🙃</span>}
                                        {errors.email?.type === "pattern" && <span>{errors.email?.message}</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea value={message}
                                            {...register("message", { required: true })}
                                            onChange={handleChange}
                                            className="form-control" placeholder="Message" />
                                        {errors.message && <span>Please write a message 😊</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn m-btn-primary btn-send-message" value="Send Message" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactCard = (props) => {
    return (
        <div className="contact-card" >
            <div className="contact-card-icon">
                <i className={`fa fa-${props.icon}`}></i>
            </div>
            <div className="contact-card-text">
                <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
            </div>
        </div>
    )
}

export default Contact;