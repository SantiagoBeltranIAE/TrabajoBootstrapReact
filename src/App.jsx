import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarritoComponent from './Components/CarritoComponent.jsx'
import CheckoutComponent from './Components/CheckoutComponent.jsx'
import DetallesProductosComponent from './Components/DetallesProductosComponent.jsx'  
import ListaProductosComponent from './Components/ListaProductosComponent.jsx'
import NavbarComponent from './Components/NavbarComponent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ListaProductosComponent />} />
        <Route path="/product/:id" element={<DetallesProductosComponent />} />
        <Route path="/carrito" element={<CarritoComponent />} />
        <Route path="/checkout" element={<CheckoutComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


