import { Children, useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CurrentStepContext } from "../store/CurrentStepContext";

export default function Modal({ children, open, cssClassName = "" }) {
  const { currentStep, hideModal, showCheckout } =
    useContext(CurrentStepContext);
  const dialogRef = useRef();

  useEffect(() => {
    // console.log(dialogRef.current, open);
    // const modal = dialogRef.current;
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }

    // return () => {
    //   modal.close();
    // };
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`modal ${cssClassName}`}
      onClose={currentStep === "cart" ? hideModal : null}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
