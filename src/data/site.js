/* ============================================================
   ASSET HELPERS
   Paths mirror the real filenames inside public/portfolio-assets/
   Spaces / parentheses are percent-encoded once via encodeURI().
   ============================================================ */

export const PROFILE_IMG = encodeURI('portfolio-assets/الصورة الشخصية.png')

export const asset = (p) => encodeURI(p)

/* ============================================================
   NAVIGATION
   ============================================================ */
export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من أنا' },
  { id: 'services', label: 'خدماتي' },
  { id: 'portfolio', label: 'أعمالي' },
  { id: 'testimonials', label: 'آراء العملاء' },
  { id: 'contact', label: 'تواصل' },
]

/* ============================================================
   CONTACT
   ============================================================ */
export const PHONE = '+201009198567'
export const PHONE_DISPLAY = '+20 10 09198567'
export const WHATSAPP = 'https://wa.me/201009198567'
export const FACEBOOK = 'https://www.facebook.com/ahmed.alfanan2'

/* ============================================================
   HERO TYPING ROTATOR
   Arabic only — mixing LTR/RTL words inside one animated string
   caused bidi reordering and layout jumps.
   ============================================================ */
export const ROLES = ['مصمم جرافيك', 'رسام ديجيتال', 'خطاط']

/* ============================================================
   PORTFOLIO — Categories
   `id` is the internal key; `label` must match `category`
   on each portfolioData entry below.
   ============================================================ */
export const CATEGORIES = [
  { id: 'all', label: 'الكل' },
  { id: 'signage', label: 'تصميم لافتات' },
  { id: 'social', label: 'سوشيال ميديا' },
  { id: 'infographic', label: 'إنفوجرافيك' },
  { id: 'menus', label: 'المطبوعات والمنيوهات' },
]

/** Maps a category label -> category id. */
const CATEGORY_IDS = {
  'تصميم لافتات': 'signage',
  'سوشيال ميديا': 'social',
  'إنفوجرافيك': 'infographic',
  'المطبوعات والمنيوهات': 'menus',
}

/* ============================================================
   PORTFOLIO DATA
   ============================================================ */
