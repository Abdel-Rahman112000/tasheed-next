"use client";

import { createContext, ReactNode } from "react";
import useCompareHooks, { useCompareType } from "./hooks";
import { Backdrop, CircularProgress } from "@mui/material";

export const CompareContext = createContext<useCompareType>(
  {} as useCompareType
);

export function CompareContextProvider({ children }: { children: ReactNode }) {
  const hooks = useCompareHooks();
  const { allProjectsQuery, selectedUnitQuery, selectedProjectQuery } = hooks;

  return (
    <CompareContext.Provider value={hooks}>
      {children}
      <Backdrop
        sx={{ zIndex: 100000 }}
        open={Boolean(
          allProjectsQuery.isLoading ||
            selectedUnitQuery.isLoading ||
            selectedProjectQuery.isLoading
        )}
      >
        <CircularProgress size={84} color="secondary" />
      </Backdrop>
    </CompareContext.Provider>
  );
}
