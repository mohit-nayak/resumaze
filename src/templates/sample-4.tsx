import React from "react";
import { TemplateProps } from "@/lib/resumaze/types";

const Sample = (props: TemplateProps) => {
  return (
    <div className="container min-h-32 w-full max-w-4xl border border-gray-200 bg-white p-8 text-left">
      <h2 className="mb-10 text-4xl font-bold text-gray-400">{props?.name}</h2>

      <div className="flex flex-col gap-y-8 text-sm text-gray-500">
        <div>
          <div className="mb-3 w-max">
            <h5 className="mb-0.5 w-max text-base font-bold uppercase tracking-wide text-gray-900">
              Professional Summary
            </h5>
            <div className="h-0.5 bg-gray-300" />
          </div>
          <p>{props?.professionalSummary}</p>
        </div>

        <div>
          <div className="mb-3 w-max">
            <h5 className="mb-0.5 w-max text-base font-bold uppercase tracking-wide text-gray-900">
              Skills
            </h5>
            <div className="h-0.5 bg-gray-300" />
          </div>
          <p>
            List your job skills as a list with bullet points, making it simple
            for employers to review.
          </p>
          <div className="mt-3 flex items-stretch gap-2">
            {props?.skills?.map((skill, index) => (
              <div key={index} className="rounded-md bg-gray-200 p-3">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 w-max">
            <h5 className="mb-0.5 w-max text-base font-bold uppercase tracking-wide text-gray-900">
              Experience
            </h5>
            <div className="h-0.5 bg-gray-300" />
          </div>
          <p className="mb-4">{props.experienceRecords?.description}</p>
          <div className="space-y-4">
            {props?.experienceRecords?.experiences?.map((experience, index) => (
              <div key={index}>
                <h6 className="mb-1 font-bold uppercase">
                  {experience.position}
                </h6>
                <p className="mb-2">
                  <span className="text-gray-600">
                    {experience.companyName},
                  </span>{" "}
                  <span>Dates employed {experience.datesEmployed}</span>
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 w-max">
            <h5 className="mb-0.5 w-max text-base font-bold uppercase tracking-wide text-gray-900">
              Education
            </h5>
            <div className="h-0.5 bg-gray-300" />
          </div>
          <p className="mb-4">{props?.educationRecords?.description}</p>
          <div className="space-y-4">
            {props?.educationRecords?.education?.map((education, index) => (
              <div key={index} className="space-y-1">
                <p className="font-bold">
                  {education.degree}, {education.city}, {education.state}
                </p>
                <p>
                  {education.schoolName}, Date of Graduation:{" "}
                  {education.passingDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
