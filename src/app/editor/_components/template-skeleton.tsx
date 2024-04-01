import React from "react";

const TemplateSkeleton = () => {
  return (
    <div className="max-w-4xl w-full p-4 border border-gray-200">
      <div className="h-4 max-w-xl mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-8 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-24 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-24 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-8 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-24 w-full animate-pulse rounded-md bg-gray-200" />
      <div className="h-24 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
      <div className="h-24 w-full mb-4 animate-pulse rounded-md bg-gray-200" />
    </div>
  );
}; 

export default TemplateSkeleton;