export interface Photo {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  location?: string;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  icon: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
}

export interface Music {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  description: string;
  tags: string[];
}

export const photoCategories = ["全部", "风景", "人像", "街拍", "建筑", "黑白"];

export const photos: Photo[] = [
  { id: "1", title: "经幡与雪山", description: "五彩经幡在雪山前随风飘扬，与远处雪峰蓝天形成鲜明对比", category: "风景", image: "/images/photos/photo-45.png", date: "2024-11-15", location: "高原" },
  { id: "2", title: "雪山下的湖泊", description: "高山湖泊的远景，雪山、云层与湖面交织的壮丽景象", category: "风景", image: "/images/photos/photo-37.png", date: "2024-11-12", location: "高原" },
  { id: "3", title: "海岸日出", description: "黎明时分的海岸线，剪影中的树木与宁静的海面", category: "风景", image: "/images/photos/photo-49.png", date: "2024-11-10" },
  { id: "4", title: "雪山攀登", description: "登山者们在雪坡上蜿蜒行进，阳光照亮壮丽的山脉", category: "风景", image: "/images/photos/photo-46.png", date: "2024-11-08", location: "雪山" },
  { id: "5", title: "海岸剪影", description: "大树剪影矗立，背景是波光粼粼的海面与蓝色天空", category: "风景", image: "/images/photos/photo-1.png", date: "2024-11-05" },
  { id: "6", title: "港口日落", description: "日落时分的港口，暖橙色笼罩下的桥梁、船只与城市天际线", category: "街拍", image: "/images/photos/photo-43.png", date: "2024-11-02" },
  { id: "7", title: "田野时光", description: "夕阳余晖下的田野，金色光线洒落在绿色植物与远方的树林", category: "人像", image: "/images/photos/photo-44.png", date: "2024-10-28" },
  { id: "8", title: "未来感", description: "赛博朋克风格人像，运动模糊与异色瞳营造前卫氛围", category: "人像", image: "/images/photos/photo-56.png", date: "2024-10-25" },
  { id: "9", title: "光影人像", description: "强烈侧光下的肖像，明暗对比突出面部轮廓", category: "人像", image: "/images/photos/photo-31.png", date: "2024-10-22" },
  { id: "10", title: "传统与现代", description: "传统寺庙屋顶与飞过的客机，古今交融的独特瞬间", category: "建筑", image: "/images/photos/photo-48.png", date: "2024-10-18", location: "东亚" },
  { id: "11", title: "岩石与海", description: "女性躺卧在海边岩石上，黑白影调下的宁静与空灵", category: "黑白", image: "/images/photos/photo-24.png", date: "2024-10-15" },
  { id: "12", title: "雪地徒步", description: "雪地中穿行的徒步者，鲜艳服饰与白雪形成鲜明对比", category: "风景", image: "/images/photos/photo-20.png", date: "2024-10-12" },
  { id: "13", title: "雪山云海", description: "山谷中的云海，日出时分的金色光晕染红天际", category: "风景", image: "/images/photos/photo-21.png", date: "2024-10-08" },
  { id: "14", title: "岩石休憩", description: "黑白照片中女性与自然岩石的融合，沉静而富有张力", category: "黑白", image: "/images/photos/photo-23.png", date: "2024-10-05" },
  { id: "15", title: "森林白裙", description: "白衣女性在树林中的优雅姿态，自然光下的清新唯美", category: "人像", image: "/images/photos/photo-50.png", date: "2024-10-01" },
  { id: "16", title: "稻田守望", description: "稻田中的女性侧影，手持红色果实望向远方", category: "人像", image: "/images/photos/photo-52.png", date: "2024-09-28" },
  { id: "17", title: "晨曦山峦", description: "日出时分金色阳光洒落在连绵起伏的山脉上", category: "风景", image: "/images/photos/photo-5.png", date: "2024-09-25" },
  { id: "18", title: "都市剪影", description: "海岸线日出，光秃树木与人物剪影营造静谧氛围", category: "街拍", image: "/images/photos/photo-6.png", date: "2024-09-22" },
  { id: "19", title: "海港黄昏", description: "黄昏时分的海港，暖色光影中的船只与码头", category: "街拍", image: "/images/photos/photo-2.png", date: "2024-09-18" },
  { id: "20", title: "绿野仙踪", description: "田野中的少女，阳光穿过植物洒落金色轮廓光", category: "人像", image: "/images/photos/photo-40.png", date: "2024-09-15" },
  { id: "21", title: "雪山远眺", description: "雪山山脉连绵，风蚀纹理的雪地延伸向远方", category: "风景", image: "/images/photos/photo-8.png", date: "2024-09-12" },
  { id: "22", title: "山间足迹", description: "雪地上的足迹与远山，记录徒步的轨迹", category: "风景", image: "/images/photos/photo-17.png", date: "2024-09-08" },
  { id: "24", title: "城市暮色", description: "日落时分的城市剪影，桥梁与水面交相辉映", category: "街拍", image: "/images/photos/photo-9.png", date: "2024-09-01" },
  { id: "25", title: "雪径前行", description: "雪坡上蜿蜒的队伍，人与自然的力量对比", category: "风景", image: "/images/photos/photo-25.png", date: "2024-08-28" },
  { id: "26", title: "光影轮廓", description: "剪影中的人物与树木，晨昏时分的柔和光线", category: "黑白", image: "/images/photos/photo-7.png", date: "2024-08-25" },
  { id: "27", title: "山谷晨光", description: "山谷中的晨雾与远山，静谧的冬日景象", category: "风景", image: "/images/photos/photo-22.png", date: "2024-08-22" },
  { id: "28", title: "建筑线条", description: "传统建筑与现代结构的几何之美", category: "建筑", image: "/images/photos/photo-14.png", date: "2024-08-18" },
  { id: "29", title: "林间光影", description: "树林中的光影交错，人物与自然融为一体", category: "人像", image: "/images/photos/photo-26.png", date: "2024-08-15" },
  { id: "30", title: "海天一线", description: "海天交界处的宁静，蓝色调中的沉思", category: "风景", image: "/images/photos/photo-4.png", date: "2024-08-12" },
  { id: "31", title: "街角瞬间", description: "城市街头的日常画面，光影记录生活", category: "街拍", image: "/images/photos/photo-27.png", date: "2024-08-08" },
  { id: "32", title: "稻田诗意", description: "绿色稻浪中的身影，自然与人文的和谐", category: "人像", image: "/images/photos/photo-33.png", date: "2024-08-05" },
  { id: "33", title: "雪顶远山", description: "雪峰连绵，云层在山间流淌", category: "风景", image: "/images/photos/photo-34.png", date: "2024-08-01" },
  { id: "34", title: "岩岸黑白", description: "黑白影调下的海岸岩石与人物剪影", category: "黑白", image: "/images/photos/photo-35.png", date: "2024-07-28" },
  { id: "35", title: "山林漫步", description: "山间小径，绿意盎然的徒步场景", category: "风景", image: "/images/photos/photo-36.png", date: "2024-07-25" },
  { id: "36", title: "湖畔倒影", description: "平静湖面映照天空与远山", category: "风景", image: "/images/photos/photo-38.png", date: "2024-07-22" },
  { id: "37", title: "夕照山野", description: "夕阳染红山野，温暖的金色光芒", category: "风景", image: "/images/photos/photo-39.png", date: "2024-07-18" },
  { id: "38", title: "田野女孩", description: "田野中的清新人像，自然光线下的美好", category: "人像", image: "/images/photos/photo-41.png", date: "2024-07-15" },
  { id: "40", title: "港口晨曦", description: "清晨港口的宁静，船只与晨光", category: "街拍", image: "/images/photos/photo-28.png", date: "2024-07-08" },
  { id: "41", title: "教堂尖塔", description: "传统建筑的庄严与线条美", category: "建筑", image: "/images/photos/photo-29.png", date: "2024-07-05" },
  { id: "42", title: "黑白沉思", description: "高对比度下的情绪肖像", category: "黑白", image: "/images/photos/photo-30.png", date: "2024-07-01" },
  { id: "43", title: "街头光影", description: "城市街道上的光影交错", category: "街拍", image: "/images/photos/photo-18.png", date: "2024-06-28" },
  { id: "44", title: "山脊行走", description: "雪地山脊上的徒步者，渺小与壮阔的对比", category: "风景", image: "/images/photos/photo-19.png", date: "2024-06-25" },
  { id: "45", title: "古建韵味", description: "传统建筑的细节与色彩", category: "建筑", image: "/images/photos/photo-10.png", date: "2024-06-22" },
  { id: "46", title: "稻田少女", description: "稻浪中的侧脸，诗意的田园人像", category: "人像", image: "/images/photos/photo-32.png", date: "2024-06-18" },
  { id: "47", title: "城市天际", description: "现代都市的天际线与建筑群", category: "建筑", image: "/images/photos/photo-47.png", date: "2024-06-15" },
  { id: "48", title: "山间小路", description: "蜿蜒的山路穿过雪地与森林", category: "风景", image: "/images/photos/photo-11.png", date: "2024-06-12" },
  { id: "50", title: "时光静好", description: "黑白胶片质感，记录静谧时刻", category: "黑白", image: "/images/photos/photo-13.png", date: "2024-06-05" },
  { id: "51", title: "田野远眺", description: "站在田野中望向远方，阳光与绿意", category: "人像", image: "/images/photos/photo-51.png", date: "2024-06-01" },
  { id: "52", title: "山林深处", description: "密林中的光影与路径", category: "风景", image: "/images/photos/photo-15.png", date: "2024-05-28" },
  { id: "53", title: "海风吹拂", description: "海岸线的人物剪影，海天一色", category: "人像", image: "/images/photos/photo-16.png", date: "2024-05-25" },
  { id: "54", title: "街景印象", description: "城市街头的印象派画面", category: "街拍", image: "/images/photos/photo-53.png", date: "2024-05-22" },
  { id: "55", title: "雪原辽阔", description: "广阔的雪原延伸至天际", category: "风景", image: "/images/photos/photo-54.png", date: "2024-05-18" },
  { id: "56", title: "山色空蒙", description: "云雾缭绕的山间景象", category: "风景", image: "/images/photos/photo-55.png", date: "2024-05-15" },
  { id: "57", title: "人文剪影", description: "城市中的人物与建筑，记录生活的瞬间", category: "街拍", image: "/images/photos/photo-57.png", date: "2024-05-12" },
];

