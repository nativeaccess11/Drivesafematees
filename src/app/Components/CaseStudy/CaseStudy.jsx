import Image from "next/image";
import Link from "next/link";

const CaseStudy = () => {
    return (
        <div className="case-studies-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <h6 className="section-sub-title">Student Highlights</h6>
                            <h1 className="section-main-title2">Real Success from Our Learners</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* First Case Study */}
                    <div className="case-studies-box">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-case-studies-box">
                                    <div className="case-studies-content">
                                        <h4>
                                            <Link href="/case-studies/jessica">Jessica’s Road Test Success</Link>
                                        </h4>
                                        <h5>From Nervous to Confident</h5>
                                    </div>
                                    <div className="case-studies-btn">
                                        <Link href="/case-studies/jessica">View More Details</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="case-studies-thumb">
                                    <Image src="/assets/images/case-studies/jessica.png" alt="Jessica's Success" width={568} height={424} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Case Study */}
                    <div className="col-lg-6">
                        <div className="case-studies-single-box">
                            <div className="case-studies-thumb">
                                <Image src="/assets/images/case-studies/group-lesson.png" alt="Group Lesson" width={636} height={454} />
                                <div className="case-studie-content">
                                    <h3><Link href="/case-studies/group-training">Group Driving Lessons</Link></h3>
                                    <h6>Efficient & Affordable Learning</h6>
                                </div>
                                <div className="case-studies-icon">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Case Study */}
                    <div className="col-lg-6">
                        <div className="case-studies-single-box">
                            <div className="case-studies-thumb">
                                <Image src="/assets/images/case-studies/test-day.png" alt="Test Day Coaching" width={636} height={454} />
                                <div className="case-studie-content">
                                    <h3><Link href="/case-studies/test-day">Test Day Coaching Experience</Link></h3>
                                    <h6>One-on-One Instructor Guidance</h6>
                                </div>
                                <div className="case-studies-icon">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudy;
