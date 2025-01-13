import { Typography } from "@mui/material";

function Message() {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Have a project! <br /> Let&apos;s discuss{" "}
      </Typography>
      <Typography variant="h5" fontWeight={300}>
        Thank you for getting in touch!
        <br /> Kindly.
        <br /> Fill the form, have a great day!
      </Typography>
    </div>
  );
}

export default Message;
