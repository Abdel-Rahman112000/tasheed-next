import { Box, Container, Stack } from "@mui/material";
import Specifications from "./components/Specifications";
import RoundedButton from "@/components/RoundedButton";
import Description from "./components/Description";
import Features from "./components/Features";
import { useContext } from "react";
import { CompareContext } from "@/app/units/[unitId]/_providers/ToggleCompare";
import { Unit } from "@/types/common/Project";
import { WithUnitProps } from "../../Unit";

function UnitDetails({ withCompare, unit }: Props) {
  const { setCompareMode } = useContext(CompareContext);

  return (
    <div>
      <Container maxWidth="xl">
        <Stack spacing={12}>
          <Stack direction={"row"} spacing={4}>
            <Box flexGrow={1}>
              <Specifications unit={unit} />
            </Box>
            {withCompare && (
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <RoundedButton
                  color="secondary"
                  onClick={() => setCompareMode(true)}
                >
                  COMPARE
                </RoundedButton>
              </Box>
            )}
          </Stack>
          <Description unit={unit} />
          <Features unit={unit} />
        </Stack>
      </Container>
    </div>
  );
}

type Props = {
  withCompare?: boolean;
} & WithUnitProps;

export default UnitDetails;
