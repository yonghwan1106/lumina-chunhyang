import {
  PageLoadingSkeleton,
  Skeleton,
} from "@/components/shared/loading-skeleton";

export default function ContentDetailLoading() {
  return (
    <>
      <PageLoadingSkeleton />
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
