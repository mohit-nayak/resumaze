import SampleTemplatePreview from "@/components/samples/sample-template-preview";

export default function TemplatePreview({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="py-6 text-center">
      <h1 className="text-center text-3xl font-bold">
        Preview {params?.slug ?? "Template"}
      </h1>
      <div className="p-6">
        <SampleTemplatePreview templateSlug={params?.slug} />
      </div>
    </div>
  );
}
