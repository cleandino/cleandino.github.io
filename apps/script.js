// ===== Language Translations =====
const translations = {
    en: {
        hero: {
            title: "CleanDino",
            subtitle: "Quality Apps for Everyone"
        },
        hsk: {
            name: "HSK Vocab: Chinese Words 1-9",
            tagline: "11,000 words · Pinyin · SRS",
            description: "Studying for the HSK? Learn the full new HSK 3.0 vocabulary list — 11,000+ Chinese words from HSK 1 all the way through the advanced HSK 7-9 band — with pinyin, example sentences and spaced repetition.",
            feature1: "📚 Complete HSK 3.0 list: HSK 1 to 7-9 (11,000+ words)",
            feature2: "🎯 Smart review (SRS) with auto-generated wrong answer notes",
            feature3: "📱 Home screen widgets for learning without opening the app",
            feature4: "⚡ 60-second speed quizzes for rapid drilling",
            feature5: "🔤 Pinyin with tone marks, plus pinyin search — type \"hao\" to find 好"
        },
        bearTocfl: {
            name: "Bear TOCFL - 台灣華語",
            tagline: "Taiwan Mandarin for the TOCFL Exam",
            description: "Preparing for the TOCFL? Learn the full official vocabulary list — 7,500+ Traditional Chinese words from Novice to Band C — with pinyin, Zhuyin (Bopomofo), Taiwan Mandarin example sentences and spaced repetition.",
            feature1: "📚 Full official TOCFL list: Novice 1 to Band C (7,500+ words)",
            feature2: "🎯 Smart review (SRS) with auto-generated wrong answer notes",
            feature3: "📱 Home screen widgets for learning without opening the app",
            feature4: "⚡ 60-second speed quizzes for rapid drilling",
            feature5: "🈶 Pinyin and Zhuyin (ㄅㄆㄇ) display, three Taiwan character styles"
        },
        raku: {
            name: "Raku JLPT Vocabulary",
            tagline: "7,000+ words · Kanji · SRS",
            description: "Studying for the JLPT? Learn 7,000+ words from N5 to N1 with example sentences, readings and meanings in 15 languages — plus spaced repetition, a same-reading kanji quiz and kana practice.",
            feature1: "📚 7,000+ words across N5–N1 with example sentences",
            feature2: "🧠 Smart Review (SRS) brings words back right before you forget",
            feature3: "🔤 Same-reading kanji quiz: 1,035 words in 24 stages",
            feature4: "🎯 Auto-generated wrong answer notes for focused review",
            feature5: "📱 Home screen widgets, plus free Hiragana & Katakana practice"
        },
        topik: {
            name: "Sae TOPIK Vocabulary",
            tagline: "5,900 words · Confusing-words quiz · SRS",
            description: "Preparing for TOPIK? Learn 5,900+ words for levels 1–6, each with an example sentence — plus Smart Review (SRS) and a quiz that trains you to tell look-alike pairs like 잊다/잇다 apart.",
            feature1: "📚 Complete TOPIK Level 1-6 vocabulary (5,900+ words)",
            feature2: "🔀 Confusing words quiz: look-alike pairs like 잊다/잇다 side by side",
            feature3: "🧠 Smart Review (SRS) brings weak words back at the right time",
            feature4: "📱 Home screen widgets for daily word learning",
            feature5: "⚡ Speed mode for rapid vocabulary practice"
        },
        coq: {
            name: "Coq French: A1–B2 Vocabulary",
            tagline: "4,941 words · CEFR A1–B2 · IPA · SRS",
            description: "Learn the French words you actually need for daily life, work, and exams like TCF Canada, TCF IRN, and DELF. Each word comes with its gender, IPA, and an example sentence translated into your language.",
            feature1: "📚 4,941 words across CEFR A1, A2, B1 and B2",
            feature2: "🎯 Smart review (SRS) with automatic wrong-answer notes",
            feature3: "👂 Sound-alike quiz: mer / mère / maire, vin / vent",
            feature4: "🔤 IPA for every word, read aloud with a France or Québec accent",
            feature5: "🔎 Search without accents: type ecole to find école"
        },
        age: {
            name: "Age Calculator",
            tagline: "Precise Age Calculation at Your Fingertips",
            description: "Confused about Korean age vs international age? Calculate instantly with birthday tracking and zodiac insights.",
            feature1: "🎯 Multiple age formats: International, Korean, and Year age",
            feature2: "📊 Detailed life statistics: days, weeks, months, hours, seconds",
            feature3: "👨‍👩‍👧‍👦 Birthday manager for family and friends",
            feature4: "⭐ Automatic zodiac sign detection with detailed info",
            feature5: "🔮 Daily horoscope based on your zodiac sign"
        },
        filmstamp: {
            name: "Filmstampr: Timestamp Camera",
            tagline: "Real-time film date stamp",
            description: "Filmstampr stamps your photos with real network server time — not your phone clock. Change your device time all you want; the stamp uses server time instead. Wrapped in beautiful film aesthetics.",
            feature1: "⏱ Real network server time, not your phone clock — a green ✓ shows the time was checked against a server",
            feature2: "🎞 40+ timestamp styles and 25+ film filters",
            feature3: "🔥 Streak stamps counted from network time — much harder to fake than a device-clock streak",
            feature4: "📍 Real GPS location & city name on your stamp",
            feature5: "🏷️ Tag each shot (workout, diet, study) — photos auto-sort by habit, and your streak keeps counting"
        },
        rushkitchen: {
            name: "Rush Hour Kitchen: Roguelike",
            tagline: "A cooking roguelike deckbuilder",
            description: "Rush Hour Kitchen is a cozy roguelike deckbuilder about a plucky cat chef chasing one dream: a diner with their own name on the sign. Pay back Mr. Shark, a menacing loan shark, one payment day at a time — every run is a fresh puzzle of ingredients, combos and tough choices.",
            feature1: "🍚 Place ingredients side by side to cook dishes — Rice + Seaweed = Gimbap, Meat + Onion = Bulgogi. Cook several at once to trigger a RUSH HOUR bonus that multiplies your coins.",
            feature2: "🃏 A deckbuilder at heart — assemble a deck of 57 ingredients, customers and kitchen tools, each with its own synergy. No two runs are the same.",
            feature3: "🏆 Level up your diner with 14 passive perks, learn 21 recipes, and reach a real ending — pay off every coin, then unlock Endless mode.",
            feature4: "🐱 A premium game that respects you — pay once, no ads, no in-app purchases, fully offline. No gambling, no tracking. Just cooking."
        },
        myurls: {
            name: "MyURLs - Bookmark Manager",
            tagline: "Save and organize your links",
            description: "Drowning in bookmarks? MyURLs keeps every link you care about in one tidy place, with folders, search, and optional cloud backup so you never lose them.",
            feature1: "🔗 Save links from any app with the share sheet",
            feature2: "📁 Organize with folders and tags, find anything by search",
            feature3: "☁️ Optional cloud backup — sign in and restore on a new phone",
            feature4: "📱 Home screen widgets for one-tap access to your favorites"
        },
        myhomesize: {
            name: "Korean Area Calculator",
            tagline: "Pyeong and m² at a glance",
            description: "Apartment listings in pyeong, but your head thinks in m²? Convert instantly both ways and see what the space actually looks like.",
            feature1: "📐 Instant two-way conversion between pyeong and m²",
            feature2: "⚡ Simple, fast, no clutter — built for one job",
            feature3: "🏠 Handy while browsing real estate listings"
        },
        features: {
            title: "Key Features"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "Share",
        dataDeletion: "Data Deletion"
    },
    ja: {
        hero: {
            title: "CleanDino",
            subtitle: "みんなのための高品質アプリ"
        },
        hsk: {
            name: "HSK 単語帳：中国語 1-9級",
            tagline: "11,000語 · ピンイン · SRS",
            description: "HSK受験準備中ですか？新HSK 3.0の全語彙、HSK 1級から上級の7-9級まで11,000語以上を、ピンイン・例文・間隔反復学習でマスターしましょう。",
            feature1: "📚 新HSK 3.0の全範囲：1級から7-9級まで（11,000語以上）",
            feature2: "🎯 自動生成される間違いノートでスマート復習（SRS）",
            feature3: "📱 アプリを開かずに学習できるホーム画面ウィジェット",
            feature4: "⚡ 60秒のスピードクイズで集中特訓",
            feature5: "🔤 声調記号付きピンイン表示、ピンイン検索対応（「hao」で好が見つかります）"
        },
        bearTocfl: {
            name: "Bear TOCFL - 台湾華語",
            tagline: "TOCFL試験のための台湾華語",
            description: "TOCFL受験準備中ですか？公式語彙リストの全範囲、入門から C レベルまで7,500語以上の繁体字を、ピンイン・注音（ボポモフォ）・台湾華語の例文と間隔反復学習でマスターしましょう。",
            feature1: "📚 公式TOCFL全リスト：入門1から Cレベルまで（7,500語以上）",
            feature2: "🎯 自動生成される間違いノートでスマート復習（SRS）",
            feature3: "📱 アプリを開かずに学習できるホーム画面ウィジェット",
            feature4: "⚡ 60秒のスピードクイズで集中特訓",
            feature5: "🈶 ピンインと注音（ㄅㄆㄇ）表示、3種類の台湾字体に対応"
        },
        raku: {
            name: "Raku JLPT 単語帳",
            tagline: "7,000語 · 漢字 · SRS",
            description: "JLPT対策中ですか？N5〜N1の単語7,000語以上を、例文・読み・15言語の意味とともに学べます。間隔反復学習、同じ読みの漢字クイズ、かな練習も。",
            feature1: "📚 N5〜N1の7,000語以上（例文付き）",
            feature2: "🧠 スマート復習（SRS）で忘れる直前に単語が戻ってきます",
            feature3: "🔤 同じ読みの漢字クイズ：1,035語・24ステージ",
            feature4: "🎯 間違えた単語のノートを自動作成して集中復習",
            feature5: "📱 ホーム画面ウィジェット、ひらがな・カタカナ練習は無料"
        },
        topik: {
            name: "Sae TOPIK 単語帳",
            tagline: "5,900語 · 紛らわしい単語クイズ · SRS",
            description: "TOPIK受験準備中ですか？1〜6級の語彙5,900語以上を例文付きで学び、スマート復習（SRS）と、잊다/잇다のようなそっくりな単語ペアを見分ける紛らわしい単語クイズで力をつけましょう。",
            feature1: "📚 TOPIK 1〜6級の全語彙（5,900語以上）",
            feature2: "🔀 紛らわしい単語クイズ：잊다/잇다のようなそっくりなペアを並べて比較",
            feature3: "🧠 スマート復習（SRS）で苦手な単語を最適なタイミングで再出題",
            feature4: "📱 毎日の単語学習に役立つホーム画面ウィジェット",
            feature5: "⚡ 単語をすばやく練習できるスピードモード"
        },
        coq: {
            name: "Coq French：フランス語 A1–B2 単語帳",
            tagline: "4,941語 · CEFR A1–B2 · IPA · SRS",
            description: "日常生活・仕事・TCF Canada、TCF IRN、DELFなどの試験に本当に必要なフランス語の単語を学べます。すべての単語に、性（男性・女性）、IPA、あなたの言語に訳された例文が付いています。",
            feature1: "📚 CEFR A1・A2・B1・B2の4,941語",
            feature2: "🎯 間隔反復学習（SRS）と間違いノートの自動作成",
            feature3: "👂 似た発音のクイズ：mer / mère / maire、vin / vent",
            feature4: "🔤 全単語にIPA付き、フランスまたはケベックのアクセントで読み上げ",
            feature5: "🔎 アクセント記号なしで検索：ecole と入力すると école が見つかります"
        },
        age: {
            name: "年齢計算機",
            tagline: "指先で正確な年齢計算",
            description: "韓国年齢と満年齢の違いに悩んでいますか？誕生日追跡と星座情報で即座に計算。",
            feature1: "🎯 複数の年齢形式：満年齢、韓国年齢、数え年",
            feature2: "📊 詳細な人生統計：日数、週、月、時間、秒",
            feature3: "👨‍👩‍👧‍👦 家族や友人の誕生日管理",
            feature4: "⭐ 詳細情報付き星座自動判定",
            feature5: "🔮 星座に基づく毎日の占い"
        },
        filmstamp: {
            name: "Filmstampr: 日付フィルムカメラ",
            tagline: "サーバー時刻のフィルム刻印",
            description: "Filmstamprは端末の時計ではなく、ネットワークのサーバー時刻を写真に刻みます。端末の時間をいくら変えても、スタンプはサーバー時刻を使います。しかもフィルムの質感で。",
            feature1: "⏱ 端末ではなくネットワークのサーバー時刻 — 緑の✓がサーバーで確認された時刻であることを表示",
            feature2: "🎞 40種以上のタイムスタンプと25種以上のフィルムフィルター",
            feature3: "🔥 ネットワーク時刻で数える連続記録スタンプ（運動・ダイエット・勉強）— 端末時計よりずっと改ざんしにくい",
            feature4: "📍 スタンプに実際のGPS位置と都市名",
            feature5: "🏷️ 撮るたびにタグ付け（運動・食事・勉強）— 写真が習慣別に自動整理され、連続記録もカウント"
        },
        rushkitchen: {
            name: "ラッシュアワーキッチン：ローグライク",
            tagline: "料理×ローグライクのデッキ構築ゲーム",
            description: "「ラッシュアワーキッチン」は、たった一つの夢を追う元気なネコシェフの、ほっこり癒し系ローグライク・デッキ構築ゲーム。自分の名前を掲げた食堂を持つため、恐ろしい高利貸し「シャーク社長」への借金を支払い日ごとに返していきます。毎回のプレイが、食材・組み合わせ・きわどい選択でできた新しいパズルです。",
            feature1: "🍚 食材を隣り合わせに置いて料理を完成 — ごはん＋のり＝のり巻き、肉＋玉ねぎ＝プルコギ。一度に複数作れば収入を倍増させるラッシュアワーボーナスが発動！",
            feature2: "🃏 本格デッキ構築 — 57種の食材・お客・調理器具で自分だけのデッキを組む。それぞれにシナジーがあり、同じプレイは二度とありません。",
            feature3: "🏆 14種のパッシブ特典で食堂をレベルアップ、21種のレシピを習得、本物のエンディングへ — 全額返済すればエンドレスモード解放。",
            feature4: "🐱 あなたを尊重するプレミアムゲーム — 一度きりの購入、広告なし、アプリ内課金なし、完全オフライン。ギャンブルなし、追跡なし。ただ料理を。"
        },
        myurls: {
            name: "MyURLs - ブックマーク管理",
            tagline: "リンクを保存して整理",
            description: "ブックマークが溢れていませんか？MyURLs は大切なリンクをひとつの場所にすっきり整理。フォルダ、検索、クラウドバックアップに対応し、もう見失いません。",
            feature1: "🔗 共有シートからどのアプリでもリンクを保存",
            feature2: "📁 フォルダとタグで整理、検索ですぐ見つかる",
            feature3: "☁️ 任意のクラウドバックアップ — ログインで新しい端末にも復元",
            feature4: "📱 ホーム画面ウィジェットでお気に入りにワンタップ"
        },
        myhomesize: {
            name: "韓国面積計算機（坪・㎡）",
            tagline: "坪と㎡をひと目で",
            description: "物件情報は坪、頭の中は㎡。両方向に即座に換算して、実際の広さをイメージできます。",
            feature1: "📐 坪と㎡の双方向を瞬時に換算",
            feature2: "⚡ シンプルで速い、余計な機能なし",
            feature3: "🏠 不動産情報を見ながらすぐ使える"
        },
        features: {
            title: "主な機能"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "共有",
        dataDeletion: "データ削除"
    },
    ko: {
        hero: {
            title: "CleanDino",
            subtitle: "모두를 위한 고품질 앱"
        },
        hsk: {
            name: "HSK 단어장: 중국어 1-9급",
            tagline: "11,000단어 · 병음 · SRS",
            description: "HSK 준비 중이신가요? 신HSK 3.0 전체 어휘를 HSK 1급부터 고급 7-9급까지 11,000단어 이상, 병음과 예문 그리고 간격 반복 학습으로 마스터하세요.",
            feature1: "📚 신HSK 3.0 전 범위: 1급부터 7-9급까지 (11,000단어 이상)",
            feature2: "🎯 자동 생성되는 오답노트로 스마트 복습 (SRS)",
            feature3: "📱 앱을 열지 않고도 학습하는 홈 화면 위젯",
            feature4: "⚡ 60초 스피드 퀴즈로 빠른 반복 훈련",
            feature5: "🔤 성조 표기 병음과 병음 검색 — \"hao\" 입력으로 好 찾기"
        },
        bearTocfl: {
            name: "Bear TOCFL - 대만 중국어",
            tagline: "TOCFL 시험을 위한 대만 화어",
            description: "TOCFL 준비 중이신가요? 공식 어휘 목록 전체를 입문부터 C등급까지 번체자 7,500단어 이상, 병음과 주음부호 그리고 대만 화어 예문과 간격 반복 학습으로 마스터하세요.",
            feature1: "📚 공식 TOCFL 전체 목록: 입문 1부터 C등급까지 (7,500단어 이상)",
            feature2: "🎯 자동 생성되는 오답노트로 스마트 복습 (SRS)",
            feature3: "📱 앱을 열지 않고도 학습하는 홈 화면 위젯",
            feature4: "⚡ 60초 스피드 퀴즈로 빠른 반복 훈련",
            feature5: "🈶 병음과 주음부호(ㄅㄆㄇ) 표시, 대만 3종 자체 지원"
        },
        raku: {
            name: "Raku JLPT 단어장",
            tagline: "7,000단어 · 한자 · SRS",
            description: "JLPT 준비 중이신가요? N5~N1 단어 7,000개 이상을 예문, 읽기, 15개 언어 뜻과 함께 배워요. 간격 반복 학습, 같은 발음 한자 퀴즈, 가나 연습까지 한 앱에서.",
            feature1: "📚 N5~N1 단어 7,000개 이상 (예문 포함)",
            feature2: "🧠 스마트 복습(SRS)으로 잊기 직전에 단어를 다시 보여줘요",
            feature3: "🔤 같은 발음 한자 퀴즈: 1,035단어, 24단계",
            feature4: "🎯 틀린 단어 노트 자동 생성으로 집중 복습",
            feature5: "📱 홈 화면 위젯, 히라가나·가타카나 연습은 무료"
        },
        topik: {
            name: "새 TOPIK 단어장",
            tagline: "5,900단어 · 헷갈리는 단어 퀴즈 · SRS",
            description: "TOPIK 준비 중이신가요? 1~6급 어휘 5,900단어 이상을 예문과 함께 배우고, 스마트 복습(SRS)과 잊다/잇다처럼 헷갈리는 단어쌍을 구별하는 퀴즈로 실력을 키우세요.",
            feature1: "📚 TOPIK 1~6급 전체 어휘 (5,900단어 이상)",
            feature2: "🔀 헷갈리는 단어 퀴즈: 잊다/잇다 같은 비슷한 단어쌍을 나란히 비교",
            feature3: "🧠 스마트 복습(SRS)으로 약한 단어를 알맞은 때에 다시 보여줘요",
            feature4: "📱 매일 단어 학습을 돕는 홈 화면 위젯",
            feature5: "⚡ 빠른 단어 연습을 위한 스피드 모드"
        },
        coq: {
            name: "Coq French: 프랑스어 A1–B2 단어장",
            tagline: "4,941단어 · CEFR A1–B2 · IPA · SRS",
            description: "일상생활, 직장, TCF Canada·TCF IRN·DELF 같은 시험에 꼭 필요한 프랑스어 단어를 배워요. 모든 단어에 성(性), IPA 발음기호, 내 언어로 번역된 예문이 함께 있어요.",
            feature1: "📚 CEFR A1·A2·B1·B2 총 4,941단어",
            feature2: "🎯 간격 반복(SRS) 스마트 복습과 오답 노트 자동 생성",
            feature3: "👂 발음이 비슷한 단어 퀴즈: mer / mère / maire, vin / vent",
            feature4: "🔤 모든 단어에 IPA 제공, 프랑스·퀘벡 억양으로 읽어줘요",
            feature5: "🔎 악센트 없이 검색: ecole 입력하면 école 검색"
        },
        age: {
            name: "만나이 계산기",
            tagline: "정확한 나이 계산을 손쉽게",
            description: "한국 나이와 만 나이가 헷갈리시나요? 생일 추적과 별자리 정보로 즉시 계산.",
            feature1: "🎯 다양한 나이 형식: 만 나이, 한국 나이, 연 나이",
            feature2: "📊 상세한 인생 통계: 일수, 주, 개월, 시간, 초",
            feature3: "👨‍👩‍👧‍👦 가족과 친구의 생일 관리",
            feature4: "⭐ 상세 정보가 포함된 별자리 자동 판정",
            feature5: "🔮 별자리 기반 매일의 운세"
        },
        filmstamp: {
            name: "Filmstampr: 타임스탬프 카메라",
            tagline: "서버 시간 필름 타임스탬프",
            description: "Filmstampr는 폰 시계가 아니라 네트워크 서버 시간을 사진에 새깁니다. 기기 시간을 아무리 바꿔도 스탬프는 서버 시간을 씁니다. 거기에 필름 감성까지.",
            feature1: "⏱ 폰 시계가 아닌 네트워크 서버 시간 — 초록 ✓ 배지가 서버로 확인된 시간임을 표시",
            feature2: "🎞 40종 이상의 타임스탬프 + 25종 필름 필터",
            feature3: "🔥 네트워크 시간으로 세는 연속 기록 스탬프 (운동·다이어트·공부) — 기기 시계 기반보다 훨씬 조작하기 어려움",
            feature4: "📍 스탬프에 실제 GPS 위치 & 도시 이름",
            feature5: "🏷️ 찍을 때마다 태그(운동·다이어트·공부) — 사진이 습관별로 자동 정리되고 연속 기록도 카운트"
        },
        rushkitchen: {
            name: "러시아워 키친: 요리 로그라이크",
            tagline: "요리 로그라이크 덱빌딩 게임",
            description: "러시아워 키친은 꿈 많은 고양이 셰프의 아늑한 로그라이크 덱빌딩 게임이에요. 자기 이름을 내건 식당을 위해, 끈질기고 무서운 사채업자 '샤크 사장'에게 빌린 돈을 상납일마다 하나씩 갚아 나가야 해요. 매 판이 재료·조합·선택으로 짜인 새로운 퍼즐입니다.",
            feature1: "🍚 재료를 서로 옆에 놓아 요리 완성 — 밥＋김＝김밥, 고기＋양파＝불고기. 한 번에 여러 요리를 완성하면 수입을 곱해 주는 러시아워 보너스가 터져요!",
            feature2: "🃏 본격 덱빌딩 — 57종의 재료·손님·주방 기구로 나만의 덱을 완성해요. 각자 시너지가 있어 매 판이 다릅니다.",
            feature3: "🏆 14종 패시브 특전으로 식당 레벨업, 21가지 레시피 습득, 진짜 엔딩까지 — 마지막 한 닢까지 갚으면 엔드리스 모드 해금.",
            feature4: "🐱 당신을 존중하는 프리미엄 게임 — 한 번 결제, 광고 없음, 인앱결제 없음, 완전 오프라인. 도박 없음, 추적 없음. 오직 요리."
        },
        myurls: {
            name: "MyURLs - 북마크 관리",
            tagline: "링크를 저장하고 정리하세요",
            description: "북마크가 감당이 안 되나요? MyURLs는 중요한 링크를 한곳에 깔끔하게 모아줍니다. 폴더와 검색, 선택적 클라우드 백업까지 지원해 다시는 잃어버리지 않습니다.",
            feature1: "🔗 공유 시트로 어떤 앱에서든 링크 저장",
            feature2: "📁 폴더와 태그로 정리, 검색으로 바로 찾기",
            feature3: "☁️ 선택형 클라우드 백업 — 로그인하면 새 폰에서 복원",
            feature4: "📱 홈 화면 위젯으로 즐겨찾기에 한 번에 접근"
        },
        myhomesize: {
            name: "평수 계산기",
            tagline: "평과 제곱미터를 한눈에",
            description: "매물은 평으로 나오는데 머릿속은 제곱미터인가요? 양방향으로 즉시 환산해 실제 넓이를 바로 가늠할 수 있습니다.",
            feature1: "📐 평 ↔ 제곱미터 양방향 즉시 환산",
            feature2: "⚡ 군더더기 없이 간단하고 빠르게",
            feature3: "🏠 부동산 매물 볼 때 바로 쓰기 좋아요"
        },
        features: {
            title: "주요 기능"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "공유",
        dataDeletion: "데이터 삭제"
    },
    vi: {
        hero: {
            title: "CleanDino",
            subtitle: "Ứng dụng chất lượng cho mọi người"
        },
        hsk: {
            name: "Từ vựng HSK: Tiếng Trung 1-9",
            tagline: "11.000 từ · Pinyin · SRS",
            description: "Đang ôn thi HSK? Học trọn bộ từ vựng HSK 3.0 mới — hơn 11.000 từ tiếng Trung từ HSK 1 đến cấp độ nâng cao HSK 7-9 — với pinyin, câu ví dụ và lặp lại ngắt quãng.",
            feature1: "📚 Trọn bộ HSK 3.0: từ HSK 1 đến 7-9 (hơn 11.000 từ)",
            feature2: "🎯 Ôn tập thông minh (SRS) với sổ ghi lỗi sai tự động",
            feature3: "📱 Tiện ích màn hình chính để học mà không cần mở ứng dụng",
            feature4: "⚡ Trắc nghiệm tốc độ 60 giây để luyện tập nhanh",
            feature5: "🔤 Pinyin có dấu thanh và tìm kiếm bằng pinyin — gõ \"hao\" để tìm 好"
        },
        bearTocfl: {
            name: "Bear TOCFL - Hoa ngữ Đài Loan",
            tagline: "Tiếng Trung Đài Loan cho kỳ thi TOCFL",
            description: "Đang ôn thi TOCFL? Học trọn bộ danh sách từ vựng chính thức — hơn 7.500 từ tiếng Trung phồn thể từ Nhập môn đến Band C — với pinyin, Chú âm (Bopomofo), câu ví dụ tiếng Trung Đài Loan và lặp lại ngắt quãng.",
            feature1: "📚 Trọn bộ TOCFL chính thức: từ Nhập môn 1 đến Band C (hơn 7.500 từ)",
            feature2: "🎯 Ôn tập thông minh (SRS) với sổ ghi lỗi sai tự động",
            feature3: "📱 Tiện ích màn hình chính để học mà không cần mở ứng dụng",
            feature4: "⚡ Trắc nghiệm tốc độ 60 giây để luyện tập nhanh",
            feature5: "🈶 Hiển thị pinyin và Chú âm (ㄅㄆㄇ), ba kiểu chữ Đài Loan"
        },
        raku: {
            name: "Raku JLPT Từ vựng",
            tagline: "7.000 từ · Kanji · SRS",
            description: "Đang ôn JLPT? Học hơn 7.000 từ từ N5 đến N1 kèm câu ví dụ, cách đọc và nghĩa bằng 15 ngôn ngữ — cùng ôn tập ngắt quãng, đố vui kanji đồng âm và luyện kana.",
            feature1: "📚 Hơn 7.000 từ từ N5–N1, có câu ví dụ",
            feature2: "🧠 Ôn tập thông minh (SRS) đưa từ quay lại ngay trước khi bạn quên",
            feature3: "🔤 Đố vui kanji đồng âm: 1.035 từ, 24 chặng",
            feature4: "🎯 Tự động ghi chú các câu trả lời sai để ôn tập tập trung",
            feature5: "📱 Widget màn hình chính, luyện Hiragana & Katakana miễn phí"
        },
        topik: {
            name: "Sae TOPIK Từ vựng",
            tagline: "5.900 từ · Đố vui từ dễ nhầm · SRS",
            description: "Đang ôn TOPIK? Học hơn 5.900 từ cho cấp 1–6, mỗi từ đều có câu ví dụ — cùng ôn tập thông minh (SRS) và bài đố giúp bạn phân biệt các cặp từ giống nhau như 잊다/잇다.",
            feature1: "📚 Trọn bộ từ vựng TOPIK cấp 1-6 (hơn 5.900 từ)",
            feature2: "🔀 Đố vui từ dễ nhầm: các cặp từ giống nhau như 잊다/잇다 đặt cạnh nhau",
            feature3: "🧠 Ôn tập thông minh (SRS) đưa từ yếu quay lại đúng lúc",
            feature4: "📱 Widget màn hình chính để học từ mỗi ngày",
            feature5: "⚡ Chế độ tốc độ để luyện từ vựng nhanh"
        },
        coq: {
            name: "Coq French: Từ vựng tiếng Pháp A1–B2",
            tagline: "4.941 từ · CEFR A1–B2 · IPA · SRS",
            description: "Học những từ tiếng Pháp bạn thực sự cần cho cuộc sống hằng ngày, công việc và các kỳ thi như TCF Canada, TCF IRN và DELF. Mỗi từ đều có giống (đực/cái), phiên âm IPA và câu ví dụ được dịch sang ngôn ngữ của bạn.",
            feature1: "📚 4.941 từ thuộc bốn cấp CEFR A1, A2, B1 và B2",
            feature2: "🎯 Ôn tập thông minh (SRS) kèm sổ ghi chú câu sai tự động",
            feature3: "👂 Đố vui từ phát âm giống nhau: mer / mère / maire, vin / vent",
            feature4: "🔤 Có IPA cho mọi từ, đọc to bằng giọng Pháp hoặc Québec",
            feature5: "🔎 Tìm kiếm không cần dấu: gõ ecole để tìm école"
        },
        age: {
            name: "Máy tính tuổi",
            tagline: "Tính tuổi chính xác trong tầm tay",
            description: "Nhầm lẫn giữa tuổi Hàn Quốc và tuổi quốc tế? Tính ngay với theo dõi sinh nhật và thông tin cung hoàng đạo.",
            feature1: "🎯 Nhiều định dạng tuổi: Quốc tế, Hàn Quốc và tuổi theo năm",
            feature2: "📊 Thống kê cuộc sống chi tiết: ngày, tuần, tháng, giờ, giây",
            feature3: "👨‍👩‍👧‍👦 Quản lý sinh nhật cho gia đình và bạn bè",
            feature4: "⭐ Tự động nhận diện cung hoàng đạo với thông tin chi tiết",
            feature5: "🔮 Tử vi hàng ngày dựa trên cung hoàng đạo"
        },
        filmstamp: {
            name: "Filmstampr: Camera đóng dấu",
            tagline: "Dấu thời gian phim từ máy chủ",
            description: "Filmstampr đóng dấu ảnh của bạn bằng thời gian máy chủ mạng — không phải đồng hồ điện thoại. Đổi giờ thiết bị bao nhiêu tùy thích; dấu vẫn dùng giờ máy chủ. Cùng thẩm mỹ phim tuyệt đẹp.",
            feature1: "⏱ Thời gian máy chủ mạng, không phải đồng hồ điện thoại — dấu ✓ xanh cho thấy giờ đã được đối chiếu với máy chủ",
            feature2: "🎞 Hơn 40 kiểu dấu thời gian và hơn 25 bộ lọc phim",
            feature3: "🔥 Dấu chuỗi ngày tính theo giờ mạng cho thói quen (tập luyện, ăn kiêng, học) — khó làm giả hơn nhiều so với đồng hồ thiết bị",
            feature4: "📍 Vị trí GPS thật và tên thành phố trên dấu",
            feature5: "🏷️ Gắn thẻ mỗi ảnh (tập luyện, ăn kiêng, học) — ảnh tự sắp xếp theo thói quen, chuỗi ngày vẫn được đếm"
        },
        rushkitchen: {
            name: "Rush Hour Kitchen: Roguelike",
            tagline: "Game roguelike nấu ăn xây bộ bài",
            description: "Rush Hour Kitchen là một game roguelike xây bộ bài ấm cúng kể về chú mèo đầu bếp gan dạ theo đuổi một giấc mơ: một quán ăn có tên mình trên bảng hiệu. Bạn phải trả nợ cho ông Shark — tay cho vay nặng lãi đầy đe dọa — dần từng ngày đến hạn. Mỗi lượt chơi là một câu đố mới về nguyên liệu, combo và lựa chọn khó khăn.",
            feature1: "🍚 Đặt nguyên liệu cạnh nhau để nấu món — Cơm + Rong biển = Gimbap, Thịt + Hành = Bulgogi. Nấu nhiều món cùng lúc để kích hoạt thưởng RUSH HOUR nhân đôi số xu!",
            feature2: "🃏 Cốt lõi là xây bộ bài — ghép bộ bài gồm 57 nguyên liệu, khách hàng và dụng cụ bếp, mỗi thứ có synergy riêng. Không lượt nào giống lượt nào.",
            feature3: "🏆 Nâng cấp quán với 14 đặc quyền bị động, học 21 công thức và đạt kết thúc thật sự — trả hết nợ rồi mở khóa chế độ Endless.",
            feature4: "🐱 Game premium tôn trọng bạn — trả một lần, không quảng cáo, không mua trong ứng dụng, hoàn toàn offline. Không cờ bạc, không theo dõi. Chỉ nấu ăn."
        },
        myurls: {
            name: "MyURLs - Quản lý dấu trang",
            tagline: "Lưu và sắp xếp liên kết của bạn",
            description: "Chìm trong dấu trang? MyURLs giữ mọi liên kết quan trọng ở một nơi gọn gàng, với thư mục, tìm kiếm và sao lưu đám mây tùy chọn để bạn không bao giờ mất chúng.",
            feature1: "🔗 Lưu liên kết từ mọi ứng dụng qua trình chia sẻ",
            feature2: "📁 Sắp xếp bằng thư mục và thẻ, tìm mọi thứ bằng tìm kiếm",
            feature3: "☁️ Sao lưu đám mây tùy chọn — đăng nhập và khôi phục trên máy mới",
            feature4: "📱 Tiện ích màn hình chính để truy cập nhanh mục yêu thích"
        },
        myhomesize: {
            name: "Máy tính diện tích Hàn Quốc",
            tagline: "Pyeong và m² trong nháy mắt",
            description: "Tin rao nhà tính bằng pyeong nhưng bạn quen với m²? Chuyển đổi tức thì cả hai chiều và hình dung diện tích thực tế.",
            feature1: "📐 Chuyển đổi hai chiều tức thì giữa pyeong và m²",
            feature2: "⚡ Đơn giản, nhanh, không rườm rà",
            feature3: "🏠 Tiện lợi khi xem tin rao bất động sản"
        },
        features: {
            title: "Tính năng chính"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "Chia sẻ",
        dataDeletion: "Xóa dữ liệu"
    },
    zh: {
        hero: {
            title: "CleanDino",
            subtitle: "为每个人打造的优质应用"
        },
        hsk: {
            name: "HSK 单词本：中文 1-9级",
            tagline: "11,000词 · 拼音 · SRS",
            description: "正在备考HSK吗？学习新HSK 3.0全部词汇——从HSK 1级到高级7-9级共11,000多个中文词，配有拼音、例句和间隔重复复习。",
            feature1: "📚 新HSK 3.0全范围：1级至7-9级（11,000词以上）",
            feature2: "🎯 智能复习（SRS），自动生成错题本",
            feature3: "📱 主屏幕小组件，不打开应用也能学习",
            feature4: "⚡ 60秒速度测验，快速强化训练",
            feature5: "🔤 带声调的拼音显示，支持拼音搜索——输入\"hao\"即可找到好"
        },
        bearTocfl: {
            name: "Bear TOCFL - 台湾华语",
            tagline: "备考TOCFL的台湾华语",
            description: "正在备考TOCFL吗？学习官方词汇表全部内容——从入门到C等共7,500多个繁体中文词，配有拼音、注音符号、台湾华语例句和间隔重复复习。",
            feature1: "📚 官方TOCFL完整词表：入门1级至C等（7,500词以上）",
            feature2: "🎯 智能复习（SRS），自动生成错题本",
            feature3: "📱 主屏幕小组件，不打开应用也能学习",
            feature4: "⚡ 60秒速度测验，快速强化训练",
            feature5: "🈶 拼音与注音（ㄅㄆㄇ）显示，支持三种台湾字体"
        },
        raku: {
            name: "Raku JLPT 词汇本",
            tagline: "7,000词 · 汉字 · SRS",
            description: "正在备考 JLPT？学习 N5 到 N1 的 7,000 多个单词，附例句、读音和 15 种语言释义，还有间隔重复复习、同音汉字测验和假名练习。",
            feature1: "📚 N5–N1 共 7,000+ 单词，附例句",
            feature2: "🧠 智能复习（SRS），在你快要忘记时让单词重新出现",
            feature3: "🔤 同音汉字测验：1,035 个单词，24 个关卡",
            feature4: "🎯 自动生成错题笔记，集中复习",
            feature5: "📱 主屏幕小组件，平假名和片假名练习免费"
        },
        topik: {
            name: "新TOPIK词汇本",
            tagline: "5,900词 · 易混词测验 · SRS",
            description: "正在备考 TOPIK？学习 1–6 级共 5,900 多个单词，每个单词都有例句，还有智能复习（SRS）和易混词测验，帮你分辨 잊다/잇다 这样的相似词对。",
            feature1: "📚 完整的 TOPIK 1-6 级词汇（5,900+ 个单词）",
            feature2: "🔀 易混词测验：把 잊다/잇다 这样的相似词对并排比较",
            feature3: "🧠 智能复习（SRS）在合适的时间让薄弱单词重新出现",
            feature4: "📱 主屏幕小组件，每天学单词",
            feature5: "⚡ 速度模式，快速练习词汇"
        },
        coq: {
            name: "Coq French：法语 A1–B2 词汇",
            tagline: "4,941词 · CEFR A1–B2 · IPA · SRS",
            description: "学习日常生活、工作以及 TCF Canada、TCF IRN、DELF 等考试真正用得上的法语单词。每个单词都附有词性（阴阳性）、IPA 音标，以及翻译成你的语言的例句。",
            feature1: "📚 涵盖 CEFR A1、A2、B1、B2 共 4,941 个单词",
            feature2: "🎯 智能复习（SRS），自动生成错题笔记",
            feature3: "👂 近音词测验：mer / mère / maire、vin / vent",
            feature4: "🔤 每个单词都有 IPA，可用法国或魁北克口音朗读",
            feature5: "🔎 无需重音符号即可搜索：输入 ecole 就能找到 école"
        },
        age: {
            name: "年龄计算器",
            tagline: "精确年龄计算触手可及",
            description: "分不清韩国年龄和国际年龄？通过生日追踪和星座信息即时计算。",
            feature1: "🎯 多种年龄格式：国际年龄、韩国年龄和周岁",
            feature2: "📊 详细的生命统计：天数、周、月、小时、秒",
            feature3: "👨‍👩‍👧‍👦 家人和朋友的生日管理",
            feature4: "⭐ 自动星座检测及详细信息",
            feature5: "🔮 基于星座的每日运势"
        },
        filmstamp: {
            name: "Filmstampr: 胶片时间水印",
            tagline: "网络服务器时间的胶片刻印",
            description: "Filmstampr 把网络服务器时间刻在你的照片上——不是手机时钟。随便你怎么改设备时间，刻印都使用服务器时间。还带着精致的胶片质感。",
            feature1: "⏱ 网络服务器时间，而非手机时钟——绿色 ✓ 徽章显示时间已通过服务器核对",
            feature2: "🎞 40+ 种时间戳样式和 25+ 种胶片滤镜",
            feature3: "🔥 按网络时间统计的连续打卡刻印（健身、减脂、学习）— 比基于设备时钟的记录更难作弊",
            feature4: "📍 刻印中的真实 GPS 定位与城市名",
            feature5: "🏷️ 每张照片打标签（健身、减脂、学习）— 照片按习惯自动分类，连续打卡持续累计"
        },
        rushkitchen: {
            name: "繁忙厨房：料理肉鸽卡牌",
            tagline: "料理肉鸽卡牌构筑游戏",
            description: "《繁忙厨房》是一款温馨的料理肉鸽卡牌构筑游戏，讲述一只勇敢的猫咪厨师追逐唯一梦想的故事：开一家挂着自己名字招牌的小餐馆。为了实现梦想，你得在每个还款日一笔一笔地还清欠鲨鱼老板的债。每一局都是由食材、组合与艰难抉择拼成的全新谜题。",
            feature1: "🍚 把食材相邻摆放即可做菜 —— 米饭＋海苔＝紫菜包饭，肉＋洋葱＝烤肉。一次做出多道菜即可触发让收入翻倍的繁忙时段奖励！",
            feature2: "🃏 核心是卡牌构筑 —— 用 57 种食材、顾客与厨具组建专属牌组，各有联动效果，每一局都不一样。",
            feature3: "🏆 用 14 种被动特权升级餐馆，学会 21 道菜谱，抵达真正的结局 —— 还清每一枚硬币后解锁无尽模式。",
            feature4: "🐱 尊重你的付费游戏 —— 一次买断、无广告、无内购、完全离线。无赌博、无追踪，只有料理。"
        },
        myurls: {
            name: "MyURLs - 书签管理",
            tagline: "保存并整理你的链接",
            description: "书签多到找不着？MyURLs 把重要链接整齐地收在一处，支持文件夹、搜索和可选的云备份，再也不会弄丢。",
            feature1: "🔗 通过共享菜单从任意应用保存链接",
            feature2: "📁 用文件夹和标签整理，搜索一下就能找到",
            feature3: "☁️ 可选云备份 — 登录后在新手机上恢复",
            feature4: "📱 主屏小组件，一键打开常用链接"
        },
        myhomesize: {
            name: "韩国面积换算器（坪·平方米）",
            tagline: "坪与平方米一目了然",
            description: "房源按坪标注，脑子里却是平方米？双向即时换算，立刻知道实际有多大。",
            feature1: "📐 坪与平方米双向即时换算",
            feature2: "⚡ 简单快速，没有多余功能",
            feature3: "🏠 看房源信息时随手就能用"
        },
        features: {
            title: "主要功能"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "分享",
        dataDeletion: "数据删除"
    },
    id: {
        hero: {
            title: "CleanDino",
            subtitle: "Aplikasi berkualitas untuk semua orang"
        },
        hsk: {
            name: "Kosakata HSK: Mandarin 1-9",
            tagline: "11.000 kata · Pinyin · SRS",
            description: "Sedang belajar untuk HSK? Pelajari seluruh daftar kosakata HSK 3.0 terbaru — lebih dari 11.000 kata Mandarin dari HSK 1 hingga tingkat lanjut HSK 7-9 — dengan pinyin, contoh kalimat, dan pengulangan berjarak.",
            feature1: "📚 Daftar lengkap HSK 3.0: HSK 1 sampai 7-9 (11.000+ kata)",
            feature2: "🎯 Ulasan cerdas (SRS) dengan catatan salah otomatis",
            feature3: "📱 Widget layar utama untuk belajar tanpa membuka aplikasi",
            feature4: "⚡ Kuis cepat 60 detik untuk latihan kilat",
            feature5: "🔤 Pinyin dengan tanda nada dan pencarian pinyin — ketik \"hao\" untuk menemukan 好"
        },
        bearTocfl: {
            name: "Bear TOCFL - Mandarin Taiwan",
            tagline: "Mandarin Taiwan untuk Ujian TOCFL",
            description: "Bersiap untuk TOCFL? Pelajari seluruh daftar kosakata resmi — lebih dari 7.500 kata Mandarin tradisional dari Novice hingga Band C — dengan pinyin, Zhuyin (Bopomofo), contoh kalimat Mandarin Taiwan, dan pengulangan berjarak.",
            feature1: "📚 Daftar resmi TOCFL lengkap: Novice 1 sampai Band C (7.500+ kata)",
            feature2: "🎯 Ulasan cerdas (SRS) dengan catatan salah otomatis",
            feature3: "📱 Widget layar utama untuk belajar tanpa membuka aplikasi",
            feature4: "⚡ Kuis cepat 60 detik untuk latihan kilat",
            feature5: "🈶 Tampilan pinyin dan Zhuyin (ㄅㄆㄇ), tiga gaya karakter Taiwan"
        },
        raku: {
            name: "Raku JLPT Kosakata",
            tagline: "7.000 kata · Kanji · SRS",
            description: "Sedang belajar untuk JLPT? Pelajari lebih dari 7.000 kata N5–N1 dengan contoh kalimat, cara baca, dan arti dalam 15 bahasa — plus pengulangan berjarak (SRS), kuis kanji dengan bacaan sama, dan latihan kana.",
            feature1: "📚 7.000+ kata N5–N1 dengan contoh kalimat",
            feature2: "🧠 Ulasan Pintar (SRS) memunculkan kata tepat sebelum Anda lupa",
            feature3: "🔤 Kuis kanji bacaan sama: 1.035 kata dalam 24 tahap",
            feature4: "🎯 Catatan jawaban salah otomatis untuk ulasan terfokus",
            feature5: "📱 Widget layar utama, plus latihan Hiragana & Katakana gratis"
        },
        topik: {
            name: "Sae TOPIK Kosakata",
            tagline: "5.900 kata · Kuis kata membingungkan · SRS",
            description: "Sedang menyiapkan TOPIK? Pelajari 5.900+ kata untuk level 1–6, masing-masing dengan contoh kalimat — plus Ulasan Pintar (SRS) dan kuis yang melatih Anda membedakan pasangan kata mirip seperti 잊다/잇다.",
            feature1: "📚 Kosakata TOPIK Level 1-6 lengkap (5.900+ kata)",
            feature2: "🔀 Kuis kata membingungkan: pasangan mirip seperti 잊다/잇다 berdampingan",
            feature3: "🧠 Ulasan Pintar (SRS) memunculkan kata lemah pada waktu yang tepat",
            feature4: "📱 Widget layar utama untuk belajar kata setiap hari",
            feature5: "⚡ Mode kecepatan untuk latihan kosakata cepat"
        },
        coq: {
            name: "Coq French: Kosakata Prancis A1–B2",
            tagline: "4.941 kata · CEFR A1–B2 · IPA · SRS",
            description: "Pelajari kata-kata Prancis yang benar-benar Anda butuhkan untuk kehidupan sehari-hari, pekerjaan, dan ujian seperti TCF Canada, TCF IRN, dan DELF. Setiap kata dilengkapi gender, IPA, dan contoh kalimat yang diterjemahkan ke bahasa Anda.",
            feature1: "📚 4.941 kata di empat level CEFR: A1, A2, B1, dan B2",
            feature2: "🎯 Ulasan pintar (SRS) dengan catatan jawaban salah otomatis",
            feature3: "👂 Kuis kata berbunyi mirip: mer / mère / maire, vin / vent",
            feature4: "🔤 IPA untuk setiap kata, dibacakan dengan aksen Prancis atau Québec",
            feature5: "🔎 Cari tanpa aksen: ketik ecole untuk menemukan école"
        },
        age: {
            name: "Kalkulator Usia",
            tagline: "Perhitungan usia yang tepat di ujung jari",
            description: "Bingung antara usia Korea dan usia internasional? Hitung langsung dengan pelacakan ulang tahun dan info zodiak.",
            feature1: "🎯 Berbagai format usia: Internasional, Korea, dan usia tahun",
            feature2: "📊 Statistik kehidupan detail: hari, minggu, bulan, jam, detik",
            feature3: "👨‍👩‍👧‍👦 Pengelola ulang tahun untuk keluarga dan teman",
            feature4: "⭐ Deteksi zodiak otomatis dengan info lengkap",
            feature5: "🔮 Horoskop harian berdasarkan zodiak Anda"
        },
        filmstamp: {
            name: "Filmstampr: Kamera Stempel Waktu",
            tagline: "Stempel waktu film dari server",
            description: "Filmstampr menstempel foto Anda dengan waktu server jaringan — bukan jam ponsel. Ubah waktu perangkat sesuka Anda; stempel tetap memakai waktu server. Dibalut estetika film yang indah.",
            feature1: "⏱ Waktu server jaringan, bukan jam ponsel — lencana ✓ hijau menunjukkan waktu telah dicek ke server",
            feature2: "🎞 40+ gaya stempel waktu dan 25+ filter film",
            feature3: "🔥 Stempel streak dihitung dari waktu jaringan untuk rutinitas (olahraga, diet, belajar) — jauh lebih sulit dipalsukan daripada jam perangkat",
            feature4: "📍 Lokasi GPS asli & nama kota pada stempel",
            feature5: "🏷️ Beri tag tiap foto (olahraga, diet, belajar) — foto tersortir otomatis per kebiasaan, streak terus dihitung"
        },
        rushkitchen: {
            name: "Rush Hour Kitchen: Roguelike",
            tagline: "Roguelike deckbuilder memasak",
            description: "Rush Hour Kitchen adalah roguelike deckbuilder yang hangat tentang seekor kucing koki gigih yang mengejar satu impian: sebuah kedai dengan namanya sendiri di papan nama. Kamu harus melunasi utang kepada Bos Shark — rentenir yang menyeramkan — satu hari bayar demi satu hari bayar. Setiap ronde adalah teka-teki baru berisi bahan, kombo, dan pilihan sulit.",
            feature1: "🍚 Letakkan bahan berdampingan untuk memasak — Nasi + Rumput Laut = Gimbap, Daging + Bawang = Bulgogi. Masak beberapa sekaligus untuk memicu bonus RUSH HOUR yang menggandakan koinmu!",
            feature2: "🃏 Inti permainan adalah deckbuilder — susun dek berisi 57 bahan, pelanggan, dan alat dapur, masing-masing punya sinergi sendiri. Tak ada ronde yang sama.",
            feature3: "🏆 Tingkatkan kedaimu dengan 14 perk pasif, pelajari 21 resep, dan capai ending sungguhan — lunasi setiap koin, lalu buka mode Endless.",
            feature4: "🐱 Game premium yang menghargaimu — bayar sekali, tanpa iklan, tanpa pembelian dalam aplikasi, sepenuhnya offline. Tanpa judi, tanpa pelacakan. Hanya memasak."
        },
        myurls: {
            name: "MyURLs - Pengelola Markah",
            tagline: "Simpan dan atur tautan Anda",
            description: "Tenggelam dalam markah? MyURLs menyimpan setiap tautan penting di satu tempat yang rapi, dengan folder, pencarian, dan cadangan awan opsional agar tidak pernah hilang.",
            feature1: "🔗 Simpan tautan dari aplikasi apa pun lewat menu berbagi",
            feature2: "📁 Atur dengan folder dan tag, temukan apa pun lewat pencarian",
            feature3: "☁️ Cadangan awan opsional — masuk dan pulihkan di ponsel baru",
            feature4: "📱 Widget layar utama untuk akses cepat ke favorit"
        },
        myhomesize: {
            name: "Kalkulator Luas Korea",
            tagline: "Pyeong dan m² sekilas",
            description: "Iklan properti pakai pyeong tapi Anda terbiasa m²? Konversi instan dua arah dan langsung tahu luas sebenarnya.",
            feature1: "📐 Konversi dua arah instan antara pyeong dan m²",
            feature2: "⚡ Sederhana, cepat, tanpa embel-embel",
            feature3: "🏠 Praktis saat menelusuri iklan properti"
        },
        features: {
            title: "Fitur Utama"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "Bagikan",
        dataDeletion: "Penghapusan Data"
    },
    th: {
        hero: {
            title: "CleanDino",
            subtitle: "แอปคุณภาพสำหรับทุกคน"
        },
        hsk: {
            name: "คลังศัพท์ HSK: ภาษาจีน 1-9",
            tagline: "11,000 คำ · พินอิน · SRS",
            description: "กำลังเตรียมสอบ HSK อยู่ใช่ไหม? เรียนรู้คลังศัพท์ HSK 3.0 ฉบับใหม่ทั้งหมด กว่า 11,000 คำ ตั้งแต่ HSK 1 ไปจนถึงระดับสูง HSK 7-9 พร้อมพินอิน ประโยคตัวอย่าง และการทบทวนแบบเว้นระยะ",
            feature1: "📚 ครบทุกระดับ HSK 3.0: ตั้งแต่ HSK 1 ถึง 7-9 (กว่า 11,000 คำ)",
            feature2: "🎯 ทบทวนอัจฉริยะ (SRS) พร้อมสมุดคำผิดอัตโนมัติ",
            feature3: "📱 วิดเจ็ตหน้าจอหลัก เรียนได้โดยไม่ต้องเปิดแอป",
            feature4: "⚡ แบบทดสอบเร็ว 60 วินาที ฝึกฝนแบบเข้มข้น",
            feature5: "🔤 พินอินพร้อมเครื่องหมายวรรณยุกต์ และค้นหาด้วยพินอิน พิมพ์ \"hao\" เพื่อหา 好"
        },
        bearTocfl: {
            name: "Bear TOCFL - ภาษาจีนไต้หวัน",
            tagline: "ภาษาจีนไต้หวันสำหรับสอบ TOCFL",
            description: "กำลังเตรียมสอบ TOCFL อยู่ใช่ไหม? เรียนรู้คลังศัพท์ทางการทั้งหมด กว่า 7,500 คำภาษาจีนตัวเต็ม ตั้งแต่ระดับเริ่มต้นถึง Band C พร้อมพินอิน จู้อิน (ㄅㄆㄇ) ประโยคตัวอย่างภาษาจีนไต้หวัน และการทบทวนแบบเว้นระยะ",
            feature1: "📚 คลังศัพท์ TOCFL ทางการครบถ้วน: ตั้งแต่เริ่มต้น 1 ถึง Band C (กว่า 7,500 คำ)",
            feature2: "🎯 ทบทวนอัจฉริยะ (SRS) พร้อมสมุดคำผิดอัตโนมัติ",
            feature3: "📱 วิดเจ็ตหน้าจอหลัก เรียนได้โดยไม่ต้องเปิดแอป",
            feature4: "⚡ แบบทดสอบเร็ว 60 วินาที ฝึกฝนแบบเข้มข้น",
            feature5: "🈶 แสดงพินอินและจู้อิน (ㄅㄆㄇ) รองรับตัวอักษรไต้หวัน 3 แบบ"
        },
        raku: {
            name: "Raku JLPT คำศัพท์",
            tagline: "7,000 คำ · คันจิ · SRS",
            description: "กำลังเตรียมสอบ JLPT? เรียนคำศัพท์ N5–N1 กว่า 7,000 คำ พร้อมประโยคตัวอย่าง คำอ่าน และความหมาย 15 ภาษา รวมถึงการทบทวนแบบเว้นระยะ (SRS) แบบทดสอบคันจิที่อ่านเหมือนกัน และฝึกคานะ",
            feature1: "📚 คำศัพท์ N5–N1 กว่า 7,000 คำ พร้อมประโยคตัวอย่าง",
            feature2: "🧠 ทบทวนอัจฉริยะ (SRS) นำคำกลับมาก่อนที่คุณจะลืม",
            feature3: "🔤 แบบทดสอบคันจิอ่านเหมือนกัน: 1,035 คำ 24 ด่าน",
            feature4: "🎯 สมุดบันทึกข้อที่ตอบผิดอัตโนมัติ สำหรับทบทวนอย่างตรงจุด",
            feature5: "📱 วิดเจ็ตหน้าจอหลัก ฝึกฮิรางานะและคาตาคานะฟรี"
        },
        topik: {
            name: "Sae TOPIK คำศัพท์",
            tagline: "5,900 คำ · ควิซคำที่สับสน · SRS",
            description: "กำลังเตรียมสอบ TOPIK? เรียนคำศัพท์กว่า 5,900 คำสำหรับระดับ 1–6 ทุกคำมีประโยคตัวอย่าง พร้อมการทบทวนอัจฉริยะ (SRS) และควิซที่ช่วยให้แยกคู่คำหน้าตาคล้ายกันอย่าง 잊다/잇다 ได้",
            feature1: "📚 คำศัพท์ TOPIK ระดับ 1-6 ครบถ้วน (5,900+ คำ)",
            feature2: "🔀 ควิซคำที่สับสน: คู่คำหน้าตาคล้ายกันอย่าง 잊다/잇다 วางเทียบกัน",
            feature3: "🧠 ทบทวนอัจฉริยะ (SRS) นำคำที่ยังอ่อนกลับมาในเวลาที่เหมาะสม",
            feature4: "📱 วิดเจ็ตหน้าจอหลักสำหรับเรียนคำศัพท์ทุกวัน",
            feature5: "⚡ โหมดความเร็วสำหรับฝึกคำศัพท์อย่างรวดเร็ว"
        },
        coq: {
            name: "Coq French: คำศัพท์ภาษาฝรั่งเศส A1–B2",
            tagline: "4,941 คำ · CEFR A1–B2 · IPA · SRS",
            description: "เรียนคำศัพท์ภาษาฝรั่งเศสที่คุณต้องใช้จริงในชีวิตประจำวัน การทำงาน และการสอบอย่าง TCF Canada, TCF IRN และ DELF ทุกคำมีเพศของคำ (เพศชาย/เพศหญิง), IPA และประโยคตัวอย่างที่แปลเป็นภาษาของคุณ",
            feature1: "📚 4,941 คำ ครอบคลุม CEFR A1, A2, B1 และ B2",
            feature2: "🎯 ทบทวนอัจฉริยะ (SRS) พร้อมสมุดบันทึกข้อที่ตอบผิดอัตโนมัติ",
            feature3: "👂 แบบทดสอบคำเสียงคล้าย: mer / mère / maire, vin / vent",
            feature4: "🔤 มี IPA ทุกคำ อ่านออกเสียงด้วยสำเนียงฝรั่งเศสหรือควิเบก",
            feature5: "🔎 ค้นหาโดยไม่ต้องใส่เครื่องหมายเน้นเสียง: พิมพ์ ecole เพื่อหา école"
        },
        age: {
            name: "เครื่องคำนวณอายุ",
            tagline: "คำนวณอายุที่แม่นยำในมือคุณ",
            description: "สับสนระหว่างอายุเกาหลีกับอายุสากล? คำนวณทันทีพร้อมติดตามวันเกิดและข้อมูลราศี",
            feature1: "🎯 หลายรูปแบบอายุ: สากล เกาหลี และอายุปี",
            feature2: "📊 สถิติชีวิตละเอียด: วัน สัปดาห์ เดือน ชั่วโมง วินาที",
            feature3: "👨‍👩‍👧‍👦 จัดการวันเกิดสำหรับครอบครัวและเพื่อน",
            feature4: "⭐ ตรวจจับราศีอัตโนมัติพร้อมข้อมูลละเอียด",
            feature5: "🔮 ดูดวงรายวันตามราศีของคุณ"
        },
        filmstamp: {
            name: "Filmstampr: กล้องประทับเวลา",
            tagline: "ประทับเวลาฟิล์มจากเซิร์ฟเวอร์",
            description: "Filmstampr ประทับเวลาเซิร์ฟเวอร์เครือข่ายลงบนภาพของคุณ — ไม่ใช่นาฬิกาในเครื่อง เปลี่ยนเวลาเครื่องยังไงก็ได้ ตราประทับก็ยังใช้เวลาเซิร์ฟเวอร์ ห่อหุ้มด้วยความงามแบบฟิล์ม",
            feature1: "⏱ เวลาเซิร์ฟเวอร์เครือข่าย ไม่ใช่นาฬิกาในเครื่อง — เครื่องหมาย ✓ สีเขียวแสดงว่าเวลาถูกตรวจกับเซิร์ฟเวอร์",
            feature2: "🎞 สไตล์ประทับเวลากว่า 40 แบบ และฟิลเตอร์ฟิล์มกว่า 25 แบบ",
            feature3: "🔥 ประทับสตรีคนับตามเวลาเครือข่ายสำหรับกิจวัตร (ออกกำลังกาย ไดเอต เรียน) — ปลอมยากกว่านาฬิกาในเครื่องมาก",
            feature4: "📍 ตำแหน่ง GPS จริงและชื่อเมืองบนตราประทับ",
            feature5: "🏷️ แท็กทุกภาพ (ออกกำลังกาย ไดเอต เรียน) — ภาพจัดเรียงตามนิสัยอัตโนมัติ และสตรีคนับต่อเนื่อง"
        },
        rushkitchen: {
            name: "Rush Hour Kitchen: โร้กไลค์",
            tagline: "เกมทำอาหารโร้กไลค์เด็คบิลด์",
            description: "Rush Hour Kitchen คือเกมทำอาหารแนวโร้กไลค์เด็คบิลด์แสนอบอุ่น ว่าด้วยเชฟแมวจอมมุ่งมั่นที่มีความฝันเดียว — เปิดร้านอาหารที่มีชื่อของตัวเองอยู่บนป้าย แต่คุณต้องผ่อนหนี้คืนให้ \"เจ้าสัวฉลาม\" เจ้าหนี้เงินกู้สุดน่าขนลุก ทีละงวดในวันชำระ ทุกเกมคือปริศนาใหม่ของวัตถุดิบ คอมโบ และการตัดสินใจที่ยากลำบาก",
            feature1: "🍚 วางวัตถุดิบติดกันเพื่อปรุงเมนู — ข้าว + สาหร่าย = คิมบับ, เนื้อ + หัวหอม = พุลโกกิ ปรุงหลายจานพร้อมกันเพื่อกระตุ้นโบนัส RUSH HOUR ที่คูณเหรียญของคุณ!",
            feature2: "🃏 หัวใจคือเด็คบิลด์ — สร้างเด็คจากวัตถุดิบ ลูกค้า และอุปกรณ์ครัว 57 อย่าง แต่ละอย่างมีซินเนอร์ยีของตัวเอง ไม่มีเกมไหนซ้ำกัน",
            feature3: "🏆 อัปเกรดร้านด้วยสกิลพาสซีฟ 14 แบบ เรียนรู้ 21 สูตร และไปถึงตอนจบจริง — ผ่อนหนี้ครบทุกเหรียญแล้วปลดล็อกโหมด Endless",
            feature4: "🐱 เกมพรีเมียมที่เคารพคุณ — จ่ายครั้งเดียว ไม่มีโฆษณา ไม่มีการซื้อในแอป เล่นออฟไลน์เต็มรูปแบบ ไม่มีการพนัน ไม่มีการติดตาม มีแค่การทำอาหาร"
        },
        myurls: {
            name: "MyURLs - ตัวจัดการบุ๊กมาร์ก",
            tagline: "บันทึกและจัดระเบียบลิงก์ของคุณ",
            description: "บุ๊กมาร์กเยอะจนหาไม่เจอ? MyURLs เก็บทุกลิงก์สำคัญไว้ในที่เดียวอย่างเป็นระเบียบ พร้อมโฟลเดอร์ การค้นหา และการสำรองข้อมูลบนคลาวด์แบบเลือกได้ เพื่อไม่ให้คุณทำหาย",
            feature1: "🔗 บันทึกลิงก์จากแอปใดก็ได้ผ่านเมนูแชร์",
            feature2: "📁 จัดระเบียบด้วยโฟลเดอร์และแท็ก ค้นหาได้ทุกอย่าง",
            feature3: "☁️ สำรองข้อมูลบนคลาวด์แบบเลือกได้ — ลงชื่อเข้าใช้แล้วกู้คืนบนเครื่องใหม่",
            feature4: "📱 วิดเจ็ตหน้าจอหลักเข้าถึงรายการโปรดได้ในแตะเดียว"
        },
        myhomesize: {
            name: "เครื่องคำนวณพื้นที่เกาหลี",
            tagline: "พยองและตร.ม. ในพริบตา",
            description: "ประกาศขายบ้านใช้พยอง แต่คุณคุ้นกับตารางเมตร? แปลงหน่วยสองทางได้ทันที และเห็นภาพขนาดจริง",
            feature1: "📐 แปลงสองทางระหว่างพยองกับตารางเมตรได้ทันที",
            feature2: "⚡ เรียบง่าย รวดเร็ว ไม่รกรุงรัง",
            feature3: "🏠 ใช้สะดวกตอนดูประกาศอสังหาฯ"
        },
        features: {
            title: "คุณสมบัติหลัก"
        },
        download: {
            android: "Google Play",
            ios: "App Store"
        },
        back: "CleanDino",
        share: "แชร์",
        dataDeletion: "การลบข้อมูล"
    }
};

// ===== Language Detection & Management =====
let currentLang = 'en';

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('vi')) return 'vi';
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('id') || browserLang.startsWith('ms')) return 'id';
    if (browserLang.startsWith('th')) return 'th';
    return 'en';
}

function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        for (const key of keys) {
            if (!translation) break;
            translation = translation[key];
        }
        if (translation) {
            element.textContent = translation;
        }
    });

    const langNames = {
        en: 'EN', ja: '日本語', ko: '한국어',
        vi: 'Tiếng Việt', zh: '中文', id: 'Indonesia', th: 'ไทย'
    };
    const langSelected = document.querySelector('.lang-selected');
    if (langSelected) {
        langSelected.textContent = langNames[lang] || 'EN';
    }

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');

    localStorage.setItem('preferredLanguage', lang);

    const titles = {
        en: 'CleanDino - Quality Apps for Everyone',
        ja: 'CleanDino - みんなのための高品質アプリ',
        ko: 'CleanDino - 모두를 위한 고품질 앱',
        vi: 'CleanDino - Ứng dụng chất lượng cho mọi người',
        zh: 'CleanDino - 为每个人打造的优质应用',
        id: 'CleanDino - Aplikasi berkualitas untuk semua orang',
        th: 'CleanDino - แอปคุณภาพสำหรับทุกคน'
    };

    // For detail pages, use app-specific title
    const pageApp = document.body.getAttribute('data-app');
    if (pageApp && translations[lang][pageApp]) {
        document.title = translations[lang][pageApp].name + ' - CleanDino';
    } else {
        document.title = titles[lang] || titles.en;
    }
}

