import { Grid } from "@mui/material";
import DirectorCard from "./DirectorCard";
import { WithTeamProps } from "../../page";

function BoardOfDirectors({ team: { teams } }: WithTeamProps) {
  return (
    <Grid container spacing={2}>
      {teams.map((member) => (
        <Grid key={member.id} item xs={12} md={6} lg={4}>
          <DirectorCard member={member} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BoardOfDirectors;
