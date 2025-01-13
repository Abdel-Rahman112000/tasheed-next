"use client";

import { useContext } from "react";
import { CompareContext } from "../context";
import SelectProjectStep from "./select-project";
import SelectUnitStep from "./select-unit";
import SingleUnit from "../../Unit/Unit";

function CompareSteps() {
  const { allProjectsQuery, selectedProjectQuery, selectedUnitQuery } =
    useContext(CompareContext);

  const { data: allProjects } = allProjectsQuery;
  const { data: selectedProject } = selectedProjectQuery;
  const { data: selectedUnit } = selectedUnitQuery;

  if (selectedUnit) return <SingleUnit unit={selectedUnit} />;
  else if (selectedProject && selectedProject?.project.units)
    return <SelectUnitStep units={selectedProject?.project.units} />;
  else if (allProjects)
    return <SelectProjectStep projects={allProjects.projects} />;
  else return <></>;
}

export default CompareSteps;
