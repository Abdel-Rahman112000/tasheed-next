"use client";

import GetProject from "@/utils/api/get/project";
import GetProjectsPageData from "@/utils/api/get/projects-page";
import getUnit from "@/utils/api/get/unit";
import { useQuery } from "@tanstack/react-query";
import { useQueryState } from "nuqs";
import { useContext, useEffect, useState } from "react";
import { CompareContext } from "../../_providers/ToggleCompare";

function useCompareHooks() {
  const { compareMode } = useContext(CompareContext);

  const [unitId, setUnitId] = useQueryState("compareWith");
  const [projectId, setProjectId] = useState<number | string | null>(null);
  const allProjectsQuery = useQuery({
    queryKey: ["all-projects"],
    async queryFn() {
      return await GetProjectsPageData();
    },
  });
  const selectedProjectQuery = useQuery({
    queryKey: ["selected-project", projectId],
    async queryFn() {
      if (!projectId) return null;
      return await GetProject(projectId);
    },
  });
  const selectedUnitQuery = useQuery({
    queryKey: ["selected-unit", unitId],
    async queryFn() {
      if (!unitId) return null;
      return await getUnit(unitId);
    },
  });

  useEffect(() => {
    if (!compareMode) {
      setTimeout(() => {
        setUnitId(null);
        setProjectId(null);
      }, 1000);
    }
  }, [compareMode]);

  return {
    projectId,
    setProjectId,
    unitId,
    setUnitId,
    allProjectsQuery,
    selectedProjectQuery,
    selectedUnitQuery,
  };
}

export type useCompareType = ReturnType<typeof useCompareHooks>;

export default useCompareHooks;
