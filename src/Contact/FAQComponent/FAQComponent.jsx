import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
    // State to track which FAQ item is currently active
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle active state of FAQ items
    const toggleFAQ = (index) => {
        // If the clicked FAQ is already active, close it; otherwise, set it as active
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {/* Left panel with contact information */}
            <div className="left-panel">
                <div className="contact-option">📧 op.pranay.bhange@gmail.com</div>
                <div className="contact-option">🏡 Walchand College of Engineering Sangli</div>
                <div className="contact-option">📞 +91 9699684544</div>
            </div>

            {/* Right panel with FAQ items */}
            <div className="right-panel">
                <h2 className='faqsubhead'>Frequently asked questions</h2>
                {/* FAQ items */}
                <div className="faq-item">
                    {/* FAQ question with toggle functionality */}
                    <div className="faq-question" onClick={() => toggleFAQ(0)}>
                        What types of handcrafted artifacts do you offer? {activeIndex === 0 ? '-' : '+'}
                    </div>
                    {/* Answer displayed if the FAQ item is active */}
                    {activeIndex === 0 && <div className="faq-answer">We offer a wide range of handcrafted artifacts including pottery, jewelry, textiles, woodwork, and more.</div>}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(1)}>
                        Are your handcrafted artifacts made by local artisans? {activeIndex === 1 ? '-' : '+'}
                    </div>
                    {activeIndex === 1 && <div className="faq-answer">Yes, all our handcrafted artifacts are made by skilled local artisans, preserving traditional craftsmanship.</div>}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(2)}>
                        Do you offer customizable options for handcrafted artifacts? {activeIndex === 2 ? '-' : '+'}
                    </div>
                    {activeIndex === 2 && <div className="faq-answer">Yes, we provide customization services for certain artifacts. Please contact us for more details.</div>}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(3)}>
                        How can I care for my handcrafted artifacts? {activeIndex === 3 ? '-' : '+'}
                    </div>
                    {activeIndex === 3 && <div className="faq-answer">We recommend following specific care instructions provided with each artifact to ensure their longevity and beauty.</div>}
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={() => toggleFAQ(4)}>
                        Do you offer international shipping for your handcrafted artifacts? {activeIndex === 4 ? '-' : '+'}
                    </div>
                    {activeIndex === 4 && <div className="faq-answer">Yes, we ship our handcrafted artifacts internationally. Shipping rates may vary depending on the destination.</div>}
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;
