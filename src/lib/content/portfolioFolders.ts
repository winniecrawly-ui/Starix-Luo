import type { EditorialShot } from "@/components/home/EditorialGallery";

export type PortfolioFolderSlug =
  | "black-and-white-film"
  | "color-film"
  | "digital";

export type PortfolioFolder = {
  slug: PortfolioFolderSlug;
  title: string;
  subtitle: string;
  cover: EditorialShot;
  shots: EditorialShot[];
};

const bw = "/images/portfolio/black-and-white-film";
const color = "/images/portfolio/color-film";
const digital = "/images/portfolio/digital";

function shot(
  base: string,
  id: string,
  file: string,
  width: number,
  height: number,
): EditorialShot {
  return {
    id,
    src: `${base}/${file}`,
    alt: file,
    width,
    height,
  };
}

/**
 * Portfolio 文件夹。
 * 顺序按色调与线条韵律编排（高调静谧 → 结构几何 → 浓影人物；彩色同理分色块过渡）。
 */
export const portfolioFolders: PortfolioFolder[] = [
  {
    slug: "black-and-white-film",
    title: "Black & White Film",
    subtitle: "Grain · shadow · silence",
    cover: shot(bw, "bw-cover", "GP3 34.jpg", 3600, 2329),
    shots: [
      // 高调静谧 · 开阔天空 / 水面水平线
      shot(bw, "bw-01", "GP3 34.jpg", 3600, 2329),
      shot(bw, "bw-02", "DoubleX_14.jpg", 2363, 3600),
      shot(bw, "bw-03", "APX100_Ultron 50 222.jpg", 2419, 3600),
      shot(bw, "bw-04", "Photo27_28.jpg", 1904, 1272),
      shot(bw, "bw-05", "Photo09_10.jpg", 1904, 1272),
      shot(bw, "bw-06", "Pan100 (27).jpg", 3600, 2426),
      // 林地有机线条 · 水平枯枝 / 细树干
      shot(bw, "bw-07", "1.jpg", 3600, 3570),
      shot(bw, "bw-08", "Pan (2).jpg", 2423, 3600),
      shot(bw, "bw-09", "Pan 100 (9).jpg", 2453, 3600),
      shot(bw, "bw-10", "Pan 100 (12).jpg", 2403, 3600),
      shot(bw, "bw-11", "Pan 100.jpg", 2373, 3600),
      shot(bw, "bw-12", "Tmax (35).jpg", 2403, 3600),
      // 室内几何 · 斜线柜台 / 竖向建筑节奏
      shot(bw, "bw-13", "5222_7.jpg", 3600, 2406),
      shot(bw, "bw-14", "5222_26.jpg", 3600, 2308),
      shot(bw, "bw-15", "5222_16.jpg", 2410, 3600),
      shot(bw, "bw-16", "5222_20.jpg", 2245, 3600),
      shot(bw, "bw-17", "5222_28.jpg", 2427, 3600),
      shot(bw, "bw-18", "5222_Simera 21 (8).jpg", 2410, 3600),
      shot(bw, "bw-19", "5222_Simera 21 (20).jpg", 2416, 3600),
      shot(bw, "bw-20", "Ilford_pan400 (22).jpg", 3342, 3366),
      shot(bw, "bw-21", "Image 1 (12).jpg", 3593, 3600),
      // 浓影与人物 · 竖向建筑 / 叠影曲线收束
      shot(bw, "bw-22", "img368.jpg", 2467, 3600),
      shot(bw, "bw-23", "kodak (9).jpg", 3600, 2426),
      shot(bw, "bw-24", "Trix_11.jpg", 3533, 3600),
      shot(bw, "bw-25", "DoubleX_36.jpg", 2467, 3600),
      shot(bw, "bw-26", "GP3 (23).jpg", 2416, 3600),
      shot(bw, "bw-27", "APX_VM28+40 (13).jpg", 2417, 3600),
    ],
  },
  {
    slug: "color-film",
    title: "Color Film",
    subtitle: "Emulsion · memory · hue",
    cover: shot(color, "c-cover", "eterna 250D (32).jpg", 3600, 2450),
    shots: [
      // 晴空蓝 · 街景几何 / 冷色开头
      shot(color, "c-01", "eterna 250D (32).jpg", 3600, 2450),
      shot(color, "c-02", "eterna 250D (5).jpg", 3600, 2425),
      shot(color, "c-03", "RVP (17).jpg", 3600, 2401),
      shot(color, "c-04", "000070.JPG", 3578, 2397),
      // 青绿锈迹 · 自然回潮
      shot(color, "c-05", "20181107-Photo05_6.jpg", 2898, 2910),
      shot(color, "c-06", "kodak (3).jpg", 3600, 2413),
      shot(color, "c-07", "kodak (2).jpg", 2415, 3600),
      shot(color, "c-08", "img428.jpg", 3600, 2320),
      // 紫暮火山 · 同色阶连片
      shot(color, "c-09", "DSC09602.JPG", 2400, 3600),
      shot(color, "c-10", "DSC09640.JPG", 2400, 3600),
      shot(color, "c-11", "DSC09985.JPG", 2400, 3600),
      // 夜黑植物 · 低基调
      shot(color, "c-12", "5207 (27).jpg", 2420, 3600),
      shot(color, "c-13", "5207 (33).jpg", 3600, 2413),
      shot(color, "c-14", "Tmax (11).jpg", 2414, 3600),
      shot(color, "c-15", "Tmax (26).jpg", 2420, 3600),
      shot(color, "c-16", "5222_ (10).jpg", 2409, 3600),
      // 肤色与肖像 · 暖调汇聚
      shot(color, "c-17", "Image 1  (2).jpg", 3600, 3567),
      shot(color, "c-18", "portra (3).jpg", 2878, 2994),
      shot(color, "c-19", "100089110023.jpg", 1037, 1565),
      // 亚热带暖绿 · 日光收尾
      shot(color, "c-20", "Ektar (29).jpg", 2416, 3600),
      shot(color, "c-21", "E100.jpg", 2498, 3600),
      shot(color, "c-22", "E100 (7).jpg", 2498, 3600),
      shot(color, "c-23", "RVP (4).jpg", 2418, 3600),
    ],
  },
  {
    slug: "digital",
    title: "Digital",
    subtitle: "Clarity · night · aperture",
    cover: shot(digital, "d-cover", "L1000950.JPG", 3600, 2380),
    shots: [
      // 冷色抽象 · 冰蓝气泡
      shot(digital, "d-01", "L1000950.JPG", 3600, 2380),
      // 蓝调城市 · 水平江面 / 码头透视线
      shot(digital, "d-02", "L1008942.JPG", 3600, 2380),
      shot(digital, "d-03", "L1009053.JPG", 3600, 2380),
      shot(digital, "d-04", "L100E8242.jpg", 3600, 2380),
      shot(digital, "d-05", "DSC09039.JPG", 3600, 2400),
      shot(digital, "d-06", "RVP (24).jpg", 3600, 2435),
      // 暖黄石雕 · 曲线面部 / 水平跃动
      shot(digital, "d-07", "Images_Main_Top_01.JPG", 3600, 2699),
      shot(digital, "d-08", "Images_Main_line2_01.JPG", 3594, 3600),
      shot(digital, "d-09", "Images_Main_line2_02.JPG", 2697, 3600),
      shot(digital, "d-10", "Images_Main_line3_01.JPG", 3600, 3600),
      shot(digital, "d-11", "Images_Main_line3_02.JPG", 3600, 3411),
    ],
  },
];

export function getPortfolioFolder(slug: string): PortfolioFolder | undefined {
  return portfolioFolders.find((f) => f.slug === slug);
}
