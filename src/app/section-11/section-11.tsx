import { Button, Card, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Description, Header } from "./section-11.styled";

const SectionEleven = () => {
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
    <>
      {data.map((item: any) => (
        <Card
          sx={{
            backgroundColor: "#B79C75",
            width: "1000px",
            margin: "40px auto",
            borderRadius: "35px",
            height: "230px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <div>
            <Header>
              {item?.attributes.section_11s.data[0].attributes.header}
            </Header>
            <Description>
              {item?.attributes.section_11s.data[0].attributes.description}
            </Description>
          </div>
          <div>
            <input
              type="text"
              placeholder={
                item?.attributes.section_11s.data[0].attributes.buttontext
              }
              style={{
                padding: "10px",
                borderRadius: "20px",
                border: "none",
                width: "200px",
              }}
            />
          </div>
        </Card>
      ))}
    </>
  );
};
export default SectionEleven;
