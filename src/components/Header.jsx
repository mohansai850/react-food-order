import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./Button";
import { CartContext } from "../store/CartContext";

export default function Header() {
  const { items } = useContext(CartContext);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h2>Fooddy</h2>
      </div>
      <nav>
        <Button textOnly>Cart ({totalQuantity})</Button>
      </nav>
    </header>
  );
}
