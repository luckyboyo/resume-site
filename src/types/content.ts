export type EducationItem = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  detail?: string;
  tags?: string[];
  image?: string;
  logo?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  highlights: string[];
  architecture: string[];
  technologies: string[];
  repositoryUrl?: string;
};

export type SkillGroup = {
  label: string;
  skills: string[];
};
