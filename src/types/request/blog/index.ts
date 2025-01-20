import { Media } from "@/types/common/Media";
import { Seo } from "../home";

export interface BlogGetRoot {
  blog: Blog;
}

export interface BlogsGetRoot {
  caver: Cover;
  blogs: Blog[];
}

export interface Cover {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  file_type: string;
  pictures: any[];
  media: Media[];
  seo: Seo;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  descriptions: Description[];
  media: Media[];
  seo: Seo;
}

export interface Description {
  id: number;
  blog_id: number;
  description: string;
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
  descriptions: Description[];
  media: Media[];
}

export interface Description {
  id: number;
  blog_id: number;
  description: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}

export interface BlogType {
  cover: Cover;
  blogs: Blog[];
}
