"use client";

import {
  Container,
  Grid,
  GridProps,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import SectionFloatingTitle from "@/components/SectionFloatingTitle";
import { ReactNode } from "react";
import ItalicTypography from "@/components/ItalicTypography";
import { motion } from "framer-motion";
import { WithAboutProps } from "../../page";

// Reusable GridItem component
const GridItem = (props: GridProps) => (
  <Grid item xs={6} md={12 / 5} {...props} />
);

type ValueItemProps = {
  icon?: ReactNode;
  name: string;
  value: string;
  last?: boolean;
};

// ValueItem component displays an icon, value, and name
const ValueItem = ({ name, value, last, icon }: ValueItemProps) => {
  const delay = Math.random() * 0.4;
  return (
    <Stack alignItems="center" direction="row">
      {
        <motion.div
          style={{ flexGrow: 1 }}
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
        >
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>{icon}</Grid>
            <Grid item>
              <ItalicTypography
                variant="h4"
                display="flex"
                alignItems="center"
                textAlign="center"
              >
                {value}
              </ItalicTypography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                display="flex"
                alignItems="center"
                textAlign="center"
              >
                {name}
              </Typography>
            </Grid>
          </Grid>
        </motion.div>
      }
      {!last && (
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            borderColor: "text.primary",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        />
      )}
    </Stack>
  );
};

// Benefits component displays a list of ValueItem components
function Benefits({ about }: WithAboutProps) {
  const items: ValueItemProps[] = about.Benefit.map((benefit, index, arr) => ({
    name: benefit.title,
    value: benefit.description,
    icon: benefit.media?.[0] && (
      <img
        src={benefit.media[0].original_url}
        height={32}
        alt={`${benefit.title} icon`}
      />
    ),
    last: index === arr.length - 1,
  }));

  return (
    <SectionFloatingTitle title="BENEFITS">
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent={{ xs: "start", md: "center" }}
          rowSpacing={{
            xs: 6,
            md: 1,
          }}
        >
          {items.map((item, index) => (
            <GridItem key={index}>
              <ValueItem {...item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </SectionFloatingTitle>
  );
}

export default Benefits;