export const resourceCategories = ["全部", "AI", "软件", "插件", "网站", "知识"];

export const resources: Resource[] = [
  {
    id: "1",
    name: "Cursor",
    description: "AI驱动的代码编辑器，革命性的编程体验",
    category: "软件",
    url: "https://cursor.sh",
    icon: "💻",
    tags: ["IDE", "AI", "编辑器"],
  },
  {
    id: "3",
    name: "沉浸式翻译",
    description: "双语对照网页翻译插件，提升外文阅读与学习效率",
    category: "插件",
    url: "https://immersivetranslate.com",
    icon: "🌐",
    tags: ["翻译", "浏览器插件", "学习效率"],
  },
  {
    id: "9",
    name: "学术资源全网搜索",
    description: "聚合学术站点检索入口，一键联查论文、期刊与学术资料",
    category: "插件",
    url: "https://chromewebstore.google.com/detail/foidhijnndaakamhcnckjldopopionod?utm_source=item-share-cb",
    icon: "🔎",
    tags: ["学术", "检索", "浏览器插件"],
  },
  {
    id: "20",
    name: "AdGuard 广告拦截器",
    description: "高效拦截网页广告与弹窗，提升浏览速度并加强隐私保护。",
    category: "插件",
    url: "https://chromewebstore.google.com/detail/bgnkhhnnamicmpeenaelnjfhikgbkllg?utm_source=item-share-cb",
    icon: "🛡️",
    tags: ["广告拦截", "隐私保护", "浏览器插件"],
  },
  {
    id: "4",
    name: "Notion",
    description: "全能工作空间，知识管理与协作平台",
    category: "软件",
    url: "https://notion.so",
    icon: "📝",
    tags: ["笔记", "协作", "知识管理"],
  },
  {
    id: "7",
    name: "Obsidian",
    description: "双向链接笔记工具，适合构建个人知识库",
    category: "软件",
    url: "https://obsidian.md",
    icon: "🔮",
    tags: ["笔记", "知识管理", "PKM"],
  },
  {
    id: "8",
    name: "纵横四海",
    description: "关注商业、成长与时代趋势的知识类播客节目",
    category: "知识",
    url: "https://www.xiaoyuzhoufm.com",
    icon: "🎙️",
    tags: ["播客", "商业", "成长"],
  },
  {
    id: "16",
    name: "无人知晓",
    description: "关注个体体验与社会议题的深度对谈播客。",
    category: "知识",
    url: "https://www.xiaoyuzhoufm.com",
    icon: "🎙️",
    tags: ["播客", "访谈", "社会观察"],
  },
  {
    id: "17",
    name: "岩中花述",
    description: "围绕文化、阅读与女性成长展开的对话型播客。",
    category: "知识",
    url: "https://www.xiaoyuzhoufm.com",
    icon: "🎙️",
    tags: ["播客", "文化", "成长"],
  },
  {
    id: "11",
    name: "《活着》",
    description: "余华代表作，从个体命运看时代洪流中的生命韧性。",
    category: "知识",
    url: "",
    icon: "📚",
    tags: ["书单", "文学", "人生"],
  },
  {
    id: "12",
    name: "《置身事内》",
    description: "从财政与地方治理切入，理解中国经济运行的底层逻辑。",
    category: "知识",
    url: "",
    icon: "📚",
    tags: ["书单", "经济", "社会观察"],
  },
  {
    id: "13",
    name: "《金字塔原理》",
    description: "结构化思考与表达的经典方法论，适合写作和沟通训练。",
    category: "知识",
    url: "",
    icon: "📚",
    tags: ["书单", "思维方法", "表达"],
  },
  {
    id: "14",
    name: "《穷查理宝典》",
    description: "查理·芒格多元思维模型合集，适合建立跨学科决策框架。",
    category: "知识",
    url: "",
    icon: "📚",
    tags: ["书单", "投资", "决策"],
  },
  {
    id: "15",
    name: "《人类简史》",
    description: "从认知革命到现代文明，纵览人类社会的演化路径。",
    category: "知识",
    url: "",
    icon: "📚",
    tags: ["书单", "历史", "认知"],
  },
  {
    id: "10",
    name: "魔法橡皮",
    description: "免费在线 AI 抠图与消除工具，可快速移除图片中的人物、文字和杂物",
    category: "网站",
    url: "https://magiceraser.org/",
    icon: "🪄",
    tags: ["AI修图", "对象消除", "在线工具"],
  },
  {
    id: "18",
    name: "去水印（PhotoGrid）",
    description: "免费在线 AI 去水印工具，支持快速移除图片中的文字、Logo 与标识。",
    category: "网站",
    url: "https://www.photogrid.app/zh-cn/watermark-remover/",
    icon: "🧼",
    tags: ["去水印", "图片处理", "在线工具"],
  },
  {
    id: "19",
    name: "IP购买（Novproxy）",
    description: "长效静态 ISP 与住宅代理服务，支持多地区 IP 购买与管理。",
    category: "网站",
    url: "https://novproxy.com/zh/pricing/isp/",
    icon: "🌐",
    tags: ["代理IP", "静态ISP", "网络工具"],
  },
  {
    id: "21",
    name: "WaytoAGI",
    description: "通往 AGI 之路，聚合 AI 知识库、工具站与学习导航。",
    category: "网站",
    url: "https://www.waytoagi.com/zh",
    icon: "🧠",
    tags: ["AI栏", "AI知识库", "工具导航"],
  },
];

