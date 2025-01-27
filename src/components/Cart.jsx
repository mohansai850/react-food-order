import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import Button from "./Button";
import Modal from "./Modal.jsx";
import { CurrentStepContext } from "../store/CurrentStepContext";
import { currencyFormatter } from "../util.js";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const { items } = useContext(CartContext);
  const { currentStep, hideModal, showCheckout } =
    useContext(CurrentStepContext);
  const totalPrice = items.reduce(
    (sum, item) => (sum += item.quantity * item.price),
    0
  );
  return (
    <Modal cssClassName="cart" open={currentStep === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideModal}>
          Close
        </Button>
        {items.length && <Button onClick={showCheckout}>Checkout</Button>}
      </p>
    </Modal>
  );
}
