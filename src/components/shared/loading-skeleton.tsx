import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-lg bg-muted/50", className)}
      {...props}
    />
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-6">
        <Skeleton className="h-8 w-40 mx-auto rounded-full" />
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-2/3 mx-auto" />
      </div>
    </div>
  );
}

export function CardGridLoadingSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border/50 p-6 space-y-4"
          >
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}
