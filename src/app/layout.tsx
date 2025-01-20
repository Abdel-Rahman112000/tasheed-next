import type { Metadata } from "next";
import "./globals.scss";
import "plyr-react/plyr.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Provider } from "jotai";
import { Stack } from "@mui/material";
import NotiStackProvider from "./SnackbarProvider";
import CustomThemeProvider from "@/theme/theme";
import Navbar from "@/components/Navbar";
import "@/assets/fonts/include.scss";
import "swiper/css";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { $Heights } from "@/constants/sizes";
import AppProvider from "@/components/AppProvider";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Tasheed",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <AppRouterCacheProvider>
        <CustomThemeProvider>
          <NotiStackProvider>
            <Provider>
              <AppProvider>
                <Stack
                  component={"body"}
                  bgcolor={"background.default"}
                  sx={{
                    maxWidth: "100vw",
                    overflowX: "hidden",
                    paddingTop: `${$Heights.Navbar}px`,
                    transition: "background-color 500ms ease-out",
                    ".filepond--panel-root": {
                      bgcolor: "background.paper",
                    },
                    ".filepond--drop-label": {
                      color: "primary.main",
                    },
                  }}
                >
                  <AnimatedBackground />
                  <Navbar />
                  <NextTopLoader showSpinner={false} />
                  {children}
                  <Footer />
                </Stack>
              </AppProvider>
            </Provider>
          </NotiStackProvider>
        </CustomThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
