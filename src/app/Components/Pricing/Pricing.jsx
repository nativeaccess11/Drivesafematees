import SectionTitle from "../Common/SectionTitle";
import PricingCard from "./PricingCard";

const Pricing = () => {
    const SectionDesc = {
        Content: 'Choose the perfect plan for your driving goals. Pay upfront and enjoy premium service without extra weekend fees.'
    };

    return (
        <div className="pricing-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="DriveSafe Mate Driving School"
                                Title="Choose Your Driving Plan"
                            />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-title text-left">
                            <p className="section-descr">{SectionDesc.Content}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$80/hr"
                            PricePlan="Basic Lesson"
                            BtnUrl="/booking"
                            BtnText="Book Now"
                            FeatureList={[
                                '⁠1 Lesson = 60 Minutes',
                                '⁠Per Lesson in Package = $75',
                                'Car With Dual Control',
                                '⁠Latest & Fully Insured Vehicle',
                                '⁠7 Days a Week Availability',
                                '⁠No Extra Charges on Weekend',
                                'Free ⁠Pick-up & Drop-off'
                            ]}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$85/hr"
                            PricePlan="Premium Lesson"
                            BtnUrl="/booking"
                            BtnText="Book Now"
                            FeatureList={[
                                '⁠1 Lesson = 60 Minutes',
                                '⁠Per Lesson in Package = $80',
                                'Car With Dual Control',
                                '⁠Latest & Fully Insured Vehicle',
                                '⁠7 Days a Week Availability',
                                '⁠No Extra Charges on Weekend',
                                'Free ⁠Pick-up & Drop-off'
                            ]}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$175/hr"
                            PricePlan="Driving Test Only"
                            BtnUrl="/booking"
                            BtnText="Book Now"
                            FeatureList={[
                                '⁠Driving Test only – $175',
                                '⁠(Excludes any Government Fees)'
                            ]}
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <PricingCard
                            Price="$175/hr"
                            PricePlan="Driving Test Only"
                            BtnUrl="/booking"
                            BtnText="Book Now"
                            FeatureList={[
                                '⁠Driving Test only – $175',
                                '⁠(Excludes any Government Fees)'
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
