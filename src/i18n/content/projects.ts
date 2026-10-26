import type { Locale } from "@/i18n/config";

export type ProjectSlug =
  | "thypoch-simera"
  | "thypoch-eureka-50"
  | "thypoch-eureka-28"
  | "thypoch-voyager";

export type LocalizedProject = {
  slug: ProjectSlug;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  /** Shown under the hairline, e.g. "2022" */
  date: string;
  summary: string;
  headline: string;
  body: string[];
  imageFolder: string;
};

const en: LocalizedProject[] = [
  {
    slug: "thypoch-simera",
    title: "Thypoch Simera",
    subtitle: "The Very First Step in 2022",
    category: "Product Concept",
    year: "2022",
    date: "2022",
    summary: "The Very First Step in 2022",
    imageFolder: "/images/project/thypoch-simera",
    headline:
      "The Very First Step in 2022: Why Make Something the Same When It Can Be Different?",
    body: [
      "The very first idea behind creating Thypoch was simple: to make Leica M-mount lenses that completely differentiate themselves from Leica and its host of third-party copycat brands.",
      "I loved many lens designs from the '50s and '60s — that was the golden age of mechanical design, and many brilliant ideas in lens design have been almost forgotten today. So I followed my instinct and analyzed many ingenious designs from old Kern, SOM, and Angénieux lenses, bringing some of these ideas into our own lens design.",
      "Thypoch's first work — the Simera 35mm — features a de-clicked aperture ring, a floating element, a unique DOF indicator, and even an internal focusing design, all packed into a very compact body. It was still one of the most complex lenses in the entire LM-mount world.",
    ],
  },
  {
    slug: "thypoch-eureka-50",
    title: "Thypoch Eureka 50",
    subtitle: "Back to the Basics",
    category: "Product Concept",
    year: "2023",
    date: "2023",
    summary: "Back to the Basics",
    imageFolder: "/images/project/thypoch-eureka-50",
    headline: "BTTB: Back to the Basics",
    body: [
      "In mid-2023, six months after the Simera project, I was planning a different series.",
      "I had been through all kinds of cine lens tests by then, and there was no shortage of \"clean\" lenses in this world. People were tired of the correct, clean, and boring look of modern optics over the last 10 years — the look needed to be colorful and organic. I believe the biggest value of this brand is to recreate the aesthetics and rendering of different eras through today's approaches. The brand name Thypoch was settled on around that time.",
      "I was touched by the story of Oscar Barnack back then — the man who spent his lifetime trying to make portable lenses and cameras that could fit in people's pockets. Looking at cameras today, they've become much smaller, but lenses, in contrast, have grown bigger. Sakamoto's album BTTB best described my thinking at the time — sometimes a product needs to go back to the basics. So I sketched out the basic concept of the first Eureka lens: a pure double-Gauss spherical 50mm in a collapsible body.",
      "I never could have predicted this project would be so difficult — a lot of mechanical and CMF problems appeared during development. The shame is that we didn't manage to recreate much more of the 1950s character in the rendering. Though it has some swirly effect, I had expected more than that.",
    ],
  },
  {
    slug: "thypoch-eureka-28",
    title: "Thypoch Eureka 28",
    subtitle: "A Comprehensive Work of Everything",
    category: "Product Concept",
    year: "2024",
    date: "2024",
    summary: "A Comprehensive Work of Everything",
    imageFolder: "/images/project/thypoch-eureka-28",
    headline: "A Comprehensive Work of Everything",
    body: [
      "The idea of making a super-compact 28mm actually began during multiple business trips, when I carried a Minolta CLE (the most compact M-mount camera) everywhere and shot slide film. 28mm, as the camera's primary frame line and also a classic focal length for travel, led me to look for a well-balanced compact 28mm — I didn't want to carry a big lens, but I still wanted my slides to look crystal clear. Yet none of the choices on the market combined high resolution, low vignetting, and a truly compact size.",
      "I sensed a gap in the market and began studying the idea of a super-compact 28mm more seriously. How many users out there wanted a lens like this, as I did? What about the female market that doesn't typically use M-mount cameras? Where were the trade-offs happening? What were the optical specs of each comparable product on the market? I kept posing these questions and investigating both the market and our users.",
      "But making a compact lens that performs well and doesn't vignette much is extremely difficult. We went through two prototype versions with different design defaults, three different product managers and four ID designers came and went on this project, and we ran well over 30 rounds of CMF experiments just to land on that beautiful white finish.",
      "In the end, when I heard some of our female colleagues asking to buy one themselves — something that had never happened before — I felt that all the effort had finally paid off. This lens is a comprehensive work of many ideas coming together: design, new materials, new finishes, optical challenges... and ultimately, controlling all of it within a reasonable cost to arrive at a good price.",
    ],
  },
  {
    slug: "thypoch-voyager",
    title: "Thypoch Voyager",
    subtitle: "An 18-Month-Long Journey",
    category: "Product Concept",
    year: "2024",
    date: "2024",
    summary: "An 18-Month-Long Journey",
    imageFolder: "/images/project/thypoch-voyager",
    headline:
      "An 18-Month-Long Journey: Finding a New Philosophy, Not Just a Single Product Idea",
    body: [
      "Every lens Thypoch had made before this was a beautiful manual-focus lens. The decision to build our first autofocus lens finally came in 2024 — and before anything else, there was one question to answer: what philosophy should this new lens carry?",
      "Every naming system at Thypoch is deliberate. A name carries the positioning, and often the spec decisions that follow from it. So I started there, with the name.",
      "There should be a lens made for the encounter, for the journey, for the voyage — a lens for every voyager in the world. That was the whole philosophy, before a single spec was set. Small, light, weather-sealed — everything else followed from that one idea. I was confident enough, at that point, to shut down every autofocus prime we had been quietly developing.",
      "Matching prime-level image quality inside an internal zoom, with autofocus, was a real wall to hit in 2024. But I never doubted the philosophy — I followed this line through to finish the entire future product lineup.",
    ],
  },
];

