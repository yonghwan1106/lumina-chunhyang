import type { Metadata } from "next";
import { Noto_Serif_KR, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/shared/navigation";
import { Footer } from "@/components/sections/footer";

// 제목용: 전통적 품격의 세리프
const notoSerifKR = Noto_Serif_KR({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

// 강조/인용용: 붓글씨 느낌
const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "루미나 춘향 | 2026 춘향제 야간 빛 축제",
  description: "2026년 봄, 남원의 밤은 당신의 사랑으로 피어납니다. 대한민국 대표 야간 관광 축제 루미나 춘향과 함께하세요.",
  keywords: ["춘향제", "남원", "야간관광", "빛축제", "루미나", "춘향", "광한루", "2026"],
  authors: [{ name: "남원시" }],
  openGraph: {
    title: "루미나 춘향 | 2026 춘향제 야간 빛 축제",
    description: "2026년 봄, 남원의 밤은 당신의 사랑으로 피어납니다",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard - 현대적 한글 본문 폰트 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className={`${notoSerifKR.variable} ${nanumMyeongjo.variable} antialiased bg-background text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
        >
          본문 바로가기
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
