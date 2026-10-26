import type { Locale } from "@/i18n/config";

const V = "/images/blog/voigtlander-vitomatic";
const A = "/images/blog/angenieux-r1-35";
const S = "/images/blog/leica-summarit-50";
const E = "/images/blog/eureka-50-vs-summicron";

export type BlogFigure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** e.g. "p1" shown as a small label */
  label?: string;
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "figure"; figure: BlogFigure }
  | { type: "pair"; figures: [BlogFigure, BlogFigure] }
  | { type: "trio"; figures: [BlogFigure, BlogFigure, BlogFigure] };

export type LocalizedBlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  thumbnailAlt: string;
  /** Intrinsic size of cover — used for hero aspect */
  thumbnailWidth: number;
  thumbnailHeight: number;
  /** CSS object-position for list/hero crop, e.g. "center 70%" */
  thumbnailPosition?: string;
  coverTheme: string;
  content: BlogBlock[];
  /** Folder under `public/images/blog/{slug}/` for covers & inline shots */
  imageFolder: string;
};

function fig(
  base: string,
  file: string,
  width: number,
  height: number,
  alt: string,
  extras?: Pick<BlogFigure, "caption" | "label">,
): BlogFigure {
  return {
    src: `${base}/${file}`,
    width,
    height,
    alt,
    ...extras,
  };
}

const v = (
  file: string,
  width: number,
  height: number,
  alt: string,
  extras?: Pick<BlogFigure, "caption" | "label">,
) => fig(V, file, width, height, alt, extras);

const a = (
  file: string,
  width: number,
  height: number,
  alt: string,
  extras?: Pick<BlogFigure, "caption" | "label">,
) => fig(A, file, width, height, alt, extras);

const s = (
  file: string,
  width: number,
  height: number,
  alt: string,
  extras?: Pick<BlogFigure, "caption" | "label">,
) => fig(S, file, width, height, alt, extras);

const e = (
  file: string,
  width: number,
  height: number,
  alt: string,
  extras?: Pick<BlogFigure, "caption" | "label">,
) => fig(E, file, width, height, alt, extras);

const vitomaticContentEn: BlogBlock[] = [
  {
    type: "p",
    text: "I spotted this camera at first sight in a camera shop in Munich, Germany. I'd heard about it long before, so I decided to buy it almost immediately. The Vitomatic IIa can be considered one of the representative works from the peak craftsmanship era of the century-old Voigtländer factory.",
  },
  {
    type: "figure",
    figure: v(
      "007.jpg",
      1920,
      1284,
      "Street scene in Munich — warm tones, soft highlights",
      { caption: "Munich — the kind of light that first made me reach for this camera." },
    ),
  },
  {
    type: "p",
    text: "The body design is clean and simple, the chrome plating feels wonderful to the touch, and the size is compact — though it still sits a bit heavy in the hand. The film rewind button is cleverly designed. But what's most worth mentioning is the 1:1 magnification viewfinder, which allows you to frame your shot with both eyes open. The experience of having the frame lines appear in both eyes simultaneously is quite remarkable — which is why, back in the day, every Voigtländer Vitomatic manual illustrated the viewfinder experience with both eyes open.",
  },
  {
    type: "pair",
    figures: [
      v(
        "005.jpg",
        1284,
        893,
        "Vintage Vitomatic ad — shoot with both eyes open",
        { caption: "Period ads sold the 1:1 “life-size” finder — both eyes open." },
      ),
      v(
        "006.jpg",
        827,
        1200,
        "Vintage Vitomatic II ad with life-size rangefinder-viewfinder",
      ),
    ],
  },
  {
    type: "p",
    text: "Especially with the famous Ultron version 2, the image quality is said to be truly stunning. When I got my first shots back, I was genuinely amazed. Having used so many old lenses from Leica, Angénieux, and others, the moment I scanned these images, the only word I could use to describe them was \"comfortable\": wide open at f/2 or f/2.8, the center is remarkably sharp (see p1/p2/p3) — even at the magnification level of a computer screen, the detail holds up clearly. The falloff into defocus is smooth and gentle, never harsh. The edges of the bokeh are extremely soft. The way it renders skin tones feels just right. It's genuinely hard to precisely describe this sense of \"comfort.\" Color rendering leans warm, with slightly lower contrast — consistent with the coating technology and glass characteristics of that era — and the highlights are soft, creating a subtle, atmospheric glow.",
  },
  {
    type: "trio",
    figures: [
      v("001.jpg", 1720, 2560, "Portrait — center sharpness, soft falloff", {
        label: "p1",
      }),
      v("002.jpg", 1702, 2560, "Portrait — warm skin, creamy bokeh", {
        label: "p2",
      }),
      v("004.jpg", 1288, 1920, "Portrait — atmospheric glow, soft contrast", {
        label: "p3",
      }),
    ],
  },
  {
    type: "figure",
    figure: v("003.jpg", 2560, 1712, "Portrait — soft highlights, gentle contrast"),
  },
  {
    type: "figure",
    figure: v("008.jpg", 1296, 1920, "Children on a sunlit path — soft contrast"),
  },
  {
    type: "p",
    text: "The only drawback is that focusing with the rangefinder patch takes a bit of effort. But from the feel in hand to the lens itself, I find myself falling more and more in love with this small camera — so finely made, and so comfortable in the images it produces.",
  },
];

