"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 gradient-night-sky">
      <div className="bg-ink-wash absolute inset-0" />
      <div className="texture-hanji absolute inset-0" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lumina-primary/10 border border-lumina-primary/30 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-lumina-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-foreground font-[family-name:var(--font-display)]">
          문제가 발생했습니다
        </h1>
        <p className="mt-3 text-muted-foreground">
          페이지를 불러오는 중 오류가 발생했습니다.
          <br />
          다시 시도하거나 홈으로 돌아가주세요.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-lumina px-8 py-3 rounded-full"
          >
            다시 시도
          </button>
          <a
            href="/"
            className="btn-outline px-8 py-3 rounded-full text-center"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  );
}
