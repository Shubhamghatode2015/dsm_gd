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


{
  /* <title>DSM-GD</title>
<meta name="description" content="Discuss about our prompts" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="/Frame 247.png" /> */
}
const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    <title>DSM-GD</title>
      <meta name="description" content="Discuss about our prompts" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Frame 247.png" />
    </head>
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <ThemeProvider theme={customTheme}>
          {/* <CssBaseline /> */}

          <Navbaar />
          {children}
          <Footer />
        </ThemeProvider>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
