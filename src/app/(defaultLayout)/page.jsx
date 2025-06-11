import React from 'react';
import Hero1 from '../Components/Banner/Hero1';
import Features from '../Components/Features/Features';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
//import Project1 from '../Components/Project/Project1';
//import Brand from '../Components/Brand/Brand';
import Pricing from '../Components/Pricing/Pricing';
import Faq from '../Components/Faq/Faq';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Contact1 from '../Components/Contact/Contact1';
import Blog1 from '../Components/Blog/Blog1';
import Popup from '../Components/Popup.jsx';

const Home = () => {
    return (
        <>
            <Popup />
            <div className='home-page'>
                <Hero1
                    bgImg="/assets/images/hero-bgs"
                    SubTitle="Driving Safe Mate   Driving  School"
                    Title=" DriveSafe Mate<br>Driving  School."
                    Content="Where our global network meets innovation to deliver custom software solutions that drive value for your driving school"
                    BtnText="EXPLORE MORE"
                    BtnLink="/about"
                     mainImage="/assets/images/feature1.png"
                    VideoText="WATCH VIDEO"
                ></Hero1> 
                <Features></Features>
                <About1
        MainImg="/assets/images/driving-school-thumb.png" // Replace with an appropriate image for a driving school
        ImgTitle="BEST DRIVING SCHOOL"
        SubTitle="DriveSafe Mate Driving School"
        Title="Learn to Drive with<br> Confidence and <span>Safety.</span>"
        Content="We provide professional driving lessons to help you master the road with confidence and safety. Join us to become a skilled and responsible driver."
        listTitle="Professional Driving Instructors"
        BottomText="Our experienced instructors ensure you receive the best training to drive safely and confidently on the road."
        BtnUrl="/about"
        BtnText="LEARN MORE"
    ></About1>
                <Services1></Services1>
              
               {/* <Brand></Brand> */}
                <Pricing></Pricing>
                <Faq></Faq>
                <Testimonial1></Testimonial1>
                <Contact1></Contact1>
                <Blog1></Blog1>
            </div>
        </>
    );
};

export default Home;