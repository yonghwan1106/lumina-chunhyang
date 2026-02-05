export const budgetDetail = {
  overview: {
    title: "예산 계획",
    subtitle: "Budget Overview",
    description: "효율적인 예산 배분으로 최대의 효과를 창출하는 2026 루미나 춘향 예산 계획",
    totalBudget: 4133000000, // 41.33억 원
    fiscalYear: "2025-2026"
  },

  categories: [
    {
      id: "killer-contents",
      name: "킬러 콘텐츠 제작",
      amount: 1500000000,
      percentage: 36.3,
      icon: "Sparkles",
      color: "primary",
      description: "4대 핵심 콘텐츠 개발 및 제작",
      details: [
        { item: "스마트 합죽선 개발", amount: 400000000, note: "10,000개 제작" },
        { item: "개화하는 누각 미디어파사드", amount: 500000000, note: "프로젝션 장비 + 콘텐츠" },
        { item: "오작교 레조넌스 설치", amount: 350000000, note: "센서 + LED + 음향" },
        { item: "글로벌 러브 시그널 드론", amount: 250000000, note: "드론 500대 임차 + 운영" }
      ]
    },
    {
      id: "marketing",
      name: "마케팅 및 홍보",
      amount: 800000000,
      percentage: 19.4,
      icon: "Megaphone",
      color: "secondary",
      description: "D-180 마케팅 로드맵 실행",
      details: [
        { item: "디지털 마케팅", amount: 200000000, note: "SNS, 유튜브, 검색 광고" },
        { item: "TV/라디오 광고", amount: 250000000, note: "전국 방송 광고" },
        { item: "옥외 광고", amount: 100000000, note: "주요 도시 사이니지" },
        { item: "인플루언서 마케팅", amount: 100000000, note: "50인 협찬" },
        { item: "홍보물 제작", amount: 80000000, note: "포스터, 브로셔, 굿즈" },
        { item: "해외 마케팅", amount: 70000000, note: "일본, 중국, 동남아" }
      ]
    },
    {
      id: "tech-infra",
      name: "기술 인프라",
      amount: 700000000,
      percentage: 16.9,
      icon: "Server",
      color: "accent",
      description: "IT 시스템 및 기술 인프라 구축",
      details: [
        { item: "통합 운영 플랫폼", amount: 150000000, note: "실시간 모니터링" },
        { item: "관객용 앱 개발", amount: 100000000, note: "iOS/Android" },
        { item: "예약 시스템", amount: 80000000, note: "티켓팅 + 결제" },
        { item: "네트워크 인프라", amount: 120000000, note: "5G + WiFi 구축" },
        { item: "LED/조명 장비", amount: 150000000, note: "추가 조명 설치" },
        { item: "음향 시스템", amount: 100000000, note: "공간 음향 시스템" }
      ]
    },
    {
      id: "operation",
      name: "운영 및 인력",
      amount: 600000000,
      percentage: 14.5,
      icon: "Users",
      color: "gold",
      description: "축제 운영 인력 및 관리 비용",
      details: [
        { item: "운영 인력", amount: 250000000, note: "정규 50명 + 임시 200명" },
        { item: "전문 기술자", amount: 100000000, note: "조명, 음향, 영상 전문가" },
        { item: "안내 및 통역", amount: 80000000, note: "다국어 안내원" },
        { item: "경비 및 보안", amount: 70000000, note: "24시간 경비" },
        { item: "청소 및 시설관리", amount: 60000000, note: "환경 미화" },
        { item: "교통 관리", amount: 40000000, note: "주차장 운영 + 셔틀" }
      ]
    },
    {
      id: "safety",
      name: "안전 및 비상대응",
      amount: 300000000,
      percentage: 7.3,
      icon: "Shield",
      color: "spring",
      description: "방문객 안전 및 비상 상황 대응",
      details: [
        { item: "안전 시설", amount: 100000000, note: "안전 펜스, 조명, 안내판" },
        { item: "의료 서비스", amount: 50000000, note: "응급 의료팀 상주" },
        { item: "소방 안전", amount: 60000000, note: "소방 장비 + 대피로" },
        { item: "보험", amount: 50000000, note: "행사 종합보험" },
        { item: "비상 대응 훈련", amount: 40000000, note: "정기 훈련 + 매뉴얼" }
      ]
    },
    {
      id: "reserve",
      name: "예비비",
      amount: 233000000,
      percentage: 5.6,
      icon: "PiggyBank",
      color: "summer",
      description: "돌발 상황 및 추가 비용 대비",
      details: [
        { item: "날씨 대응", amount: 100000000, note: "우천 시 대체 프로그램" },
        { item: "장비 수리/교체", amount: 70000000, note: "긴급 수리" },
        { item: "추가 마케팅", amount: 63000000, note: "상황별 추가 홍보" }
      ]
    }
  ],

  revenue: {
    title: "수입 계획",
    totalProjected: 5500000000, // 55억 원
    sources: [
      {
        name: "입장료 수입",
        amount: 2500000000,
        percentage: 45.5,
        details: "성인 15,000원 × 약 17만 명"
      },
      {
        name: "굿즈 판매",
        amount: 800000000,
        percentage: 14.5,
        details: "스마트 합죽선 + 기념품"
      },
      {
        name: "스폰서십",
        amount: 1000000000,
        percentage: 18.2,
        details: "메인 1개 + 서브 5개 스폰서"
      },
      {
        name: "정부 지원금",
        amount: 700000000,
        percentage: 12.7,
        details: "문체부 + 전라북도 + 남원시"
      },
      {
        name: "부대 수입",
        amount: 500000000,
        percentage: 9.1,
        details: "푸드존, 체험 프로그램, 주차"
      }
    ]
  },

  funding: {
    title: "재원 조달",
    sources: [
      { source: "남원시", amount: 1500000000, percentage: 36.3, type: "지방비" },
      { source: "전라북도", amount: 800000000, percentage: 19.4, type: "도비" },
      { source: "문화체육관광부", amount: 500000000, percentage: 12.1, type: "국비" },
      { source: "민간 투자", amount: 833000000, percentage: 20.1, type: "민자" },
      { source: "스폰서십", amount: 500000000, percentage: 12.1, type: "협찬" }
    ]
  },

  roi: {
    title: "투자 수익률 전망",
    projections: [
      { year: 2026, investment: 4133000000, directRevenue: 5500000000, economicEffect: 127500000000, roi: 33.1 },
      { year: 2027, investment: 3000000000, directRevenue: 6500000000, economicEffect: 165000000000, roi: 116.7 },
      { year: 2028, investment: 2500000000, directRevenue: 7500000000, economicEffect: 190000000000, roi: 200.0 }
    ],
    notes: [
      "직접 수입 외 간접 경제효과 포함 시 ROI 대폭 상승",
      "2년차부터 초기 투자비용 감소로 수익성 개선",
      "브랜드 가치 상승에 따른 스폰서십 증가 예상"
    ]
  },

  comparison: {
    title: "타 축제 예산 비교",
    festivals: [
      { name: "루미나 춘향 (2026)", budget: 41, visitors: 100, perCapita: 410 },
      { name: "빛초롱 축제", budget: 35, visitors: 80, perCapita: 437 },
      { name: "서울빛초롱축제", budget: 50, visitors: 150, perCapita: 333 },
      { name: "나바나노사토 (일본)", budget: 80, visitors: 300, perCapita: 267 }
    ],
    note: "단위: 예산(억 원), 방문객(만 명), 1인당 비용(원)"
  }
};

export type BudgetCategory = (typeof budgetDetail.categories)[number];
export type RevenueSource = (typeof budgetDetail.revenue.sources)[number];
