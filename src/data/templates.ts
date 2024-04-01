import { Sample } from "@/lib/resumaze/types";

const samplesData: Sample[] = [
  {
    id: "sample-1",
    name: "Sample 1",
    slug: "sample-1",
    thumbnail: "sample-1-thumbnail.png",
    description:
      "You can choose this template to create a create a professional resume.",
  },
  {
    id: "sample-2",
    name: "Sample 2",
    slug: "sample-2",
    thumbnail: "sample-2-thumbnail.png",
    description:
      "You can choose this template to create a create a professional resume.",
  },
  {
    id: "sample-3",
    name: "Sample 3",
    slug: "sample-3",
    thumbnail: "sample-3-thumbnail.png",
    description:
      "You can choose this template to create a create a professional resume.",
  },
  {
    id: "sample-4",
    name: "Sample 4",
    slug: "sample-4",
    thumbnail: "sample-4-thumbnail.png",
    description:
      "You can choose this template to create a create a professional resume.",
  },
] as const;

export default samplesData;