export const blogCategories = ["全部", "技术", "摄影", "思考", "生活", "AI"];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "构建现代个人网站的思考",
    excerpt: "在信息过载的时代，个人网站作为数字身份的核心载体...",
    date: "2024-12-15",
    category: "技术",
    tags: ["Web开发", "Next.js", "个人品牌"],
    readTime: "8分钟",
  },
  {
    id: "2",
    title: "胶片摄影的温度",
    excerpt: "在数码时代，为什么还有这么多人迷恋胶片摄影...",
    date: "2024-12-08",
    category: "摄影",
    tags: ["胶片", "摄影艺术", "胶片摄影"],
    readTime: "6分钟",
  },
  {
    id: "3",
    title: "AI时代的创作边界",
    excerpt: "当AI能够生成图像、文字、音乐，人类的创造力将何去何从...",
    date: "2024-12-01",
    category: "思考",
    tags: ["AI", "创作", "未来"],
    readTime: "10分钟",
  },
  {
    id: "4",
    title: "2024年终回顾",
    excerpt: "这一年的成长、收获与思考...",
    date: "2024-11-28",
    category: "生活",
    tags: ["年度总结", "成长"],
    readTime: "5分钟",
  },
];

export const musicList: Music[] = [
  {
    id: "6",
    title: "Head in the Clouds",
    artist: "Hayd",
    album: "Head in the Clouds",
    cover: "/images/music/head-in-the-clouds.jpg",
    description: "温柔而治愈的独立流行旋律，适合独处和夜晚聆听。",
    tags: ["独立流行", "治愈", "轻音乐"],
  },
  {
    id: "8",
    title: "Love Story",
    artist: "Taylor Swift",
    album: "Fearless",
    cover: "/images/music/head-in-the-clouds.jpg",
    description: "经典流行乡村风格单曲，旋律明快、故事感十足。",
    tags: ["流行", "乡村流行", "英文"],
  },
];
