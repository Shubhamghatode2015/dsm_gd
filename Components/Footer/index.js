"use client";

import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        zIndex: 9,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary">
          {"Copyright © "} @shubham_creation &nbsp;
          {/* <Link color="inherit" href="https://mui.com/">
      Your Website
    </Link>{" "} */}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import { CardMedia, Button, OutlinedInput } from "@mui/material";
// import Image from "next/image";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary">
//       {"Copyright © "} booksica.in &nbsp;
//       {/* <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "} */}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// export default function Footer() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         minHeight: "50vh",
//       }}
//     >
//       <CssBaseline />
//       <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             mb: 5,
//           }}
//         >
//           <Box sx={{ height: "3.5rem", maxWidth: "100%", p: 0.3 }}>
//             <Image
//               src={require("../../assets/img/Frame 247.png")}
//               style={{
//                 height: "100%",
//                 width: "100%",
//               }}
//               title={"booksica.in"}
//               alt="logo"
//             />{" "}
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               gap: 2.5,
//             }}
//           >
//             <Box
//               sx={{
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 p: 0.2,
//               }}
//             >
//               <Image
//                 src={require("../../assets/img/Vector.png")}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 alt={"social media"}
//               />
//             </Box>
//             <Box
//               sx={{
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 p: 0.2,
//               }}
//             >
//               <Image
//                 src={require("../../assets/img/Vector-1.png")}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 alt={"social media"}
//               />
//             </Box>
//             <Box
//               sx={{
//                 width: "30px",
//                 height: "30px",
//                 borderRadius: "50%",
//                 p: 0.2,
//               }}
//             >
//               <Image
//                 src={require("../../assets/img/Vector-2.png")}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 alt={"social media"}
//               />
//             </Box>
//           </Box>
//         </Box>
//         {/* akjdghkjahgfjkahkjfhakjhgfvjkhadfjkhasdg                ............................................................. */}
//         <Box
//           sx={{
//             width: "100%",
//             display: "flex",
//             justifyContent: "space-between",
//             mb: 5,
//           }}
//         >
//           <Box
//             flex={1}
//             sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
//           >
//             <Typography
//               variant="body1"
//               fontWeight={700}
//               sx={{ color: "info.main", mb: 3 }}
//             >
//               Company Info
//             </Typography>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               variant="text"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Carrier
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               We are hiring
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Blog
//             </Button>
//           </Box>
//           <Box
//             flex={1}
//             sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
//           >
//             <Typography
//               variant="body1"
//               fontWeight={700}
//               sx={{ color: "info.main", mb: 3 }}
//             >
//               Legal
//             </Typography>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               About Us
//             </Button>
//             <Button
//               variant="text"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Carrier
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               We are hiring
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Blog
//             </Button>
//           </Box>
//           <Box
//             flex={1}
//             sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
//           >
//             <Typography
//               variant="body1"
//               fontWeight={700}
//               sx={{ color: "info.main", mb: 3 }}
//             >
//               Features
//             </Typography>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Business Marketing
//             </Button>
//             <Button
//               variant="text"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               User Analytic
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Live Chat
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Unlimited Support
//             </Button>
//           </Box>
//           <Box
//             flex={1}
//             sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
//           >
//             <Typography
//               variant="body1"
//               fontWeight={700}
//               sx={{ color: "info.main", mb: 3 }}
//             >
//               Resources
//             </Typography>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               IOS & Android
//             </Button>
//             <Button
//               variant="text"
//               sx={{
//                 color: "info.light",

//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Watch a Demo
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               Customers
//             </Button>
//             <Button
//               variant="text"
//               color="info"
//               sx={{
//                 color: "info.light",
//                 p: 0,
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "flex-start",
//                 justifyContent: "flex-start",
//               }}
//             >
//               API
//             </Button>
//           </Box>
//           <Box
//             flex={2}
//             sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}
//           >
//             <Typography
//               variant="body1"
//               fontWeight={700}
//               sx={{ color: "info.main", mb: 3 }}
//             >
//               Get In Touch
//             </Typography>
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 50,
//                 display: "flex",
//                 alignItems: "center",
//                 bgcolor: "#E6E6E6",
//               }}
//             >
//               <OutlinedInput
//                 sx={{
//                   height: "100%",
//                   width: "75%",
//                   border: "none",
//                   outline: "none",
//                 }}
//                 placeholder="Your Email"
//               />

//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   color: "white.main",
//                   bgcolor: "primary.main",
//                   p: 2,
//                   height: "100%",
//                   borderRadius: "0 1 0 1",
//                 }}
//               >
//                 Subscribe
//               </Button>
//             </Box>
//             <Typography variant="body1" color="initial">
//               Lore imp sum dolor Amit
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//       <Box
//         component="footer"
//         sx={{
//           py: 3,
//           px: 2,
//           mt: "auto",
//           backgroundColor: (theme) =>
//             theme.palette.mode === "light"
//               ? theme.palette.grey[200]
//               : theme.palette.grey[800],
//         }}
//       >
//         <Container maxWidth="lg">
//           <Typography variant="body1" fontWeight={700}>
//             Made With Love By Bk All Right Reserved
//           </Typography>
//           <Copyright />
//         </Container>
//       </Box>
//     </Box>
//   );
// }
