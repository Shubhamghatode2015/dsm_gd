"use client";
import { ContentCopy, DoneAll } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const FeedPost = ({ handleEdit, handleDelete, value, handleTagClick }) => {
  console.log(value);
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleProfileClick = () => {
    // console.log(value);

    if (value?.creator?._id === session.user.id) return router.push("/profile");

    router.push(`/profile/${value?.creator?._id}?name=${value?.creator?.username}`);
  };

  const handleCopy = () => {
    setCopied(value?.prompt);
    navigator.clipboard.writeText(value?.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <Card
        sx={{
          minHeight: "5rem",
          width: {xs: '100%', sm: '45%', md: 350, xl: 350},
        }}
        elevation={5}
      >
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CardHeader
            sx={{ cursor: "pointer" }}
            onClick={handleProfileClick}
            avatar={
              <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
                <Image
                  src={value?.creator?.image}
                  alt="user_image"
                  width={40}
                  height={40}
                  sx={{ borderRadius: "100%" }}
                />
              </Avatar>
            }
            title={
              <Typography
                variant="body2"
                sx={{ color: "info.main", fontSize: "0.8rem", ml: 0 }}
              >
                {value?.creator?.username}
              </Typography>
            }
            subheader={
              <Typography
                variant="body1"
                sx={{ color: "info.light", fontSize: "0.7rem", ml: 0 }}
              >
                {value?.creator?.email}
              </Typography>
            }
          />
          <IconButton
            aria-label="copy to click"
            // sx={{ position: "absolute", top: 0, right: 2 }}
            onClick={handleCopy}
          >
            {copied === value?.prompt ? (
              <DoneAll sx={{ color: "shubham.main", fontSize: "1.2rem" }} />
            ) : (
              <ContentCopy sx={{ color: "primary.main", fontSize: "1.2rem" }} />
            )}
          </IconButton>
        </Box>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
            p: 2.5,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "info.main", textAlign: "left" }}
          >
            {value?.prompt}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "primary.main", cursor: "pointer", textAlign: "left" }}
            onClick={() => handleTagClick && handleTagClick(value?.tag)}
          >
            {value?.tag}
          </Typography>
        </CardContent>
        {session?.user.id === value?.creator?._id && pathName === "/profile" && (
          <CardActions
            sx={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <Button variant="text" color="primary" onClick={handleEdit}>
              Edit
            </Button>
            <Button variant="text" color="info" onClick={handleDelete}>
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
    </>
  );
};

export default FeedPost;
