"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardWrapper,
  ImageWrapper,
} from "./card.styled";

function Card() {
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
    <div>
      {data.map((item: any) => (
        <CardWrapper >
          <div>
            <CardContainer style={{ position: "absolute" }}>
              <CardHeader>
                {item?.attributes.section_3s.data[0]?.attributes.title}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[0]?.attributes.description}
              </CardDescription>
            </CardContainer>
            <ImageWrapper src="./image/card-1.png" />
          </div>

          <div>
            <CardContainer style={{ position: "absolute" }}>
              <CardHeader>
                {item?.attributes.section_3s.data[1]?.attributes.title}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[1]?.attributes.description}
              </CardDescription>
            </CardContainer>
            <ImageWrapper src="./image/card-2.png" />
          </div>
          <div>
            <CardContainer style={{ position: "absolute" }}>
              <CardHeader>
                {item?.attributes.section_3s.data[2]?.attributes.title}
              </CardHeader>
              <CardDescription>
                {item?.attributes.section_3s.data[2]?.attributes.description}
              </CardDescription>
            </CardContainer>
            <ImageWrapper src="./image/card-3.png" />
          </div>
        </CardWrapper>
      ))}
    </div>
  );
}
export default Card;
