import { Container, Grid } from "@mui/material";
import Message from "./_components/Message";
import ContactForm from "./_components/Form";
import { WithContactProps } from "../../page";

function ContactFormSection({ contact }: WithContactProps) {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Message />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContactFormSection;
