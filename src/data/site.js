/* ============================================================
   ASSET HELPERS
   Paths mirror the real filenames inside public/portfolio-assets/
   Spaces / parentheses are percent-encoded once via encodeURI().
   ============================================================ */

export const PROFILE_IMG = encodeURI('portfolio-assets/الصورة الشخصية.webp')

export const asset = (p) => encodeURI(p)

/* ============================================================
   NAVIGATION
   ============================================================ */
export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية', enLabel: 'Home' },
  { id: 'about', label: 'من أنا', enLabel: 'About' },
  { id: 'services', label: 'خدماتي', enLabel: 'Services' },
  { id: 'portfolio', label: 'أعمالي', enLabel: 'Portfolio' },
  { id: 'testimonials', label: 'آراء العملاء', enLabel: 'Testimonials' },
  { id: 'contact', label: 'تواصل', enLabel: 'Contact' },
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

export const ROLES_EN = ['Graphic Designer', 'Digital Painter', 'Calligrapher']

/** Connectives that splice the About bio together around its inline links.
 *  Arabic needs a different joining word per clause, so these are data. */
export const BIO_JOINERS = {
  ar: ['، أجمع بين أصالة', '، وخيال', '، واحترافية'],
  en: [', ', ', ', ' and '],
}

/* ============================================================
   PORTFOLIO — Categories
   `id` is the internal key; `label` must match `category`
   on each portfolioData entry below.
   ============================================================ */
