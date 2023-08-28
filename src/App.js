import { Fragment } from "react";
import HeaderPage from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Carts/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <HeaderPage />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
