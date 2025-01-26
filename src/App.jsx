import Cart from "./components/Cart.jsx";
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
      </CurrentStepContextProvider>
    </CartContextProvider>
  );
}

export default App;
