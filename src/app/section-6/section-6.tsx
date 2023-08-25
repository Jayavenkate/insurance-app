import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Description,
  Divwrapper,
  GridContainer,
  GridWrapper,
  Header,
  Title,
} from "./section-6.styled";

const SectionSix = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/homepages?populate=*",
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
      {data.map((item: any,id:number) => (
        <div key={id}>
          <Title>{item?.attributes.section_6s.data[0]?.attributes.title}</Title>
          <Grid container spacing={2} sx={{ marginTop: "40px" }}>
            <GridContainer item xs={12} md={6}>
              <img src="./image/section-6.png" />
            </GridContainer>
            <GridWrapper item xs={12} md={6}>
              <div>
                <Divwrapper>
                  <div>
                    <img src="./image/checklisticon.png" alt="" />
                  </div>
                  <div>
                    <Header>
                      {item?.attributes.section_6s.data[1]?.attributes.header}
                    </Header>
                    <Description>
                      {
                        item?.attributes.section_6s.data[1]?.attributes
                          .description
                      }
                    </Description>
                  </div>
                </Divwrapper>
                <Divwrapper>
                  <div>
                    <img src="./image/checklisticon.png" alt="" />
                  </div>
                  <div>
                    <Header>
                      {item?.attributes.section_6s.data[2]?.attributes.header}
                    </Header>
                    <Description>
                      {
                        item?.attributes.section_6s.data[2]?.attributes
                          .description
                      }
                    </Description>
                  </div>
                </Divwrapper>
                <Divwrapper>
                  <div>
                    <img src="./image/checklisticon.png" alt="" />
                  </div>
                  <div>
                    <Header>
                      {item?.attributes.section_6s.data[3]?.attributes.header}
                    </Header>
                    <Description>
                      {
                        item?.attributes.section_6s.data[3]?.attributes
                          .description
                      }
                    </Description>
                  </div>
                </Divwrapper>
                <Divwrapper>
                  <div>
                    <img src="./image/checklisticon.png" alt="" />
                  </div>
                  <div>
                    <Header>
                      {item?.attributes.section_6s.data[4]?.attributes.header}
                    </Header>
                    <Description>
                      {
                        item?.attributes.section_6s.data[4]?.attributes
                          .description
                      }
                    </Description>
                  </div>
                </Divwrapper>
              </div>
            </GridWrapper>
          </Grid>
        </div>
      ))}
    </>
  );
};
export default SectionSix;
