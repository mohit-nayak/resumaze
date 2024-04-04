import SampleTemplatePreview from "@/components/samples/sample-template-preview";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function TemplatePreview({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;
  if (!slug) {
    return (
      <div className="p-6 text-center">
        <h6>Invalid template URL!</h6>
      </div>
    );
  }

  return (
    <div className="py-6 text-center">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <h1 className="text-center text-3xl font-bold">
          Preview {params.slug}
        </h1>
        <Link
          href={`/editor/${params.slug}`}
          className="flex w-max items-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-white"
        >
          <PencilIcon className="h-4 w-4" />
          Edit
        </Link>
      </div>
      <div className="p-6">
        <SampleTemplatePreview templateSlug={params?.slug} />
      </div>
    </div>
  );
}
