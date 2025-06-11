import Image from 'next/image';
import data from '../../Data/feature.json'
 
const Features = () => {
    return (
        <div className="feature-area">
            <div className="container">
                <div className="row about align-items-center">
                    <div className="feature-box">
                    {data.map((item, i) => (
                        <div 
                            key={i} 
                            className="feature-sinble-single-box"
                            style={{
                                transition: 'all 0.3s ease',
                                ':hover': {
                                    'h3': { color: '#ffffff' }, // White color on hover
                                    'p': { color: '#f0f0f0' }  // Light gray on hover
                                }
                            }}
                        >
                            <div className="feature-icon">
                                <Image src={item.img} alt="img" width={36} height={36} />
                            </div>
                            <div className="feature-content">
                                <h3 
                                    className="feature-title" 
                                    style={{ 
                                        color: '#333333',
                                        transition: 'color 0.3s ease'
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p 
                                    className="feature-text" 
                                    style={{ 
                                        color: '#666666',
                                        transition: 'color 0.3s ease' 
                                    }}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>	
        </div>
    );
};

export default Features;