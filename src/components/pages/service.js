import React from 'react'
import './service.css'

// const Services = ({ img1, img2, img3, title, text, btn }) => {
//     return (
//         <div>
//             <img src={img1} />
//             <img src={img2} />
//             <div>
//                 <img src={img3} />
//                 <h1>{title}</h1>
//                 <p>{text}</p>
//                 <a href='/' className='btn'>{btn}</a>
//             </div>
//         </div>
//     );
// }

const Service = () => {

    return (
        <div className='service'>
            <div className='service-container'>
                <div className='image'>
                    <img src='https://res.cloudinary.com/djdblxcxt/image/upload/v1692160658/service-img-1_nulumn.jpg' />
                    <img src='https://res.cloudinary.com/djdblxcxt/image/upload/v1692160794/service-img-2_nam5im.jpg' />
                </div>
                <div className='service-content'>
                    <img src='https://res.cloudinary.com/djdblxcxt/image/upload/v1692160803/service-img-3_zgu8gk.jpg' />
                    <div className='info'>
                        <h1>Personal Care & Healthy Living</h1>
                        <p>Experience top-tier healthcare that puts your well-being first. Our dedicated team of skilled professionals is committed to providing personalized care tailored to your unique needs. With state-of-the-art facilities and a patient-centered approach, your journey to better health starts<br /> here. Trust us to prioritize your wellness and deliver excellence in every aspect of our<br/> healthcare services</p>
                        <a href='/' className='btn'>Services</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;