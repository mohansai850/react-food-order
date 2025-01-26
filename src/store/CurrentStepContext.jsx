import { createContext, useState } from "react";

export const CurrentStepContext = createContext({
  currentStep: "",
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
});

export default function CurrentStepContextProvider({ children }) {
  const [currentStep, setCurrentStep] = useState("");
  function showCart() {
    setCurrentStep("cart");
  }
  function showCheckout() {
    setCurrentStep("checkout");
  }
  function hideModal() {
    setCurrentStep("");
  }
  const value = { currentStep, showCart, showCheckout, hideModal };
  return (
    <CurrentStepContext.Provider value={value}>
      {children}
    </CurrentStepContext.Provider>
  );
}
