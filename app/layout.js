"use client";
import Footer from "@/Components/Footer";
import Navbaar from "@/Components/Navbar";
import Provider from "@/Components/Provider";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "@styles/globals.css";
import { customTheme } from "@utils/customTheme";

// import Nav from "@components/Nav";
// import Provider from "@components/Provider";

export const metadata = {
  title: "DSM-GD",
  description: "Discuss about Your concepts",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
      <div className="main">
        <div className="gradient" />
      </div>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />

        <Navbaar />
        {children}
        <Footer />
      </ThemeProvider>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
