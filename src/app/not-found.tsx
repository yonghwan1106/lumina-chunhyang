import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-4 gradient-night-sky">
      <div className="bg-ink-wash absolute inset-0" />
      <div className="texture-hanji absolute inset-0" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-br from-lumina-primary via-lumina-secondary to-lumina-gold bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-2xl font-bold text-foreground font-[family-name:var(--font-display)]">
          길을 잃으셨나요?
        </p>
        <p className="mt-3 text-muted-foreground">
          찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다.
          <br />
          루미나 춘향의 빛을 따라 돌아가세요.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-lumina px-8 py-3 rounded-full text-center">
            홈으로 돌아가기
          </Link>
          <Link
            href="/contents"
            className="btn-outline px-8 py-3 rounded-full text-center"
          >
            콘텐츠 둘러보기
          </Link>
        </div>
      </div>
    </div>
  );
}
