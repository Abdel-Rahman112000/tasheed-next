"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type CompareContextType = {
  compareMode: boolean;
  setCompareMode: Dispatch<SetStateAction<boolean>>;
};
export const CompareContext = createContext({} as CompareContextType);

function ToggleCompareProvider({ children }: { children: ReactNode }) {
  const [compareMode, setCompareMode] = useState(false);

  return (
    <CompareContext.Provider value={{ compareMode, setCompareMode }}>
      {children}
    </CompareContext.Provider>
  );
}

export default ToggleCompareProvider;