// ===== Platform Detection =====
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'ios';
    if (/android/i.test(userAgent)) return 'android';
    return 'other';
}

function updateDownloadButtons() {
    const platform = detectPlatform();
    const googlePlayButtons = document.querySelectorAll('.google-play');
    const appStoreButtons = document.querySelectorAll('.app-store');

    if (platform === 'ios') {
        googlePlayButtons.forEach(btn => btn.style.order = '2');
        appStoreButtons.forEach(btn => btn.style.order = '1');
    } else if (platform === 'android') {
        googlePlayButtons.forEach(btn => btn.style.order = '1');
        appStoreButtons.forEach(btn => btn.style.order = '2');
    }
}

// ===== Theme Management =====
function initializeTheme() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (systemDark) {
        html.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    } else {
        updateThemeIcon('light');
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// ===== Share Functions =====
async function shareContent(shareData) {
    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            if (err.name !== 'AbortError') {
                copyToClipboard(shareData.url);
            }
        }
    } else {
        copyToClipboard(shareData.url);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Link copied!');
    }).catch(() => {
        showToast('Failed to copy link');
    });
}

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = savedLang || detectBrowserLanguage();
    setLanguage(initialLang);

    updateDownloadButtons();

    // Language dropdown
    const langSelected = document.querySelector('.lang-selected');
    const langDropdown = document.querySelector('.lang-dropdown');
    if (langSelected && langDropdown) {
        langSelected.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                setLanguage(opt.getAttribute('data-lang'));
            });
        });
        document.addEventListener('click', () => {
            langDropdown.classList.remove('open');
        });
        langDropdown.addEventListener('click', (e) => e.stopPropagation());
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Detail page share button
    const detailShareBtn = document.querySelector('.detail-share-btn');
    if (detailShareBtn) {
        detailShareBtn.addEventListener('click', () => {
            const appName = document.querySelector('.detail-app-name');
            shareContent({
                title: appName ? appName.textContent : 'CleanDino',
                text: appName ? appName.textContent + ' - CleanDino' : 'CleanDino',
                url: window.location.href
            });
        });
    }

    // Track download clicks
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.classList.contains('google-play') ? 'Android' : 'iOS';
            const appName = document.body.getAttribute('data-app') || 'unknown';
            console.log(`Download: ${appName} on ${platform}`);
        });
    });

    // Scroll animations for detail page features
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.detail-features li').forEach((li, i) => {
        li.style.opacity = '0';
        li.style.transform = 'translateY(16px)';
        li.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
        observer.observe(li);
    });
});
