import AspectRatio from "@/components/AspectRatio";
import { Card, Grid, GridProps, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { WithUnitProps } from "../../../../Unit";

const FeatureCard = ({ icon, name }: FeatureCardProps) => (
  // <AspectRatio>
  <Card
    variant="outlined"
    sx={{
      borderColor: "text.disabled",
      borderWidth: 2,
      p: 2,
      py: 4,
      height: 1,
      width: 1,
    }}
  >
    <Stack alignItems="center" justifyContent="center" height={1} gap={1}>
      {icon}
      <Typography variant="body2" fontWeight={700}>
        {name}
      </Typography>
    </Stack>
  </Card>
  // </AspectRatio>
);
type FeatureCardProps = {
  icon: ReactNode;
  name: string;
};

const ImageIcon = (
  <img
    src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png"
    alt="image"
    style={{ height: 32 }}
  />
);

const GridItem = (props: GridProps) => (
  <Grid item xs={4} md={3} lg={2} {...props} />
);

function Features({ unit }: WithUnitProps) {
  return (
    <Stack>
      <Typography variant="h2" gutterBottom>
        FEATURES
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 2, md: 4, lg: 8 }}
        rowSpacing={{ xs: 1, md: 2, lg: 4 }}
        justifyContent={"center"}
      >
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
        <GridItem>
          <FeatureCard icon={ImageIcon} name="Test" />
        </GridItem>
      </Grid>
    </Stack>
  );
}

export default Features;
