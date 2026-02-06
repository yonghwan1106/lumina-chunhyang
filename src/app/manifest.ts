import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "루미나 춘향 - 2026 춘향제 야간 빛 축제",
    short_name: "루미나 춘향",
    description:
      "2026년 봄, 남원의 밤은 당신의 사랑으로 피어납니다. 대한민국 대표 야간 관광 축제.",
    start_url: "/",
    display: "standalone",
    background_color: "#050810",
    theme_color: "#8B5CF6",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
