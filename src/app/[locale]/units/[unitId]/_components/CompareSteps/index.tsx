"use client";

import { CompareContextProvider } from "./context";
import CompareSteps from "./Steps";

function CompareStepsContainer() {
  return (
    <CompareContextProvider>
      <CompareSteps />
    </CompareContextProvider>
  );
}

export default CompareStepsContainer;
