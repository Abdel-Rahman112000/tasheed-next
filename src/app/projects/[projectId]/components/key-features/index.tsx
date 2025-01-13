import SectionFloatingTitle from "@/components/SectionFloatingTitle";
import { Container, Grid, Typography } from "@mui/material";
import { WithProjectProps } from "../../page";
import { Feature } from "@/types/common/Project";

const KeyFeatureItem = ({ feature }: { feature: Feature }) => (
  <Grid item xs={6} md={4}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={feature.media?.[0]?.original_url}
        height={34}
        alt="feature icon"
      />
      <Typography variant="h6" flexGrow={1}>
        {feature.title}
      </Typography>
    </div>
  </Grid>
);

function KeayFeaturesContainer({ project }: WithProjectProps) {
  if (!project.features?.length) return null;

  return (
    <SectionFloatingTitle title="KEY FEATURES">
      <Container maxWidth="xl">
        <div>
          <Grid container columnSpacing={2} rowSpacing={4}>
            {project.features?.map((feature) => (
              <KeyFeatureItem key={feature.id} feature={feature} />
            ))}
          </Grid>
        </div>
      </Container>
    </SectionFloatingTitle>
  );
}

export default KeayFeaturesContainer;
