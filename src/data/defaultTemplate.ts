import { TemplateProps } from "@/lib/resumaze/types";

const defaultTemplateData: TemplateProps = {
  name: "Name here",
  professionalSummary:
    "Summarize your work experience by listing each job and your responsibilities in 2-3 lines. Start with your most recent job and work backwards using the format below.",
  skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  experienceRecords: {
    description:
      "Write a short overview of your jobs, including what you did at each one in 2-3 lines. Begin with the job you had last and go back from there, following this layout.",
    experiences: [
      {
        position: "JOB TITLE 1",
        companyName: "Company name",
        datesEmployed: "10/2022 - 04/2023",
        responsibilities: [
          "Responsibilities",
          "Responsibilities",
          "Responsibilities",
        ],
      },
      {
        position: "JOB TITLE 1",
        companyName: "Company name",
        datesEmployed: "03/2020 - 08/2022",
        responsibilities: [
          "Responsibilities",
          "Responsibilities",
          "Responsibilities",
        ],
      },
    ],
  },
  educationRecords: {
    description:
      "List your highest education level, the name of your school, and when you finished. If you don't have a degree, mention any classes or training you've taken that apply to the job you want.",
    education: [
      {
        degree: "DEGREE IN FIELD OF STUDY",
        city: "City",
        state: "State",
        schoolName: "School Name",
        passingDate: "09/2017",
      },
      {
        degree: "DEGREE IN FIELD OF STUDY",
        city: "City",
        state: "State",
        schoolName: "School Name",
        passingDate: "09/2017",
      },
    ],
  },
} as const;

export default defaultTemplateData;
