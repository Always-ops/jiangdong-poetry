export interface Poem {
  id: string;
  title: string;
  author: string;
  dynasty: string;
  form: string; // 体裁
  tags: string[];
  lines: string[];
  annotation?: string; // 注释/赏析
}

export const poems: Poem[] = [
  {
    id: "sheng-cheng",
    title: "声声慢·寻寻觅觅",
    author: "李清照",
    dynasty: "宋",
    form: "词",
    tags: ["秋思", "离愁", "江东"],
    lines: [
      "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。",
      "乍暖还寒时候，最难将息。",
      "三杯两盏淡酒，怎敌他、晚来风急？",
      "雁过也，正伤心，却是旧时相识。",
      "满地黄花堆积，憔悴损，如今有谁堪摘？",
      "守着窗儿，独自怎生得黑！",
      "梧桐更兼细雨，到黄昏、点点滴滴。",
      "这次第，怎一个愁字了得！",
    ],
    annotation:
      "李清照晚年所作，历经国破家亡、夫丧流离之苦，一腔愁绪，倾泻于词中。叠字开篇，音韵缠绵，千古绝唱。",
  },
  {
    id: "ru-meng-ling",
    title: "如梦令·常记溪亭日暮",
    author: "李清照",
    dynasty: "宋",
    form: "词",
    tags: ["少女", "江南", "闲适"],
    lines: [
      "常记溪亭日暮，沉醉不知归路。",
      "兴尽晚回舟，误入藕花深处。",
      "争渡，争渡，惊起一滩鸥鹭。",
    ],
    annotation:
      "少女时期的易安居士，泛舟溪亭，醉归误入荷花深处，惊起鸥鹭。词风清丽活泼，勾勒出江南水乡少女的无忧时光。",
  },
  {
    id: "zui-hua-yin",
    title: "醉花阴·薄雾浓云愁永昼",
    author: "李清照",
    dynasty: "宋",
    form: "词",
    tags: ["重阳", "离别", "闺情"],
    lines: [
      "薄雾浓云愁永昼，瑞脑消金兽。",
      "佳节又重阳，玉枕纱厨，半夜凉初透。",
      "东篱把酒黄昏后，有暗香盈袖。",
      "莫道不销魂，帘卷西风，人比黄花瘦。",
    ],
    annotation:
      "重阳佳节，独守空闺，把酒东篱，暗香盈袖。末句「人比黄花瘦」，以菊花喻人，凄婉动人，为历来词话所称。",
  },
  {
    id: "chunwan",
    title: "春晚",
    author: "薛涛",
    dynasty: "唐",
    form: "五言绝句",
    tags: ["春日", "江南", "闺思"],
    lines: [
      "花开不同赏，花落不同悲。",
      "欲问相思处，花开花落时。",
    ],
    annotation:
      "薛涛，唐代著名女诗人，以才情著称于世。此诗借花开花落，道出相思之情，语淡情深，令人回味。",
  },
  {
    id: "song-you-ren",
    title: "送友人",
    author: "薛涛",
    dynasty: "唐",
    form: "七言绝句",
    tags: ["送别", "友情"],
    lines: [
      "水国蒹葭夜有霜，月寒山色共苍苍。",
      "谁言千里自今夕，离梦杳如关塞长。",
    ],
    annotation:
      "水国蒹葭，霜夜月寒，千里离别，梦如关塞之长。薛涛笔下的离别，苍茫辽阔，绝无小家碧玉之气。",
  },
  {
    id: "jiangdong-chunxiao",
    title: "江东春晓",
    author: "无名氏",
    dynasty: "宋",
    form: "七言绝句",
    tags: ["江东", "春日", "晨景"],
    lines: [
      "晓雾江东散绿烟，桃花映水弄娇妍。",
      "一声啼鸟惊春梦，半帘疏雨湿秋千。",
    ],
    annotation:
      "江东春晓，晓雾轻散，桃花映水，鸟啼惊梦，疏雨润秋千。寥寥数笔，勾勒出江南水乡春日清晨的灵动画卷。",
  },
  {
    id: "yu-meiren",
    title: "玉美人·荷花",
    author: "无名氏",
    dynasty: "宋",
    form: "词",
    tags: ["荷花", "夏日", "江南"],
    lines: [
      "红衣落尽芳心苦，却共东流去。",
      "日暮小池头，又是一番秋色，几番愁。",
    ],
    annotation:
      "荷花红衣落尽，芳心自苦，随流水东去。日暮小池，秋意渐生，愁绪层叠。以荷喻人，含蓄蕴藉。",
  },
  {
    id: "qingpingle",
    title: "清平乐·村居",
    author: "辛弃疾",
    dynasty: "宋",
    form: "词",
    tags: ["田园", "江南", "闲适"],
    lines: [
      "茅檐低小，溪上青青草。",
      "醉里吴音相媚好，白发谁家翁媪？",
      "大儿锄豆溪东，中儿正织鸡笼。",
      "最喜小儿亡赖，溪头卧剥莲蓬。",
    ],
    annotation:
      "稼轩以清新笔墨，描绘江南农家生活图景。吴音软语，溪边村居，最动人处在那卧剥莲蓬的顽童，天真无忧，令人心生向往。",
  },
  {
    id: "jiangchengzi-chunri",
    title: "江城子·春日",
    author: "无名氏",
    dynasty: "宋",
    form: "词",
    tags: ["春日", "思念", "江东"],
    lines: [
      "杏花疏影碧云天，燕归来，又经年。",
      "梦里江东，依旧旧山川。",
      "一寸柔肠千万结，无人解，自悠然。",
    ],
    annotation:
      "杏花疏影，燕子归来，年年复年年。梦里江东山川依旧，而柔肠千结，无人可诉，唯有自得其悠然。",
  },
  {
    id: "wuye-ti",
    title: "乌夜啼·离恨",
    author: "李煜",
    dynasty: "五代",
    form: "词",
    tags: ["离恨", "春日", "落花"],
    lines: [
      "林花谢了春红，太匆匆。",
      "无奈朝来寒雨，晚来风。",
      "胭脂泪，相留醉，几时重。",
      "自是人生长恨，水长东。",
    ],
    annotation:
      "后主以林花喻己身，春去太匆匆，寒雨晚风，无可奈何。末句「自是人生长恨水长东」，以江水东流喻恨之绵长，沉痛深婉。",
  },
  {
    id: "pusa-man",
    title: "菩萨蛮·小山重叠金明灭",
    author: "温庭筠",
    dynasty: "唐",
    form: "词",
    tags: ["闺情", "晨起", "梳妆"],
    lines: [
      "小山重叠金明灭，鬓云欲度香腮雪。",
      "懒起画蛾眉，弄妆梳洗迟。",
      "照花前后镜，花面交相映。",
      "新帖绣罗襦，双双金鹧鸪。",
    ],
    annotation:
      "飞卿以工笔细绘闺中晨起梳妆，金屏小山，鬓云香腮，懒起弄妆。末以绣襦上的双双鹧鸪，暗寓孤单之情，含蓄精妙。",
  },
  {
    id: "wang-jiangnan",
    title: "望江南·梳洗罢",
    author: "温庭筠",
    dynasty: "唐",
    form: "词",
    tags: ["望夫", "江南", "闺情"],
    lines: [
      "梳洗罢，独倚望江楼。",
      "过尽千帆皆不是，斜晖脉脉水悠悠。",
      "肠断白苹洲。",
    ],
    annotation:
      "梳洗独倚，望穿秋水，千帆过尽，所盼之人终未归。斜晖脉脉，流水悠悠，白苹洲上，柔肠寸断。短短数语，情深意远。",
  },
];

export function getPoemById(id: string): Poem | undefined {
  return poems.find((p) => p.id === id);
}

export function getPoemsByTag(tag: string): Poem[] {
  return poems.filter((p) => p.tags.includes(tag));
}

export const allTags = Array.from(new Set(poems.flatMap((p) => p.tags)));
