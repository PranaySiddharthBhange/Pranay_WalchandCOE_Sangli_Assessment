// Importing necessary dependencies and styles
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import About from './About/About'; // Import About component
import Homepage from './Homepage/Homepage'; // Import Homepage component
import Product from './Products/Product'; // Import Product component
import Contact from './Contact/Contact'; // Import Contact component

function App() {
  return (
    <BrowserRouter>
      {/* Define routes using Routes component for better routing */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Route for Homepage */}
        <Route path="/about" element={<About />} /> {/* Route for About page */}
        <Route path="/products" element={<Product />} /> {/* Route for Products page */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
