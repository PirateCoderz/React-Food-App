import { useState } from "react";
import HeaderPage from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Carts/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);

  }


  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler} />}
      <HeaderPage onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
