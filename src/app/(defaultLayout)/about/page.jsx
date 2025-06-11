import About4 from '@/app/Components/About/About4';
import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    // Using Unsplash driving school related images
    const drivingImages = [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
            {/* Hero Section with Breadcrumb */}
            <div className="relative">
                <div 
                    className="h-96 w-full bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(${drivingImages[0]})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="relative z-10 text-center px-4">
                        <BreadCumb 
                            Title="About Us"
                            className="text-white"
                        />
                        <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                            Your Journey to Safe Driving Starts Here
                        </h1>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                            Book a Lesson
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <About4
                    MainImg={drivingImages[1]}
                    SubTitle="DRIVESAFE MATE DRIVING SCHOOL"
                    Title="Learn to Drive With<br> Confidence and <span>Safety.</span>"
                    Content="At DriveSafe Mate Driving School, we are committed to empowering learners with the skills, confidence, and knowledge needed to navigate the roads safely and responsibly. Whether you're a beginner or looking to refine your driving abilities, our expert instructors are here to guide you every step of the way. Your journey to mastering the art of driving starts with us—where safety meets confidence!"
                    listTitle1="Professional Driving Instructors"
                    listTitle2="Flexible Scheduling Options"  
                    BoxTitle1="1800+"
                    BoxTitle2="Successful Learners"
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                />
                
                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                    <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg text-center transform transition hover:scale-105">
                        <h3 className="text-5xl font-bold mb-2">1800+</h3>
                        <p className="text-xl">Happy Students</p>
                    </div>
                    <div className="bg-yellow-500 text-white p-8 rounded-xl shadow-lg text-center transform transition hover:scale-105">
                        <h3 className="text-5xl font-bold mb-2">98%</h3>
                        <p className="text-xl">Pass Rate</p>
                    </div>
                    <div className="bg-green-600 text-white p-8 rounded-xl shadow-lg text-center transform transition hover:scale-105">
                        <h3 className="text-5xl font-bold mb-2">15+</h3>
                        <p className="text-xl">Years Experience</p>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div 
                    className="my-16 p-12 rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${drivingImages[2]})` }}
                >
                    <div className="absolute inset-0 bg-blue-800 bg-opacity-70 rounded-xl"></div>
                    <div className="relative z-10 text-white max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
                        <p className="text-xl italic mb-6">
                            "DriveSafe Mate made learning to drive so easy and enjoyable. My instructor was patient and professional. I passed my test on the first try!"
                        </p>
                        <p className="font-bold">- Sarah Johnson</p>
                        <div className="flex justify-center mt-4 space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>

                <Blog1 className="my-16" />
            </div>

            {/* CTA Section */}
            <div className="bg-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Start Your Driving Journey?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today to book your first lesson and take the first step towards driving independence.
                    </p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                        Get Started Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;