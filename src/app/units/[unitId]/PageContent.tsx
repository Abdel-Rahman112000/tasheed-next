"use client";

import { Stack } from "@mui/material";
import SingleUnit from "./_components/Unit/Unit";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CompareContext } from "./_providers/ToggleCompare";
import SecondTab from "./_components/SecondTab";
import { Unit } from "@/types/common/Project";
import CompareSteps from "./_components/CompareSteps";

export function UnitPageContent({ unit }: Props) {
  const { compareMode } = useContext(CompareContext);
  return (
    <div>
      <Stack direction={"row"} width={1}>
        <motion.div
          style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
          animate={
            compareMode
              ? { paddingLeft: 24, paddingRight: 24, width: "50%" }
              : {}
          }
        >
          {unit && <SingleUnit main unit={unit} />}
        </motion.div>
        <motion.div
          style={{ width: "100%", paddingLeft: 0, paddingRight: 0 }}
          animate={
            compareMode
              ? { paddingLeft: 24, paddingRight: 24, width: "50%" }
              : {
                  width: 0,
                }
          }
        >
          <SecondTab>{<CompareSteps key={`compareMode`} />}</SecondTab>
        </motion.div>
      </Stack>
    </div>
  );
}

type Props = {
  unit: Unit;
};
