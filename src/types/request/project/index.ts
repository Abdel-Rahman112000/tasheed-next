import { Media } from "@/types/common/Media";
import { Project, Unit } from "@/types/common/Project";

export interface UnitGetRequestRoot {
  project_unit: Unit;
}
export interface ProjectGetRequestRoot {
  project: Project;
  cover?: Project;
}
export interface ProjectPageGetRequestRoot {
  projects: Project[];
}

export interface ProjectPageIntroGetRequestRoot {
  project_page: ProjectPage;
}

export interface ProjectPage {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  file_type: any;
  pictures: any[];
  media: Media[];
}
