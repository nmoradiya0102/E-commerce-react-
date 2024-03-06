import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/Cart/Cart';
import ShopContextProvider from './context/ShopContext';


function App() {
  return (
    <div className='App'>
    <ShopContextProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element = {<Cart/>} />
        </Routes>
    </ShopContextProvider>
    </div>
  );
}

export default App;
