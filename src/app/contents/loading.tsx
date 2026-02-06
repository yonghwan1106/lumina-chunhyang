import {
  PageLoadingSkeleton,
  CardGridLoadingSkeleton,
} from "@/components/shared/loading-skeleton";

export default function ContentsLoading() {
  return (
    <>
      <PageLoadingSkeleton />
      <CardGridLoadingSkeleton count={4} />
    </>
  );
}
