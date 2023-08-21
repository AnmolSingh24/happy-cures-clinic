import React from 'react'
import './gallery.css'

const Gallery = () => {
    const galleryImages = [
        'https://res.cloudinary.com/djdblxcxt/image/upload/v1692623534/gallery-img4_j2a6co.jpg',
        'https://res.cloudinary.com/djdblxcxt/image/upload/v1692623533/gallery-img1_hbo4po.jpg',
        'https://res.cloudinary.com/djdblxcxt/image/upload/v1692623534/gallery-img2.jpg_ghtamb.jpg',
        'https://res.cloudinary.com/djdblxcxt/image/upload/v1692623674/gallery-img6_k54yhl.jpg',
        'https://res.cloudinary.com/djdblxcxt/image/upload/v1692623674/gallery-img5_tga5hm.webp'
    ];

    return (
        <div className="img-container">
            <div className="main-content">
                <h1>Gallery</h1>
                <div className="gallery">
                    {galleryImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index}`}
                            className="gallery-image"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;