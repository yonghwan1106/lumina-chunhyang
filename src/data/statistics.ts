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

export const spendingPattern = {
  title: "1인당 소비 패턴 분석",
  averageSpending: 127500, // 원
  categories: [
    { category: "입장료", amount: 15000, percentage: 11.8 },
    { category: "식음료", amount: 35000, percentage: 27.5 },
    { category: "기념품/굿즈", amount: 28000, percentage: 22.0 },
    { category: "숙박", amount: 32000, percentage: 25.1 },
    { category: "교통", amount: 12000, percentage: 9.4 },
    { category: "기타 체험", amount: 5500, percentage: 4.2 },
  ],
  byVisitorType: [
    { type: "당일치기 (국내)", spending: 78000 },
    { type: "1박 2일 (국내)", spending: 185000 },
    { type: "2박 3일 (국내)", spending: 320000 },
    { type: "해외 관광객", spending: 450000 },
  ]
};

export const accommodationImpact = {
  title: "숙박업 영향 분석",
  totalRooms: 3200, // 남원시 전체 객실 수
  occupancyBefore: 42, // 축제 전 평균 점유율 %
  occupancyDuring: 95, // 축제 기간 평균 점유율 %
  priceIncrease: 35, // % 가격 상승
  additionalRevenue: 8500000000, // 85억 원
  categories: [
    { type: "호텔/리조트", rooms: 800, occupancy: 98 },
    { type: "모텔", rooms: 1200, occupancy: 95 },
    { type: "펜션/민박", rooms: 700, occupancy: 92 },
    { type: "에어비앤비", rooms: 500, occupancy: 88 },
  ]
};

export const employmentDetail = {
  title: "고용 상세 분석",
  total: 3200,
  direct: {
    total: 1200,
    breakdown: [
      { job: "축제 운영 스태프", count: 250, type: "임시" },
      { job: "안내/통역원", count: 150, type: "임시" },
      { job: "기술직 (조명/음향)", count: 80, type: "정규/임시" },
      { job: "경비/안전요원", count: 200, type: "임시" },
      { job: "청소/미화", count: 120, type: "임시" },
      { job: "매표/관리", count: 100, type: "임시" },
      { job: "공연/퍼포머", count: 50, type: "계약" },
      { job: "마케팅/홍보", count: 30, type: "정규" },
      { job: "IT/플랫폼 운영", count: 20, type: "정규" },
      { job: "기타", count: 200, type: "다양" },
    ]
  },
  indirect: {
    total: 2000,
    breakdown: [
      { sector: "숙박업", count: 500 },
      { sector: "음식점업", count: 600 },
      { sector: "소매업", count: 400 },
      { sector: "교통/운수", count: 300 },
      { sector: "문화/오락", count: 200 },
    ]
  },
  wageImpact: {
    averageWage: 2800000, // 월 평균
    totalWages: 8960000000, // 총 89.6억 원
    period: "4개월 (준비 1개월 + 운영 1개월 + 정리 2개월)"
  }
};
