import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
  };
  nav: {
    portfolio: string;
    project: string;
    blog: string;
    about: string;
  };
  aria: {
    instagram: string;
    xiaohongshu: string;
    xinpianchang: string;
    email: string;
    switchToEn: string;
    switchToZh: string;
  };
  footer: {
    rights: string;
  };
  home: {
    title: string;
    description: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    folder: string;
    open: string;
    back: string;
    folders: {
      "black-and-white-film": { title: string; subtitle: string };
      "color-film": { title: string; subtitle: string };
      digital: { title: string; subtitle: string };
    };
  };
  project: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    openCase: string;
    back: string;
    date: string;
    sittingWith: string;
    wordsBy: string;
    share: string;
  };
  blog: {
    title: string;
    description: string;
    back: string;
  };
  about: {
    name: string;
    bio: string[];
  };
  contact: {
    title: string;
    description: string;
    instagram: string;
  };
  notFound: {
    title: string;
    home: string;
  };
};

const en: Dictionary = {
  meta: {
    titleDefault: "Starix Luo — Visual Storytelling Portfolio",
    titleTemplate: "%s — Starix Luo",
    description:
      "Visual storytelling across photography, cinema and brand experience.",
  },
  nav: {
    portfolio: "Portfolio",
    project: "Project",
    blog: "Blog",
    about: "About",
  },
  aria: {
    instagram: "Instagram",
    xiaohongshu: "Xiaohongshu",
    xinpianchang: "Xinpianchang",
    email: "Email",
    switchToEn: "Switch to English",
    switchToZh: "Switch to Chinese",
  },
  footer: {
    rights: "Starix Luo",
  },
  home: {
    title: "Home",
    description:
      "Starix Luo — photographer, cinematographer and creative marketer. Visual storytelling across photography, cinema and brand experience.",
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Archives of light",
    intro:
      "Three folders. Three ways of seeing — silver grain, color emulsion, and the digital frame.",
    folder: "Folder",
    open: "Open",
    back: "← Portfolio",
    folders: {
      "black-and-white-film": {
        title: "Black & White Film",
        subtitle: "Grain · shadow · silence",
      },
      "color-film": {
        title: "Color Film",
        subtitle: "Emulsion · memory · hue",
      },
      digital: {
        title: "Digital",
        subtitle: "Clarity · night · aperture",
      },
    },
  },
  project: {
    eyebrow: "Project",
    title: "Selected work",
    titleAccent: "with Thypoch.",
    intro:
      "Four case studies — Simera, Eureka 50, Eureka 28, and Voyager.",
    openCase: "View",
    back: "← All projects",
    date: "Date",
    sittingWith: "Sitting Down With",
    wordsBy: "Words By",
    share: "Share",
  },
  blog: {
    title: "Blog",
    description: "Journal — essays and field notes on image, cinema and brands.",
    back: "← Blog",
  },
  about: {
    name: "Starix Luo",
    bio: [
      "Photographer, cinematographer, and creative marketer based in Shenzhen. My work moves fluidly between stills and motion — cinematic storytelling, commercial aesthetics, and the quiet details of how light falls.",
      "I studied cinematography in France (2017–2019), then went on to work in commercial and documentary photography and filmmaking. Since 2022, my focus has shifted toward creative marketing and go-to-market strategy for imaging and cinema brands.",
      "At Thypoch, I've helped shape the brand's product philosophy — from the first Simera primes, through Eureka, to Voyager — lenses built for encounter and journey, for a look that stays organic rather than merely correct. Beyond product work, I continue to shoot black-and-white film, color film, and digital.",
    ],
  },
  contact: {
    title: "Contact",
    description: "Contact Starix Luo.",
    instagram: "Instagram",
  },
  notFound: {
    title: "This frame does not exist.",
    home: "Return home",
  },
};

const zh: Dictionary = {
  meta: {
    titleDefault: "Starix Luo — 影像叙事作品集",
    titleTemplate: "%s — Starix Luo",
    description: "跨越摄影、电影与品牌体验的视觉叙事。",
  },
  nav: {
    portfolio: "作品集",
    project: "项目",
    blog: "博客",
    about: "关于",
  },
  aria: {
    instagram: "Instagram",
    xiaohongshu: "小红书",
    xinpianchang: "新片场",
    email: "邮箱",
    switchToEn: "切换到英文",
    switchToZh: "切换到中文",
  },
  footer: {
    rights: "Starix Luo",
  },
  home: {
    title: "首页",
    description:
      "Starix Luo — 摄影师、电影摄影师与创意营销人。跨越摄影、电影与品牌体验的视觉叙事。",
  },
  portfolio: {
    eyebrow: "作品集",
    title: "光的档案",
    intro: "三个文件夹。三种观看方式 —— 银盐颗粒、彩色乳剂，与数字画幅。",
    folder: "文件夹",
    open: "打开",
    back: "← 作品集",
    folders: {
      "black-and-white-film": {
        title: "黑白胶片",
        subtitle: "颗粒 · 阴影 · 静默",
      },
      "color-film": {
        title: "彩色胶片",
        subtitle: "乳剂 · 记忆 · 色调",
      },
      digital: {
        title: "数码",
        subtitle: "清晰 · 夜晚 · 光圈",
      },
    },
  },
  project: {
    eyebrow: "项目",
    title: "精选工作",
    titleAccent: "与 Thypoch。",
    intro: "四个案例 —— Simera、Eureka 50、Eureka 28 与 Voyager。",
    openCase: "查看",
    back: "← 全部项目",
    date: "日期",
    sittingWith: "Sitting Down With",
    wordsBy: "Words By",
    share: "分享",
  },
  blog: {
    title: "博客",
    description: "手记 —— 关于影像、电影与品牌的随笔与现场笔记。",
    back: "← 博客",
  },
  about: {
    name: "Starix Luo",
    bio: [
      "摄影师、影像创作者、创意营销人，现居深圳。我的创作在静态影像与动态影像之间自由游走——电影感的叙事、商业美学，以及光线落下时那些安静的细节。",
      "我曾赴法国学习电影摄影（2017–2019），此后投身商业与纪录片摄影及影像创作。自2022年起，重心逐渐转向影像与电影品牌的创意营销与市场推广工作。",
      "在Thypoch，我参与塑造了品牌的产品理念——从最初的Simera定焦系列，到Eureka，再到Voyager，这些镜头都为相遇而生、为旅程而生，追求一种有机自然、而非仅仅“正确”的影像质感。产品工作之外，我仍持续拍摄黑白胶片、彩色胶片与数字影像。",
    ],
  },
  contact: {
    title: "联系",
    description: "联系 Starix Luo。",
    instagram: "Instagram",
  },
  notFound: {
    title: "这一帧不存在。",
    home: "返回首页",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, zh };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
