import React from 'react'
import './about.css'

const Info = ({ title, text }) => {
    return (
        <div className='about-content'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

const ServicesList = () => {
    return (
        <div className='tests'>
            <b>General Health Check-ups</b><br />
            <b>Family Medicine</b><br />
            <b>Pediatrics</b><br />
            <b>Internal Medicine</b><br />
            <b>Men's Health</b><br />
            <b>Women's Health</b><br />
            <b>Vaccinations and Immunizations</b><br />
            <b>Chronic Disease Management</b><br />
            <b>Minor Surgical Procedures</b><br />
            <b>Laboratory Services</b><br />
        </div>
    );
};

const About = () => {

    return (
        <div className='about-container'>

            <Info title="Welcome to Happy Cures Clinic" text="At Happy Cures Clinic, we are dedicated to providing exceptional healthcare and personalized medical services to our patients. Our state-of-the-art clinic is staffed by a team of highly qualified and compassionate medical professionals who are committed to your well-being." />

            <Info title="Our Mission" text="Our mission is to promote and maintain the health and well-being of our patients by delivering comprehensive, patient-centered medical care. We strive to create a comfortable and supportive environment where patients can receive the highest quality of care and medical attention." />

            <Info title="Services we offer" text="We offer a wide range of medical services to address the diverse needs of our patients. From preventive care and routine check-ups to specialized treatments, our team is equipped to provide the following services:" />

            <ServicesList />
        </div>
    )
}

export default About;