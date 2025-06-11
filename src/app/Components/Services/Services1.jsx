import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/services1.json';
import Link from "next/link";
import Image from "next/image";

const Services1 = () => {
    return (
        <div className="sservice-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <SectionTitle
                                SubTitle="DRIVESAFE   MATE DRIVING SCHOOL"
                                Title="Our Driving Programs<br> Help You Drive with <span>Confidence.</span>"
                            />
                        </div>
                    </div>
                    {data.map((item, i) => (
                        <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="service-single-box">
                                <div className="service-icon">
                                    <Image src={item.icon} alt={item.title} width={50} height={50} />
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{item.title}</h3>
                                    <p className="service-text">{item.desc}</p>
                                    <div className="service-btn">
                                        <Link href={item.btnLink}>
                                            <i className="bi bi-plus"></i><span> {item.btnText}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative Shapes */}
                <div className="service-shape bounce-animate3">
                    <Image src="/assets/images/service8.png" alt="decoration" width={199} height={420} />
                </div>
                <div className="service-shape2">
                    <Image src="/assets/images/service7.png" alt="decoration" width={100} height={100} />
                </div>
                <div className="service-shape3 bounce-animate4">
                    <Image src="/assets/images/service8.png" alt="decoration" width={341} height={351} />
                </div>
            </div>
        </div>
    );
};

export default Services1;
