import { WithContactProps } from "@/app/[locale]/contact/page";
import { Box } from "@mui/material";
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