const zh: LocalizedProject[] = [
  {
    slug: "thypoch-simera",
    title: "Thypoch Simera",
    subtitle: "2022年的第一步",
    category: "Product Concept",
    year: "2022年",
    date: "2022年",
    summary: "2022年的第一步",
    imageFolder: "/images/project/thypoch-simera",
    headline: "2022年的第一步：为什么要做和别人一样的东西，而不是做不一样的？",
    body: [
      "创立Thypoch的最初想法非常简单：做徕卡M卡口镜头，但要与徕卡以及市面上一众第三方仿制品牌彻底区分开来。",
      "我一直很喜欢50、60年代的镜头设计，那是机械设计的黄金时代，许多镜头设计中的巧妙构思如今几乎已被遗忘。于是我凭着直觉，去研究老一辈Kern、SOM、Angénieux等品牌的天才设计，并将其中一些理念融入到我们的镜头设计中。",
      "Thypoch的第一款作品——Simera 35mm，拥有可脱离段落感的光圈环、浮动镜片、独特的景深指示器，甚至采用了内对焦设计，这一切都被塞进了一个非常小巧的镜身里。它至今仍是整个LM卡口世界中最复杂的镜头之一。",
    ],
  },
  {
    slug: "thypoch-eureka-50",
    title: "Thypoch Eureka 50",
    subtitle: "回归本源",
    category: "Product Concept",
    year: "2023年",
    date: "2023年",
    summary: "回归本源",
    imageFolder: "/images/project/thypoch-eureka-50",
    headline: "BTTB：回归本源",
    body: [
      "2023年年中，也就是Simera项目六个月之后，我开始筹划一个不同的系列。",
      "那段时间我测试过各种各样的电影镜头，这个世界从不缺\"干净\"的镜头。人们已经厌倦了过去十年间现代光学那种正确、干净却乏味的画面，画面需要重新变得色彩丰富、富有生命力。我认为这个品牌最大的价值，就是用今天的方式，重新演绎不同年代的美学与成像风格。品牌名Thypoch也是在那个时候定下来的。",
      "那时我被奥斯卡·巴纳克（Oscar Barnack）的故事所打动——这个人穷尽一生，只为做出能装进口袋的便携式镜头和相机。反观今天的相机，机身越做越小，镜头却反而越来越大。坂本龙一的专辑《BTTB》最能代表我当时的想法——有时候，产品需要回归本源。于是我画出了第一款Eureka镜头的基本构想：一颗纯粹的双高斯结构50mm镜头，装在可伸缩镜身里。",
      "我完全没料到这个项目会如此艰难，开发过程中出现了大量机械结构和CMF（色彩、材质、工艺）方面的问题。遗憾的是，我们最终没能在成像风格上重现更多50年代的味道——虽然它确实有一些漩涡效果（swirly effect），但我原本期待的远不止于此。",
    ],
  },
  {
    slug: "thypoch-eureka-28",
    title: "Thypoch Eureka 28",
    subtitle: "一次集大成之作",
    category: "Product Concept",
    year: "2024年",
    date: "2024年",
    summary: "一次集大成之作",
    imageFolder: "/images/project/thypoch-eureka-28",
    headline: "一次集大成之作",
    body: [
      "想做一颗超紧凑28mm镜头的念头，其实源自多次出差旅程中的经历——那时我随身携带一台美能达CLE（最紧凑的M卡口相机），用它拍反转片。28mm作为这台相机的主要取景框线，同时也是经典的旅行焦段，让我开始寻找一颗体积与性能兼顾的紧凑28mm镜头——我不想背着一颗又大又重的镜头出门，但同时又希望反转片的画面依然清澈锐利。然而市面上没有一款产品能同时兼顾高解像力、低暗角和真正紧凑的体积。",
      "我察觉到这是一个市场空白，于是开始认真研究超紧凑28mm这个方向。像我这样渴望这样一颗镜头的用户究竟有多少？那些原本不使用M卡口相机的女性用户群体又会怎么看？各家产品的取舍究竟发生在哪里？同类产品的光学规格又是怎样的？我不断向市场和用户抛出这些问题，并持续做调研。",
      "但要做出一颗成像素质好、暗角控制也好的紧凑镜头，难度极大。我们经历了两版设计取向不同的原型机，先后有三位产品经理、四位工业设计师在这个项目上来了又走，还做了超过30轮的CMF（色彩、材质、工艺）实验，才最终定下那个美丽的白色版本。",
      "最终，当我听到公司里一些女同事主动询问能不能自己买一颗——这是以前从未发生过的事——我感到所有的付出终于得到了回报。这颗镜头是各种理念集大成的作品：设计、新材料、新工艺、光学上的挑战……而最终，还要把这一切都控制在合理的成本之内，做出一个有竞争力的价格。",
    ],
  },
  {
    slug: "thypoch-voyager",
    title: "Thypoch Voyager",
    subtitle: "长达18个月的旅程",
    category: "Product Concept",
    year: "2024年",
    date: "2024年",
    summary: "长达18个月的旅程",
    imageFolder: "/images/project/thypoch-voyager",
    headline: "长达18个月的旅程：寻找一种全新的哲学，而不只是一个产品构思",
    body: [
      "在此之前，Thypoch做过的每一颗镜头，都是美丽的手动对焦镜头。我们决定做第一颗自动对焦镜头，是在2024年——而在做任何事情之前，有一个问题必须先回答：这颗新镜头应该承载怎样的理念？",
      "Thypoch的每一套命名系统都是经过深思熟虑的。一个名字承载着产品的定位，往往也决定了后续的规格取舍。所以我从名字开始想起。",
      "应该有这样一颗镜头，为了相遇，为了旅程，为了远行而生——一颗属于世界上每一位旅人（voyager）的镜头。在任何一个具体规格被确定之前，这就是全部的理念。小巧、轻便、具备防护密封性——其余的一切，都是从这一个念头中自然生长出来的。就在那一刻，我有足够的信心，叫停了当时我们正在悄悄研发的所有自动对焦定焦镜头项目。",
      "要在一支内变焦镜头里，用自动对焦实现媲美定焦镜头的画质，这在2024年是一堵真实存在的高墙。但我从未怀疑过这个理念——我沿着这条线，一路走完了未来整条产品线的开发。",
    ],
  },
];

export function getProjects(locale: Locale): LocalizedProject[] {
  return locale === "zh" ? zh : en;
}

export function getProject(
  locale: Locale,
  slug: string,
): LocalizedProject | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export const projectSlugs: ProjectSlug[] = [
  "thypoch-simera",
  "thypoch-eureka-50",
  "thypoch-eureka-28",
  "thypoch-voyager",
];