const vitomaticContentZh: BlogBlock[] = [
  {
    type: "p",
    text: "在德国慕尼黑的一家相机店一眼看中了这台相机，早就听说了这台相机，于是很快决定买了下来。Vitomatic iia应该算是百年福伦达大厂在做工工艺巅峰期的代表作之一。",
  },
  {
    type: "figure",
    figure: v(
      "007.jpg",
      1920,
      1284,
      "慕尼黑街头 — 偏暖、高光偏柔",
      { caption: "慕尼黑 —— 让我第一眼想带上这台相机出门的光。" },
    ),
  },
  {
    type: "p",
    text: "机身设计简洁，镀铬工艺摸起来很舒适，体积小巧，但是还是有些压手，回片按钮设计很巧妙。最值得说的是，1:1放大取景器，可以睁开双眼取景，取景框同时出现在两只眼睛的体验很奇妙，所以当年所有的福伦达Vitomatic说明书都是睁着眼睛取景的画面。",
  },
  {
    type: "pair",
    figures: [
      v(
        "005.jpg",
        1284,
        893,
        "福伦达 Vitomatic 老广告 — 睁开双眼取景",
        { caption: "当年广告主打 1:1「lifesize」取景 —— 双眼睁开。" },
      ),
      v(
        "006.jpg",
        827,
        1200,
        "Vitomatic II 老广告：Life-Size Rangefinder-Viewfinder",
      ),
    ],
  },
  {
    type: "p",
    text: "尤其是大名鼎鼎的Ultron 2版本，据说出片相当惊艳，这次第一次出片着实给我惊艳到了，用过那么多Leica、安琴等老镜头，实打实等我扫描出片的那一刻，我只能用舒适一词来形容：全开光圈f/2或者f/2.8时中心区域很锐（p1/p2/p3），即使在电脑屏幕那种放大率下也能把细节看得很清楚，离焦很舒缓，不生硬。Bokeh的边缘非常柔和。对人的皮肤描绘能力很恰得其所。很难精准形容这种“舒适感”。对色彩的表现偏暖，反差偏低，与那个年代的镀膜工艺和玻璃用料特性一样，高光偏柔，营造出微弱的氛围感。",
  },
  {
    type: "trio",
    figures: [
      v("001.jpg", 1720, 2560, "人像 — 中心锐利、离焦舒缓", { label: "p1" }),
      v("002.jpg", 1702, 2560, "人像 — 肤色偏暖、焦外柔和", { label: "p2" }),
      v("004.jpg", 1288, 1920, "人像 — 微弱氛围感、高光偏柔", { label: "p3" }),
    ],
  },
  {
    type: "figure",
    figure: v("003.jpg", 2560, 1712, "人像 — 高光偏柔、反差偏低"),
  },
  {
    type: "figure",
    figure: v("008.jpg", 1296, 1920, "水边的孩子 — 舒适的反差"),
  },
  {
    type: "p",
    text: "除了黄斑对焦时比较费力，但是从手感到镜头，确实是越来越喜欢这个做工精致，出片舒适的小相机",
  },
];

