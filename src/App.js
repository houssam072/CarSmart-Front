import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route  } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import Register from './pages/auth/Register';
import Home from '../src/pages/home/Home';
import Header from './component/header/Header';
import Storage from './pages/storage/Storage/Storage';
import AddProduct from './pages/storage/Products/AddProduct';
import AddPurchases from './pages/storage/Purchases/AddPurchases';
import Services from './pages/services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/addPurchases" element={<AddPurchases />} />
        <Route path="/addServices" element={<Services />} />

      </Routes>
    </div>
  );
}

export default App;
