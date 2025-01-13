"use client";

import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Card, Stack } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useState } from "react";
import { Career } from "@/types/request/job";
import JobCard from "../JobCard";

function JobCategoryAccordion({ career }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack spacing={1}>
      <div>
        <Card
          variant="outlined"
          sx={{
            cursor: "pointer",
            bgcolor: expanded ? "secondary.dark" : undefined,
            transition: "350ms ease-in-out",
          }}
          onClick={() => setExpanded((x) => !x)}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={4}
            width={1}
            p={3}
          >
            <Typography variant="h4" flexGrow={1}>
              {career.title}
            </Typography>
            {expanded ? (
              <RemoveCircleIcon fontSize="large" />
            ) : (
              <AddCircleOutlineIcon fontSize="large" />
            )}
          </Stack>
        </Card>
      </div>
      <div>
        <Accordion
          component={Card}
          variant="outlined"
          expanded={expanded}
          sx={{
            bgcolor: "background.darkest",
            border: "none",
            outline: "none",
          }}
        >
          <AccordionSummary sx={{ display: "none" }} />
          <AccordionDetails
            sx={{
              p: 3,
            }}
          >
            <Stack spacing={2}>
              {career.jobs?.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </div>
    </Stack>
  );
}

type Props = { career: Career };

export default JobCategoryAccordion;
