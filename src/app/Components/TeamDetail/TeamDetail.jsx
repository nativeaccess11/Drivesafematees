import Image from "next/image";

const TeamDetail = () => {
    return (
        <div className="team-details-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="team-thumb">
                            <Image src="/assets/images/inner/team-details.png" alt="Driving Instructor" width={636} height={758} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-details-right">
                            <div className="team-details-content">
                                <div className="team-member-title">
                                    <h4>John Doe</h4>
                                    <p>Lead Driving Instructor</p>
                                </div>
                                <p className="desc">
                                    At DriveSafe Mate Driving School, John Doe is committed to providing top-notch driving lessons. With years of experience, he ensures that every student gains the confidence and skills needed to drive safely and responsibly.
                                </p>
                            </div>
                            <div className="row add-bg">
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact-info-box">
                                        <div className="contact-info-icon">
                                            <i className="bi bi-telephone"></i>
                                        </div>
                                        <div className="contact-info-content">
                                            <h4>Call Us Anytime</h4>
                                            <p>+123 (4567) 890</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="contact-info-box">
                                        <div className="contact-info-icon">
                                            <i className="bi bi-envelope"></i>
                                        </div>
                                        <div className="contact-info-content">
                                            <h4>Send E-Mail</h4>
                                            <p>info@drivesafemate.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-details-social-icon">
                                <ul>
                                    <li>Social Media</li>
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="team-details-location-box">
                                <div className="contact-info-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact-info-content">
                                    <h4>Location</h4>
                                    <p>123 Main Street, Darwin, NT, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact_from_box">
                            <form id="driving-school-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form_box">
                                            <input type="text" name="name" placeholder="Your Name *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_box">
                                            <input type="email" name="email" placeholder="Your E-Mail *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_box">
                                            <input type="text" name="subject" placeholder="Subject *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form_box">
                                            <input type="text" name="phone" placeholder="Phone *" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form_box">
                                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                        </div>
                                        <div className="quote_button">
                                            <button className="btn" type="submit">SEND NOW <i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div id="status" className="error"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="team-details-skills">
                            <h4>Our Expertise</h4>
                            <div className="wrapper">
                                <div className="skill">
                                    <p>Beginner Driving Lessons</p>
                                    <div className="skill-bar skill1">
                                        <span className="skill-count1">95%</span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>Defensive Driving</p>
                                    <div className="skill-bar skill2">
                                        <span className="skill-count2">90%</span>
                                    </div>
                                </div>
                                <div className="skill">
                                    <p>Road Test Preparation</p>
                                    <div className="skill-bar skill3">
                                        <span className="skill-count3">98%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;