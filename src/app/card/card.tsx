"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardWrapper,
  DivWrapper,
  ImageWrapper,
} from "./card.styled";
import {
  Description,
  DivContainer,
  GridWrapper,
  RigtContentHeader,
} from "../content/content.styled";

function Card() {
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
    <div>
      {data.map((item: any, id: number) => (
        <CardWrapper key={id}>
          <DivWrapper>
            <DivContainer>
              <CardHeader>
                {item?.attributes.section_3s.data[0]?.attributes.header}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[0]?.attributes.description}
              </CardDescription>
            </DivContainer>
            <ImageWrapper src="./image/card-1.png" />
          </DivWrapper>
          <DivWrapper>
            <DivContainer>
              <CardHeader>
                {item?.attributes.section_3s.data[1]?.attributes.header}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[1]?.attributes.description}
              </CardDescription>
            </DivContainer>
            <ImageWrapper src="./image/card-2.png" />
          </DivWrapper>
          <DivWrapper>
            <DivContainer>
              <CardHeader>
                {item?.attributes.section_3s.data[2]?.attributes.header}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[2]?.attributes.description}
              </CardDescription>
            </DivContainer>
            <ImageWrapper src="./image/card-3.png" />
          </DivWrapper>
        </CardWrapper>
      ))}
    </div>
  );
}
export default Card;
