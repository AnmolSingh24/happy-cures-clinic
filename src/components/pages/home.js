import React from 'react';
import './home.css'

const Card = ({ t1, title, t2, btn }) => {
    return (
        <div className='card'>
            <p>{t1}</p>
            <h1>{title}</h1>
            <p>{t2}</p>
            <a className='btn'>{btn}</a>
        </div>
    );
}

const Cards = ({ text1, title, text2, text3, text4, t1, t2, t3, btn }) => {
    return (
        <div className='cards'>
            <p>{text1}</p>
            <h1>{title}</h1>
            <div className='timings'>
                <p>{text2}<span>{t1}</span></p>
                <p>{text3}<span>{t2}</span></p>
                <p>{text4}<span>{t3}</span></p>
                <a className='btn'>{btn}</a>
            </div>
        </div>
    );
}

const Operations = ({ title, text }) => {
    return (
        <div className='operations-items'>
            <div className='operations-info'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

const Testimonials = ({ img, title, author, msg }) => {
    return (
        <div className='testimonial-items'>
            <div className='testimonial'>
                <img src={img} />
                <div className='testimonial-info'>
                    <b>{title}</b>
                    <p>{author}</p>
                </div>
            </div>
            <div className='msg'>
                <p>{msg}</p>
            </div>
            {/* </div> */}
        </div>
    );
}

const Links = ({ img1, img2, img3 }) => {
    return (
        <div className='links'>
            <div className='social-links'>
                <img src={img1} />
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </div>
        </div>
    );
}

const Home = () => {

    return (
        <section className='home' id='home'>
            <div className='background' style={{ backgroundImage: "url('https://res.cloudinary.com/djdblxcxt/image/upload/v1691943275/happy%20cure%20clinic/slider-bg-1_klxdua.jpg')" }}>
                <p>TOTAL HEALTH CARE SOLUTIONS</p>
                <h1>Your Most Trusted <br />Health Partner</h1>
                <p>Lorem Ipsum</p>
                <a href='/'>BOOK AN APPOINTMENT</a>
            </div>

            <div className='card-container'>
                <Card t1="Appointment" title="Online Appointment" t2="Get all time support for emergency. We have introduced the principle of family medicine" btn="Make an Appointment" />
                <Cards text1="Timing Schedule" title="Working Hours" text2="Mon - Wed" t1="8:00am - 4:00pm" text3="Thur - Frid" t2="9:00am - 4:00pm" text4="Sat - Sun" t3="10:00am - 4:00pm" btn="" />
                <Card t1="24 Hours Service" title="Emergency Cases" t2="Get all time support for emergency. We have introduced the principle of family medicine" btn="Customer Care" />
            </div>

            <div className='award-container'>
                <h1>Award Winning Patients Care</h1>
                <p>At our healthcare facility, patient care is our top priority. We are dedicated to delivering high-quality, compassionate, and<br /> comprehensive care to all individuals under our responsibility. Our team of healthcare professionals is committed<br /> to ensuring the well-being and comfort of our patients.</p>

                <div className='opertaions-container'>
                    <Operations title="Laboratory Services" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                    <Operations title="Heart Disease" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                    <Operations title="Dental Care" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                    <Operations title="Body Surgery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                    <Operations title="Neurology Surgery" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                    <Operations title="Gynecology" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec justo sodales." />
                </div>
            </div>

            <div className='testimonial-container'>
                <h1>We Served Over 5000+<br /> Patients</h1>
                <div className='testimonial-content'>
                    <Testimonials img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691986594/test1_r1ascf.jpg'} title="Amazing Service!" author="- John Partho" msg="Having reviewed the service offerings at Dr. Smith's facility, I'm confident in recommending their services to patients seeking top-notch medical care. The integration of advanced diagnostics, personalized treatment plans, and a patient-centered approach reflects a commitment to excellence." />

                    <Testimonials img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1691986648/test2_rxcujn.jpg'} title="Expert Doctors!" author="- Kylie Dostro" msg="As a seasoned physician myself, I'm often cautious about recommending colleagues. However, in the case of Dr. Johnson, I have no reservations. Their extensive knowledge, honed through years of practice, shines through in every patient interaction. A true expert in the field." />
                </div>
            </div>

            <div className='footer-container'>
                <div className='content'>
                    <img src='https://res.cloudinary.com/djdblxcxt/image/upload/v1692075742/happy%20cure%20clinic/medical-logo_fh2nih.png' />
                    <div className='heading'>
                        <h2>Happy <span>Cures</span> Clinic</h2>
                        <p>Your Health Is Our First Priority!</p>
                    </div>
                </div>
                <div className='links'>
                    <h2>Social Links</h2>
                    <div className='social-links'>
                        <Links img1={'https://res.cloudinary.com/djdblxcxt/image/upload/v1692073613/happy%20cure%20clinic/Facebook-Logo_mq0tri.png'} />
                        <Links img2={'https://res.cloudinary.com/djdblxcxt/image/upload/v1692074960/happy%20cure%20clinic/Instagram-Logo_hll6zj.png'} />
                        <Links img3={'https://res.cloudinary.com/djdblxcxt/image/upload/v1692074970/happy%20cure%20clinic/Linkedin-Logo_blammh.png'} />
                    </div>
                </div>

                <div className='contact'>
                    <h2>Get In Touch</h2>
                    <div className='support'>
                        <b>Support Available 24/7</b>
                        <p>happycuresclinic@gmail.com</p>
                    </div>
                    <div className='call'>
                        <b>Mon - Fri: 8:30am t0 4:00pm</b>
                        <p>+111-222-3333</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;