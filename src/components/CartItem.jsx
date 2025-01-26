import { useContext } from "react";
import { currencyFormatter } from "../util";
import { CartContext } from "../store/CartContext";

export default function CartItem({ item }) {
  const { addMeal, removeMeal } = useContext(CartContext);
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={() => removeMeal(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => addMeal(item)}>+</button>
      </p>
    </li>
  );
}