const angenieuxContentEn: BlogBlock[] = [
  {
    type: "p",
    text: "Pierre Angénieux was the first to apply a retrofocus design to a wide-angle SLR lens with this very R1, achieving — for the first time on an SLR mount — a breakthrough in wide-angle lenses with a large maximum aperture.",
  },
  {
    type: "p",
    text: "The rendering of this lens is quite distinctive as well: whenever strong highlights enter the frame, contrast drops, bringing with it a faint, slightly bluish haze — almost as if the lens has a built-in \"classic soft-focus\" cinematic filter. It's very flattering for rendering skin tones in portraits. Once you get familiar with this lens's particular temperament, it can produce images with a truly distinctive character.",
  },
  {
    type: "figure",
    figure: a(
      "001.jpg",
      1920,
      1280,
      "Park bench in backlight — soft contrast, romantic haze",
      {
        caption:
          "When highlights flood in, contrast softens into a faint bluish haze — the R1’s “classic soft.”",
      },
    ),
  },
  {
    type: "pair",
    figures: [
      a("002.jpg", 1920, 1280, "Mossy trunk — glow and swirly bokeh"),
      a("003.jpg", 1920, 1280, "Looking up a birch — soft cinematic falloff"),
    ],
  },
  {
    type: "figure",
    figure: a(
      "004.jpg",
      1920,
      1080,
      "Interior with window bloom — cool blue atmosphere",
      {
        caption:
          "Indoors, the same temperament: blooming highlights, a cool veil, and a mood that feels almost like film.",
      },
    ),
  },
];

const angenieuxContentZh: BlogBlock[] = [
  {
    type: "p",
    text: "皮埃尔·安琴最早在这只R1上将反望远结构运用在单反广角镜的设计上，由此首次在单反结构上突破广角的大光圈。",
  },
  {
    type: "p",
    text: "这只镜头的成像也是颇具特色，高光进来总会降低镜头反差，带来一层略微偏蓝色的朦胧感，仿佛镜头自带 “经典柔”电影滤镜片，对人像皮肤表现很友好，熟悉这只镜头脾气之后，能拍出很有特点的画面。",
  },
  {
    type: "figure",
    figure: a(
      "001.jpg",
      1920,
      1280,
      "逆光公园长椅 — 反差降低、浪漫朦胧",
      {
        caption:
          "高光涌进来时，反差会软下来，带出一层偏蓝的朦胧 —— R1 的「经典柔」。",
      },
    ),
  },
  {
    type: "pair",
    figures: [
      a("002.jpg", 1920, 1280, "苔藓树干 — 光晕与漩涡焦外"),
      a("003.jpg", 1920, 1280, "仰望白桦 — 电影感的柔和衰减"),
    ],
  },
  {
    type: "figure",
    figure: a(
      "004.jpg",
      1920,
      1080,
      "室内窗光 — 偏冷的蓝色氛围",
      {
        caption:
          "室内也是同一种脾气：高光晕开、一层冷调薄雾，像自带电影滤镜。",
      },
    ),
  },
];