export const CATEGORIES = [
  { id: 'all', label: 'الكل', enLabel: 'All' },
  { id: 'signage', label: 'تصميم لافتات', enLabel: 'Signage' },
  { id: 'social', label: 'سوشيال ميديا', enLabel: 'Social Media' },
  { id: 'infographic', label: 'إنفوجرافيك', enLabel: 'Infographics' },
  { id: 'menus', label: 'المطبوعات والمنيوهات', enLabel: 'Print & Menus' },
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
  { image: 'portfolio-assets/تصميم يافطة (1).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مطاعم فول مازن ومطحن المصطفى', enTitle: 'Mazen Restaurant & Mustafa Mill', enDesc: 'Warm food-sector designs that blend authentic Arabic calligraphy with product imagery that makes you hungry.', description: 'تصميمات دافئة لمجال الأغذية، تجمع بين أصالة الخط العربي وعرض المنتجات بصورة تفتح الشهية.' },
  { image: 'portfolio-assets/تصميم يافطة (2).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'معرض كار ماركت وحلويات إيطاليانو', enTitle: 'Car Market Showroom & Italiano Sweets', enDesc: 'A professional mix of bold car-showroom design and the soft, inviting pull of sweet-shop branding.', description: 'تنوع احترافي بين القوة في تصاميم معارض السيارات والنعومة والجاذبية في تصاميم محلات الحلويات.' },
  { image: 'portfolio-assets/تصميم يافطة (3).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'عطارة زمان وشركة العجوز', enTitle: 'Zaman Attar & Al-Angawaz Company', enDesc: 'Visual identities for commercial businesses built around comfortable layouts that showcase products clearly to passers-by.', description: 'هويات بصرية للأنشطة التجارية تعتمد على التكوين المريح للعين وإبراز المنتجات بشكل واضح للمارة.' },
  { image: 'portfolio-assets/تصميم يافطة (4).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'كافيه الجزيرة وسنتر الهداية', enTitle: 'Al-Jazira Cafe & Al-Hidaya Center', enDesc: 'Attractive colour gradients and bold type used to create a strong visual presence in the street.', description: 'استخدام تدرجات لونية جذابة وخطوط جريئة لخلق حضور بصري قوي في الشارع.' },
  { image: 'portfolio-assets/تصميم يافطة (5).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'عيادة د. أحمد شاكر وحميد فون', enTitle: 'Dr. Ahmed Shaker Clinic & Hamid Phone', enDesc: 'A blend of professionalism and clarity in medical design, paired with the energy of modern tech retail.', description: 'دمج بين الاحترافية والوضوح في التصاميم الطبية، والحيوية والعصرية في محلات التكنولوجيا.' },
  { image: 'portfolio-assets/تصميم يافطة (6).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'أقمشة المهدي وسنتر الزهراء', enTitle: 'Al-Mahdi Fabrics & Al-Zahra Center', enDesc: 'Designs that reflect luxury and elegance to suit fabric and furnishing stores.', description: 'تصاميم تعكس الفخامة والأناقة لتناسب محلات الأقمشة والمفروشات.' },
  { image: 'portfolio-assets/تصميم يافطة (7).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'الحسيني للألوميتال ومكتبة الفجالة', enTitle: 'Al-Husseini Aluminum & Al-Fajala Bookshop', enDesc: 'Bold visual identities that rely on colour contrast to grab attention and communicate the nature of the work at a glance.', description: 'هويات بصرية قوية تعتمد على تباين الألوان لجذب الانتباه وتوضيح طبيعة العمل بسلاسة.' },
  { image: 'portfolio-assets/تصميم يافطة (8).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'آيس كريم منهاتن وكوافير مكة', enTitle: 'Manhatten Ice Cream & Mecca Coiffure', enDesc: 'Lively, refreshing designs in bright colours and modern youthful type.', description: 'تصميمات حيوية ومنعشة بألوان زاهية وخطوط شبابية حديثة.' },
  { image: 'portfolio-assets/تصميم يافطة (9).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مصطفى موتورز وبيتزا كازاميزا', enTitle: 'Mostafa Motors & Pizza Kazamiza', enDesc: 'A perfect balance of automotive luxury with the warmth and inviting colours of the food sector.', description: 'توازن مثالي بين الفخامة في قطاع السيارات والجاذبية والألوان الساخنة في قطاع الأغذية.' },
  { image: 'portfolio-assets/تصميم يافطة (10).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'صيدلية د. عزة كامل وأبو حوا', enTitle: 'Dr. Azza Kamel Pharmacy & Abu Hawa', enDesc: 'Designs with total clarity and long-distance readability to meet the demands of outdoor signage.', description: 'تصاميم تتميز بالوضوح التام وقابلية القراءة من مسافات بعيدة لتلبية متطلبات اللوحات الخارجية.' },
  { image: 'portfolio-assets/تصميم يافطة (11).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'مخبز أولاد أبو بكر وتنجيد الأقصى', enTitle: 'Abu Bakr Sons Bakery & Al-Aqsa Upholstery', enDesc: 'Visual identities for the Egyptian street, pairing authentic Arabic calligraphy with services presented directly and invitingly.', description: 'هويات بصرية للشارع المصري تجمع بين أصالة الخط العربي وعرض الخدمات بأسلوب مباشر وجذاب.' },
  { image: 'portfolio-assets/تصميم يافطة (12).webp', category: 'تصميم لافتات', badgeColor: 'bg-yellow-500', title: 'أسماك سعد وكوافير مافيا ستايل', enTitle: 'Saad Fish & Mafia Style Coiffure', enDesc: 'Dynamic designs that blend lively photography with prominent type to grab passers-by attention.', description: 'تصميمات ديناميكية تعتمد على دمج الصور الحية مع الخطوط البارزة لجذب انتباه المارة بقوة.' },
  { image: 'portfolio-assets/انفوجرافيك 1.webp', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'مهارات إدارة الوقت', enTitle: 'Time Management Skills', enDesc: 'A circular, flowing design that turns the steps of time management into an easy-to-follow visual journey.', description: 'تصميم دائري متدفق يحول خطوات إدارة الوقت إلى رحلة بصرية سهلة الفهم والتتبع.' },
  { image: 'portfolio-assets/انفوجرافيك 2.webp', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'إدارة الحسابات المالية', enTitle: 'Financial Accounting', enDesc: 'Precise geometric distribution of accounting information to simplify complex steps for startups.', description: 'توزيع هندسي دقيق للمعلومات المحاسبية لتبسيط الخطوات المعقدة للشركات الناشئة.' },
  { image: 'portfolio-assets/انفوجرافيك 3.webp', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'تعرف على عقلك الباطن', enTitle: 'Get to Know Your Subconscious', enDesc: 'A professional blend of illustration and text that presents psychological insight in an inventive style.', description: 'دمج احترافي بين الرسم التوضيحي (Illustration) والمحتوى النصي لتقديم معلومة نفسية بأسلوب مبتكر.' },
  { image: 'portfolio-assets/انفوجرافيك 4.webp', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'استراتيجيات التسويق الرقمي', enTitle: 'Digital Marketing Strategies', enDesc: 'A comfortable vertical layout using flat icons to summarise effective marketing approaches.', description: 'تنظيم عمودي مريح للعين باستخدام أيقونات مسطحة (Flat Design) لتلخيص أساليب التسويق الفعالة.' },
  { image: 'portfolio-assets/انفوجرافيك 5.webp', category: 'إنفوجرافيك', badgeColor: 'bg-orange-500', title: 'أشخاص تحتاجهم في فريقك', enTitle: 'People Your Team Needs', enDesc: 'An engaging tree diagram that highlights the different roles on a team in a way that is easy to remember.', description: 'تصميم شجري جذاب يبرز الأدوار المختلفة في فرق العمل بأسلوب بصري يسهل حفظه وتذكره.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش1.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض ميكس تشكن فريش', enTitle: 'Chicken Fresh Mixed Deals', enDesc: 'Dynamic ad design using lighting and fire tones to stimulate appetite and make the offer stand out.', description: 'تصميم إعلاني ديناميكي يعتمد على الإضاءة والألوان النارية لتحفيز الجوع وإبراز العرض بقوة.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش2.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'وجبة معمولة بحب', enTitle: 'A Meal Made with Love', enDesc: 'A simple, direct social post focused on product quality in a striking artistic style.', description: 'بوست سوشيال ميديا بسيط ومباشر يركز على جودة المنتج بطريقة فنية ملفتة للانتباه.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش3.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عرض اللمة الحلوة', enTitle: 'The Sweet Touch Deal', enDesc: 'A detail-rich composition suited to large family meals, with price and ingredients clearly highlighted.', description: 'تكوين غني بالتفاصيل يناسب الوجبات العائلية الكبيرة مع إبراز السعر والمكونات بشكل واضح.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش4.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'تفاعل الجمهور', enTitle: 'Audience Engagement', enDesc: 'A purpose-built design to boost engagement with followers via a direct question and an appetising product shot.', description: 'تصميم مخصص لزيادة التفاعل مع المتابعين بسؤال مباشر وصورة شهية للمنتج.' },
  { image: 'portfolio-assets/سوشيال ميديا/تشكن فريش5.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'وجبة الاستربس العائلي', enTitle: 'The Family Strips Meal', enDesc: 'Bundle meals and extra ingredient details presented in an organised, appetising way.', description: 'إبراز الوجبات المجمعة وتفاصيل المكونات الإضافية بطريقة منظمة ومغرية.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي1.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'البرنامج المميز للعمرة', enTitle: 'The Premium Umrah Package', enDesc: 'A refined, spiritual design that blends photos of the Two Mosques in an artistic, serene style.', description: 'تصميم روحاني راقٍ يعتمد على دمج صور الحرمين بأسلوب فني يبعث على السكينة والثقة.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي2.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة المولد النبوي', enTitle: 'Prophet Birthday Umrah', enDesc: 'Clean, organised presentation of the trip and hotels to make the decision easy for pilgrims.', description: 'إبراز تفاصيل الرحلة والفنادق بشكل نظيف ومنظم لتسهيل اتخاذ القرار على المعتمرين.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي3.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'البرنامج الاقتصادي للعمرة', enTitle: 'The Economy Umrah Package', enDesc: 'A comfortable layout for offers, prices and included services to keep the travel offer clear.', description: 'توزيع مريح للمعلومات والأسعار والخدمات المشمولة لضمان وضوح العرض السياحي.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي4.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة المولد - فندق الجنادرية', enTitle: 'Birthday Umrah - Al-Janaderiya Hotel', enDesc: 'Islamic ornament and green tones used to reinforce the religious character of the design.', description: 'استخدام الزخارف الإسلامية والألوان الخضراء لتعزيز الطابع الديني للتصميم.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي5.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة رمضان - فنادق مكة', enTitle: 'Ramadan Umrah - Mecca Hotels', enDesc: 'A design blending the spirituality of Ramadan with nearby accommodation options in a distinctive way.', description: 'تصميم يدمج بين روحانيات رمضان وإبراز أماكن الإقامة القريبة من الحرمين بأسلوب مميز.' },
  { image: 'portfolio-assets/سوشيال ميديا/عمرة المولد النبوي6.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عمرة رمضان - البرنامج المميز', enTitle: 'Ramadan Umrah - Premium Package', enDesc: 'A complete ad presenting long-stay details in a comfortable, appealing visual style.', description: 'إعلان متكامل يعرض تفاصيل الإقامة الطويلة بأسلوب بصري مريح وجذاب.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك1.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'ميدلينك لتجهيز العيادات', enTitle: 'MediLink Clinic Equipment', enDesc: 'A 3D digital design showcasing a wide range of medical supplies in a modern style.', description: 'تصميم رقمي ثلاثي الأبعاد يعرض تنوع المستلزمات الطبية المتاحة بأسلوب عصري.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك2.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض السكراب الطبي', enTitle: 'Medical Scrubs Offers', enDesc: 'Direct promotion of medical-wear offers with colours that are easy on the eyes.', description: 'إبراز العروض الترويجية للزي الطبي بشكل مباشر وألوان مريحة للعين.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك3.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'حلول الراحة للمرضى', enTitle: 'Comfort Solutions for Patients', enDesc: 'Creative 3D illustrations used to deliver a marketing message about patient comfort.', description: 'استخدام رسوم توضيحية إبداعية (3D Illustrations) لإيصال رسالة تسويزية حول راحة المريض.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك4.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'خدمة التوصيل السريع', enTitle: 'Fast Delivery Service', enDesc: 'Map and location elements combined to advertise delivery services and make access easy.', description: 'دمج عناصر الخرائط والمواقع الجغرافية للإعلان عن خدمات التوصيل وتسهيل الوصول.' },
  { image: 'portfolio-assets/سوشيال ميديا/ميدلينك5.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'دقة المواعيد', enTitle: 'Appointment Precision', enDesc: 'A clock element used to highlight the speed and reliability of clinic and centre appointments.', description: 'استخدام عنصر الساعة لإبراز السرعة والالتزام في تلبية طلبات العيادات والمراكز.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 1.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'عروض المؤسسات الطبية', enTitle: 'Medical Institution Offers', enDesc: 'A design mixing popular identity with offers aimed at specific customer segments.', description: 'تصميم يدمج بين الهوية الشعبية واستهداف فئات محددة من العملاء بعروض مميزة.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 2.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'أسرع من صواريخ إيران', enTitle: 'Faster Than Iranian Missiles', enDesc: 'A sarcastic interactive comic-style design advertising the speed of the delivery service.', description: 'تصميم تفاعلي ساخر بأسلوب (الكوميكس) للإعلان عن سرعة خدمة الدليفري.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 3.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'الطعم بتاع زمان', enTitle: 'The Taste of the Old Days', enDesc: 'A focus on ingredient quality and clean presentation to build customer trust in a popular product.', description: 'التركيز على جودة المكونات ونظافة التقديم لتعزيز ثقة العميل في المنتج الشعبي.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 4.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'مزاج الجمهور', enTitle: 'Audience Mood', enDesc: 'A visual composition highlighting the range of side dishes that complete the main meal.', description: 'تكوين بصري يبرز تنوع الأصناف الجانبية التي تكمل الوجبة الأساسية.' },
  { image: 'portfolio-assets/سوشيال ميديا/فول نور 5.webp', category: 'سوشيال ميديا', badgeColor: 'bg-cyan-500', title: 'أصلي مصري', enTitle: 'Authentically Egyptian', enDesc: 'A visual identity reflecting Egyptian heritage and tradition, using lively colours and bold type.', description: 'هوية بصرية تعكس الأصالة والتراث المصري باستخدام ألوان حيوية ونصوص جريئة.' },
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
  'تشكن فريش وش': ['.webp', 1109, 790],
  'ضهر تشكن فريش': ['.webp', 1107, 789],
  'ضهر كبابجي نعمة موسم رمضان': ['.webp', 1168, 834],
  'ضهر مطعم 7 اكتوبر': ['.webp', 1334, 936],
  'ضهر مطعم الحرمين': ['.webp', 1394, 930],
  'ضهر مينيو أميرة العرب': ['.webp', 1313, 925],
  'ضهر مينيو ابو حمزة': ['.webp', 1317, 933],
  'ضهر مينيو السلطان': ['.webp', 1396, 932],
  'ضهر مينيو فول نور': ['.webp', 1221, 866],
  'ضهر مينيو لعبة الحبار': ['.webp', 1194, 836],
  'ضهر مينيو مطعم السفير': ['.webp', 653, 928],
  'ضهر مينيو مطعم الشيف': ['.webp', 1008, 714],
  'ضهر مينيو مطعم ترياتوو': ['.webp', 1394, 926],
  'كبابجي نعمة': ['.webp', 1319, 929],
  'كبابجي نعمة ضهر': ['.webp', 1320, 924],
  'وش كبابجي نعمة موسم رمضان': ['.webp', 1172, 832],
  'وش مطعم 7 اكتوبر': ['.webp', 1335, 926],
  'وش مطعم الحرمين': ['.webp', 1329, 926],
  'وش مينيو أميرة العرب': ['.webp', 1318, 928],
  'وش مينيو ابو حمزة': ['.webp', 1317, 931],
  'وش مينيو السلطان': ['.webp', 1398, 930],
  'وش مينيو الشرقاوي': ['.webp', 1337, 939],
  'وش مينيو فول نور': ['.webp', 1218, 861],
  'وش مينيو لعبة الحبار': ['.webp', 1190, 840],
  'وش مينيو مطعم السفير': ['.webp', 648, 926],
  'وش مينيو مطعم الشيف': ['.webp', 1312, 929],
  'وش مينيو مطعم ترياتوو': ['.webp', 1394, 918],
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
  { front: 'تشكن فريش وش', back: 'ضهر تشكن فريش', restaurant: 'تشكن فريش', enRestaurant: 'Chicken Fresh' },
  { front: 'وش مطعم 7 اكتوبر', back: 'ضهر مطعم 7 اكتوبر', restaurant: '7 أكتوبر', enRestaurant: '7 October' },
  { front: 'وش كبابجي نعمة موسم رمضان', back: 'ضهر كبابجي نعمة موسم رمضان', restaurant: 'كبابجي نعمة (رمضان)', enRestaurant: 'Kababgy Naima (Ramadan)' },
  { front: 'وش مطعم الحرمين', back: 'ضهر مطعم الحرمين', restaurant: 'الحرمين', enRestaurant: 'Al-Haramin' },
  { front: 'وش مينيو ابو حمزة', back: 'ضهر مينيو ابو حمزة', restaurant: 'أبو حمزة', enRestaurant: 'Abu Hamza' },
  { front: 'وش مينيو السلطان', back: 'ضهر مينيو السلطان', restaurant: 'السلطان', enRestaurant: 'Al-Sultan' },
  { front: 'وش مينيو أميرة العرب', back: 'ضهر مينيو أميرة العرب', restaurant: 'أميرة العرب', enRestaurant: 'Amir Al-Arab' },
  { front: 'وش مينيو فول نور', back: 'ضهر مينيو فول نور', restaurant: 'فول نور', enRestaurant: 'Foul Nour' },
  { front: 'وش مينيو لعبة الحبار', back: 'ضهر مينيو لعبة الحبار', restaurant: 'لعبة الحبار', enRestaurant: 'Lagaa El-Habar' },
  { front: 'وش مينيو مطعم السفير', back: 'ضهر مينيو مطعم السفير', restaurant: 'السفير', enRestaurant: 'Al-Safir' },
  { front: 'وش مينيو مطعم الشيف', back: 'ضهر مينيو مطعم الشيف', restaurant: 'الشيف', enRestaurant: 'Al-Sheikh' },
  { front: 'وش مينيو مطعم ترياتوو', back: 'ضهر مينيو مطعم ترياتوو', restaurant: 'ترياتوو', enRestaurant: 'Trettu' },
  { front: 'كبابجي نعمة', back: 'كبابجي نعمة ضهر', restaurant: 'كبابجي نعمة', enRestaurant: 'Kababgy Naima' },
  { front: 'وش مينيو الشرقاوي', restaurant: 'الشرقاوي', enRestaurant: 'Sharqawy' },
]

/**
 * Derived menu view. `frontCaption` / `backCaption` are computed from
 * `restaurant` so the components hold no hardcoded copy.
 * `frontCaptionEn` / `backCaptionEn` do the same for English.
 */
export const MENUS = menusData.map((m, i) => {
  const front = menuSide(m.front)
  const back = m.back ? menuSide(m.back) : null
  const of = `وش مينيو مطعم ${m.restaurant}`
  const ofEn = `Front menu - ${m.enRestaurant}`
  const bk = `ضهر مينيو مطعم ${m.restaurant}`
  const bkEn = `Back menu - ${m.enRestaurant}`

  return {
    id: `menu-${String(i + 1).padStart(2, '0')}`,
    restaurant: m.restaurant,
    enRestaurant: m.enRestaurant,
    front,
    back,
    cat: 'menus',
    category: 'المطبوعات والمنيوهات',
    categoryId: 'MENUS',
    badgeColor: 'bg-amber-500',
    frontCaption: of,
    frontCaptionEn: ofEn,
    backCaption: back ? bk : null,
    backCaptionEn: back ? bkEn : null,
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
    enTitle: 'Advertising Signage',
    desc: 'خبرة في تجهيز الملفات للطباعة بأدق المقاسات، من ideation حتى آخر ملف جاهز للمطبعة.',
    enDesc: 'Experience preparing files for print at the most precise dimensions, from ideation through to the final print-ready file.',
    icon: 'sign',
    accent: 'gold',
  },
  {
    id: 'print',
    num: '02',
    title: 'المطبوعات الورقية',
    enTitle: 'Print & Paper',
    desc: 'تصميم وتنفيذ هويات بصرية، كروت، وفلايرز.',
    enDesc: 'Design and delivery of visual identities, business cards and flyers.',
    icon: 'print',
    accent: 'cyan',
  },
  {
    id: 'social',
    num: '03',
    title: 'تصميمات السوشيال ميديا',
    enTitle: 'Social Media Design',
    desc: 'محتوى بصري جذاب لمنصات التواصل.',
    enDesc: 'Engaging visual content for social platforms.',
    icon: 'social',
    accent: 'orange',
  },
  {
    id: 'calligraphy',
    num: '04',
    title: 'الخط العربي والرسم الديجيتال',
    enTitle: 'Arabic Calligraphy & Digital Art',
    desc: 'لمسة فنية فريدة للشعارات.',
    enDesc: 'A distinctive artistic touch for logos.',
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
    enName: 'Mr. Mohamed Abdel Rahman',
    enRole: 'Owner, Al-Amal Restaurant',
    text: 'الله يبارك فيك يا فنّان.. اللافتة طلعت أحلى من اللي في دماغي بالظبط، والألوان طالعة نضيفة وملفتة. جودة الطباعة فاقت توقعي، والتزمت بالموعد بالظبط.',
    enText: 'May God bless you, artist. The sign turned out even better than the one in my head, and the colours came out clean and striking. The print quality exceeded my expectations, and you stuck to the deadline exactly.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'أ. سارة إبراهيم',
    role: 'مديرة تسويق — عيادات أسنان',
    enName: 'Ms. Sara Ibrahim',
    enRole: 'Marketing Manager - Dental Clinics',
    text: 'تعاملت مع كثير مصممين، بس أحمد هو الوحيد اللي فهم خطنا العربي صح من أول مرة. الشعارات طلعت بشوية أصالة مميزة، والمطبوعات كلها وصلت مرتبة ومطابقة للمعاينة.',
    enText: 'I have worked with many designers, but Ahmed is the only one who understood our Arabic script correctly from the first attempt. The logos came out with a distinctive touch of authenticity, and every printed piece arrived neat and true to the proof.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'م. خالد منصور',
    role: 'مؤسس شركة إعلانية',
    enName: 'Eng. Khaled Mansour',
    enRole: 'Founder, Advertising Company',
    text: 'جودة الخط العربي في الشعار رفعت مستوى هويتنا بالكامل. أحمد بيتعامل مع كل تفصيلة كأنها مشروعه هو، وده اللي بيخلّي الشغل ده يطلع مختلف فعلاً.',
    enText: 'The Arabic calligraphy in the logo raised the quality of our identity. Ahmed treats every detail as if it were his own project, and that is what really makes this work come out different.',
    rating: 5,
  },
]

/* ============================================================
   HERO STATS
   ============================================================ */
export const STATS = [
  { value: '+25', label: 'عاماً من الخبرة', enLabel: 'Years of Experience' },
  { value: '+250', label: 'مشروعاً منجزاً', enLabel: 'Projects Delivered' },
  { value: '4', label: 'مجالات تخصص', enLabel: 'Specialties' },
]