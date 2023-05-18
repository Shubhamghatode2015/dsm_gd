"use client";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FeedPost from "../FeedPost";
import { Box } from "@mui/material";
import styles from "@/styles/Home.module.css";
const ProfileSection = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ width: "100%", minHeight: "50vh", textAlign: "left" }}
      >
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
          {name} Profile
        </Box>

        <Typography variant="body1" sx={{ color: "info.light" }} maxWidth="sm">
          {desc}
        </Typography>
        <Box
          sx={{
            mt: 10,
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {data &&
            data.length > 0 &&
            data.map((value, index) => (
              <FeedPost
                value={value}
                key={index}
                post={value}
                handleEdit={() => handleEdit && handleEdit(value)}
                handleDelete={() => handleDelete && handleDelete(value)}
              />
            ))}
          {/* <FeedPost  /> */}
        </Box>
      </Container>
    </>
  );
};

export default ProfileSection;
