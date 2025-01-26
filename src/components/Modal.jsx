import { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, cssClassName = "" }) {
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
    <dialog ref={dialogRef} className={`modal ${cssClassName}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
