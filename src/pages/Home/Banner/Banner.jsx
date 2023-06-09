import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
    return (
        <div className='mt-16 lg:mt-20'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img src="https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3VsaW5hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Slider Image 1" />
                    <div className="legend">
                        <h2>Welcome to Culinary School</h2>
                        <p>Discover the art of cooking with our expert chefs</p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1683707120438-8249afcf91dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Slider Image 2" />
                    <div className="legend">
                        <h2>Join our Culinary Classes</h2>
                        <p>Learn new recipes and techniques from the best chefs</p>
                        <button>Enroll Now</button>
                    </div>
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;



