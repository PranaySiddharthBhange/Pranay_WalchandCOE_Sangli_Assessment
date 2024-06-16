## Overview

The Contact component in the Handmade Haven website serves as a crucial point of interaction for users interested in reaching out or learning more about the products offered. It combines a contact form, informative sections, and links to available platforms where the products are sold.

### Key Features

1. **Contact Form Integration**
   - **Functionality:** Allows users to send inquiries directly from the website.
   - **Implementation:** Utilizes the `ContactForm` component imported from `./Form/Form.js`.
   - **Styling:** Positioned alongside an image for aesthetic balance using Flexbox.

2. **Visual Elements**
   - **Header:** Displays a prominent "Contact Us" heading styled with large font size and bold text alignment.
   - **Subheading:** Provides context and encourages interaction, styled for clarity and readability.

3. **Responsive Design**
   - **Flexibility:** Uses CSS Flexbox to arrange elements in a row on larger screens (`contact-container`).
   - **Adaptability:** Transitions to a stacked layout on smaller screens (`@media (max-width: 768px)`).

4. **Availability Links**
   - **Purpose:** Offers direct links to purchase products on various platforms like Amazon, Flipkart, etc.
   - **Implementation:** Listed using `Link` components from `react-router-dom`.
   - **Styling:** Styled with hover effects (`availablelist-indi:hover`) to indicate link interaction.

