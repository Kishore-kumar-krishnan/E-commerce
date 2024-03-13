
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { ShopCategory } from './Pages/books/Oldbooks';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { SignIn } from './Pages/Login/SignIn';
import { SignUp } from './Pages/Login/SignUp';
import CartItems from './Components/CartItems/CartItems';
import Footer from './Components/Footer/Footer';
import  Newbooks from './Pages/books/Newbooks';
import  Oldbooks from './Pages/books/Oldbooks';
import { W } from './Components/Wishlist/wishlist';

import CheckOut from './Components/CheckOut/CheckOut';
function App() {
  return (
    <div >
      <BrowserRouter>
      <div className='nav'>
      <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/Oldbooks' element={<Oldbooks category="Oldbooks"/>}></Route>
        <Route path='/Newbooks' element={<Newbooks category="Newbooks"/>}></Route>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/CartItems' element={<CartItems/>}></Route>
        <Route path='/CheckOut' element={<CheckOut/>}></Route>
        <Route path='/wishlist' element={<W/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
