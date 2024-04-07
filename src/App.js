import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
// import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Gadjets from './Pages/Gadjet';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kid from './Pages/Kid';
import Cart from './Pages/Cart';
import ItemDisplay from './Pages/ItemDisplay';
import { ShopContextProvider } from './Context/Shop-context';
import Footer from './Components/Footer'
function App() {
  return (
    <ShopContextProvider>
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/gadjets' element={<Gadjets />} />
          <Route path='/men' element={<Mens />} />
          <Route path='/women' element={<Womens />} />
          <Route path='/kids' element={<Kid />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/item' element={<ItemDisplay />}>
            <Route path=':itemId' element={<ItemDisplay />}></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
