export const economicImpact = {
  title: "경제적 파급효과",
  subtitle: "Economic Impact Projection",

  mainStats: [
    {
      label: "직접 경제효과",
      value: 1275,
      unit: "억 원",
      description: "숙박, 식음, 쇼핑, 입장료 등",
    },
    {
      label: "간접 경제효과",
      value: 2225,
      unit: "억 원",
      description: "연관 산업 파급효과",
    },
    {
      label: "고용 창출",
      value: 3200,
      unit: "명",
      description: "직간접 일자리 창출",
    },
    {
      label: "브랜드 가치",
      value: 500,
      unit: "억 원",
      description: "남원시 브랜드 가치 상승",
    },
  ],

  breakdown: [
    { category: "숙박업", value: 380, percentage: 29.8 },
    { category: "음식점업", value: 320, percentage: 25.1 },
    { category: "소매업", value: 250, percentage: 19.6 },
    { category: "교통/운수", value: 180, percentage: 14.1 },
    { category: "문화/오락", value: 145, percentage: 11.4 },
  ],

  yearOverYear: [
    { year: 2024, visitors: 45, revenue: 520 },
    { year: 2025, visitors: 65, revenue: 780 },
    { year: 2026, visitors: 100, revenue: 1275 },
    { year: 2027, visitors: 130, revenue: 1650 },
    { year: 2028, visitors: 150, revenue: 1900 },
  ],

  comparison: {
    title: "타 축제 대비 성장률",
    festivals: [
      { name: "루미나 춘향", growth: 54, rank: 1 },
      { name: "빛초롱 축제", growth: 28, rank: 2 },
      { name: "서울 빛초롱", growth: 23, rank: 3 },
      { name: "부산 불꽃축제", growth: 18, rank: 4 },
    ],
  },
};

export const visitorProjections = {
  domestic: {
    total: 850000,
    breakdown: [
      { region: "수도권", percentage: 35 },
      { region: "호남권", percentage: 30 },
      { region: "영남권", percentage: 20 },
      { region: "충청권", percentage: 10 },
      { region: "기타", percentage: 5 },
    ],
  },
  international: {
    total: 150000,
    breakdown: [
      { country: "일본", percentage: 30 },
      { country: "중국", percentage: 25 },
      { country: "동남아", percentage: 25 },
      { country: "구미권", percentage: 15 },
      { country: "기타", percentage: 5 },
    ],
  },
};
