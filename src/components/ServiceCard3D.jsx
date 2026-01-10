import { forwardRef } from 'react';
import './ServiceCard3D.css';

const ServiceCard3D = forwardRef(({ id, title, description, icon, onClick, colorTheme }, ref) => {
    return (
        <div className={`sc-card-container sc-card-${colorTheme}`} id={id} ref={ref}>
            <div className="sc-card-wrapper">
                <div className="sc-flip-card-inner">
                    {/* Front Side */}
                    <div className="sc-flip-card-front">
                        <div className="sc-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icon} />
                            </svg>
                        </div>
                        <h3 className="sc-title">{title}</h3>
                    </div>

                    {/* Back Side */}
                    <div className="sc-flip-card-back">
                        <p className="sc-description">{description}</p>
                        <button className="sc-btn" onClick={onClick}>
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

ServiceCard3D.displayName = 'ServiceCard3D';

export default ServiceCard3D;
