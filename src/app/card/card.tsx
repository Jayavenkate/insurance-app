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
            <ImageWrapper src="https://5.imimg.com/data5/SELLER/Default/2020/12/WI/VR/VK/118676901/oppo-f17-pro-mobile-500x500.jpg" />
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
            <ImageWrapper src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvA3SGhnwcyzII1CiS0jNSAO3gShgHx7RKw&usqp=CAU" />
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
            <ImageWrapper src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDL_80iuqWrA_UgfNIyYPIFcFoI70Rr--7w&usqp=CAU" />
          </DivWrapper>
        </CardWrapper>
      ))}
    </div>
  );
}
export default Card;
