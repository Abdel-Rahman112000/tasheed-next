import { Media } from "@/types/common/Media";

export interface TeamPageGetRoot {
  meet_team_page: MeetTeamPage;
  our_team: TeamMember[];
  teams: TeamMember[];
}

export interface MeetTeamPage {
  id: number;
  title: string;
  description: string;
  file_type: string;
  created_at: string;
  updated_at: string;
  pictures: any[];
  media: Media[];
}

export interface TeamMember {
  id: number;
  name: string;
  job_name: string;
  job_rank: string;
  description: string;
  created_at: string;
  updated_at: string;
  in_page: number;
  pictures: any[];
  media: Media[];
}
