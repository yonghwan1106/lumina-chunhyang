import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "루미나 춘향 - 2026 춘향제 야간 빛 축제";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #050810 0%, #1a1f35 50%, #0f0a1e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: "linear-gradient(135deg, #8B5CF6, #F472B6, #F59E0B)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          루미나 춘향
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.7)",
            marginTop: 16,
            display: "flex",
          }}
        >
          2026 춘향제 야간 빛 축제
        </div>

        {/* Slogan */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            display: "flex",
          }}
        >
          남원의 밤은 당신의 사랑으로 피어납니다
        </div>

        {/* Date badge */}
        <div
          style={{
            marginTop: 40,
            padding: "12px 32px",
            borderRadius: 999,
            border: "1px solid rgba(139,92,246,0.4)",
            background: "rgba(139,92,246,0.1)",
            color: "rgba(255,255,255,0.8)",
            fontSize: 18,
            display: "flex",
          }}
        >
          2026.4.15 - 5.15 | 광한루원
        </div>
      </div>
    ),
    { ...size }
  );
}
