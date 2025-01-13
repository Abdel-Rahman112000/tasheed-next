import { Box } from "@mui/material";
import { WithContactProps } from "@/app/contact/page";
function GridImages({ contact }: WithContactProps) {
  return (
    <Box width={1}>
      <img
        src={contact.media?.[0]?.original_url}
        style={{ width: "100%" }}
        alt=""
      />
    </Box>
  );
}

export default GridImages;
