import { TeamMember } from "@/types/request/team";
import { Box, Grid, Typography } from "@mui/material";

function ManagerCard({ reversed, member }: Props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        [reversed ? "borderTopLeftRadius" : "borderTopRightRadius"]: 64,
        [!reversed ? "borderBottomLeftRadius" : "borderBottomRightRadius"]: 64,
        height: { xs: "fit-content", md: 422 },
        mt: { xs: "80px", md: "200px" },
        p: { xs: 4, md: 0 },
        pb: { xs: 0 },
        px: { md: 8 },
      }}
    >
      <Grid
        container
        direction={{
          xs: "column-reverse",
          md: reversed ? "row" : "row-reverse",
        }}
        sx={{ height: 1, width: 1 }}
      >
        <Grid
          item
          md={6}
          sx={{ position: "relative", height: { xs: "550px", md: 1 } }}
        >
          <Box
            component="img"
            src={member.media?.[0]?.original_url || ""}
            alt="manager image"
            sx={{
              height: { xs: 1, md: "110%", lg: "135%" },
              position: "absolute",
              bottom: 0,
              width: { xs: 1, md: "unset" },
              maxWidth: { xs: 1, md: "unset" },
              objectFit: "contain",
              objectPosition: "bottom",
              [reversed ? "left" : "right"]: 0,
            }}
          />
        </Grid>
        <Grid item md={6} sx={{ height: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: 1,
              height: 1,
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 4,
              ".MuiTypography-root": {
                width: 1,
              },
            }}
          >
            <Typography
              variant="h3"
              textTransform="uppercase"
              gutterBottom
              textAlign={reversed ? "end" : "start"}
            >
              {member.name}
            </Typography>
            <Typography
              variant="h5"
              textTransform="uppercase"
              fontWeight={300}
              gutterBottom
              textAlign={reversed ? "end" : "start"}
            >
              {member.job_name}
            </Typography>
            <Typography textAlign={reversed ? "end" : "start"}>
              {member.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

type Props = {
  reversed?: boolean;
  member: TeamMember;
};

export default ManagerCard;
