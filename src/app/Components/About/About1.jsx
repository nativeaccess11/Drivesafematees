"use client";

import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';

const About1 = ({MainImg, ImgTitle, SubTitle, Title, Content, listTitle, BottomText, BtnUrl, BtnText}) => {
    return (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-700 group-hover:shadow-3xl">
                                <Image 
                                    src={MainImg || "/assets/imagess/img2.avif"} 
                                    alt="About Us" 
                                    width={636} 
                                    height={560}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Decorative element */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                            </div>
                            
                            {/* Floating Badge */}
                            {ImgTitle && (
                                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg shadow-lg z-10">
                                    <span className="font-bold text-sm uppercase tracking-wider">{ImgTitle}</span>
                                </div>
                            )}
                            
                            {/* Floating Icon */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl border-4 border-blue-100 transform transition-all duration-500 group-hover:rotate-12">
                                <Image 
                                    src="/assets/imagess/img3.avif" 
                                    alt="Icon" 
                                    width={40} 
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            
                            {/* Decorative dots pattern */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 -z-10"></div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-10">
                            {SubTitle && (
                                <h5 className="text-blue-600 font-semibold text-lg mb-4 tracking-wider uppercase">
                                    <span className="bg-blue-100 px-3 py-1 rounded-full">{SubTitle}</span>
                                </h5>
                            )}
                            {Title && (
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {parse(Title)}
                                </h1>
                            )}
                            {Content && (
                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    {Content}
                                </p>
                            )}
                        </div>

                        {listTitle && (
                            <div className="flex items-center mb-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-600 transform transition-all duration-300 hover:scale-[1.02]">
                                <div className="mr-5 bg-blue-100 p-3 rounded-full shadow-inner">
                                    <Image 
                                        src="/assets/imagess/img1.avif" 
                                        alt="List Icon" 
                                        width={45} 
                                        height={41}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {listTitle}
                                    </h3>
                                </div>
                            </div>
                        )}

                        {BottomText && (
                            <div className="mb-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-gray-700 italic text-lg">
                                    {BottomText}
                                </p>
                            </div>
                        )}

                        {BtnUrl && BtnText && (
                            <div className="relative inline-block group">
                                <Link 
                                    href={BtnUrl}
                                    className="relative z-10 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:from-blue-700 hover:to-blue-900"
                                >
                                    <span className="relative z-20">{BtnText}</span>
                                    <svg className="w-5 h-5 ml-2 relative z-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                    
                                    {/* Animated hover effects */}
                                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
                                    <span className="absolute inset-0 rounded-xl border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100"></span>
                                    <span className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:h-full"></span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;