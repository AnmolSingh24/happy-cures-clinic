import React from 'react'
import './blogs.css'

// const FeedBlogs = ({ img, title, text, readMore }) => {
//     return (
//         <div className="blog-card">
//             <img src={img} alt="Regular Checkup" />
//             <h2>{title}</h2>
//             <p>{text}</p>
//             <a href="/" className='readMore'>{readMore}</a>
//         </div>
//     );
// }

const Blogs = () => {

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            <div className='blogs-container'>

                {/* <FeedBlogs img={'https://res.cloudinary.com/djdblxcxt/image/upload/v1692254048/blog-img1_p0rmv0.jpg'} title="The Importance of Regular Checkups" text="Learn why scheduling regular checkups at Happy Cures Clinic is
                crucial for your health" readMore="Read More" /> */}

                <div className="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692254048/blog-img1_p0rmv0.jpg" alt="Regular Checkup" />
                    <h2>The Importance of Regular Checkups</h2>
                    <p>Learn why scheduling regular checkups at Happy Cures Clinic is
                        crucial for your health</p>
                    <a href="/">Read More</a>
                </div>

                <div className="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692254056/blog-img2_ivlezc.jpg" alt="Healthy Smile" />
                    <h2>Tips for maintaining a Healthy Smile</h2>
                    <p>Discover essential dental health tips to maintain a bright, confident and happy smile</p>
                    <a href="/">Read More</a>
                </div>

                <div className="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692254975/blog-img3.jpg_ggefji.jpg" alt="Managing Stress" />
                    <h2>Managing Stress for Better Well-being</h2>
                    <p>Explore effective strategies to manage stress and improve your
                        overall well-being and health</p>
                    <a href="/">Read More</a>
                </div>

                <div className="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692254076/blog-img4_lhaxvd.jpg" alt="Benefits of Physical Activity" />
                    <h2>Benefits of Physical Activity</h2>
                    <p>Learn about the numerous health benefits of staying active and
                        incorporating regular exercise into your routine</p>
                    <a href="/">Read More</a>
                </div>

                <div class="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692255654/blog-img5_n6oezj.jpg" alt="Understanding Allergies" />
                    <h2>Understanding Allergies and Their Management</h2>
                    <p>Learn about common allergies, their symptoms, and effective strategies for managing allergic reactions...</p>
                    <a href="blog/understanding-allergies-and-their-management">Read More</a>
                </div>

                <div class="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692255654/blog-img6_blx0ab.png" alt="Mental Health Awareness" />
                    <h2>Mental Health Awareness: Breaking the Stigma</h2>
                    <p>Explore the importance of mental health awareness, breaking the stigma, and seeking help when needed...</p>
                    <a href="blog/mental-health-awareness-breaking-the-stigma">Read More</a>
                </div>

                <div class="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692255653/blog-img7_mbrdnz.jpg" alt="Child's Oral Health" />
                    <h2>Caring for Your Child's Oral Health</h2>
                    <p>Discover expert tips for maintaining your child's oral health, from teething to dental hygiene...</p>
                    <a href="blog/caring-for-your-childs-oral-health">Read More</a>
                </div>
                <div class="blog-card">
                    <img src="https://res.cloudinary.com/djdblxcxt/image/upload/v1692255654/blog-img8.jpg_hkym48.jpg" alt="Benefits of Exercise for Seniors" />
                    <h2>The Benefits of Regular Exercise for Seniors</h2>
                    <p>Learn how staying active in your senior years can lead to improved mobility, mental well-being, and overall health...</p>
                    <a href="blog/the-benefits-of-regular-exercise-for-seniors">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Blogs;