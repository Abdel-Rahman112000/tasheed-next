"use client";

import { Container, Grid, GridProps, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SectionFloatingTitle from "@/components/SectionFloatingTitle";
import CountUp from "react-countup";
import { WithAboutProps } from "../../page";
import { ReactNode } from "react";

const GridItem = (props: GridProps) => <Grid item xs={12} md={4} {...props} />;

const ValueItem = ({ name, value }: ValueItemProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Typography
      variant="h2"
      textAlign={"center"}
      display={"flex"}
      alignItems={"center"}
      sx={({ typography }) => ({
        fontSize: {
          xs: typography.h4.fontSize,
          md: typography.h2.fontSize,
        },
      })}
    >
      <span>
        {typeof value === "number" ? (
          <CountUp end={value} duration={2} enableScrollSpy scrollSpyOnce />
        ) : (
          value
        )}
      </span>
      {/* <span>
        <AddIcon
          sx={{ fontSize: { xs: 24, md: 32, lg: 40 } }}
          color="secondary"
        />
      </span> */}
    </Typography>
    <Typography
      variant="h4"
      display={"flex"}
      textAlign={"center"}
      alignItems={"center"}
      sx={({ typography }) => ({
        fontSize: {
          xs: typography.h6.fontSize,
          md: typography.h4.fontSize,
        },
      })}
    >
      {name}
    </Typography>
  </div>
);
type ValueItemProps = {
  name: string;
  value: ReactNode;
};
function Breif({ about }: WithAboutProps) {
  return (
    <SectionFloatingTitle title="ABOUT US">
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <div>
            <Typography
              variant="body1"
              textAlign={"center"}
              component="div"
              dangerouslySetInnerHTML={{ __html: about.description || "" }}
            ></Typography>
          </div>
          <div>
            <Grid
              container
              columnSpacing={{
                xs: 2,
                md: 6,
              }}
              rowSpacing={3}
            >
              <GridItem>
                <ValueItem name="Projects" value={about.projects} />
              </GridItem>
              <GridItem>
                <ValueItem
                  name="Years of Experience"
                  value={about.years_experience}
                />
              </GridItem>
              <GridItem>
                <ValueItem name="Sold Units" value={about.sold_unit} />
              </GridItem>
            </Grid>
          </div>
        </Stack>
      </Container>
    </SectionFloatingTitle>
  );
}

export default Breif;
