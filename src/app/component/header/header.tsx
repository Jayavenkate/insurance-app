"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBarWraper,
  ButtonContainer,
  ButtonWraper,
  DivWraper,
  RightButton,
  TitleContainer,
} from "./header.styled";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

function Header() {
  const [data, setData] = useState([]);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "https://insuranceapp.onrender.com/api/homepages?populate=*",
          {
            headers: {
              Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            },
          }
        );

        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  const renderButton = (item: any) => {
    return (
      <>
        <ButtonWraper>
          {item?.attributes.navbars.data[0]?.attributes.menu1}
        </ButtonWraper>
        <ButtonWraper>
          {item?.attributes.navbars.data[0]?.attributes.menu2}
        </ButtonWraper>
        <ButtonWraper>
          {item?.attributes.navbars.data[0]?.attributes.menu3}
        </ButtonWraper>
        <ButtonWraper>
          {item?.attributes.navbars.data[0]?.attributes.menu4}
        </ButtonWraper>
        <ButtonWraper>
          {item?.attributes.navbars.data[0]?.attributes.menu5}
        </ButtonWraper>
        <ButtonWraper>
          <SearchIcon />
        </ButtonWraper>
      </>
    );
  };
  return (
    <DivWraper>
      {data.map((item: any, id: number) => (
        <AppBarWraper position="fixed" key={id}>
          <Toolbar>
            <TitleContainer variant="h6">
              <img src="./image/Logo.png" alt="" />
            </TitleContainer>
            <ButtonContainer>
              {renderButton(item)}
              <RightButton>
                {item?.attributes.navbars.data[0]?.attributes.startbutton}
              </RightButton>
            </ButtonContainer>
            <Box sx={{ display: { xs: "block", md: "none" }, color: "black" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {renderButton(item)}
                  {item?.attributes.navbars.data[0]?.attributes.startbutton}
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBarWraper>
      ))}
    </DivWraper>
  );
}
export default Header;

