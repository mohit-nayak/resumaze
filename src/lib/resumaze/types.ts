export type TemplateProps = {
  name?: string;
  professionalSummary?: string;
  skills?: string[];
  experienceRecords?: {
    description?: string;
    experiences?: Experience[];
  };
  educationRecords?: {
    description?: string;
    education?: Education[];
  };
};

export type Experience = {
  position: string;
  companyName: string;
  datesEmployed: string;
  responsibilities: string[];
};

export type Education = {
  degree: string;
  city: string;
  state: string;
  schoolName: string;
  passingDate: string;
};

export type Sample = {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  description: string;
};
