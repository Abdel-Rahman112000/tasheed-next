"use client";

import {
  Box,
  Container,
  Grid,
  GridProps,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import CinzelAddLabelToEl from "../AddLabelToEl/CinzelAddLabelToEl";
import { ReactNode } from "react";
import logo from "@/assets/images/logo-footer.png";
import Links from "./Links";
import NewsLetter from "./NewsLetter";
import { useContact } from "@/hooks/contactProvider";

export const SectionItem = ({ label, children }: SectionItemProps) => (
  <CinzelAddLabelToEl
    labelTypographyProps={{ variant: "h6", fontWeight: 400, mb: 3 }}
    label={label}
  >
    {children}
  </CinzelAddLabelToEl>
);

const GridItem = (props: GridProps) => (
  <Grid item xs={12} md={6} lg={4} {...props} />
);
export type SectionItemProps = {
  children: ReactNode;
  label: string;
};

function Footer() {
  const { data } = useContact();

  return (
    <Box
      component="footer"
      mt={6}
      py={12}
      sx={{ bgcolor: "background.darkest" }}
    >
      <Container maxWidth="xl">
        <Grid spacing={2} rowSpacing={12} container>
          <GridItem>
            <img src={logo.src} alt="tasheed logo" style={{ width: 125 }} />
          </GridItem>
          <GridItem>
            <Links />
          </GridItem>
          <GridItem>
            <NewsLetter />
          </GridItem>
          <GridItem>
            <Stack alignItems={"center"}>
              <Link
                href={`mailto:${data?.email_us}`}
                variant="h5"
                color={"text.primary"}
                fontWeight={500}
              >
                {data?.email_us}
              </Link>
            </Stack>
          </GridItem>
          <GridItem>
            <GridItem>
              <Stack alignItems={"center"}>
                {data?.call_us?.map((link) => (
                  <Link
                    key={link}
                    variant="h5"
                    color={"text.primary"}
                    fontWeight={500}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </GridItem>
          </GridItem>
          <GridItem>
            <Typography variant="body2" color={"text.secondary"}>
              © 2020 EK21. All rights reserved.
            </Typography>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
