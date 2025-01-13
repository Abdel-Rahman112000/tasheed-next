import { Media } from "./Media";
import { Pivot } from "./Pivot";

export interface Project {
  id: number;
  title: string;
  description: string;
  sub_title?: string;
  year: string;
  location: string;
  data: string;
  map: string;
  map_description: string;
  adderss: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  telegram?: string;
  created_at: string;
  updated_at: string;
  type: string;
  pictures?: any[];
  features?: Feature[];
  units?: Unit[];
  media?: Media[];
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  pictures?: any[];
  pivot?: Pivot;
  media?: Media[];
}

export interface Unit {
  id: number;
  single_project_id: number;
  data?: Room[];
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  pictures?: any[];
  media?: Media[];
}

export interface Room {
  room_number: string;
  room_name: string;
}
