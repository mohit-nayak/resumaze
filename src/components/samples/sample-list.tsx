import React from "react";
import samplesData from "@/data/templates";
import Image from "next/image";
import Link from "next/link";

const SampleList = async () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4">
      {samplesData.map((sample) => (
        <Link
          href={`/preview/${sample.slug}`}
          className="group relative z-10 block cursor-pointer overflow-hidden rounded-md border-4"
          key={sample.id}
        >
          <Image
            src={`/assets/thumbnails/${sample.thumbnail}`}
            width={500}
            height={600}
            alt={sample.name}
          />
          <div className="ease-primary absolute bottom-0 w-full translate-y-full bg-gray-600/90 p-2 text-left text-primary-light opacity-0 transition-all duration-300 group-hover:-translate-y-0 group-hover:opacity-100">
            <h6 className="font-medium">{sample.name}</h6>
            <p className="text-sm">{sample.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SampleList;
