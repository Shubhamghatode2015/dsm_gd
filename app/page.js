"use client";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import Feed from "@Components/Feed";
export default function Home() {
  return (
    <main>
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          height: "auto",
          width: "100%",
          minHeight: "100vh",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "primary.text", fontWeight: 700, mt: 5 }}
        >
          {" "}
          Discover & Share
        </Typography>
        <Box
          style={{
            background:
              "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            // webkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            fontWeight: "700",
            fontSize: "3rem",
          }}
          className={styles.text_background}
        >
          DSM Group Discussion....
        </Box>
        <Typography
          variant="body1"
          sx={{ color: "info.main" }}
          maxWidth="sm"
          textAlign={"center"}
          fontWeight={500}
        >
          DSM-GD is an open-source AI prompting tool for modern world to
          discover, create and share creative prompts & discussions to learn
          more important things to active more knowledged
        </Typography>

        <Feed />
      </Container>
    </main>
  );
}
