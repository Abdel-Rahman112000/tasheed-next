"use client";

import { ContactProvider } from "@/hooks/contactProvider";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

// Create a client
const queryClient = new QueryClient();

function AppProvider({ children }: { children: ReactNode }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ContactProvider>{children}</ContactProvider>
    </QueryClientProvider>
  );
}

export default AppProvider;
