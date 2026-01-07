import { useState } from 'react';
import './CostCalculator.css';

const CostCalculator = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        industry: '',
        businessType: '',
        visaCount: 0,
        additionalServices: []
    });

    const industries = [
        { id: 'trading', name: 'Trading & E-commerce', icon: '🛒' },
        { id: 'consulting', name: 'Consulting Services', icon: '💼' },
        { id: 'tech', name: 'Technology & IT', icon: '💻' },
        { id: 'manufacturing', name: 'Manufacturing', icon: '🏭' },
        { id: 'hospitality', name: 'Hospitality & Tourism', icon: '🏨' },
        { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
        { id: 'education', name: 'Education', icon: '🎓' },
        { id: 'real-estate', name: 'Real Estate', icon: '🏢' },
        { id: 'other', name: 'Other', icon: '📋' }
    ];

    const businessTypes = [
        {
            id: 'freezone',
            name: 'Free Zone',
            basePrice: 13000,
            description: '100% foreign ownership with tax benefits',
            features: ['100% foreign ownership', 'Tax exemptions', 'Flexible office options', 'Fast setup (5-7 days)']
        },
        {
            id: 'mainland',
            name: 'Mainland',
            basePrice: 18000,
            description: 'Direct UAE market access',
            features: ['Trade anywhere in UAE', 'Government contracts', 'Full market access', 'Setup in 7-10 days']
        },
        {
            id: 'offshore',
            name: 'Offshore',
            basePrice: 30000,
            description: 'Global operations & asset protection',
            features: ['Asset protection', 'Confidential ownership', 'No physical office', 'Setup in 3-5 days']
        }
    ];

    const additionalServices = [
        { id: 'vat', name: 'VAT Registration', price: 2000 },
        { id: 'bank', name: 'Corporate Bank Account', price: 3000 },
        { id: 'office', name: 'Physical Office Space', price: 5000 },
        { id: 'trademark', name: 'Trademark Registration', price: 4000 },
        { id: 'accounting', name: 'Accounting Services', price: 2500 }
    ];

    const visaPricePerPerson = 3500;

    const calculateTotal = () => {
        let total = 0;
        
        const selectedBusiness = businessTypes.find(b => b.id === formData.businessType);
        if (selectedBusiness) {
            total += selectedBusiness.basePrice;
        }
        
        total += formData.visaCount * visaPricePerPerson;
        
        formData.additionalServices.forEach(serviceId => {
            const service = additionalServices.find(s => s.id === serviceId);
            if (service) {
                total += service.price;
            }
        });
        
        return total;
    };

    const handleIndustrySelect = (industryId) => {
        setFormData({ ...formData, industry: industryId });
        setStep(2);
    };

    const handleBusinessTypeSelect = (typeId) => {
        setFormData({ ...formData, businessType: typeId });
        setStep(3);
    };

    const handleVisaCountChange = (count) => {
        setFormData({ ...formData, visaCount: Math.max(0, count) });
    };

    const handleAdditionalServiceToggle = (serviceId) => {
        const services = formData.additionalServices.includes(serviceId)
            ? formData.additionalServices.filter(id => id !== serviceId)
            : [...formData.additionalServices, serviceId];
        setFormData({ ...formData, additionalServices: services });
    };

    const resetCalculator = () => {
        setStep(1);
        setFormData({
            industry: '',
            businessType: '',
            visaCount: 0,
            additionalServices: []
        });
    };

    const handleClose = () => {
        resetCalculator();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="calculator-overlay" onClick={handleClose}>
            <div className="calculator-modal" onClick={(e) => e.stopPropagation()}>
                <button className="calculator-close" onClick={handleClose} aria-label="Close calculator">
                    ✕
                </button>

                {/* Progress Bar */}
                <div className="calculator-progress">
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${(step / 5) * 100}%` }}
                        ></div>
                    </div>
                    <div className="progress-steps">
                        <span className={step >= 1 ? 'active' : ''}>Industry</span>
                        <span className={step >= 2 ? 'active' : ''}>Type</span>
                        <span className={step >= 3 ? 'active' : ''}>Visas</span>
                        <span className={step >= 4 ? 'active' : ''}>Services</span>
                        <span className={step >= 5 ? 'active' : ''}>Result</span>
                    </div>
                </div>

                {/* Step 1: Choose Industry */}
                {step === 1 && (
                    <div className="calculator-step">
                        <h2 className="step-title">Choose Your Industry</h2>
                        <p className="step-description">Select the industry that best matches your business</p>
                        <div className="industry-grid">
                            {industries.map((industry) => (
                                <button
                                    key={industry.id}
                                    className="industry-card"
                                    onClick={() => handleIndustrySelect(industry.id)}
                                >
                                    <span className="industry-icon">{industry.icon}</span>
                                    <span className="industry-name">{industry.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Choose Business Type */}
                {step === 2 && (
                    <div className="calculator-step">
                        <h2 className="step-title">Select Business Type</h2>
                        <p className="step-description">Choose the jurisdiction that fits your needs</p>
                        <div className="business-type-grid">
                            {businessTypes.map((type) => (
                                <div
                                    key={type.id}
                                    className="business-type-card"
                                    onClick={() => handleBusinessTypeSelect(type.id)}
                                >
                                    <h3>{type.name}</h3>
                                    <p className="type-price">Starting from AED {type.basePrice.toLocaleString()}</p>
                                    <p className="type-description">{type.description}</p>
                                    <ul className="type-features">
                                        {type.features.map((feature, idx) => (
                                            <li key={idx}>✓ {feature}</li>
                                        ))}
                                    </ul>
                                    <button className="btn-select">Select</button>
                                </div>
                            ))}
                        </div>
                        <button className="btn-back" onClick={() => setStep(1)}>← Back</button>
                    </div>
                )}

                {/* Step 3: Number of Visas */}
                {step === 3 && (
                    <div className="calculator-step">
                        <h2 className="step-title">How Many Visas Do You Need?</h2>
                        <p className="step-description">Each visa costs AED {visaPricePerPerson.toLocaleString()}</p>
                        <div className="visa-selector">
                            <button 
                                className="visa-btn"
                                onClick={() => handleVisaCountChange(formData.visaCount - 1)}
                            >
                                −
                            </button>
                            <input
                                type="number"
                                className="visa-input"
                                value={formData.visaCount}
                                onChange={(e) => handleVisaCountChange(parseInt(e.target.value) || 0)}
                                min="0"
                            />
                            <button 
                                className="visa-btn"
                                onClick={() => handleVisaCountChange(formData.visaCount + 1)}
                            >
                                +
                            </button>
                        </div>
                        <p className="visa-total">Visa Cost: AED {(formData.visaCount * visaPricePerPerson).toLocaleString()}</p>
                        <div className="step-actions">
                            <button className="btn-back" onClick={() => setStep(2)}>← Back</button>
                            <button className="btn-next" onClick={() => setStep(4)}>Next →</button>
                        </div>
                    </div>
                )}

                {/* Step 4: Additional Services */}
                {step === 4 && (
                    <div className="calculator-step">
                        <h2 className="step-title">Additional Services</h2>
                        <p className="step-description">Select any additional services you need (optional)</p>
                        <div className="services-list">
                            {additionalServices.map((service) => (
                                <label key={service.id} className="service-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={formData.additionalServices.includes(service.id)}
                                        onChange={() => handleAdditionalServiceToggle(service.id)}
                                    />
                                    <span className="service-info">
                                        <span className="service-name">{service.name}</span>
                                        <span className="service-price">AED {service.price.toLocaleString()}</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className="step-actions">
                            <button className="btn-back" onClick={() => setStep(3)}>← Back</button>
                            <button className="btn-next" onClick={() => setStep(5)}>Calculate →</button>
                        </div>
                    </div>
                )}

                {/* Step 5: Result */}
                {step === 5 && (
                    <div className="calculator-step calculator-result">
                        <div className="result-header">
                            <h2 className="step-title">Your Estimated Cost</h2>
                            <div className="result-total">
                                <span className="currency">AED</span>
                                <span className="amount">{calculateTotal().toLocaleString()}</span>
                            </div>
                        </div>
                        
                        <div className="result-breakdown">
                            <h3>Cost Breakdown</h3>
                            <div className="breakdown-item">
                                <span>Base Package ({businessTypes.find(b => b.id === formData.businessType)?.name})</span>
                                <span>AED {businessTypes.find(b => b.id === formData.businessType)?.basePrice.toLocaleString()}</span>
                            </div>
                            {formData.visaCount > 0 && (
                                <div className="breakdown-item">
                                    <span>Visas ({formData.visaCount}x)</span>
                                    <span>AED {(formData.visaCount * visaPricePerPerson).toLocaleString()}</span>
                                </div>
                            )}
                            {formData.additionalServices.map(serviceId => {
                                const service = additionalServices.find(s => s.id === serviceId);
                                return (
                                    <div key={serviceId} className="breakdown-item">
                                        <span>{service.name}</span>
                                        <span>AED {service.price.toLocaleString()}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="result-actions">
                            <a href="#contact" className="btn btn-primary" onClick={handleClose}>
                                Get Started
                            </a>
                            <button className="btn-recalculate" onClick={resetCalculator}>
                                ↻ Recalculate
                            </button>
                        </div>
                        
                        <p className="result-note">
                            * This is an estimate. Final costs may vary based on specific requirements.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CostCalculator;
