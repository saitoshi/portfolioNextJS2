export interface IProject {
  _id?: string;
  id: string;
  title: string;
  date: string;
  category: string[];
  image: string[];
  thumbnail: string;
  purpose: string;
  requirements: string[];
  steps?: {
    planning?: string;
    research?: string;
    development?: string;
    design?: string;
    testing?: string;
    maintenance?: string;
  };
  tasks?: string[];
  markdownfile?: string;
  description?: string;
  links?: {
    organization?: string;
    github?: string;
    site?: string;
    writeup?: string;
  };
  jpnAvailable?: boolean;
  nextSteps?: string[];
  comment?: string[];
}

export interface IBlog {
  id: string;
  _id?: string;
  title: string;
  date: string;
  category: string[];
  markdownFile: string;
  description: string;
  thumbnail: string;
  paragraphs?: string[];
  image?: string[];
}

export interface IExperience {
  title: string;
  period: string;
  company: string;
  description: string;
  skills?: string[];
}
