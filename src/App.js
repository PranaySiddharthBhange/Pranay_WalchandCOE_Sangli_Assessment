import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom'; 
import About from './About';
import Homepage from './Homepage';
import Product from './Product';
import Contact from './Contact';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
}


export default App;
