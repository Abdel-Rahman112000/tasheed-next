import GridWithRatio from "@/components/GridWithRatio";
import ShowTitleOnHover from "@/components/ShowTitleOnHover";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Unit } from "@/types/common/Project";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CompareContext } from "../../context";

function SelectUnitStep({ units }: Props) {
  const { setUnitId } = useContext(CompareContext);

  return (
    <Stack spacing={2}>
      <Typography variant="h3">SELECT UNIT</Typography>
      <GridWithRatio
        items={units.map((unit) => ({
          children: (
            <ShowTitleOnHover
              label={<Typography variant="h6">{unit.title}</Typography>}
            >
              <Box
                component={Button}
                onClick={() => {
                  setUnitId(unit.id.toString());
                }}
                sx={{ width: 1, height: 1 }}
              >
                <img
                  style={IMAGE_FIT_STYLES}
                  src={unit.media?.[0]?.original_url}
                  alt="unitImage"
                />
              </Box>
            </ShowTitleOnHover>
          ),
          key: unit.id,
        }))}
      />
    </Stack>
  );
}

type Props = {
  units: Unit[];
};

export default SelectUnitStep;
