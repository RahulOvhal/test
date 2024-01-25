
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

// import Header from '../Product/Header'
import ProductListing from './components/Product/ProductListing';
import ProductDetails from './components/Product/ProductDetails';


function App() {
  return (
    <>
      <Router >
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/productlisting' element={<ProductListing />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          

        </Routes>
      </Router>
    </>
  );
}

export default App;
