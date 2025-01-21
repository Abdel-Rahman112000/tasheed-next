import { Stack } from "@mui/material";
import Slider from "./_sections/slider";
import UnitDetails from "./_sections/details";
import { Unit } from "@/types/common/Project";

function SingleUnit({ main, unit }: Props) {
  return (
    <Stack spacing={4}>
      <Slider unit={unit} />
      <UnitDetails withCompare={main} unit={unit} />
    </Stack>
  );
}

type Props = {
  main?: boolean;
  unit: Unit;
};

export type WithUnitProps = {
  unit: Unit;
};

export default SingleUnit;
