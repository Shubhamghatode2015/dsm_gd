"use client";
import FeedPost from "@/Exmaples/FeedPost";
import ProfileSection from "@Exmaples/ProfileSection";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 5,
        flexWrap: "wrap",
        my: 5,
      }}
    >
      {data &&
        data.length > 0 &&
        data.map((post) => (
          <FeedPost
            key={post._id}
            value={post}
            handleTagClick={handleTagClick}
          />
        ))}
    </Box>
  );
};
const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/blogs");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item?.creator?.username) ||
        regex.test(item?.tag) ||
        regex.test(item?.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <>
      <Container sx={{ width: "100%", mt: 5 }} maxWidth="sm">
        <form
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            elevation={5}
            variant="standard" // <== changed this
            margin="normal"
            required
            fullWidth
            type={"text"}
            autoFocus={false}
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search here........."
            sx={{
              width: "100%",
              color: "primary.text",
              border: 1,
              borderColor: "primary.main",
              height: "3.rem",
              p: 1.5,
              borderRadius: 2,
              boxShadow:
                " rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;",
            }}
            InputProps={{
              disableUnderline: true, // <== added this
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Container>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
      )}
    </>
  );
};

export default Feed;
