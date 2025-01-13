"use client";

import getContactPageData from "@/utils/api/get/contact-page";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";

function useContactHook() {
  const query = useQuery({
    queryKey: ["contact-details"],
    queryFn: getContactPageData,
  });
  return query;
}

type ContextType = ReturnType<typeof useContactHook>;

const ContactContext = createContext<ContextType>(
  undefined as unknown as ContextType
);

export function ContactProvider({ children }: { children: ReactNode }) {
  const query = useContactHook();
  return (
    <ContactContext.Provider value={query}>{children}</ContactContext.Provider>
  );
}

export const useContact = () => useContext(ContactContext);
