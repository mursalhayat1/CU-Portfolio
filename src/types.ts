export interface Project {
  id: string;
  title: string;
  year: string;
  subtitle: string;
  coverImage: string;
  role: string;
  client: string;
  timeline: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  impact: string;
}

export interface ClientLogo {
  name: string;
  logoUrl: string;
  industry: string;
}

export interface SocialLink {
  label: string;
  url: string;
}
