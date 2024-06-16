// src/FAQComponent.js
import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <div className="left-panel">
                <div className="contact-option">💬 Contact live chat support</div>
                <div className="contact-option">🔍 Visit help center</div>
                <div className="contact-option">📞 Book a demo</div>
            </div>
            <div className="right-panel">
                <h2>Frequently asked questions</h2>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        How does it work? {activeIndex === 0 ? '-' : '+'}
                    </div>
                    {activeIndex === 0 && <div className="faq-answer">Once you register, one of our tax specialists who is keen to specific regulations and tax laws of your country, will contact you for onboarding. It includes registering you as a company and sorting out your current finances.</div>}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        Do you have any discounts? {activeIndex === 1 ? '-' : '+'}
                    </div>
                    {activeIndex === 1 && <div className="faq-answer">Yes, we offer discounts for ...</div>}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(2)}>
                        My clients are from another country. How does it affect my taxes? {activeIndex === 2 ? '-' : '+'}
                    </div>
                    {activeIndex === 2 && <div className="faq-answer">If your clients are from another country, ...</div>}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(3)}>
                        Can I register in the middle of the year? {activeIndex === 3 ? '-' : '+'}
                    </div>
                    {activeIndex === 3 && <div className="faq-answer">Yes, you can register at any time of the year...</div>}
                </div>
                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(4)}>
                        What's the cancellation policy? {activeIndex === 4 ? '-' : '+'}
                    </div>
                    {activeIndex === 4 && <div className="faq-answer">Our cancellation policy is...</div>}
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
