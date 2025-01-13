import { Media } from "@/types/common/Media";
import { Project } from "@/types/common/Project";

export interface AboutPageGetRoot {
  about: About[];
}

export interface About {
  id: number;
  title: string;
  description: string;
  description_home: string;
  created_at: string;
  updated_at: string;
  file_type: string;
  projects: number;
  years_experience: number;
  sold_unit: number;
  Benefit: Benefit[];
  aboutVision: AboutVision;
  aboutGallery: AboutGallery[];
  mission: Mission;
  ongoing?: Project[];
  pictures: any[];
  media: Media[];
}

export interface Mission {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}
export interface Benefit {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  description: string;
  pictures: any[];
  media: Media[];
}

export interface AboutVision {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  sub_description: string;
  pictures: any[];
  media: Media[];
}

export interface AboutGallery {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}
