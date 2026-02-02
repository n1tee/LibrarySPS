"use client";

export default function SkeletonDetail() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 animate-pulse">
      {/* Header Skeleton */}
      <div className="h-16 bg-white border-b px-8 flex items-center justify-between">
        <div className="h-8 bg-gray-200 rounded w-48"></div>
        <div className="h-10 bg-gray-200 rounded-full w-32"></div>
      </div>

      {/* Body Skeleton */}
      <div className="flex-1 p-8 flex items-center justify-center">
        <div className="max-w-7xl w-full bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col lg:flex-row h-[700px]">
          {/* Cột trái (Ảnh) */}
          <div className="w-full lg:w-3/5 bg-gray-200 h-full"></div>
          
          {/* Cột phải (Text) */}
          <div className="w-full lg:w-2/5 p-10 flex flex-col gap-6">
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-12 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="mt-auto space-y-3">
              <div className="h-14 bg-gray-200 rounded-xl w-full"></div>
              <div className="h-14 bg-gray-200 rounded-xl w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}