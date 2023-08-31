import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ButtonWraper,
  Description,
  DivWrapper,
  DivWrapperContenht,
  Frame2description,
  Frame2header,
  Frame5number,
  Frame5text,
  GridRightWrapper,
  GridWrapper,
  Header,
  ImageWrapper,
} from "./section-9.styled";
import Link from "next/link";

const SectionNine = () => {
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
        <Grid container spacing={2} sx={{ marginTop: "50px" }} key={id}>
          <GridWrapper item xs={12} md={6}>
            <Header>
              {item?.attributes.section_9s.data[0].attributes.header}
            </Header>
            <Description>
              {item?.attributes.section_9s.data[0].attributes.description}
            </Description>
            <ImageWrapper src="./image/section9-A.png" />
          </GridWrapper>
          <GridRightWrapper item xs={12} md={6}>
            <ImageWrapper src="./image/section9-B.png" />
            <DivWrapper>
              <div>
                <DivWrapperContenht>
                  <img
                    src="./image/certificate 1.png"
                    style={{ objectFit: "contain" }}
                  />
                  <Frame2header>
                    {
                      item?.attributes.section_9s.data[0].attributes
                        .frame2header
                    }
                  </Frame2header>
                </DivWrapperContenht>
                <Frame2description>
                  {
                    item?.attributes.section_9s.data[0].attributes
                      .frame2description
                  }
                </Frame2description>
              </div>
              <div>
                <DivWrapperContenht>
                  <img
                    src="./image/handshake 1.png"
                    style={{ objectFit: "contain" }}
                  />
                  <Frame2header>
                    {
                      item?.attributes.section_9s.data[0].attributes
                        .frame3header
                    }
                  </Frame2header>
                </DivWrapperContenht>
                <Frame2description>
                  {
                    item?.attributes.section_9s.data[0].attributes
                      .frame3description
                  }
                </Frame2description>
              </div>
            </DivWrapper>
            <DivWrapper>
              <img src="./image/call 1.png" style={{ objectFit: "contain" }} />
              <div>
                <Button variant="text">
                  <Link
                    href="tel:9600405613"

                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "GrayText",
                      cursor: "pointer",
                    }}
                  >
                    <Frame5number>+919894666552</Frame5number>
                  </Link>
                  {/* <Link
                    href="facetime:9600405613"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: "GrayText",
                      cursor: "pointer",
                    }}
                  >
                    <Frame5number>
                    
                      +919600405613
                    </Frame5number>
                  </Link> */}
                </Button>

                <Frame5text>
                  {item?.attributes.section_9s.data[0].attributes.frame5text}
                </Frame5text>
              </div>
            </DivWrapper>
            <Link
              href="https://wa.me/+919894666552?text=Hi"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                gap: "10px",
              }}
            >
              <img
                src="	https://bestmoneygold.in/wp-content/uploads/2023/02/139413-whatsappp-icone-verde.gif"
                alt="whatsapp"
                style={{ width: "50px" }}
              />
              Whatsapp
            </Link>
            <ButtonWraper>
              {item?.attributes.section_9s.data[0].attributes.buttontext}
            </ButtonWraper>
          </GridRightWrapper>
        </Grid>
      ))}
    </>
  );
};
export default SectionNine;
