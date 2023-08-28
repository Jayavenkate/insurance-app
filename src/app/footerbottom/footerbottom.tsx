"use client";
import React, { useEffect, useState } from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { GridRightWrapper } from "./footerbottom.styled";
import axios from "axios";

function Footerbottom() {
  const [data, setData] = useState([]);
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
  return (
    <>
      {data.map((item: any, id: number) => (
        <GridRightWrapper key={id}>
          {item?.attributes.footers.data[0].attributes.footerbottomcontent}
        </GridRightWrapper>
      ))}
    </>
  );
}
export default Footerbottom;
