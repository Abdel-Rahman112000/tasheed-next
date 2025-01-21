import { motion } from "framer-motion";
import { ReactNode, useContext } from "react";
import { CompareContext } from "../../_providers/ToggleCompare";
import { Fab, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function SecondTab({ children }: { children: ReactNode }) {
  const { compareMode, setCompareMode } = useContext(CompareContext);

  return (
    <motion.div
      style={{ position: "relative" }}
      initial={{ opacity: 0, pointerEvents: "none" }}
      animate={compareMode ? { opacity: 1, pointerEvents: "all" } : {}}
    >
      <Fab
        size="small"
        onClick={() => setCompareMode(false)}
        sx={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          zIndex: 10,
        }}
      >
        <CloseIcon />
      </Fab>
      {children}
    </motion.div>
  );
}

export default SecondTab;
