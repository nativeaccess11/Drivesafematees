"use client"
import SectionTitle from "../Common/SectionTitle";
import BlogCard1 from "../BlogCard/BlogCard1";
import BlogCardStyle2 from "../BlogCard/BlogCardStyle2";
import Link from "next/link";

const Blog1 = () => {
    return (
        <div className="blog-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="DRIVING SCHOOL BLOG"
                                Title="Tips, Insights & Updates<br> from Our <span>Instructors</span>"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="project-right">
                            <div className="solutek-btn">
                                <Link href="/blog">
                                    VIEW all posts
                                    <div className="solutek-hover-btn hover-bx"></div>
                                    <div className="solutek-hover-btn hover-bx2"></div>
                                    <div className="solutek-hover-btn hover-bx3"></div>
                                    <div className="solutek-hover-btn hover-bx4"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <BlogCard1
                            BlogImg="/assets/imagess/img7.avif"
                            Title="Top Tips to Pass Your Driving Test on the First Try"
                            Content="Our expert instructors share proven techniques to help you stay calm, confident, and in control on your test day."
                        />
                    </div>
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <BlogCardStyle2
                            BlogImg="/assets/imagess/img6.avif"
                            Title="The Importance of Defensive Driving Skills"
                            Content="Learn how defensive driving can keep you and others safe, and why it’s a core part of our training program."
                        />

                        <BlogCardStyle2
                            BlogImg="/assets/imagess/img8.avif"
                            Title="How Our Smart Scheduling Improves Learning Efficiency"
                            Content="We use modern tools to streamline lesson planning, helping students progress faster and with less stress."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
