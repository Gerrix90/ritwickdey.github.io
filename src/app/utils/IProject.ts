export interface IProject {
  id: number | string;
  name: string;
  description: string;
  projectLink: string;
  liveUrl?: string;
  features?: string[];
  tags: string[];
  techStuff: string[];
  additionalData?: { title: string; data: string[] }[];
}
