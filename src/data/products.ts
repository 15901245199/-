// ============================================
// 商品数据（示例）
// 替换或增删这里的条目即可更新全站商品；
// 图片放在 public/images/products/ 下，路径填 /images/products/xxx.jpg
// ============================================

export interface Product {
  slug: string;
  name: string;
  categoryId: 'jacket' | 'top' | 'bottom' | 'dress';
  price: number;
  originalPrice?: number;
  image: string;
  tag?: 'new' | 'hot' | 'deal';
  shortDesc: string;
  desc: string;
  fabric: string;
  colors: string[];
  sizes: string[];
  stock: number;
  rating: number;
}

export const products: Product[] = [
  {
    slug: 'mens-jacket',
    name: '男士休闲棒球领夹克',
    categoryId: 'jacket',
    price: 299,
    originalPrice: 399,
    image: '/images/products/mens-jacket.jpg',
    tag: 'hot',
    shortDesc: '宽松立领 · 格纹内衬 · 春秋百搭',
    desc: '经典棒球领休闲夹克，宽松直筒版型不挑身材。领口与门襟拼接格纹内衬，细节耐看；面料柔软挺括，通勤、出街两相宜。',
    fabric: '聚酯纤维混纺',
    colors: ['浅灰', '藏青'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 36,
    rating: 4.8,
  },
  {
    slug: 'mens-windbreaker',
    name: '男士经典双排扣风衣',
    categoryId: 'jacket',
    price: 459,
    image: '/images/products/mens-windbreaker.jpg',
    tag: 'new',
    shortDesc: '中长款 · 修身剪裁 · 商务休闲',
    desc: '双排扣中长款风衣，修身剪裁勾勒利落身形。可翻立领设计防风挡雨，内搭衬衫或高领皆可，一件撑起整个秋冬的正式与松弛。',
    fabric: '棉涤斜纹面料',
    colors: ['卡其', '深灰'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 22,
    rating: 4.9,
  },
  {
    slug: 'womens-coat',
    name: '女士双面呢羊毛大衣',
    categoryId: 'jacket',
    price: 499,
    originalPrice: 699,
    image: '/images/products/womens-coat.jpg',
    tag: 'hot',
    shortDesc: '中长款 · 收腰系带 · 赫本风',
    desc: '经典赫本风双面呢大衣，驼色系温暖显白。收腰系带勾勒曲线，双面呢工艺挺括垂顺，冬季叠穿毛衣也利落不臃肿。',
    fabric: '羊毛混纺双面呢',
    colors: ['驼色', '焦糖'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 18,
    rating: 4.9,
  },
  {
    slug: 'mens-hoodie',
    name: '男士重磅连帽卫衣',
    categoryId: 'top',
    price: 159,
    image: '/images/products/mens-hoodie.jpg',
    tag: 'hot',
    shortDesc: '380g 重磅 · 宽松版型 · 秋冬加绒',
    desc: '380g 重磅纯棉毛圈布，挺括有型不塌肩。连帽抽绳配袋鼠兜，宽松落肩版型，单穿叠穿都好看，秋冬衣橱的万能单品。',
    fabric: '纯棉毛圈布',
    colors: ['黑色', '灰色', '藏青'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 52,
    rating: 4.7,
  },
  {
    slug: 'mens-tee',
    name: '男士重磅纯棉圆领T恤',
    categoryId: 'top',
    price: 79,
    image: '/images/products/mens-tee.jpg',
    tag: 'deal',
    shortDesc: '300g 重磅 · 水洗工艺 · 百搭打底',
    desc: '300g 重磅精梳棉，厚实不透，洗后不变形。基础圆领版型，胸前极简印花，单穿清爽，内搭白搭，四季必备。',
    fabric: '100% 精梳棉',
    colors: ['白色', '黑色'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    stock: 88,
    rating: 4.6,
  },
  {
    slug: 'womens-cardigan',
    name: '女士镂空针织开衫',
    categoryId: 'top',
    price: 189,
    image: '/images/products/womens-cardigan.jpg',
    tag: 'new',
    shortDesc: '麻花镂空织纹 · 温柔米白 · 通勤可穿',
    desc: '麻花绞花与镂空织纹拼接，工艺感十足。圆领纽扣开合，两侧实用口袋，米白色系温柔显气质，春秋外搭或空调房披肩都很出彩。',
    fabric: '棉腈混纺针织',
    colors: ['米白', '燕麦'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 30,
    rating: 4.7,
  },
  {
    slug: 'womens-blouse',
    name: '女士雪纺花边衬衫',
    categoryId: 'top',
    price: 139,
    image: '/images/products/womens-blouse.jpg',
    tag: 'new',
    shortDesc: '立领木耳花边 · 轻盈垂坠 · 通勤优雅',
    desc: '立领点缀木耳花边，蕾丝镂空竖条装饰，泡泡袖收口袖口，温柔又显瘦。雪纺面料轻盈顺滑，通勤、约会都能驾驭。',
    fabric: '雪纺',
    colors: ['白色', '米白'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 40,
    rating: 4.6,
  },
  {
    slug: 'mens-jeans',
    name: '男士直筒水洗牛仔裤',
    categoryId: 'bottom',
    price: 199,
    originalPrice: 259,
    image: '/images/products/mens-jeans.jpg',
    tag: 'new',
    shortDesc: '直筒版型 · 水洗做旧 · 弹力舒适',
    desc: '经典直筒版型，水洗做旧肌理自然耐看。面料含弹力纤维，蹲起自如；后袋装饰缝线与皮牌点缀，日常通勤与周末出街都合适。',
    fabric: '棉弹牛仔布',
    colors: ['浅蓝', '深蓝'],
    sizes: ['30', '32', '34', '36'],
    stock: 44,
    rating: 4.7,
  },
  {
    slug: 'mens-chinos',
    name: '男士修身休闲西裤',
    categoryId: 'bottom',
    price: 219,
    image: '/images/products/mens-chinos.jpg',
    tag: 'hot',
    shortDesc: '修身直筒 · 抗皱面料 · 商务休闲',
    desc: '修身直筒版型，垂顺抗皱，久坐不起褶。卡其色系百搭不过时，搭配衬衫或T恤都能撑住场面，职场与日常切换自如。',
    fabric: '棉涤抗皱斜纹',
    colors: ['卡其', '深灰', '黑色'],
    sizes: ['30', '32', '34', '36'],
    stock: 35,
    rating: 4.8,
  },
  {
    slug: 'womens-wide-pants',
    name: '女士高腰垂感阔腿裤',
    categoryId: 'bottom',
    price: 169,
    image: '/images/products/womens-wide-pants.jpg',
    tag: 'deal',
    shortDesc: '高腰垂坠 · 显瘦显高 · 慵懒有型',
    desc: '高腰设计拉长腿部比例，垂感面料走起来自带气场。宽松阔腿不挑腿型，米白、燕麦色系温柔百搭，配针织衫或衬衫都好看。',
    fabric: '羊毛呢垂感面料',
    colors: ['米白', '燕麦'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 26,
    rating: 4.7,
  },
  {
    slug: 'womens-dress',
    name: '女士复古碎花连衣裙',
    categoryId: 'dress',
    price: 229,
    originalPrice: 299,
    image: '/images/products/womens-dress.jpg',
    tag: 'hot',
    shortDesc: '藏青碎花 · 收腰系带 · 文艺复古',
    desc: '藏青底色配白色碎花，文艺又显白。腰部系带收腰，裙摆拼接蕾丝花边，长袖设计春秋都能穿，一件满足约会同款的仪式感。',
    fabric: '棉麻混纺',
    colors: ['藏青碎花'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 20,
    rating: 4.8,
  },
  {
    slug: 'womens-skirt',
    name: '女士高腰A字半身裙',
    categoryId: 'dress',
    price: 129,
    image: '/images/products/womens-skirt.jpg',
    tag: 'new',
    shortDesc: '高腰A字 · 皮质腰带 · 显瘦利落',
    desc: '高腰 A 字版型遮胯显瘦，配深棕色皮质腰带与金属扣，质感在线。双侧实用口袋，面料挺括不起皱，搭配衬衫、T恤都利落。',
    fabric: '棉质斜纹',
    colors: ['浅米', '卡其'],
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 33,
    rating: 4.6,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(categoryId: string) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getRelated(product: Product, count = 4) {
  const same = products.filter((p) => p.categoryId === product.categoryId && p.slug !== product.slug);
  const others = products.filter((p) => p.categoryId !== product.categoryId && p.slug !== product.slug);
  return [...same, ...others].slice(0, count);
}
