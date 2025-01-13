import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { WithUnitProps } from "../../../Unit";

const SpecItem = ({ icon, name, value }: SpecItemProps) => (
  <Typography
    display={"flex"}
    alignItems={"center"}
    width={"fit-content"}
    gap={0.5}
    fontWeight={700}
  >
    <span>{icon}</span>
    <span>{value}</span>
    <span>{name}</span>
  </Typography>
);
type SpecItemProps = {
  name: string;
  value: string;
  icon?: ReactNode;
};

const IconImage = (
  <img
    src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/home-page-white-icon.png"
    style={{ height: 24 }}
    alt=""
  />
);

function Specifications({ unit }: WithUnitProps) {
  return (
    <Stack gap={4} flexWrap="wrap" direction={"row"}>
      {unit.data?.map(({ room_name, room_number }) => (
        <SpecItem
          key={`${room_name}-${room_number}`}
          name={room_name}
          value={room_number}
        />
      ))}
    </Stack>
  );
}

export default Specifications;
