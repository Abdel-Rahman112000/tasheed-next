import GridWithRatio from "@/components/GridWithRatio";
import ShowTitleOnHover from "@/components/ShowTitleOnHover";
import { IMAGE_FIT_STYLES } from "@/constants/image-fit-styles";
import { Project } from "@/types/common/Project";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CompareContext } from "../../context";

function SelectProjectStep({ projects }: Props) {
  const { setProjectId } = useContext(CompareContext);

  return (
    <Stack spacing={2}>
      <Typography variant="h3">SELECT PROJECT</Typography>
      <GridWithRatio
        items={projects.map((project) => ({
          children: (
            <ShowTitleOnHover
              label={<Typography variant="h6">{project.title}</Typography>}
            >
              <Box
                component={Button}
                onClick={() => {
                  setProjectId(project.id);
                }}
                sx={{ width: 1, height: 1 }}
              >
                <img
                  style={IMAGE_FIT_STYLES}
                  src={project.media?.[0]?.original_url}
                  alt="projectImage"
                />
              </Box>
            </ShowTitleOnHover>
          ),
          key: project.id,
        }))}
      />
    </Stack>
  );
}

type Props = {
  projects: Project[];
};

export default SelectProjectStep;
