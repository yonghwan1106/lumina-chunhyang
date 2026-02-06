export const roadmapDetail = {
  overview: {
    title: "마케팅 로드맵",
    subtitle: "D-68 현재 진행 중",
    description: "2026 루미나 춘향의 성공을 위한 체계적인 마케팅 전략과 실행 계획",
    totalDuration: "210일 (D-180 ~ D+30)",
    currentStatus: "D-68 (2026년 2월 6일 기준)",
    dDay: "2026년 4월 15일",
    keyMilestones: 13,
    totalBudget: "8억 원"
  },

  phases: [
    {
      phase: "Phase 1",
      dDay: "D-180 ~ D-90",
      title: "인지도 구축",
      period: "2025년 10월 ~ 2026년 1월",
      status: "completed",
      budget: "2억 원",
      objectives: [
        "브랜드 인지도 30% 달성 (전국 2040대)",
        "공식 SNS 팔로워 10만 명 확보",
        "주요 미디어 100건 이상 노출"
      ],
      weeklyTasks: [
        { week: "D-180~D-170", task: "브랜드 아이덴티티 최종 확정", status: "completed" },
        { week: "D-170~D-160", task: "공식 웹사이트 및 앱 개발 착수", status: "completed" },
        { week: "D-160~D-150", task: "SNS 채널 개설 및 티저 콘텐츠 제작", status: "completed" },
        { week: "D-150~D-140", task: "인플루언서 20인 선정 및 계약", status: "completed" },
        { week: "D-140~D-130", task: "티저 영상 공개 (유튜브, 인스타그램)", status: "completed" },
        { week: "D-130~D-120", task: "언론 보도자료 배포 (1차)", status: "completed" },
        { week: "D-120~D-110", task: "인플루언서 사전 방문 촬영", status: "completed" },
        { week: "D-110~D-100", task: "바이럴 마케팅 캠페인 시작", status: "completed" },
        { week: "D-100~D-90", task: "중간 점검 및 전략 조정", status: "completed" }
      ],
      channels: [
        { name: "인스타그램", target: "50,000 팔로워", content: "비주얼 중심 티저" },
        { name: "유튜브", target: "100,000 조회", content: "메이킹 필름, 티저 영상" },
        { name: "틱톡", target: "30,000 팔로워", content: "숏폼 챌린지" },
        { name: "네이버 블로그", target: "50건 포스팅", content: "정보성 콘텐츠" }
      ],
      kpis: [
        { metric: "브랜드 인지도", target: "30%", current: 28 },
        { metric: "SNS 도달", target: "500만", current: 480 },
        { metric: "미디어 노출", target: "100건", current: 95 }
      ]
    },
    {
      phase: "Phase 2",
      dDay: "D-90 ~ D-30",
      title: "관심 유도",
      period: "2026년 1월 15일 ~ 3월 16일",
      status: "in-progress",
      budget: "3억 원",
      objectives: [
        "사전 예약 5만 건 달성",
        "얼리버드 패키지 판매 1만 개",
        "체험단 후기 500건 생성"
      ],
      weeklyTasks: [
        { week: "D-90~D-85 (1/15~1/20)", task: "사전 예약 시스템 오픈", status: "completed" },
        { week: "D-85~D-80 (1/20~1/25)", task: "얼리버드 패키지 출시", status: "completed" },
        { week: "D-80~D-75 (1/25~1/30)", task: "체험단 1차 모집 (100명)", status: "completed" },
        { week: "D-75~D-70 (1/30~2/4)", task: "TV 광고 집행 시작", status: "completed" },
        { week: "D-70~D-65 (2/4~2/9)", task: "체험단 현장 방문 및 콘텐츠 생산", status: "in-progress" },
        { week: "D-65~D-60 (2/9~2/14)", task: "지역 파트너십 MOU 체결", status: "upcoming" },
        { week: "D-60~D-55 (2/14~2/19)", task: "체험단 2차 모집 (200명)", status: "upcoming" },
        { week: "D-55~D-50 (2/19~2/24)", task: "언론 보도자료 배포 (2차)", status: "upcoming" },
        { week: "D-50~D-45 (2/24~3/1)", task: "VIP 초청장 발송", status: "upcoming" },
        { week: "D-45~D-40 (3/1~3/6)", task: "해외 마케팅 본격화 (일본, 중국)", status: "upcoming" },
        { week: "D-40~D-35 (3/6~3/11)", task: "체험단 3차 모집 (200명)", status: "upcoming" },
        { week: "D-35~D-30 (3/11~3/16)", task: "최종 점검 및 런칭 준비", status: "upcoming" }
      ],
      channels: [
        { name: "TV 광고", target: "GRP 2,000", content: "30초 스팟 광고" },
        { name: "옥외 광고", target: "주요 5개 도시", content: "디지털 사이니지" },
        { name: "여행사 제휴", target: "30개 업체", content: "패키지 상품 개발" },
        { name: "항공사 제휴", target: "3개 항공사", content: "인바운드 프로모션" }
      ],
      kpis: [
        { metric: "사전 예약", target: "50,000건", current: 18500 },
        { metric: "얼리버드 판매", target: "10,000개", current: 4200 },
        { metric: "체험단 후기", target: "500건", current: 120 }
      ]
    },
    {
      phase: "Phase 3",
      dDay: "D-30 ~ D-Day",
      title: "기대감 극대화",
      period: "2026년 3월 16일 ~ 4월 15일",
      status: "upcoming",
      budget: "2억 원",
      objectives: [
        "사전 예약 10만 건 달성",
        "SNS 언급 50만 건 돌파",
        "개막 당일 2만 명 방문"
      ],
      weeklyTasks: [
        { week: "D-30~D-25 (3/16~3/21)", task: "카운트다운 이벤트 시작", status: "upcoming" },
        { week: "D-25~D-20 (3/21~3/26)", task: "미디어 프리뷰 행사", status: "upcoming" },
        { week: "D-20~D-15 (3/26~3/31)", task: "라이브 스트리밍 테스트", status: "upcoming" },
        { week: "D-15~D-10 (3/31~4/5)", task: "최종 리허설 및 미디어 공개", status: "upcoming" },
        { week: "D-10~D-5 (4/5~4/10)", task: "VIP 프리오프닝", status: "upcoming" },
        { week: "D-5~D-Day (4/10~4/15)", task: "그랜드 오프닝 준비 및 실행", status: "upcoming" }
      ],
      channels: [
        { name: "라이브 스트리밍", target: "동시 접속 10만", content: "개막식 생중계" },
        { name: "실시간 SNS", target: "트렌드 1위", content: "실시간 업데이트" },
        { name: "언론사 취재", target: "50개 매체", content: "현장 취재 지원" }
      ],
      kpis: [
        { metric: "사전 예약 누적", target: "100,000건", current: 0 },
        { metric: "SNS 언급", target: "500,000건", current: 0 },
        { metric: "개막일 방문객", target: "20,000명", current: 0 }
      ]
    },
    {
      phase: "Phase 4",
      dDay: "D-Day ~ D+30",
      title: "축제 운영 및 확산",
      period: "2026년 4월 15일 ~ 5월 15일",
      status: "upcoming",
      budget: "1억 원",
      objectives: [
        "총 방문객 100만 명 달성",
        "UGC 콘텐츠 10만 건 생성",
        "재방문 의향 85% 달성"
      ],
      weeklyTasks: [
        { week: "D-Day~D+5 (4/15~4/20)", task: "실시간 운영 모니터링 및 대응", status: "upcoming" },
        { week: "D+5~D+10 (4/20~4/25)", task: "방문객 피드백 수집 및 개선", status: "upcoming" },
        { week: "D+10~D+15 (4/25~4/30)", task: "UGC 콘텐츠 큐레이션 및 공유", status: "upcoming" },
        { week: "D+15~D+20 (4/30~5/5)", task: "중간 성과 분석 및 보완", status: "upcoming" },
        { week: "D+20~D+25 (5/5~5/10)", task: "후기 이벤트 및 바이럴 강화", status: "upcoming" },
        { week: "D+25~D+30 (5/10~5/15)", task: "종료 준비 및 결산", status: "upcoming" }
      ],
      channels: [
        { name: "현장 콘텐츠팀", target: "일 50건", content: "현장 스케치, 인터뷰" },
        { name: "UGC 이벤트", target: "참여 10만 건", content: "해시태그 챌린지" },
        { name: "뉴스레터", target: "구독자 5만", content: "주간 하이라이트" }
      ],
      kpis: [
        { metric: "총 방문객", target: "1,000,000명", current: 0 },
        { metric: "UGC 콘텐츠", target: "100,000건", current: 0 },
        { metric: "재방문 의향", target: "85%", current: 0 }
      ]
    }
  ],

  milestones: [
    { date: "2025-10-15", title: "브랜드 런칭", description: "공식 브랜드 공개 및 SNS 오픈", status: "completed" },
    { date: "2025-11-15", title: "티저 캠페인 시작", description: "첫 티저 영상 공개", status: "completed" },
    { date: "2026-01-15", title: "사전 예약 오픈", description: "공식 예약 시스템 가동", status: "completed" },
    { date: "2026-02-15", title: "얼리버드 종료", description: "할인 예약 마감", status: "upcoming" },
    { date: "2026-03-01", title: "TV 광고 시작", description: "전국 TV 광고 온에어", status: "upcoming" },
    { date: "2026-03-02", title: "제안서 접수 마감", description: "춘향제 홍보 콘텐츠 공모전 마감", status: "upcoming" },
    { date: "2026-03-15", title: "체험단 방문", description: "500명 체험단 현장 방문", status: "upcoming" },
    { date: "2026-04-01", title: "미디어 프리뷰", description: "언론사 초청 사전 공개", status: "upcoming" },
    { date: "2026-04-10", title: "VIP 오프닝", description: "VIP 초청 사전 개막", status: "upcoming" },
    { date: "2026-04-15", title: "그랜드 오프닝", description: "공식 개막 (D-Day)", status: "upcoming" },
    { date: "2026-04-30", title: "중간 점검", description: "2주차 성과 분석", status: "upcoming" },
    { date: "2026-05-08", title: "글로벌 피크", description: "해외 관광객 피크 주간", status: "upcoming" },
    { date: "2026-05-15", title: "폐막", description: "2026 루미나 춘향 종료", status: "upcoming" }
  ],

  techImplementation: {
    title: "기술 구현 일정",
    items: [
      { tech: "AR 합죽선 시스템", period: "D-180 ~ D-60", actualPeriod: "2025.10 ~ 2026.02", status: "개발 완료 예정" },
      { tech: "미디어 파사드", period: "D-150 ~ D-30", actualPeriod: "2025.11 ~ 2026.03", status: "설치 진행 중" },
      { tech: "오작교 센서 시스템", period: "D-120 ~ D-30", actualPeriod: "2025.12 ~ 2026.03", status: "설치 진행 중" },
      { tech: "드론 군집 시스템", period: "D-90 ~ D-15", actualPeriod: "2026.01 ~ 2026.04", status: "테스트 중" },
      { tech: "통합 운영 플랫폼", period: "D-120 ~ D-7", actualPeriod: "2025.12 ~ 2026.04", status: "개발 진행 중" },
      { tech: "관객 앱", period: "D-90 ~ D-15", actualPeriod: "2026.01 ~ 2026.04", status: "베타 테스트 중" }
    ]
  },

  channelStrategy: {
    digital: [
      { channel: "인스타그램", role: "비주얼 마케팅 핵심", budget: "3,000만 원" },
      { channel: "유튜브", role: "영상 콘텐츠 허브", budget: "5,000만 원" },
      { channel: "틱톡", role: "MZ세대 바이럴", budget: "2,000만 원" },
      { channel: "네이버", role: "검색 최적화", budget: "2,000만 원" },
      { channel: "카카오", role: "국내 타겟팅", budget: "2,000만 원" }
    ],
    traditional: [
      { channel: "TV", role: "대중 인지도", budget: "2억 원" },
      { channel: "옥외광고", role: "지역 노출", budget: "5,000만 원" },
      { channel: "라디오", role: "지역 밀착", budget: "1,000만 원" }
    ],
    partnership: [
      { partner: "여행사", count: 30, type: "패키지 상품" },
      { partner: "항공사", count: 3, type: "인바운드 프로모션" },
      { partner: "숙박업체", count: 50, type: "연계 할인" },
      { partner: "인플루언서", count: 50, type: "콘텐츠 협찬" }
    ]
  }
};

export type RoadmapPhase = (typeof roadmapDetail.phases)[number];
export type Milestone = (typeof roadmapDetail.milestones)[number];