const summaritContentEn: BlogBlock[] = [
  {
    type: "p",
    text: "The Summarit 50mm f/1.5 is, in truth, a lens with far too little recognition — so much so that when many people choose a standard Leica lens, their first pick tends to be the Summicron Rigid 50, never realizing that at an even lower price point, there exists another 50mm lens that's both highly cost-effective and highly enjoyable to shoot with: the Summarit 50mm f/1.5.",
  },
  {
    type: "figure",
    figure: s(
      "000.jpg",
      3024,
      3572,
      "Leica Summarit 50mm f/1.5 — chrome barrel and amber coating",
      {
        caption:
          "Overlooked next to the Rigid — yet full of atmosphere once you start using it.",
      },
    ),
  },
  {
    type: "p",
    text: "The reason I call it both cost-effective and fun to use is this: wide open at f/1.5, the lens shows a hazy, dreamlike quality caused by spherical and coma aberrations, fairly heavy astigmatism, and pronounced halation around highlights. Yet these very \"characteristics\" improve dramatically once stopped down just one stop to f/2 — surprisingly, the resolution at that point comes very close to the Rigid's performance wide open at f/2, with contrast noticeably improved both in the center and the corners. The difference between this lens wide open and stopped down by one stop is so pronounced it almost feels like two different lenses. But it's precisely that strong low-contrast, hazy character at f/1.5 that gives this lens its charm — allowing it to produce beautifully soft images in situations that call for that dreamlike quality, while also being capable of sharp, \"normal\" images once stopped down by 1–2 stops (see below).",
  },
  {
    type: "figure",
    figure: s("007.jpg", 2560, 1706, "Lakeside — stopped down, cleaner contrast", {
      label: "7",
      caption: "Stopped down 1–2 stops — closer to a “normal,” sharper look.",
    }),
  },
  {
    type: "pair",
    figures: [
      s("001.jpg", 1920, 1270, "Wide open — swirly bright-edged bokeh"),
      s("002.jpg", 2560, 1706, "Wide open — maple leaves in haze and swirl"),
    ],
  },
  {
    type: "pair",
    figures: [
      s("003.jpg", 1270, 1920, "Interior glow — halation on highlights"),
      s("004.jpg", 1270, 1920, "Train window light — soft atmospheric bloom"),
    ],
  },
  {
    type: "p",
    text: "The out-of-focus rendering of this lens is equally distinctive: it shows some very characteristic bright-edged bokeh highlights, a relatively uncommon bokeh shape, fairly heavy optical vignetting, and a strong influence from coma aberration.",
  },
  {
    type: "pair",
    figures: [
      s("012.jpg", 1270, 1920, "Cat behind glass — soap-bubble bokeh edges"),
      s("011.jpg", 1270, 1920, "Steaming bowl — glowing highlights and soft haze"),
    ],
  },
  {
    type: "p",
    text: "Historically, this lens was originally introduced to compete with Zeiss's Sonnar 50mm f/1.5. In fact, it was designed and manufactured by Schneider, adapted from Schneider's own 16mm cine lens design, the Xenon 25mm f/1.5, and reworked into a full-frame 50mm f/1.5. Ever since its creation, this lens has been closely intertwined with the history of patents, war, and the broader evolution of optics. Later on, the Summilux E43 was developed based on the Summarit's optical formula — and you can indeed find certain stylistic traits shared between the two. It's truly a fascinating lens.",
  },
  {
    type: "figure",
    figure: s("008.jpg", 2560, 1706, "Bridge over water — atmospheric haze", {
      caption: "Lakeside bridge — soft haze and gentle contrast.",
    }),
  },
  {
    type: "pair",
    figures: [
      s("009.jpg", 960, 1440, "Cats in warm cubby light — soft glow"),
      s("010.jpg", 960, 1440, "Stone guardian — gentle falloff"),
    ],
  },
];

