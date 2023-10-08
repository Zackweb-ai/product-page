import { Nav } from "./components/Nav";
import './App.css'
import { Product } from "./components/Product";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>

    <div className="App">
      <Nav></Nav>
      <Product></Product>
    </div>
        </CartProvider>

  );
}

export default App;
