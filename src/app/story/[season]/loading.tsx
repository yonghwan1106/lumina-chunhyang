import {
  PageLoadingSkeleton,
  Skeleton,
} from "@/components/shared/loading-skeleton";

export default function SeasonDetailLoading() {
  return (
    <>
      <PageLoadingSkeleton />
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <Skeleton className="h-48 w-full rounded-2xl" />
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/50 p-6 space-y-4"
            >
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