const summaritContentZh: BlogBlock[] = [
  {
    type: "p",
    text: "Summarit 50 1.5实在是一支知名度过低的镜头，以至于很多人选择Leica 标头的时候往往第一选择是Cron Rigid 50，绝然不会想到，其实在更低的价位，存在着另一支非常有性价比同时也非常有玩性的标头——Summarit 50 1.5。",
  },
  {
    type: "figure",
    figure: s(
      "000.jpg",
      3024,
      3572,
      "Leica Summarit 50mm f/1.5 — 镀铬镜筒与琥珀色镀膜",
      {
        caption: "被 Rigid 抢了风头 —— 真正用起来，才知道这支标头的氛围有多强。",
      },
    ),
  },
  {
    type: "p",
    text: "之所以说高性价比和高把玩性，是因为这支镜头在f/1.5全开时会有球差和慧差导致的朦胧感，像散比较重，面对高光有非常明显的光晕，然而这些“特点”在收缩一档至f/2后便得到极大改善，惊讶的是解析力已经能与Rigid全开f/2时的差距非常小，中心与边角对比度都得到显著的提升，以至于这颗镜头全开和收一档会让你觉得像两颗镜头。但正是f/1.5那种强烈的低反差和朦胧的风格是这颗镜头的乐趣，使这颗镜头能够在一些需要这种朦胧感的场合时，拍出非常柔和的特质，也能在收1-2档后拍摄正常的锐利的图像（如下图）",
  },
  {
    type: "figure",
    figure: s("007.jpg", 2560, 1706, "湖边 — 收缩光圈后的干净反差", {
      label: "图7",
      caption: "收 1–2 档后，更接近正常、锐利的成像。",
    }),
  },
  {
    type: "pair",
    figures: [
      s("001.jpg", 1920, 1270, "全开 — 漩涡与亮边焦外"),
      s("002.jpg", 2560, 1706, "全开 — 红叶与朦胧光晕"),
    ],
  },
  {
    type: "pair",
    figures: [
      s("003.jpg", 1270, 1920, "室内高光晕开 — 低反差氛围"),
      s("004.jpg", 1270, 1920, "车窗光影 — 柔和的光晕"),
    ],
  },
  {
    type: "p",
    text: "这颗镜头的焦外同样很有特色，很典型的一些焦外亮边，光斑形状较为少见，光学渐晕比较重，受慧差影响较大。",
  },
  {
    type: "pair",
    figures: [
      s("012.jpg", 1270, 1920, "玻璃后的猫 — 焦外亮边光斑"),
      s("011.jpg", 1270, 1920, "热气升腾 — 高光晕与低反差"),
    ],
  },
  {
    type: "p",
    text: "历史上这颗镜头最初是与Zeiss的Sonnar 50 1.5竞争而推出，实际上是Schneider的设计，并且也由其制造生产的，由当时施耐德的16mm电影镜头Xenon 25 1.5的设计方案改造而来成的全画幅50 1.5。这颗镜头从诞生以来就与专利、战争、光学发展的历史交织甚多，后来根据Summarit的方案演化出了Summilux E43，从这颗镜头的某些风格里也能找到一些与lux相似的点，属实是一颗很有趣的镜头。",
  },
  {
    type: "figure",
    figure: s("008.jpg", 2560, 1706, "湖上白桥 — 氛围感朦胧", {
      caption: "湖边白桥 — 柔和的朦胧与反差。",
    }),
  },
  {
    type: "pair",
    figures: [
      s("009.jpg", 960, 1440, "暖光里的猫 — 柔和光晕"),
      s("010.jpg", 960, 1440, "石兽与绿植 — 柔和衰减"),
    ],
  },
];

