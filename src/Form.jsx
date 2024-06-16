import React, { useState } from 'react';
import './Form.css';
import emailjs from 'emailjs-com'; // Import EmailJS library

const ContactForm = () => {
    // State variables to manage form data and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false); // Track if email is being sent

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to handle input changes in the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        const trimmedValue = value.trim(); // Trim whitespace

        // Update formData state with the new input value
        setFormData({
            ...formData,
            [name]: trimmedValue
        });

        // Update errors state based on the input value
        setErrors({
            ...errors,
            [name]: trimmedValue ? '' : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
        });
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        let valid = true;
        let newErrors = { name: '', email: '', message: '' };

        // Validation checks for name, email, and message fields
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

        // If form is valid, handle form submission
        if (valid) {
            setIsSending(true); // Set sending state to true

            console.log(formData); // For now, just log the form data
             // Send email using EmailJS
             emailjs.sendForm('service_jxybg2z', 'template_loqi7sm', e.target, 'uM4LMQmkW3F-e2DbV')
             .then((result) => {
                 // Email sent successfully
                 alert(`Feedback sent successfully!`);
                 setIsSending(false); // Reset sending state

                 setFormData({ name: '', email: '', message: '' }); // Reset form data
             }, (error) => {
                 // Error occurred while sending email
                 console.error('Failed to send email:', error);
                 alert('An error occurred while sending the email. Please try again later.');
                                 setIsSending(false); // Reset sending state

             });
        } else {
            // If form is invalid, update errors state with new error messages
            setErrors(newErrors);
        }
    };

    return (
        <div className="container">
            <div className="form-box">
                <form onSubmit={handleSubmit} className="form">
                    {/* Input field for Name */}
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
                        {errors.name && <span className="error">{errors.name}</span>} {/* Display error message if name is not valid */}
                    </div>
                    {/* Input field for Email */}
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
                        {errors.email && <span className="error">{errors.email}</span>} {/* Display error message if email is not valid */}
                    </div>
                    {/* Input field for Message */}
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
                        {errors.message && <span className="error">{errors.message}</span>} {/* Display error message if message is not valid */}
                    </div>
                    {/* Submit button */}
                    <button type="submit" className="button" disabled={isSending}>{isSending ? 'Sending...' : 'Just Send'} <span className="arrow">→</span></button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm; 


