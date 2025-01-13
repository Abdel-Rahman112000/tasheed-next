import { Grid } from "@mui/material";
import { WithProjectProps } from "../../page";
import LocationInfo from "./components/LocationInfo";
import AspectRatio from "@/components/AspectRatio";
import LocationMap from "./components/LocationMap";

function Location({ project }: WithProjectProps) {
  return (
    <>
      <div>
        <Grid container columnSpacing={20} rowSpacing={2}>
          <Grid item xs={12} md={6}>
            <LocationInfo project={project} />
          </Grid>
          <Grid item xs={12} md={6}>
            <AspectRatio ratio={4 / 3}>
              <LocationMap project={project} />
            </AspectRatio>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Location;