const eurekaVsCronContentEn: BlogBlock[] = [
  {
    type: "p",
    text: "Last time I teased a comparison between the Eureka 50 and the Summicron v1, but I felt that wasn't quite enough — so this time I decided to also bring in the current-production Summicron v5, a lens that's been in continuous production for over 30 years and remains in the lineup to this day, along with the Mandler-designed optics behind it. The Summicron v4 and v5, released in 1979, share the same optical design and deliver extremely high sharpness wide open — arguably the final peak of the 50mm double-Gauss design. So how does a 1940s v1, an '80s v5, and the recently released Eureka 50 actually compare in real-world shooting?",
  },
  {
    type: "p",
    text: "Camera used: Leica M10-R (40MP)",
  },
  {
    type: "pair",
    figures: [
      e("001.jpg", 1920, 1270, "Comparison setup — frame 1"),
      e("002.jpg", 1920, 1440, "Comparison setup — frame 2"),
    ],
  },
  {
    type: "pair",
    figures: [
      e("003.jpg", 1440, 1920, "Comparison sample — frame 3"),
      e("004.jpg", 1920, 1270, "Comparison sample — frame 4"),
    ],
  },
  {
    type: "pair",
    figures: [
      e("005.jpg", 1920, 1440, "Comparison sample — frame 5"),
      e("006.jpg", 1920, 1440, "Comparison sample — frame 6"),
    ],
  },
  {
    type: "p",
    text: "Summary: Because of image compression on Xiaohongshu (RedNote), it's admittedly hard to fully judge center sharpness, but after repeated close observation, the differences between the three lenses in this regard turned out to be fairly small. Even though the Cron v1 is a 1940s lens, its center sharpness at 1.5m is surprisingly high — though it does fall off a bit more at infinity.",
  },
  {
    type: "p",
    text: "Corner sharpness, however, varies significantly among the three. The ranking is Eureka > Cron V5 > Cron V1. The Eureka holds up remarkably well from corner to center at both 1.5m portrait distance and infinity — the two stay very close to each other. The Summicron v5 has long been famous for its excellent wide-open performance, but even this legendary lens looks a bit outmatched next to the Eureka when both are shot at f/2.",
  },
  {
    type: "p",
    text: "Surprisingly (see images 7 and 8), the Eureka doesn't suffer the corner degradation that many M-mount lenses experience on sensors with thicker OLPF glass, like the Sony A7R IV. Its corner performance on Sony sensors is nearly identical to its performance on Leica M sensors.",
  },
  {
    type: "pair",
    figures: [
      e("007.jpg", 1920, 1440, "Eureka on Leica M10-R vs Sony A7R IV — center", {
        label: "7",
      }),
      e("008.jpg", 1920, 1440, "Eureka on Leica M vs Sony — corners hold up", {
        label: "8",
      }),
    ],
  },
  {
    type: "p",
    text: "Like the Cron v1, the Eureka also has a swirly bokeh character, but without the v1's hard-edged bokeh outlines — meaning its double-line bokeh (nisen boke) tendency is noticeably milder. The Cron v1's out-of-focus rendering leans more classic in feel, which has its own charm too.",
  },
  {
    type: "figure",
    figure: e("009.jpg", 1440, 1920, "Bokeh comparison — swirl without hard edges"),
  },
  {
    type: "p",
    text: "In image 10, the v1 skews slightly cooler in color temperature, while the Eureka leans a bit warmer.",
  },
  {
    type: "figure",
    figure: e("010.jpg", 1440, 1920, "Color temperature — v1 cooler, Eureka warmer", {
      label: "10",
    }),
  },
  {
    type: "p",
    text: "In image 11, as expected, the v1 shows more highlight halation and a vintage-style flare character. The Eureka also shows some halation, but to a milder degree — this one really comes down to personal taste.",
  },
  {
    type: "figure",
    figure: e("011.jpg", 1440, 1920, "Halation and flare — v1 stronger, Eureka milder", {
      label: "11",
    }),
  },
  {
    type: "p",
    text: "In image 12, repeated comparison revealed that the v1 has noticeably more barrel distortion.",
  },
  {
    type: "figure",
    figure: e("012.jpg", 1440, 1920, "Barrel distortion — more visible on v1", {
      label: "12",
    }),
  },
  {
    type: "p",
    text: "In image 13, compared to the Eureka, the v1 shows more longitudinal chromatic aberration — the kind that's harder to eliminate, showing up as green and purple fringing around out-of-focus highlights.",
  },
  {
    type: "figure",
    figure: e("013.jpg", 1440, 1920, "Longitudinal CA — purple/green fringing on v1", {
      label: "13",
    }),
  },
  {
    type: "p",
    text: "This test took a lot of effort — if you made it this far, drop a like! Next time I'll try to do an even more thorough comparison across more apertures — I'm also curious how they perform at f/4 and f/5.6.",
  },
];

