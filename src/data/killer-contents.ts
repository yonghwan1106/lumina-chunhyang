export const killerContents = [
  {
    id: "hapjukseon",
    title: "스마트 합죽선",
    subtitle: "Smart Hapjukseon",
    description: "전통 합죽선에 LED와 센서를 결합한 인터랙티브 기념품. 부채질에 따라 빛 패턴이 변화하고, 축제장 곳곳에서 AR 콘텐츠를 활성화합니다.",
    features: [
      "모션 센서 + RGB LED",
      "AR 마커 기능 내장",
      "축제 연동 빛 동기화",
      "개인화 메시지 저장",
    ],
    stats: {
      satisfaction: 94,
      shareRate: 78,
      purchaseIntent: 85,
    },
    image: "/images/infographics/04-smart-hapjukseon.png",
    color: "primary",
    specs: {
      size: "28cm x 42cm (펼침 시)",
      weight: "180g",
      battery: "USB-C 충전, 8시간 사용",
      led: "RGB LED 24개",
      sensor: "3축 가속도 센서",
      connectivity: "Bluetooth 5.0, NFC"
    },
    pricing: {
      standard: 35000,
      premium: 55000,
      vip: 85000,
      note: "VIP 버전은 골드 도금 + 개인 각인 포함"
    },
    arFeatures: [
      { name: "춘향 홀로그램", description: "합죽선을 펼치면 춘향 캐릭터가 등장" },
      { name: "스토리 언락", description: "축제장 5곳에서 스캔하면 비밀 스토리 해금" },
      { name: "포토 프레임", description: "AR 배경으로 사진 촬영 가능" },
      { name: "빛 동기화", description: "메인 공연 시 관객 합죽선 일제히 연동" }
    ],
    reviews: [
      { user: "김서연", rating: 5, comment: "정말 신기해요! 부채질할 때마다 색이 바뀌는 게 너무 예뻐요" },
      { user: "이준호", rating: 5, comment: "AR 기능이 생각보다 훨씬 재미있어요. 아이들이 좋아합니다" },
      { user: "박민지", rating: 4, comment: "디자인이 예쁘고 기념품으로 딱이에요. 배터리가 좀 더 오래가면 좋겠어요" }
    ]
  },
  {
    id: "pavilion",
    title: "개화하는 누각",
    subtitle: "Blooming Pavilion",
    description: "광한루를 캔버스로 한 미디어 파사드. 춘향의 사랑 이야기가 건물 전체에 펼쳐지며, 관람객 참여로 꽃이 피어나는 인터랙티브 연출.",
    features: [
      "고해상도 프로젝션 매핑",
      "실시간 참여형 연출",
      "사계절 테마 변화",
      "음악 연동 시각화",
    ],
    stats: {
      satisfaction: 97,
      shareRate: 89,
      purchaseIntent: 72,
    },
    image: "/images/infographics/05-blooming-pavilion.png",
    color: "secondary",
    specs: {
      projectors: "20,000 루멘 레이저 프로젝터 6대",
      resolution: "8K (합성)",
      coverage: "광한루 전면 + 측면 약 800㎡",
      audio: "7.1 서라운드 사운드",
      software: "TouchDesigner + 커스텀 인터랙션"
    },
    scenarios: [
      {
        name: "만남의 봄",
        duration: "15분",
        description: "벚꽃이 피어나며 춘향과 몽룡의 첫 만남을 재현",
        interactive: "관객 스마트폰으로 꽃잎 날리기 참여"
      },
      {
        name: "사랑의 여름",
        duration: "15분",
        description: "은하수와 별빛으로 두 사람의 사랑을 표현",
        interactive: "하트 모양 라이트로 참여"
      },
      {
        name: "이별의 가을",
        duration: "12분",
        description: "낙엽이 흩날리며 이별의 아픔을 담은 연출",
        interactive: "함께 부르는 사랑가"
      },
      {
        name: "재회의 겨울",
        duration: "18분",
        description: "눈꽃과 함께 감동적인 재회 스토리",
        interactive: "관객 전체 빛 동기화 피날레"
      }
    ],
    schedule: [
      { time: "19:30", show: "만남의 봄" },
      { time: "20:00", show: "사랑의 여름" },
      { time: "20:45", show: "이별의 가을" },
      { time: "21:15", show: "재회의 겨울" },
      { time: "22:00", show: "종합 버전 (축약)" }
    ],
    photoGuide: {
      bestSpot: "광한루 정면 50m 지점",
      bestTime: "21:15 재회의 겨울 피날레",
      tips: ["삼각대 권장", "ISO 1600 이상", "셔터 스피드 1/60"]
    }
  },
  {
    id: "ojakgyo",
    title: "오작교 레조넌스",
    subtitle: "Ojakgyo Resonance",
    description: "오작교 다리 위에서 두 사람이 함께 걸으면 빛과 소리가 공명하는 체험형 설치 작품. 커플의 발걸음에 따라 빛의 물결이 퍼져나갑니다.",
    features: [
      "압력 센서 보도 시스템",
      "동기화 빛 물결 효과",
      "커플 인터랙션 인식",
      "포토존 자동 촬영",
    ],
    stats: {
      satisfaction: 96,
      shareRate: 92,
      purchaseIntent: 68,
    },
    image: "/images/infographics/06-ojakgyo-resonance.png",
    color: "accent",
    specs: {
      bridgeLength: "25m",
      sensors: "압력 센서 500개",
      leds: "RGB LED 스트립 2,000m",
      soundSystem: "공간 음향 스피커 16채널",
      camera: "자동 촬영 카메라 4대"
    },
    experienceFlow: [
      { step: 1, title: "입장", description: "오작교 입구에서 커플 등록 (앱 또는 현장)" },
      { step: 2, title: "동기화", description: "두 사람의 발걸음이 감지되면 빛이 반응 시작" },
      { step: 3, title: "공명", description: "함께 걸을수록 빛과 소리가 풍성해짐" },
      { step: 4, title: "클라이맥스", description: "다리 중앙에서 빛의 폭발과 함께 자동 촬영" },
      { step: 5, title: "완주", description: "출구에서 QR코드로 사진 수령" }
    ],
    lightEffects: [
      { name: "은하수 물결", trigger: "천천히 걸을 때", description: "잔잔한 별빛이 물결치듯 퍼짐" },
      { name: "하트 버스트", trigger: "함께 멈출 때", description: "발 아래서 하트 모양 빛이 솟아오름" },
      { name: "오로라 댄스", trigger: "빠르게 걸을 때", description: "오로라처럼 역동적인 빛의 춤" },
      { name: "별똥별 샤워", trigger: "손을 잡고 걸을 때", description: "머리 위로 별똥별이 쏟아지는 효과" }
    ],
    reservation: {
      required: true,
      duration: "약 5분",
      capacity: "1팀/회 (연속 운영)",
      waitTime: "평균 15-20분",
      tip: "앱 사전 예약 시 우선 입장"
    }
  },
  {
    id: "global-signal",
    title: "글로벌 러브 시그널",
    subtitle: "Global Love Signal",
    description: "전 세계에서 보내는 사랑의 메시지가 남원 하늘에 드론 군집 쇼로 표현됩니다. 온라인 참여자들의 메시지가 실시간으로 빛이 됩니다.",
    features: [
      "500대 드론 군집 비행",
      "실시간 글로벌 참여",
      "다국어 메시지 지원",
      "라이브 스트리밍",
    ],
    stats: {
      satisfaction: 98,
      shareRate: 95,
      purchaseIntent: 75,
    },
    image: "/images/infographics/07-global-love-signal.png",
    color: "gold",
    specs: {
      drones: "Intel Shooting Star 500대",
      altitude: "최대 120m",
      flightTime: "약 20분",
      formations: "50개 이상 형상",
      colors: "RGB 1,600만 색상",
      safety: "자동 충돌 회피, GPS 정밀 비행"
    },
    participation: {
      online: {
        method: "공식 웹사이트 또는 앱",
        deadline: "공연 3시간 전까지",
        fee: "무료",
        limit: "회당 1,000건 선착순"
      },
      onsite: {
        method: "현장 키오스크 또는 앱",
        deadline: "공연 30분 전까지",
        fee: "무료",
        limit: "회당 500건 선착순"
      }
    },
    liveStreaming: {
      platforms: ["YouTube", "Instagram Live", "TikTok Live"],
      multiAngle: true,
      languages: ["한국어", "영어", "일본어", "중국어"],
      archive: "공연 종료 후 24시간 내 VOD 업로드"
    },
    showSequence: [
      { time: "0:00", description: "드론 이륙, 하늘에 '루미나 춘향' 글자 형성" },
      { time: "2:00", description: "춘향과 몽룡 캐릭터 형상 등장" },
      { time: "5:00", description: "참여자 메시지 하트 형상으로 표시" },
      { time: "10:00", description: "오작교 형상과 은하수 연출" },
      { time: "15:00", description: "전 세계 국기 릴레이" },
      { time: "18:00", description: "피날레: 거대 하트와 불꽃놀이 연출" }
    ],
    schedule: {
      regular: "매일 21:00 (약 20분)",
      special: "토요일 21:00 + 22:00 (더블 헤더)",
      weather: "풍속 8m/s 이상, 강수 시 취소"
    }
  },
];

export type KillerContent = (typeof killerContents)[number];
