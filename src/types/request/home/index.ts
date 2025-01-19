import { Media } from "@/types/common/Media";
import { Project } from "@/types/common/Project";
import { About as AboutType } from "../about";

export type About = AboutType;

export interface HomePageGetRequestRoot {
  home: Home[];
  about: About[];
  blogs: Blog[];
  singleProject: Project[];
  featureProject: Project[];
}

export interface Home {
  id: number;
  title: string;
  date: string;
  description: string;
  created_at: string;
  updated_at: string;
  file_type: string;
  pictures: any[];
  media: Media[];
  seo: Seo;
}

export interface AboutGallery {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}

export interface Seo {
  title: string;
  description: string;
  tags: string;
}
