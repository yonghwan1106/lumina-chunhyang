export const siteContent = {
  hero: {
    title: "루미나 춘향",
    subtitle: "Lumina Chunhyang",
    slogan: "2026년 봄, 남원의 밤은 당신의 사랑으로 피어납니다",
    description: "대한민국 대표 야간 관광 축제",
    cta: "축제 살펴보기",
  },

  executiveSummary: {
    title: "전략 프레임워크",
    subtitle: "Executive Summary",
    cards: [
      {
        icon: "Moon",
        title: "야간 경제 확대",
        value: "3,500억",
        unit: "원 목표",
        description: "2026년 야간 관광 경제 효과",
      },
      {
        icon: "Users",
        title: "방문객 유치",
        value: "100만",
        unit: "명 목표",
        description: "국내외 축제 방문객 목표",
      },
      {
        icon: "Globe",
        title: "글로벌 브랜드",
        value: "Top 10",
        unit: "아시아",
        description: "아시아 빛 축제 순위 진입",
      },
      {
        icon: "Heart",
        title: "사랑의 성지",
        value: "1위",
        unit: "대한민국",
        description: "커플 여행지 선호도",
      },
    ],
  },

  storytelling: {
    title: "사계절 사랑 스토리텔링",
    subtitle: "Four Seasons Love Journey",
    description: "춘향과 몽룡의 사랑 이야기를 사계절 테마로 재해석한 몰입형 여정",
    seasons: [
      {
        id: "spring",
        name: "봄",
        title: "만남의 봄",
        subtitle: "첫눈에 반한 사랑",
        description: "광한루에서 펼쳐지는 첫 만남의 설렘을 빛으로 표현",
        color: "spring",
        icon: "Cherry",
      },
      {
        id: "summer",
        name: "여름",
        title: "사랑의 여름",
        subtitle: "불타는 열정",
        description: "뜨거운 여름밤, 오작교에서 사랑을 맹세하다",
        color: "summer",
        icon: "Sun",
      },
      {
        id: "autumn",
        name: "가을",
        title: "이별의 가을",
        subtitle: "눈물의 기다림",
        description: "황금빛 낙엽 아래 이별의 아픔과 그리움",
        color: "autumn",
        icon: "Leaf",
      },
      {
        id: "winter",
        name: "겨울",
        title: "재회의 겨울",
        subtitle: "영원한 사랑",
        description: "순백의 눈 위에 다시 만난 영원한 약속",
        color: "winter",
        icon: "Snowflake",
      },
    ],
  },

  timeline: {
    title: "마케팅 로드맵",
    subtitle: "D-180 to D+30",
    phases: [
      {
        phase: "D-180 ~ D-90",
        title: "인지도 구축",
        items: ["브랜드 아이덴티티 확립", "SNS 티저 캠페인", "인플루언서 파트너십"],
      },
      {
        phase: "D-90 ~ D-30",
        title: "관심 유도",
        items: ["사전 예약 시스템 오픈", "얼리버드 패키지 출시", "체험단 모집"],
      },
      {
        phase: "D-30 ~ D-Day",
        title: "기대감 극대화",
        items: ["카운트다운 이벤트", "라이브 스트리밍", "미디어 프리뷰"],
      },
      {
        phase: "D-Day ~ D+30",
        title: "축제 운영 및 확산",
        items: ["실시간 콘텐츠 생성", "참여자 UGC 활성화", "후기 바이럴"],
      },
    ],
  },

  budget: {
    title: "예산 계획",
    subtitle: "Budget Overview",
    total: 4133000000,
    categories: [
      { name: "킬러 콘텐츠 제작", amount: 1500000000, percentage: 36.3 },
      { name: "마케팅 및 홍보", amount: 800000000, percentage: 19.4 },
      { name: "기술 인프라", amount: 700000000, percentage: 16.9 },
      { name: "운영 및 인력", amount: 600000000, percentage: 14.5 },
      { name: "안전 및 비상대응", amount: 300000000, percentage: 7.3 },
      { name: "예비비", amount: 233000000, percentage: 5.6 },
    ],
  },

  footer: {
    title: "함께 만드는 루미나 춘향",
    cta: "참여 문의하기",
    copyright: "© 2026 남원시. All rights reserved.",
    links: [
      { label: "춘향제 공식 홈페이지", href: "#" },
      { label: "남원시 관광 안내", href: "#" },
      { label: "파트너십 문의", href: "#" },
    ],
  },
};

export const navigation = [
  { label: "개요", href: "#executive" },
  { label: "킬러 콘텐츠", href: "#killer" },
  { label: "스토리텔링", href: "#storytelling" },
  { label: "경제효과", href: "#economic" },
  { label: "로드맵", href: "#timeline" },
  { label: "예산", href: "#budget" },
];
