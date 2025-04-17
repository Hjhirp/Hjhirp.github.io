export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  medium: string;
  google_scholar: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
  expected_graduation_date?: string;
  graduation_date?: string;
  relevant_coursework?: string[];
  thesis?: string;
  achievements?: string[];
}

export interface TechStack {
  ml_data_tools: string[];
  ci_cd: string[];
  frameworks: string[];
  programming: string[];
  other: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  dates: string;
  stack: string[];
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  tech_stack: string[];
  categories?: string[];
}

export interface PortfolioData {
  personal_information: PersonalInfo;
  summary: string[];
  education: EducationItem[];
  technical_skills: TechStack;
  professional_experience: Experience[];
  projects: Project[];
}
