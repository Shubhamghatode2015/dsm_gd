"use client";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, CardMedia, Container, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";

const Navbaar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem
        component={Link}
        href={"/create-post"}
        onClick={handleMobileMenuClose}
      >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Create post</p>
      </MenuItem>
      <MenuItem
        component={Link}
        href={"/profile"}
        onClick={handleMobileMenuClose}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <NotificationsIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem
        onClick={() => {
          signOut();
          handleMobileMenuClose();
        }}
      >
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "white.main",
          color: "info.main",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Box
                sx={{
                  height: "3rem",
                  maxWidth: "100%",
                  p: 0.3,
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Image
                  src={require("../assets/img/Frame 247.png")}
                  style={{
                    height: "100%",
                    width: "5.5rem",
                  }}
                  title={"DSM-GD"}
                  alt="logo"
                />
                <Typography
                  variant="body1"
                  sx={{ color: "primary.text", fontWeight: 700 }}
                >
                  DSM Group discussion
                </Typography>
              </Box>
            </Link>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {session?.user ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      color: "white.main",
                      "&:hover": {
                        color: "white.main",
                      },
                    }}
                    component={Link}
                    href={"/create-post"}
                  >
                    create post
                  </Button>
                  <Button variant="outlined" color="primary" onClick={signOut}>
                    log out
                  </Button>
                  <Link href={"/profile"}>
                    <Avatar
                      sx={{
                        height: 35,
                        width: 35,
                        border: 0.3,
                        borderColor: "primary.main",
                        cursor: "pointer",
                        boxShadow: 3,
                      }}
                    >
                      <Image
                        // src={require("../assets/img/60.jpg")}
                        src={session?.user.image}
                        alt="..."
                        // style={{ width: "100%", height: "100%" }}
                        width={35}
                        height={35}
                      />
                    </Avatar>
                  </Link>
                </>
              ) : (
                <>
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <Avatar
                        key={provider.name}
                        sx={{
                          height: 35,
                          width: 35,
                          border: 0.3,
                          borderColor: "primary.main",
                          cursor: "pointer",
                          boxShadow: 3,
                        }}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                      />
                    ))}
                </>
              )}
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "none", xl: "none" },
              }}
            >
              {session?.user ? (
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <Badge variant="dot" color="success">
                    <Avatar
                      sx={{
                        height: 35,
                        width: 35,
                        border: 0.3,
                        borderColor: "primary.main",
                        cursor: "pointer",
                        boxShadow: 3,
                      }}
                    >
                      <Image
                        // src={require("../assets/img/60.jpg")}
                        src={session?.user.image}
                        alt="..."
                        // style={{ width: "100%", height: "100%" }}
                        width={35}
                        height={35}
                      />
                    </Avatar>
                  </Badge>
                </IconButton>
              ) : (
                <>
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <Avatar
                        key={provider.name}
                        sx={{
                          height: 35,
                          width: 35,
                          border: 0.3,
                          borderColor: "primary.main",
                          cursor: "pointer",
                          boxShadow: 3,
                        }}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                      />
                    ))}
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {/* 
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div> */}
    </>
  );
};

export default Navbaar;
