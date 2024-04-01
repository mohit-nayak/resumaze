import dynamic from "next/dynamic";
import samplesData from "@/data/templates";
import React from "react";
import TemplateSkeleton from "@/app/editor/_components/template-skeleton";
import { Sample, TemplateProps } from "@/lib/resumaze/types";
import defaultTemplateData from "@/data/defaultTemplate";

const SampleTemplatePreview = ({ templateSlug }: { templateSlug: string }) => {
  const data = samplesData?.find(
    (sample: Sample) => sample.slug === templateSlug,
  );
  const componentName = data?.slug ?? "sample-1";
  const SampleComponent = dynamic<TemplateProps>(
    () => import(`@/templates/${componentName}.tsx`),
    { loading: () => <TemplateSkeleton /> },
  );

  return (
    <div className="flex w-full justify-center">
      <SampleComponent {...defaultTemplateData} />
    </div>
  );
};

export default SampleTemplatePreview;
