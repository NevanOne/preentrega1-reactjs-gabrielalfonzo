import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { Navbar } from "./components/Navbar/Navbar";
import { ItemCount } from './components/ItemCount/ItemCount';
import {BrowserRouter as Router,Routes,Navigate,Route,} from 'react-router-dom'
import { CartProvider } from './components/context/CartContext';
import {CartScreen} from './components/CartScreen/CartScreen';
import Inicio from './components/Inicio/Inicio';
import Checkout from './components/Checkout/Checkout'



function App() {
  return (
    <CartProvider >
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Inicio" element={<Inicio/>} />
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/counter' element={<ItemCount />} />
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/cart' element={<CartScreen></CartScreen>} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App
