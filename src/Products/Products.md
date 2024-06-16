## Overview

The Product Screen showcases a gallery of featured and all products.It allows users to explore unique, handcrafted items categorized into different categories such as Ceramics, Leather, Toys, and Décor.

## Features

### 1. Featured Products Section

**Description**: Highlights a curated collection of handcrafted items with prominent headings and compelling descriptions with scrolling effect implemented.

**Implementation**: 
- **Dynamic Content**: Products fetched from `products` data array, filtered by category.
- **Visual Appeal**: Styled with large, bold headings (`heading`) and descriptive text (`subheading`).

### 2. Category Selection

**Description**: Enables users to filter products by categories such as Ceramics, Leather, Toys, and Décor for a focused browsing experience.

**Implementation**: 
- **Interactive Buttons**: Category buttons (`categories`) visually indicate active selection.
- **User-Friendly**: Enhances navigation without overwhelming the user interface.

### 3. Horizontal Scrolling

**Description**: Facilitates effortless navigation through a horizontally-scrollable list of products, optimizing screen space.

**Implementation**: 
- **Smooth Interaction**: Implemented with CSS (`product-list`) and JavaScript (`scroll` function).
- **Intuitive Navigation**: Uses icons (`IoIosArrowDropleft`, `IoIosArrowDropright`) for seamless left and right scrolling.

### 4. Lazy Loading

**Description**: Enhances performance by loading product cards (`ProductCard`) asynchronously only when needed, reducing initial load time.

**Implementation**: 
- **Efficient Resource Management**: Utilizes React's `React.lazy()` and `<Suspense>` for on-demand component loading.
- **Improved User Experience**: Ensures faster initial page rendering and responsiveness.

### 5. Random Product Display

**Description**: Adds variety by displaying a randomized selection of products, keeping content fresh and engaging.

**Implementation**: 
- **Dynamic Content Refresh**: Shuffles `products` array (`shuffledProducts`) using a random sorting method.
- **Limited Display**: Displays a manageable subset (first 12 items) to maintain user interest.

### 6. Responsive Design

**Description**: Ensures a seamless experience across devices by adapting layout and content presentation.

**Implementation**: 
- **Flexible Layout**: Utilizes CSS flexbox (`gallery-container`, `categories`, `products`) for responsive design.
- **Media Queries**: Adjusts styles (`@media`) based on viewport size to optimize viewing on different devices.

### 7. Accessibility and Usability

**Description**: Prioritizes inclusivity and ease of use, ensuring all users can navigate and interact effectively.

**Implementation**: 
- **Semantic HTML**: Uses semantic elements (`<button>`, `<div>`, `<img>`) for clarity and accessibility.
- **Keyboard Navigation**: Supports keyboard interactions (`onClick` handlers) for improved accessibility.
- **Alt Text**: Provides descriptive `alt` attributes for images (`product-item img`) to assist users with visual impairments.


## Components

### Product Component (`Product.jsx`)

The `Product` component serves as the main screen for displaying featured products. It includes:
- Navigation bar (`Navbar`) for easy navigation.
- Dynamic image (`kite`) for aesthetic appeal.
- Category selection buttons (`categories`) to filter products.
- Horizontal scroll functionality (`scroll`) for navigating through product items.
- Footer (`footer`) with company name, navigation links, and social media icons.

### AllProducts Component (`AllProducts.jsx`)

The `AllProducts` component displays a random selection of products from the entire catalog. It features:
- Lazy loading of `ProductCard` components to optimize initial load times.
- Randomization of displayed products (`shuffledProducts`) using sorting by a random number.
- Display of the first 12 products (`displayedProducts`) in a grid layout.

