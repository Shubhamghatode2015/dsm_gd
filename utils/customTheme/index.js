"use client";
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#EC6CEC",
      bg: "#FBF4E2",
      light: "#A020F0",
      text: "#393280",
      btn: "linear-gradient(270deg, #A020F0 -4%, rgba(160, 32, 240, 0.6) 104.83%)",
      btn2: "linear-gradient(270deg, #A020F0 -4%, rgba(160, 32, 240, 0.6) 104.83%)",
      bg2: "rgba(160, 32, 240, 0.25)",
    },
    secondary: {
      main: "#E4F0FA",
    },
    info: {
      main: "#463C74",
      light: "rgba(70, 60, 116, 0.5)",
    },
    danger: {
      main: "#BEE9EA",
    },
    white: {
      main: "#ffffff",
    },
    shubham: {
      main: "#57A2F9",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    textTransform: "capitalize",

    // fontFamily: 'Poppins',
  },
  //   breakpoints: {
  //     values: {
  //       shubham1: 300,
  //       shubham2: 400,
  //       shubham3: 500,
  //     },
  //   },
});
