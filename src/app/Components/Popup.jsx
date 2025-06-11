'use client';
import { useState, useEffect } from 'react';
import styles from './Popup.module.css';

const Popup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => setIsVisible(false), 500);
    };

    if (!isVisible) return null;

    return (
        <div className={`${styles.popupOverlay} ${isClosing ? styles.fadeOut : styles.fadeIn}`}>
            <div className={`${styles.popupContent} ${isClosing ? styles.slideOut : styles.slideIn}`}>
                {/* Animated background elements */}
                <div className={styles.animatedBackground}>
                    <div className={styles.lightEffect}></div>
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                </div>
                
                {/* Floating car animation */}
                <div className={styles.floatingCar}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V13Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 13L3 8H21L19 13" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 17C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17Z" fill="#4F46E5"/>
                        <path d="M15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17Z" fill="#4F46E5"/>
                    </svg>
                </div>
                
                <div className={styles.popupHeader}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoCircle}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 13H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 13L3 8H21L19 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 17C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17Z" fill="white"/>
                                <path d="M15 17C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15C14.4477 15 14 15.4477 14 16C14 16.5523 14.4477 17 15 17Z" fill="white"/>
                            </svg>
                        </div>
                        <div>
                            <h2>Welcome to <span className={styles.brandName}>DriveSafe Mate</span></h2>
                            <p className={styles.tagline}>Your journey to confident driving starts here</p>
                        </div>
                    </div>
                    <button 
                        className={styles.closeButton}
                        onClick={handleClose}
                        aria-label="Close popup"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                
                <div className={styles.popupBody}>
                    <p className={styles.subtitle}>Join <strong>10,000+</strong> students who've become confident drivers with our proven methods</p>
                    
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <div className={styles.iconBackground}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8V12L15 15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.featureText}>
                                <h4>Flexible Scheduling</h4>
                                <p>Book lessons 24/7 with our easy online system</p>
                            </div>
                        </div>
                        
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <div className={styles.iconBackground}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 16V12" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 8H12.01" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.featureText}>
                                <h4>Certified Instructors</h4>
                                <p>DVSA-approved professionals with 10+ years experience</p>
                            </div>
                        </div>
                        
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <div className={styles.iconBackground}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.featureText}>
                                <h4>Road Test Prep</h4>
                                <p>90% first-time pass rate with our mock tests</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.ctaContainer}>
                        <button 
                            className={styles.primaryButton}
                            onClick={handleClose}
                        >
                            <span>Start Learning Today</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                        <button className={styles.secondaryButton}>
                            Explore Packages
                        </button>
                        <div className={styles.offerBadge}>
                            <span>Limited time offer</span>
                            <strong>20% off</strong> your first 10 lessons!
                        </div>
                    </div>
                </div>
                
                <div className={styles.popupFooter}>
                    <div className={styles.testimonial}>
                        <div className={styles.quoteIcon}>"</div>
                        <p className={styles.testimonialText}>After failing twice with another school, DriveSafe Mate's patient approach helped me pass with just 3 minors! The instructors truly care about your success.</p>
                        <div className={styles.studentRating}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>
                            <span className={styles.studentName}>- Jamie, Recent Graduate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;