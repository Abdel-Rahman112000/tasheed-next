import { Media } from "@/types/common/Media";
import { Seo } from "../home";

export interface ContactGetRoot {
  contact: Contact;
}

export interface Contact {
  id: number;
  title: string;
  description: string;
  visit_us?: VisitUsLink[];
  email_us: string;
  call_us: string[];
  created_at: string;
  updated_at: string;
  longitude: string;
  latitude: string;
  facebook: any;
  linkedin: any;
  instagram: any;
  twitter: any;
  head_office: any;
  pictures: any[];
  media: Media[];
  seo: Seo;
}

export interface VisitUsLink {
  visit_us: string;
  visit_link: string;
}
