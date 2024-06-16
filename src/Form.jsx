import React, { useState } from 'react';
import './Form.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        let valid = true;
        let newErrors = { name: '', email: '', message: '' };

        if (!name) {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is not valid';
            valid = false;
        }
        if (!message) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        if (valid) {
            // Handle form submission
            console.log(formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <form onSubmit={handleSubmit} className="form">
                    <div className="fieldContainer">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input"
                            placeholder='Enter Name'
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>
                    <div className="fieldContainer">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input"
                            placeholder='Enter Email'
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="fieldContainer">
                        <label className="label">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="input"
                            placeholder='Enter Message'
                            style={{ height: '100px' }}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>
                    <button type="submit" className="button">Just Send <span className="arrow">→</span></button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
