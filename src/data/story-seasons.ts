export const storySeasons = {
  spring: {
    id: "spring",
    name: "봄",
    title: "만남의 봄",
    subtitle: "첫눈에 반한 사랑",
    heroText: "광한루에서 피어난 첫 만남의 설렘",
    description: "춘향과 몽룡의 첫 만남을 봄의 화사함으로 재현합니다. 벚꽃이 흩날리는 광한루원에서 두 사람의 운명적 만남이 빛으로 펼쳐집니다.",
    story: `
      어느 봄날, 이몽룡은 과거 급제를 위해 남원으로 내려왔습니다.
      광한루에 올라 경치를 감상하던 중, 그네를 타는 춘향의 모습에
      첫눈에 반하게 됩니다.

      "저 여인은 누구인가?"

      몽룡의 심장이 뛰기 시작했고, 두 사람의 운명적인 사랑이
      봄바람과 함께 시작되었습니다.
    `,
    experiences: [
      {
        title: "그네 체험존",
        description: "춘향이 그네를 탔던 순간을 재현하는 인터랙티브 그네 설치물",
        highlight: "LED가 움직임에 반응하여 벚꽃이 흩날리는 효과"
      },
      {
        title: "첫 만남 프로젝션",
        description: "광한루 누각에 펼쳐지는 첫 만남 스토리 미디어아트",
        highlight: "15분 간격 상영, 관람객 참여형 피날레"
      },
      {
        title: "봄날의 편지",
        description: "디지털 편지를 작성하면 벚꽃 꽃잎에 투사되는 체험",
        highlight: "QR코드로 영구 보관 가능"
      }
    ],
    photoSpots: [
      { name: "벚꽃 터널", location: "광한루원 동문 입구" },
      { name: "그네 포토존", location: "춘향관 앞" },
      { name: "첫 만남 조형물", location: "광한루 연못가" }
    ],
    schedule: {
      period: "4월 15일 ~ 5월 15일",
      mainShow: "19:00 / 20:30 / 22:00",
      duration: "약 20분"
    },
    color: "spring",
    gradient: "from-pink-400 via-pink-300 to-rose-200",
    icon: "Cherry"
  },

  summer: {
    id: "summer",
    name: "여름",
    title: "사랑의 여름",
    subtitle: "불타는 열정",
    heroText: "오작교에서 맹세한 영원한 사랑",
    description: "뜨거운 여름밤, 오작교에서 사랑을 맹세하는 두 사람의 열정을 은하수와 빛으로 표현합니다.",
    story: `
      춘향과 몽룡은 밤마다 오작교에서 만나 사랑을 키워갔습니다.
      견우와 직녀처럼, 그들은 오작교 위에서 영원한 사랑을 맹세했습니다.

      "우리의 사랑은 저 별들처럼 영원히 빛날 것이오."

      여름밤 은하수 아래, 두 사람의 맹세가 밤하늘에 새겨졌습니다.
    `,
    experiences: [
      {
        title: "오작교 레조넌스",
        description: "커플이 함께 걸으면 빛과 소리가 공명하는 체험",
        highlight: "발걸음에 따라 은하수가 물결치는 효과"
      },
      {
        title: "별빛 맹세",
        description: "사랑의 메시지를 하늘에 투사하는 인터랙티브 설치",
        highlight: "전 세계 참여자 메시지 실시간 표시"
      },
      {
        title: "은하수 보트",
        description: "LED 조명으로 꾸며진 배를 타고 연못을 유람",
        highlight: "수면에 반사되는 별빛 연출"
      }
    ],
    photoSpots: [
      { name: "오작교 야경", location: "오작교 중앙" },
      { name: "은하수 포토존", location: "연못 동쪽 데크" },
      { name: "별빛 터널", location: "춘향테마파크 입구" }
    ],
    schedule: {
      period: "7월 1일 ~ 8월 31일",
      mainShow: "20:00 / 21:30 / 23:00",
      duration: "약 25분"
    },
    nightFoodZone: [
      { name: "여름밤 야식존", items: ["남원 추어탕", "시원한 막국수", "빙수"] },
      { name: "별빛 카페", items: ["은하수 음료", "별자리 디저트"] }
    ],
    color: "summer",
    gradient: "from-blue-500 via-purple-500 to-indigo-600",
    icon: "Sun"
  },

  autumn: {
    id: "autumn",
    name: "가을",
    title: "이별의 가을",
    subtitle: "눈물의 기다림",
    heroText: "황금빛 낙엽 아래 흐르는 그리움",
    description: "몽룡이 한양으로 떠난 후, 춘향의 그리움과 기다림을 가을 단풍과 함께 표현합니다.",
    story: `
      몽룡이 과거를 보러 한양으로 떠나야 했습니다.
      이별의 순간, 춘향은 눈물을 흘리며 몽룡을 배웅했습니다.

      "반드시 돌아올 것이오. 나를 기다려주오."

      단풍이 물드는 가을, 춘향은 매일 광한루에 올라
      한양 쪽을 바라보며 몽룡을 기다렸습니다.
    `,
    experiences: [
      {
        title: "그리움의 길",
        description: "단풍 터널을 걸으며 이별의 감정을 체험",
        highlight: "낙엽이 떨어지는 LED 연출과 함께하는 산책"
      },
      {
        title: "춘향의 편지",
        description: "춘향이 몽룡에게 보내는 편지를 재현한 체험",
        highlight: "직접 편지를 쓰고 나무에 걸어두는 체험"
      },
      {
        title: "기다림의 누각",
        description: "광한루에서 바라보는 가을 야경 감상",
        highlight: "춘향의 독백이 흐르는 오디오 가이드"
      }
    ],
    photoSpots: [
      { name: "단풍 터널", location: "광한루원 산책로" },
      { name: "편지 나무", location: "춘향사당 앞" },
      { name: "그리움 전망대", location: "광한루 2층" }
    ],
    schedule: {
      period: "10월 1일 ~ 11월 15일",
      mainShow: "18:30 / 20:00 / 21:30",
      duration: "약 20분"
    },
    letterWriting: {
      location: "춘향관 체험실",
      fee: "무료 (특수 종이 제공)",
      keepSake: "편지지 + 봉투 + QR 디지털 보관"
    },
    color: "autumn",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    icon: "Leaf"
  },

  winter: {
    id: "winter",
    name: "겨울",
    title: "재회의 겨울",
    subtitle: "영원한 사랑",
    heroText: "순백의 눈 위에 다시 만난 두 사람",
    description: "암행어사가 된 몽룡이 돌아와 춘향과 재회하는 감동적인 순간을 겨울 눈꽃과 함께 연출합니다.",
    story: `
      마침내 과거에 급제한 몽룡이 암행어사로 남원에 돌아왔습니다.
      옥에 갇힌 춘향을 구하고, 두 사람은 눈 내리는 겨울날 재회했습니다.

      "나의 춘향, 기다려줘서 고맙소."
      "도련님, 정말 오셨군요."

      하얀 눈이 내리는 그날, 두 사람의 사랑은 영원히 완성되었습니다.
    `,
    experiences: [
      {
        title: "재회의 순간",
        description: "눈 내리는 특수효과와 함께 펼쳐지는 재회 스토리",
        highlight: "인공 눈과 홀로그램이 어우러진 감동 연출"
      },
      {
        title: "영원의 맹세",
        description: "커플이 함께 영원한 사랑을 맹세하는 체험",
        highlight: "맹세를 새긴 디지털 증서 발급"
      },
      {
        title: "드론 피날레 쇼",
        description: "500대 드론이 펼치는 사랑 이야기의 대미",
        highlight: "글로벌 러브 시그널과 연계된 드론쇼"
      }
    ],
    photoSpots: [
      { name: "눈꽃 터널", location: "광한루원 중앙로" },
      { name: "재회 조형물", location: "오작교 앞" },
      { name: "드론쇼 전망대", location: "춘향테마파크 언덕" }
    ],
    schedule: {
      period: "12월 15일 ~ 2월 28일",
      mainShow: "18:00 / 19:30 / 21:00",
      droneShow: "매주 토요일 21:00 (1회)",
      duration: "약 30분 (드론쇼 포함)"
    },
    finale: {
      name: "글로벌 러브 시그널",
      description: "전 세계에서 보내는 사랑의 메시지가 드론 군집으로 표현",
      participation: "공식 앱 또는 웹사이트에서 메시지 전송 가능"
    },
    color: "winter",
    gradient: "from-cyan-400 via-blue-300 to-white",
    icon: "Snowflake"
  }
};

export type StorySeason = (typeof storySeasons)[keyof typeof storySeasons];
