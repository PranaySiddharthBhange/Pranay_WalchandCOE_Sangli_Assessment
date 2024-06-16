
# Overview

The Form component in this application allows users to submit inquiries or messages to the website administrators. It provides input fields for name, email, and message, validates user inputs, and sends the form data using the EmailJS library for email integration.

## Features

### 1. Input Fields
- **Name**: Accepts alphanumeric characters and spaces(only spaces not allowed).
- **Email**: Validates email format using a regular expression.
- **Message**: Accepts multiline text input.

### 2. Validation
- **Required Fields**: Name, email, and message fields are required. Error messages are displayed if these fields are empty when the form is submitted.
- **Email Format**: Ensures that the email input follows a valid email format using regex validation.
- **Trimming**: Removes leading and trailing whitespace from inputs to maintain data integrity.

### 3. Submission Handling
- **Form Submission**: Handles form submission using the `handleSubmit` function.
- **EmailJS Integration**: Utilizes EmailJS library to send form data as an email to the specified recipient.
- **Loading State**: Displays a loading indicator ("Sending...") while the form submission is in progress.

### 4. Error Handling
- **Error Display**: Shows error messages under input fields for validation errors (e.g., empty fields, invalid email format).
- **Form Reset**: Resets the form fields after successful submission to allow for new inputs.

### 5. Styling
- **CSS Styling**: Uses CSS for styling the form fields, labels, buttons, and error messages to ensure a consistent and user-friendly design.
- **Responsive Design**: Adapts to different screen sizes using media queries to maintain usability on mobile and desktop devices.

### Edge Cases
- **Empty Inputs**: Handles cases where any required field (name, email, message) is empty on form submission.
- **Invalid Email**: Validates and displays an error message if the email format is invalid.
- **Whitespace**: Trims leading and trailing whitespace from inputs to prevent accidental errors.