const eurekaVsCronContentZh: BlogBlock[] = [
  {
    type: "p",
    text: "上次预告了Eureka 50 对比Summicron v1，后来觉得还不过瘾，于是干脆把Summicron v5现行版-这颗已经连续生产30年且至今还在产的曼德勒设计镜头，也纳入了这场对比之中，1979年发布的Summicron v4 v5是相同的光学设计，光圈全开具有极高的锐度，基本可以算是50mm焦段双高斯设计的最后顶峰。那么一枚40s的v1，一枚80s的v5，一枚近期刚刚发布的 Eureka 50，三颗镜头实拍测试对比究竟如何？",
  },
  {
    type: "p",
    text: "拍摄设备：Leica M10R （4000万像素）",
  },
  {
    type: "pair",
    figures: [
      e("001.jpg", 1920, 1270, "对比样张 1"),
      e("002.jpg", 1920, 1440, "对比样张 2"),
    ],
  },
  {
    type: "pair",
    figures: [
      e("003.jpg", 1440, 1920, "对比样张 3"),
      e("004.jpg", 1920, 1270, "对比样张 4"),
    ],
  },
  {
    type: "pair",
    figures: [
      e("005.jpg", 1920, 1440, "对比样张 5"),
      e("006.jpg", 1920, 1440, "对比样张 6"),
    ],
  },
  {
    type: "p",
    text: "总结：由于小红书压图，所以难免比较难判断中心锐度，但是经过反复观察发现三只镜头在这方面差异比较小，虽然Cron v1是颗40年代的镜头，令人惊讶的是在1.5m时中心锐度确实很高，无限远锐度会差一些。",
  },
  {
    type: "p",
    text: "三只镜头边角锐度差异很大。排序是Eureka>Cron V5>Cron V1 。Eureka这颗镜头无论是在1.5m的肖像距离还是无限远，边角和中心表现非常接近…Summicron v5一直以全开的高素质表现闻名，但这颗传奇的镜头在这方面与Eureka在f/2时比都有点相形见绌",
  },
  {
    type: "p",
    text: "图7图8意外的是，Eureka并不像很多M镜头容易在拥有较厚OLPF玻璃的传感器如Sony A7R4上获得更劣的边角表现，Eureka在Sony传感器与Leica M传感器表现几乎一致",
  },
  {
    type: "pair",
    figures: [
      e("007.jpg", 1920, 1440, "Eureka：Leica M10R vs Sony A7R4 — 中心", {
        label: "图7",
      }),
      e("008.jpg", 1920, 1440, "Eureka：Sony 与 Leica 边角表现接近", {
        label: "图8",
      }),
    ],
  },
  {
    type: "p",
    text: "Eureka与Cron v1一样带有旋焦感，但没有v1的焦外光斑硬边，也就是说焦外二线性状况会更轻微。Cron v1的焦外更加古典，这种味道也很不错。",
  },
  {
    type: "figure",
    figure: e("009.jpg", 1440, 1920, "焦外对比 — 有旋焦、硬边更轻"),
  },
  {
    type: "p",
    text: "图10，V1色温偏冷一些，Eureka 偏暖一些",
  },
  {
    type: "figure",
    figure: e("010.jpg", 1440, 1920, "色温对比 — V1偏冷，Eureka偏暖", {
      label: "图10",
    }),
  },
  {
    type: "p",
    text: "图11，V1如预期会有更多高光光晕和复古感炫光，Eureka 也有一些光晕，但程度要轻微一些，这方面更多是看个人口味。",
  },
  {
    type: "figure",
    figure: e("011.jpg", 1440, 1920, "光晕与炫光 — V1更强，Eureka更轻", {
      label: "图11",
    }),
  },
  {
    type: "p",
    text: "图12，反复对比发现V1有较明显桶形畸变",
  },
  {
    type: "figure",
    figure: e("012.jpg", 1440, 1920, "桶形畸变 — V1更明显", {
      label: "图12",
    }),
  },
  {
    type: "p",
    text: "图13，V1相较于Eureka展现出了更多的纵轴色差，也就是比较难消除的焦外光斑绿边和紫边",
  },
  {
    type: "figure",
    figure: e("013.jpg", 1440, 1920, "纵轴色差 — V1绿边/紫边更明显", {
      label: "图13",
    }),
  },
  {
    type: "p",
    text: "测试很费力气，看完请点个赞！下次争取再全面测一下更多光圈的对比～也很好奇f/4和f/5.6时的表现",
  },
];

const en: LocalizedBlogPost[] = [
  {
    slug: "voigtlander-vitomatic",
    title:
      "A Delicate Little Camera, the Voigtländer Vitomatic — Wonderfully Comfortable Images",
    category: "Essay",
    date: "Jul 2026",
    excerpt:
      "A compact Voigtländer Vitomatic IIa from Munich — Ultron rendering that feels simply comfortable.",
    coverTheme: "Vitomatic · Comfort",
    thumbnail: `${V}/000.jpg`,
    thumbnailAlt: "Voigtländer Vitomatic held in hand",
    thumbnailWidth: 1706,
    thumbnailHeight: 2560,
    imageFolder: V,
    content: vitomaticContentEn,
  },
  {
    slug: "angenieux-r1-35",
    title: "The Most Romantic French Lens in My Heart | Angénieux R1 35mm f/2.5",
    category: "Essay",
    date: "Jul 2026",
    excerpt:
      "Pierre Angénieux’s retrofocus R1 — a wide-angle with a built-in “classic soft” cinematic haze.",
    coverTheme: "Angénieux · Soft",
    thumbnail: `${A}/000.jpg`,
    thumbnailAlt: "Angénieux R1 35mm f/2.5 retrofocus lens",
    thumbnailWidth: 2016,
    thumbnailHeight: 2560,
    imageFolder: A,
    content: angenieuxContentEn,
  },
  {
    slug: "leica-summarit-50",
    title: "A Lens of Ultimate Atmosphere | Leica Summarit 50mm f/1.5",
    category: "Essay",
    date: "Jul 2026",
    excerpt:
      "Overlooked next to the Rigid — wide open it’s all haze and glow; stopped down, almost another lens.",
    coverTheme: "Summarit · Atmosphere",
    thumbnail: `${S}/cover.jpg`,
    thumbnailAlt: "Leica with Summarit 50mm f/1.5 on a sunlit windowsill",
    thumbnailWidth: 1270,
    thumbnailHeight: 714,
    imageFolder: S,
    content: summaritContentEn,
  },
  {
    slug: "eureka-50-vs-summicron",
    title: "Eureka 50 vs. Leica Summicron",
    category: "Essay",
    date: "Jul 2026",
    excerpt:
      "Eureka 50 vs Summicron v1 & v5 — corners, swirl, color, and Sony vs Leica sensors.",
    coverTheme: "Eureka VS Summicron",
    thumbnail: `${E}/000.jpg`,
    thumbnailAlt: "Eureka 50 vs Summicron V5 vs Summicron V1",
    thumbnailWidth: 1284,
    thumbnailHeight: 961,
    imageFolder: E,
    content: eurekaVsCronContentEn,
  },
];

