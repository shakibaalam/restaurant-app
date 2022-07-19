
import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import AllFood from './Pages/AllFood';
import Contact from './Pages/Contact';
import FoodDetails from './Pages/FoodDetails';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import Carts from './Pages/Carts';

function App() {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        {showCart && <Cart />}
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home />} />
          <Route path="/foods" element={<AllFood />} />
          <Route path="/foods/:id" element={<FoodDetails />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
