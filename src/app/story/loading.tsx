import {
  PageLoadingSkeleton,
  CardGridLoadingSkeleton,
} from "@/components/shared/loading-skeleton";

export default function StoryLoading() {
  return (
    <>
      <PageLoadingSkeleton />
      <CardGridLoadingSkeleton count={4} />
    </>
  );
}
