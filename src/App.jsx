import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext.jsx";
import CurrentStepContextProvider from "./store/CurrentStepContext.jsx";

function App() {
  return (
    <CartContextProvider>
      <CurrentStepContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CurrentStepContextProvider>
    </CartContextProvider>
  );
}

export default App;