const portfolioData = [
  { image: 'portfolio-assets/تصميم يافطة (1).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مطاعم فول مازن ومطحن المصطفى', description: 'تصميمات دافئة لمجال الأغذية، تجمع بين أصالة الخط العربي وعرض المنتجات بصورة تفتح الشهية.' },
  { image: 'portfolio-assets/تصميم يافطة (2).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'معرض كار ماركت وحلويات إيطاليانو', description: 'تنوع احترافي بين القوة في تصاميم معارض السيارات والنعومة والجاذبية في تصاميم محلات الحلويات.' },
  { image: 'portfolio-assets/تصميم يافطة (3).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'عطارة زمان وشركة العجوز', description: 'هويات بصرية للأنشطة التجارية تعتمد على التكوين المريح للعين وإبراز المنتجات بشكل واضح للمارة.' },
  { image: 'portfolio-assets/تصميم يافطة (4).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'كافيه الجزيرة وسنتر الهداية', description: 'استخدام تدرجات لونية جذابة وخطوط جريئة لخلق حضور بصري قوي في الشارع.' },
  { image: 'portfolio-assets/تصميم يافطة (5).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'عيادة د. أحمد شاكر وحميد فون', description: 'دمج بين الاحترافية والوضوح في التصاميم الطبية، والحيوية والعصرية في محلات التكنولوجيا.' },
  { image: 'portfolio-assets/تصميم يافطة (6).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'أقمشة المهدي وسنتر الزهراء', description: 'تصاميم تعكس الفخامة والأناقة لتناسب محلات الأقمشة والمفروشات.' },
  { image: 'portfolio-assets/تصميم يافطة (7).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'الحسيني للألوميتال ومكتبة الفجالة', description: 'هويات بصرية قوية تعتمد على تباين الألوان لجذب الانتباه وتوضيح طبيعة العمل بسلاسة.' },
  { image: 'portfolio-assets/تصميم يافطة (8).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'آيس كريم منهاتن وكوافير مكة', description: 'تصميمات حيوية ومنعشة بألوان زاهية وخطوط شبابية حديثة.' },
  { image: 'portfolio-assets/تصميم يافطة (9).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مصطفى موتورز وبيتزا كازاميزا', description: 'توازن مثالي بين الفخامة في قطاع السيارات والجاذبية والألوان الساخنة في قطاع الأغذية.' },
  { image: 'portfolio-assets/تصميم يافطة (10).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'صيدلية د. عزة كامل وأبو حوا', description: 'تصاميم تتميز بالوضوح التام وقابلية القراءة من مسافات بعيدة لتلبية متطلبات اللوحات الخارجية.' },
  { image: 'portfolio-assets/تصميم يافطة (11).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مخبز أولاد أبو بكر وتنجيد الأقصى', description: 'هويات بصرية للشارع المصري تجمع بين أصالة الخط العربي وعرض الخدمات بأسلوب مباشر وجذاب.' },
  { image: 'portfolio-assets/تصميم يافطة (12).jpg', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'أسماك سعد وكوافير مافيا ستايل', description: 'تصميمات ديناميكية تعتمد على دمج الصور الحية مع الخطوط البارزة لجذب انتباه المارة بقوة.' },
  { image: 'portfolio-assets/انفوجرافيك 1.jpg', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'مهارات إدارة الوقت', description: 'تصميم دائري متدفق يحول خطوات إدارة الوقت إلى رحلة بصرية سهلة الفهم والتتبع.' },
  { image: 'portfolio-assets/انفوجرافيك 2.jpg', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'إدارة الحسابات المالية', description: 'توزيع هندسي دقيق للمعلومات المحاسبية لتبسيط الخطوات المعقدة للشركات الناشئة.' },
  { image: 'portfolio-assets/انفوجرافيك 3.jpg', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'تعرف على عقلك الباطن', description: 'دمج احترافي بين الرسم التوضيحي (Illustration) والمحتوى النصي لتقديم معلومة نفسية بأسلوب مبتكر.' },
  { image: 'portfolio-assets/انفوجرافيك 4.jpg', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'استراتيجيات التسويق الرقمي', description: 'تنظيم عمودي مريح للعين باستخدام أيقونات مسطحة (Flat Design) لتلخيص أساليب التسويق الفعالة.' },
  { image: 'portfolio-assets/انفوجرافيك 5.jpg', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'أشخاص تحتاجهم في فريقك', description: 'تصميم شجري جذاب يبرز الأدوار المختلفة في فرق العمل بأسلوب بصري يسهل حفظه وتذكره.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش1.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض ميكس تشكن فريش', description: 'تصميم إعلاني ديناميكي يعتمد على الإضاءة والألوان النارية لتحفيز الجوع وإبراز العرض بقوة.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش2.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'وجبة معمولة بحب', description: 'بوست سوشيال ميديا بسيط ومباشر يركز على جودة المنتج بطريقة فنية ملفتة للانتباه.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش3.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عرض اللمة الحلوة', description: 'تكوين غني بالتفاصيل يناسب الوجبات العائلية الكبيرة مع إبراز السعر والمكونات بشكل واضح.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش4.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'تفاعل الجمهور', description: 'تصميم مخصص لزيادة التفاعل مع المتابعين بسؤال مباشر وصورة شهية للمنتج.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش5.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'وجبة الاستربس العائلي', description: 'إبراز الوجبات المجمعة وتفاصيل المكونات الإضافية بطريقة منظمة ومغرية.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي1.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'البرنامج المميز للعمرة', description: 'تصميم روحاني راقٍ يعتمد على دمج صور الحرمين بأسلوب فني يبعث على السكينة والثقة.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي2.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة المولد النبوي', description: 'إبراز تفاصيل الرحلة والفنادق بشكل نظيف ومنظم لتسهيل اتخاذ القرار على المعتمرين.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي3.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'البرنامج الاقتصادي للعمرة', description: 'توزيع مريح للمعلومات والأسعار والخدمات المشمولة لضمان وضوح العرض السياحي.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي4.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة المولد - فندق الجنادرية', description: 'استخدام الزخارف الإسلامية والألوان الخضراء لتعزيز الطابع الديني للتصميم.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي5.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة رمضان - فنادق مكة', description: 'تصميم يدمج بين روحانيات رمضان وإبراز أماكن الإقامة القريبة من الحرمين بأسلوب مميز.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي6.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة رمضان - البرنامج المميز', description: 'إعلان متكامل يعرض تفاصيل الإقامة الطويلة بأسلوب بصري مريح وجذاب.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك1.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'ميدلينك لتجهيز العيادات', description: 'تصميم رقمي ثلاثي الأبعاد يعرض تنوع المستلزمات الطبية المتاحة بأسلوب عصري.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك2.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض السكراب الطبي', description: 'إبراز العروض الترويجية للزي الطبي بشكل مباشر وألوان مريحة للعين.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك3.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'حلول الراحة للمرضى', description: 'استخدام رسوم توضيحية إبداعية (3D Illustrations) لإيصال رسالة تسويزية حول راحة المريض.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك4.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'خدمة التوصيل السريع', description: 'دمج عناصر الخرائط والمواقع الجغرافية للإعلان عن خدمات التوصيل وتسهيل الوصول.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك5.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'دقة المواعيد', description: 'استخدام عنصر الساعة لإبراز السرعة والالتزام في تلبية طلبات العيادات والمراكز.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 1.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض المؤسسات الطبية', description: 'تصميم يدمج بين الهوية الشعبية واستهداف فئات محددة من العملاء بعروض مميزة.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 2.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'أسرع من صواريخ إيران', description: 'تصميم تفاعلي ساخر بأسلوب (الكوميكس) للإعلان عن سرعة خدمة الدليفري.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 3.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'الطعم بتاع زمان', description: 'التركيز على جودة المكونات ونظافة التقديم لتعزيز ثقة العميل في المنتج الشعبي.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 4.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'مزاج الجمهور', description: 'تكوين بصري يبرز تنوع الأصناف الجانبية التي تكمل الوجبة الأساسية.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 5.jpg', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'أصلي مصري', description: 'هوية بصرية تعكس الأصالة والتراث المصري باستخدام ألوان حيوية ونصوص جريئة.' },
]

/* ============================================================
   IMAGE DIMENSIONS
   Stored so the loading placeholder can reserve the exact
   intrinsic ratio and avoid layout shift.
   ============================================================ */
const DIMENSIONS = {
  'تصميم يافطة': [1610, 2048],
  'انفوجرافيك 1': [654, 654],
  'انفوجرافيك 2': [656, 466],
  'انفوجرافيك 3': [659, 448],
  'انفوجرافيك 4': [659, 466],
  'انفوجرافيك 5': [660, 444],
  'تشكن فريش': [1033, 1033],
  'ميدلينك': [1033, 1033],
  'فول نور': [1033, 1033],
  'عمرة المولد النبوي': [1033, 1292],
}

/** Resolves [w, h] for a portfolio asset path. Falls back to 4:3. */
function dimensionsFor(imagePath) {
  // Match on the BASENAME so files inside `سوشيال ميديا/` are found too.
  const file = decodeURI(imagePath).split('/').pop()
  for (const [key, dims] of Object.entries(DIMENSIONS)) {
    if (file.startsWith(key)) return dims
  }
  return [1200, 900]
}

/**
 * Derived view of `portfolioData`:
 *  - `id`           stable React key
 *  - `src`          percent-encoded once for the browser
 *  - `cat`          category key derived from `category`
 *  - `categoryId`   short uppercase label for the footer chip
 *  - `width/height` intrinsic size, for aspect-ratio box reservation
 *  - `aspectRatio`  CSS `aspect-ratio` value for the loading placeholder
 */
export const PROJECTS = portfolioData.map((p, i) => {
  const cat = CATEGORY_IDS[p.category] ?? 'other'
  const [width, height] = dimensionsFor(p.image)

  return {
    ...p,
    id: `${p.category}-${i}-${p.title}`,
    src: encodeURI(p.image),
    cat,
    categoryId: cat.toUpperCase(),
    width,
    height,
    aspectRatio: `${width} / ${height}`,
  }
})

/* ============================================================
   PORTFOLIO — المطبوعات والمنيوهات (Print & Menus)
   ------------------------------------------------------------
   `menusData` below is the source of truth and stores BARE base file
   names — no extension, no path. MENU_MEDIA supplies the measured
   extension/size for each one, so renaming a photo on disk is a
   one-line change here and the caption logic stays in one place.

   14 menus over 27 photos: 13 front+back pairs and 1 single-sided
   (الشرقاوي).
   ============================================================ */
const MENU_DIR = 'portfolio-assets/منيوهات'

/** base file name -> [extension, width, height], measured from the file. */
const MENU_MEDIA = {
  'تشكن فريش وش': ['.jpeg', 1109, 790],
  'ضهر تشكن فريش': ['.jpeg', 1107, 789],
  'ضهر كبابجي نعمة موسم رمضان': ['.jpeg', 1168, 834],
  'ضهر مطعم 7 اكتوبر': ['.jpeg', 1334, 936],
  'ضهر مطعم الحرمين': ['.jpeg', 1394, 930],
  'ضهر مينيو أميرة العرب': ['.jpeg', 1313, 925],
  'ضهر مينيو ابو حمزة': ['.jpeg', 1317, 933],
  'ضهر مينيو السلطان': ['.jpeg', 1396, 932],
  'ضهر مينيو فول نور': ['.jpeg', 1221, 866],
  'ضهر مينيو لعبة الحبار': ['.jpeg', 1194, 836],
  'ضهر مينيو مطعم السفير': ['.jpeg', 653, 928],
  'ضهر مينيو مطعم الشيف': ['.jpeg', 1008, 714],
  'ضهر مينيو مطعم ترياتوو': ['.jpeg', 1394, 926],
  'كبابجي نعمة': ['.jpeg', 1319, 929],
  'كبابجي نعمة ضهر': ['.jpeg', 1320, 924],
  'وش كبابجي نعمة موسم رمضان': ['.jpeg', 1172, 832],
  'وش مطعم 7 اكتوبر': ['.jpeg', 1335, 926],
  'وش مطعم الحرمين': ['.jpeg', 1329, 926],
  'وش مينيو أميرة العرب': ['.jpeg', 1318, 928],
  'وش مينيو ابو حمزة': ['.jpeg', 1317, 931],
  'وش مينيو السلطان': ['.jpeg', 1398, 930],
  'وش مينيو الشرقاوي': ['.jpeg', 1337, 939],
  'وش مينيو فول نور': ['.jpeg', 1218, 861],
  'وش مينيو لعبة الحبار': ['.jpeg', 1190, 840],
  'وش مينيو مطعم السفير': ['.jpeg', 648, 926],
  'وش مينيو مطعم الشيف': ['.jpeg', 1312, 929],
  'وش مينيو مطعم ترياتوو': ['.jpeg', 1394, 918],
}

/** Turns a bare base name into a render-ready side descriptor. */
function menuSide(base) {
  const [ext, width, height] = MENU_MEDIA[base]
  const file = `${base}${ext}`
  return {
    file,
    src: encodeURI(`${MENU_DIR}/${file}`),
    width,
    height,
  }
}

const menusData = [
  { front: 'تشكن فريش وش', back: 'ضهر تشكن فريش', restaurant: 'تشكن فريش' },
  { front: 'وش مطعم 7 اكتوبر', back: 'ضهر مطعم 7 اكتوبر', restaurant: '7 أكتوبر' },
  { front: 'وش كبابجي نعمة موسم رمضان', back: 'ضهر كبابجي نعمة موسم رمضان', restaurant: 'كبابجي نعمة (رمضان)' },
  { front: 'وش مطعم الحرمين', back: 'ضهر مطعم الحرمين', restaurant: 'الحرمين' },
  { front: 'وش مينيو ابو حمزة', back: 'ضهر مينيو ابو حمزة', restaurant: 'أبو حمزة' },
  { front: 'وش مينيو السلطان', back: 'ضهر مينيو السلطان', restaurant: 'السلطان' },
  { front: 'وش مينيو أميرة العرب', back: 'ضهر مينيو أميرة العرب', restaurant: 'أميرة العرب' },
  { front: 'وش مينيو فول نور', back: 'ضهر مينيو فول نور', restaurant: 'فول نور' },
  { front: 'وش مينيو لعبة الحبار', back: 'ضهر مينيو لعبة الحبار', restaurant: 'لعبة الحبار' },
  { front: 'وش مينيو مطعم السفير', back: 'ضهر مينيو مطعم السفير', restaurant: 'السفير' },
  { front: 'وش مينيو مطعم الشيف', back: 'ضهر مينيو مطعم الشيف', restaurant: 'الشيف' },
  { front: 'وش مينيو مطعم ترياتوو', back: 'ضهر مينيو مطعم ترياتوو', restaurant: 'ترياتوو' },
  { front: 'كبابجي نعمة', back: 'كبابجي نعمة ضهر', restaurant: 'كبابجي نعمة' },
  { front: 'وش مينيو الشرقاوي', restaurant: 'الشرقاوي' },
]

/**
 * Derived menu view. `frontCaption` / `backCaption` are computed from
 * `restaurant` so the components hold no hardcoded Arabic.
 */
export const MENUS = menusData.map((m, i) => {
  const front = menuSide(m.front)
  const back = m.back ? menuSide(m.back) : null
  const of = `وش منيو مطعم ${m.restaurant}`
  const bk = `ظهر منيو مطعم ${m.restaurant}`

  return {
    id: `menu-${String(i + 1).padStart(2, '0')}`,
    restaurant: m.restaurant,
    front,
    back,
    cat: 'menus',
    category: 'المطبوعات والمنيوهات',
    categoryId: 'MENUS',
    badgeColor: 'bg-amber-500',
    frontCaption: of,
    backCaption: back ? bk : null,
    isPaired: Boolean(back),
  }
})

/* ============================================================
   SERVICES
   ============================================================ */
export const SERVICES = [
  {
    id: 'signage',
    num: '01',
    title: 'تصميم اللافتات الإعلانية',
    desc: 'خبرة في تجهيز الملفات للطباعة بأدق المقاسات، من ideation حتى آخر ملف جاهز للمطبعة.',
    icon: 'sign',
    accent: 'gold',
  },
  {
    id: 'print',
    num: '02',
    title: 'المطبوعات الورقية',
    desc: 'تصميم وتنفيذ هويات بصرية، كروت، وفلايرز.',
    icon: 'print',
    accent: 'cyan',
  },
  {
    id: 'social',
    num: '03',
    title: 'تصميمات السوشيال ميديا',
    desc: 'محتوى بصري جذاب لمنصات التواصل.',
    icon: 'social',
    accent: 'orange',
  },
  {
    id: 'calligraphy',
    num: '04',
    title: 'الخط العربي والرسم الديجيتال',
    desc: 'لمسة فنية فريدة للشعارات.',
    icon: 'calligraphy',
    accent: 'lime',
  },
]

/* ============================================================
   TESTIMONIALS
   ============================================================ */
export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'أ. محمد عبد الرحمن',
    role: 'صاحب مطعم الأمل',
    text: 'الله يبارك فيك يا فنّان.. اللافتة طلعت أحلى من اللي في دماغي بالظبط، والألوان طالعة نضيفة وملفتة. جودة الطباعة فاقت توقعي، والتزمت بالموعد بالظبط.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'أ. سارة إبراهيم',
    role: 'مديرة تسويق — عيادات أسنان',
    text: 'تعاملت مع كثير مصممين، بس أحمد هو الوحيد اللي فهم خطنا العربي صح من أول مرة. الشعارات طلعت بشوية أصالة مميزة، والمطبوعات كلها وصلت مرتبة ومطابقة للمعاينة.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'م. خالد منصور',
    role: 'مؤسس شركة إعلانية',
    text: 'جودة الخط العربي في الشعار رفعت مستوى هويتنا بالكامل. أحمد بيتعامل مع كل تفصيلة كأنها مشروعه هو، وده اللي بيخلّي الشغل ده يطلع مختلف فعلاً.',
    rating: 5,
  },
]

/* ============================================================
   HERO STATS
   ============================================================ */
export const STATS = [
  { value: '+25', label: 'عاماً من الخبرة' },
  { value: '+250', label: 'مشروعاً منجزاً' },
  { value: '4', label: 'مجالات تخصص' },
]