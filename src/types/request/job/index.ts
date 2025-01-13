export interface CareersGetRoot {
  careers: Career[];
}

export interface Career {
  id: number;
  title: string;
  description: string;
  location: string;
  job_type: string;
  created_at: string;
  updated_at: string;
  jobs: Job[];
}

export interface Job {
  id: number;
  title: string;
  subtitle: string;
  location: string;
  job_type: string;
  salary: string;
  description: string;
  responsibilities: string;
  career_id: number;
  created_at: string;
  updated_at: string;
}
