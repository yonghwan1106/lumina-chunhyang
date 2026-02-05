import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
