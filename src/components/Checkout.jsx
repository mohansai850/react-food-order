import { useContext } from "react";
import { currencyFormatter } from "../util";
import { CartContext } from "../store/CartContext";
import Modal from "./Modal";
import { CurrentStepContext } from "../store/CurrentStepContext";
import Input from "./Input";
import Button from "./Button";

export default function Checkout() {
  const { items } = useContext(CartContext);
  const { currentStep, hideModal } = useContext(CurrentStepContext);
  const totalPrice = items.reduce(
    (sum, item) => (sum += item.quantity * item.price),
    0
  );
  return (
    <Modal open={currentStep === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" id="full-name" type="text" />
        <Input label="e-mail id" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="PIN Code" id="pin-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        <p className="modal-actions">
          <Button textOnly type="button" onClick={hideModal}>
            Close
          </Button>
          <Button>Place Order</Button>
        </p>
      </form>
    </Modal>
  );
}