const zh: LocalizedBlogPost[] = [
  {
    slug: "voigtlander-vitomatic",
    title: "精致的小相机福伦达Vitomatic，出片相当舒适",
    category: "随笔",
    date: "2026年7月",
    excerpt: "慕尼黑一眼看中的福伦达 Vitomatic IIa —— Ultron 出片，只能用「舒适」形容。",
    coverTheme: "Vitomatic · 舒适",
    thumbnail: `${V}/000.jpg`,
    thumbnailAlt: "手持福伦达 Vitomatic",
    thumbnailWidth: 1706,
    thumbnailHeight: 2560,
    imageFolder: V,
    content: vitomaticContentZh,
  },
  {
    slug: "angenieux-r1-35",
    title: "心中最浪漫法头｜安琴R1 35mm f2.5",
    category: "随笔",
    date: "2026年7月",
    excerpt:
      "皮埃尔·安琴的反望远 R1 —— 高光一进来，就像自带一层「经典柔」的电影滤镜。",
    coverTheme: "安琴 · 经典柔",
    thumbnail: `${A}/000.jpg`,
    thumbnailAlt: "安琴 R1 35mm f/2.5 反望远镜头",
    thumbnailWidth: 2016,
    thumbnailHeight: 2560,
    imageFolder: A,
    content: angenieuxContentZh,
  },
  {
    slug: "leica-summarit-50",
    title: "究极氛围感之镜｜Leica Summarit 50mm f/1.5",
    category: "随笔",
    date: "2026年7月",
    excerpt:
      "被 Rigid 抢了风头的 Summarit 50 1.5 —— 全开是朦胧，收一档又像另一支镜头。",
    coverTheme: "Summarit · 氛围",
    thumbnail: `${S}/cover.jpg`,
    thumbnailAlt: "窗边阳光里的 Leica + Summarit 50",
    thumbnailWidth: 1270,
    thumbnailHeight: 714,
    imageFolder: S,
    content: summaritContentZh,
  },
  {
    slug: "eureka-50-vs-summicron",
    title: "叙Eureka 50 vs 徕卡Summicron",
    category: "随笔",
    date: "2026年7月",
    excerpt:
      "Eureka 50 对阵 Summicron v1 / v5 —— 边角、旋焦、色温，以及 Sony 与 Leica 传感器表现。",
    coverTheme: "Eureka VS Summicron",
    thumbnail: `${E}/000.jpg`,
    thumbnailAlt: "Eureka 50 vs Summicron V5 vs Summicron V1",
    thumbnailWidth: 1284,
    thumbnailHeight: 961,
    imageFolder: E,
    content: eurekaVsCronContentZh,
  },
];

export function getBlogPosts(locale: Locale): LocalizedBlogPost[] {
  return locale === "zh" ? zh : en;
}

export function getBlogPost(
  locale: Locale,
  slug: string,
): LocalizedBlogPost | undefined {
  return getBlogPosts(locale).find((p) => p.slug === slug);
}
