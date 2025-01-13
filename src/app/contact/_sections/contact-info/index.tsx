import { Box, Container, Grid, Stack } from "@mui/material";
import Info from "./_components/Info";
import GridImages from "./_components/GridImages";
import { WithContactProps } from "../../page";

function ContactInfoSection({ contact }: WithContactProps) {
  return (
    <Box bgcolor={"background.paper"} py={8}>
      <Container maxWidth={"xl"}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Info contact={contact} />
          </Grid>
          <Grid item xs={12} md={6}>
            <GridImages contact={contact} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactInfoSection;
