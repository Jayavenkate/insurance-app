"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {
  ButtonContainer,
  ButtonWraper,
  RightButton,
  TitleContainer,
} from "./header.styled";

function Header() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/navbars?populate=*",
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
  return (
    <div style={{ padding: "10px 0px", margin: "10px 0px" }}>
      {data.map((item: any) => (
        <AppBar sx={{ background: "none", boxShadow: "none" }} position="fixed">
          <Toolbar>
            <TitleContainer variant="h6">
             <img src="./image/Logo.png" alt="" />
            </TitleContainer>
            <ButtonContainer>
              <ButtonWraper>
                {item?.attributes.menubuttons.data[0]?.attributes.Button1}
              </ButtonWraper>
              <ButtonWraper>
                {item?.attributes.menubuttons.data[0]?.attributes.Button2}
              </ButtonWraper>
              <ButtonWraper>
                {item?.attributes.menubuttons.data[0]?.attributes.Button3}
              </ButtonWraper>
              <ButtonWraper>
                {item?.attributes.menubuttons.data[0]?.attributes.Button4}
              </ButtonWraper>
              <ButtonWraper>
                {item?.attributes.menubuttons.data[0]?.attributes.Button5}
              </ButtonWraper>
            </ButtonContainer>
            <ButtonWraper>
              <SearchIcon />
            </ButtonWraper>
            <RightButton>{item?.attributes.startbutton}</RightButton>
          </Toolbar>
        </AppBar>
      ))}
    </div>
  );
}
export default Header;
