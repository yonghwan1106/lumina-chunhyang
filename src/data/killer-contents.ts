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
  },
];

export type KillerContent = (typeof killerContents)[number];
