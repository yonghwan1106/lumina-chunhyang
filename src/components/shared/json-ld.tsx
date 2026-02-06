export function EventJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "루미나 춘향 - 2026 춘향제 야간 빛 축제",
    description:
      "2026년 봄, 남원의 밤은 당신의 사랑으로 피어납니다. 전통 춘향전 스토리와 현대적 빛 축제의 만남.",
    startDate: "2026-04-15",
    endDate: "2026-05-15",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "광한루원",
      address: {
        "@type": "PostalAddress",
        streetAddress: "요천로 1447",
        addressLocality: "남원시",
        addressRegion: "전라북도",
        postalCode: "55738",
        addressCountry: "KR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "남원시",
      url: "https://www.namwon.go.kr",
    },
    image: "https://lumina-chunhyang.vercel.app/opengraph-image",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "KRW",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "남원시",
    url: "https://www.namwon.go.kr",
    logo: "https://lumina-chunhyang.vercel.app/icon-512.png",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
