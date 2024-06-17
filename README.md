# Handmade Heaven Website

## Overview

Handmade Heaven is a beautifully crafted website that showcases artisanal products, leveraging a modern tech stack to provide a seamless user experience. You can view the live website [https://handmadeheaven.vercel.app/](https://handmadeheaven.vercel.app/).

### Quick Start

**Docker Image:**

- Pull the Docker image: `docker pull pranaybhange/handmadeheaven`
- Run the Docker image: `docker run -p 3000:3000 pranaybhange/handmadeheaven`
- Open your browser and navigate to `http://localhost:3000`

## Technology Stack

- **Frontend:** ReactJS, HTML/CSS, JavaScript
- **Backend:** Node.js
- **Email Integration:** EmailJS
- **Containerization:** Docker

## Project Structure

The project follows a modular structure, with each component and section documented separately:

```
|-- public/           # Static assets and index.html
|-- src/              # Source code directory
    |-- assets/       # Images, icons, and other assets
    |-- [App.js](src/App.js)        # Main application component
    |-- [index.js](src/index.js)      # Entry point
    |-- [Homepage/](src/Homepage/)
        |-- [Homepage.jsx](src/Homepage/Homepage.jsx)
        |-- [Homepage.css](src/Homepage/Homepage.css)
        |-- [Homepage.md](src/Homepage/Homepage.md)
    |-- [Products/](src/Products/)
        |-- [AllProducts.jsx](src/Products/AllProducts.jsx)
        |-- [AllProducts.css](src/Products/AllProducts.css)
        |-- [Products.jsx](src/Products/Products.jsx)
        |-- [Products.css](src/Products/Products.css)
        |-- [ProductCard.jsx](src/Products/ProductCard.jsx)
        |-- [ProductCard.css](src/Products/ProductCard.css)
        |-- [Products.md](src/Products/Products.md)
    |-- [About/](src/About/)
        |-- [About.jsx](src/About/About.jsx)
        |-- [About.css](src/About/About.css)
        |-- [About.md](src/About/About.md)
    |-- [Contact/](src/Contact/)
        |-- [FAQComponent/](src/Contact/FAQComponent/)
             |-- [FAQComponent.jsx](src/Contact/FAQComponent/FAQComponent.jsx)
             |-- [FAQComponent.css](src/Contact/FAQComponent/FAQComponent.css)
             |-- [FAQComponent.md](src/Contact/FAQComponent/FAQComponent.md)
        |-- [Form/](src/Contact/Form/)
             |-- [Form.jsx](src/Contact/Form/Form.jsx)
             |-- [Form.css](src/Contact/Form/Form.css)
             |-- [Form.md](src/Contact/Form/Form.md)
        |-- [Contact.jsx](src/Contact/Contact.jsx)
        |-- [Contact.css](src/Contact/Contact.css)
        |-- [Contact.md](src/Contact/Contact.md)
    |-- [Global/](src/Global/)
        |-- [Navbar.jsx](src/Global/Navbar.jsx)
        |-- [Navbar.css](src/Global/Navbar.css)
        |-- [Navbar.md](src/Global/Navbar.md)
|-- [README.md](README.md)         # Global README file (you are here)
|-- [Dockerfile](Dockerfile)        # Dockerfile for containerization
|-- [package.json](package.json)      # Node.js dependencies and scripts
|-- [.dockerignore](.dockerignore)     # Docker ignore file
|-- [.gitignore](.gitignore)        # Git ignore file
```

## Tasks Completed

- **HTML/CSS:** Implemented responsive and visually appealing layouts.
- **JavaScript:** Added interactive features and functionality.
- **Responsiveness:** Ensured seamless adaptation across devices (desktop, tablet, mobile).
- **Bonus Task:** Additional features and optimizations.

## Features

- **Navigation Menu:** Easy access to different sections.
- **Featured Products:** Image slider showcasing products with descriptions.
- **About Section:** Introduction to the business and its mission.
- **Contact Section:** Form for inquiries with form validation.
- **Footer:** Social media links (Facebook, Instagram, Twitter).
- **Responsive Design:** Adapts to various screen sizes.
- **Form Validation:** Ensures required fields are filled correctly.
- **Image Slider:** For featured product section.
- **Docker Containerization:** For consistent deployment.
- **FAQ Section:** Expandable questions and answers.
- **CSS Styling:** Ensures visual consistency and appealing design.
- **React.js:** Interactive components and dynamic content rendering.
- **Performance Optimization:** Improved load times and smooth navigation.

## Optimization

**Image Optimization:**

- **Resizing and Compression:** Balanced quality and file size.
- **Lazy Loading:** Deferred loading of below-the-fold images to improve initial load times.

## References and Assets for UI/UX

- **Homepage and 3D Assets:** [Figma Community](https://www.figma.com/community/file/1331643644443517630)
- **Form UI:** [Dribbble](https://dribbble.com/shots/18559477-Contact-form-Mattered)
- **Product Page:** [Dribbble](https://dribbble.com/shots/9647724-TWC-Features-Section)
- **Gradient:** [CSS Gradient](https://cssgradient.io/)
- **Product Images:** [Unsplash](https://unsplash.com/)

---