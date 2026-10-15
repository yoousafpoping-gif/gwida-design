/* ============================================================
   ASSET HELPERS
   Paths mirror the real filenames inside public/portfolio-assets/
   Spaces / parentheses are percent-encoded once via encodeURI().
   ============================================================ */

export const PROFILE_IMG = '/portfolio-assets/profile.jpg'

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
  { id: 'calligraphy', label: 'الخط', enLabel: 'Calligraphy' },
  { id: 'digital-art', label: 'الرسم', enLabel: 'Digital Art' },
  { id: 'social-media', label: 'السوشيال', enLabel: 'Social Media' },
  { id: 'infographics', label: 'الانفو', enLabel: 'Infographics' },
  { id: 'prints-menus', label: 'المطبوعات', enLabel: 'Prints & Menus' },
  { id: 'signage', label: 'اليفت', enLabel: 'Signage' },
]

/** Maps a category label -> category id. */
const CATEGORY_IDS = {
  'الخط': 'calligraphy',
  'الرسم': 'digital-art',
  'السوشيال': 'social-media',
  'الانفو': 'infographics',
  'المطبوعات': 'prints-menus',
  'اليفت': 'signage',
}

/* ============================================================
   SOCIAL MEDIA — brand groups
   ------------------------------------------------------------
   The home page shows ONE cover card per brand; opening it slides
   through THAT brand's designs only. Brand order here is the display
   order. Each design is derived from its position (social/<slug>/<slug>-N.webp).
   ============================================================ */
export const SOCIAL_BRANDS = [
  { id: 'umrah', label: 'العمرة', enLabel: 'Umrah', slug: 'umrah' },
  { id: 'medilink', label: 'ميد لينك', enLabel: 'MediLink', slug: 'medilink' },
  { id: 'chicken-fresh', label: 'تشكن فريش', enLabel: 'Chicken Fresh', slug: 'chicken-fresh' },
  { id: 'fol-nour', label: 'فول نور', enLabel: 'Fol Nour', slug: 'fol-nour' },
  { id: 'bravo', label: 'برافو', enLabel: 'Bravo', slug: 'bravo' },
  { id: 'sultana', label: 'سلطانة', enLabel: 'Sultana', slug: 'sultana' },
  { id: 'al-bir', label: 'جمعية البر', enLabel: 'Al-Bir Charity', slug: 'al-bir' },
  { id: 'care-center', label: 'مركز الرعاية', enLabel: 'Care Center', slug: 'care-center' },
  { id: 'namaa', label: 'نماء للتنمية العمرانية', enLabel: 'Namaa Urban Development', slug: 'namaa' },
]

/** Per-brand design copy, in file order: [title, enTitle, description, enDesc]. */
const SOCIAL_COPY = {
  umrah: [
    ['البرنامج المميز للعمرة', 'The Premium Umrah Package', 'تصميم روحاني راقٍ يعتمد على دمج صور الحرمين بأسلوب فني يبعث على السكينة والثقة.', 'A refined, spiritual design that blends photos of the Two Mosques in an artistic, serene style.'],
    ['عمرة المولد النبوي', 'Prophet Birthday Umrah', 'إبراز تفاصيل الرحلة والفنادق بشكل نظيف ومنظم لتسهيل اتخاذ القرار على المعتمرين.', 'Clean, organised presentation of the trip and hotels to make the decision easy for pilgrims.'],
    ['البرنامج الاقتصادي للعمرة', 'The Economy Umrah Package', 'توزيع مريح للمعلومات والأسعار والخدمات المشمولة لضمان وضوح العرض السياحي.', 'A comfortable layout for offers, prices and included services to keep the travel offer clear.'],
    ['عمرة المولد - فندق الجنادرية', 'Birthday Umrah - Al-Janaderiya Hotel', 'استخدام الزخارف الإسلامية والألوان الخضراء لتعزيز الطابع الديني للتصميم.', 'Islamic ornament and green tones used to reinforce the religious character of the design.'],
    ['عمرة رمضان - فنادق مكة', 'Ramadan Umrah - Mecca Hotels', 'تصميم يدمج بين روحانيات رمضان وإبراز أماكن الإقامة القريبة من الحرمين بأسلوب مميز.', 'A design blending the spirituality of Ramadan with nearby accommodation options in a distinctive way.'],
    ['عمرة رمضان - البرنامج المميز', 'Ramadan Umrah - Premium Package', 'إعلان متكامل يعرض تفاصيل الإقامة الطويلة بأسلوب بصري مريح وجذاب.', 'A complete ad presenting long-stay details in a comfortable, appealing visual style.'],
    ['عرض عمرة جديد', 'New Umrah Offer', 'تصميم إعلاني لباقة عمرة جديدة بأسلوب راقٍ ومقنع.', 'An advertising design for a new Umrah package, elegant and persuasive.'],
    ['تفاصيل برنامج العمرة', 'Umrah Package Details', 'عرض واضح لتفاصيل برنامج عمرة يشمل الإقامة والخدمات.', 'A clear breakdown of an Umrah package including stay and services.'],
  ],
  medilink: [
    ['ميدلينك لتجهيز العيادات', 'MediLink Clinic Equipment', 'تصميم رقمي ثلاثي الأبعاد يعرض تنوع المستلزمات الطبية المتاحة بأسلوب عصري.', 'A 3D digital design showcasing a wide range of medical supplies in a modern style.'],
    ['عروض السكراب الطبي', 'Medical Scrubs Offers', 'إبراز العروض الترويجية للزي الطبي بشكل مباشر وألوان مريحة للعين.', 'Direct promotion of medical-wear offers with colours that are easy on the eyes.'],
    ['حلول الراحة للمرضى', 'Comfort Solutions for Patients', 'استخدام رسوم توضيحية إبداعية لإيصال رسالة تسويقية حول راحة المريض.', 'Creative 3D illustrations used to deliver a marketing message about patient comfort.'],
    ['خدمة التوصيل السريع', 'Fast Delivery Service', 'دمج عناصر الخرائط والمواقع الجغرافية للإعلان عن خدمات التوصيل وتسهيل الوصول.', 'Map and location elements combined to advertise delivery services and make access easy.'],
    ['دقة المواعيد', 'Appointment Precision', 'استخدام عنصر الساعة لإبراز السرعة والالتزام في تلبية طلبات العيادات والمراكز.', 'A clock element used to highlight the speed and reliability of clinic and centre appointments.'],
    ['أجهزة طبية حديثة', 'Modern Medical Devices', 'عرض مجموعة من الأجهزة الطبية الحديثة بأسلوب احترافي وواضح.', 'Showcasing a range of modern medical devices in a clear, professional way.'],
    ['عروض المستلزمات الطبية', 'Medical Supplies Offers', 'تصميم ترويجي لخصومات على المستلزمات الطبية.', 'A promotional design for discounts on medical supplies.'],
    ['تجهيزات طب الأسنان', 'Dental Equipment', 'إبراز حلول تجهيز عيادات الأسنان بشكل واضح وجاذب.', 'Highlighting dental clinic equipment clearly and attractively.'],
    ['خصومات للعيادات', 'Clinic Discounts', 'إعلان عن خصومات خاصة لتجهيز العيادات والمراكز الطبية.', 'An ad for special discounts on clinic and medical-centre equipment.'],
    ['منتجات طبية معتمدة', 'Certified Medical Products', 'التركيز على جودة واعتماد المنتجات الطبية لبناء الثقة.', 'Focusing on the quality and certification of medical products.'],
    ['خدمة عملاء سريعة', 'Fast Customer Service', 'تصميم يبرز سرعة الاستجابة ودعم العملاء.', 'A design highlighting fast response and customer support.'],
    ['حلول متكاملة', 'Integrated Solutions', 'عرض شامل لحلول ميدلينك للمراكز الطبية.', "A comprehensive look at MediLink's solutions for medical centres."],
  ],
  'chicken-fresh': [
    ['عروض ميكس تشكن فريش', 'Chicken Fresh Mixed Deals', 'تصميم إعلاني ديناميكي يعتمد على الإضاءة والألوان النارية لتحفيز الجوع وإبراز العرض بقوة.', 'Dynamic ad design using lighting and fire tones to stimulate appetite and make the offer stand out.'],
    ['وجبة معمولة بحب', 'A Meal Made with Love', 'بوست سوشيال ميديا بسيط ومباشر يركز على جودة المنتج بطريقة فنية ملفتة للانتباه.', 'A simple, direct social post focused on product quality in a striking artistic style.'],
    ['عرض اللمة الحلوة', 'The Sweet Touch Deal', 'تكوين غني بالتفاصيل يناسب الوجبات العائلية الكبيرة مع إبراز السعر والمكونات بشكل واضح.', 'A detail-rich composition suited to large family meals, with price and ingredients clearly highlighted.'],
    ['تفاعل الجمهور', 'Audience Engagement', 'تصميم مخصص لزيادة التفاعل مع المتابعين بسؤال مباشر وصورة شهية للمنتج.', 'A purpose-built design to boost engagement with followers via a direct question and an appetising product shot.'],
    ['وجبة الاستربس العائلي', 'The Family Strips Meal', 'إبراز الوجبات المجمعة وتفاصيل المكونات الإضافية بطريقة منظمة ومغرية.', 'Bundle meals and extra ingredient details presented in an organised, appetising way.'],
  ],
  'fol-nour': [
    ['عروض المؤسسات الطبية', 'Medical Institution Offers', 'تصميم يدمج بين الهوية الشعبية واستهداف فئات محددة من العملاء بعروض مميزة.', 'A design mixing popular identity with offers aimed at specific customer segments.'],
    ['أسرع من صواريخ إيران', 'Faster Than Iranian Missiles', 'تصميم تفاعلي ساخر بأسلوب الكوميكس للإعلان عن سرعة خدمة الدليفري.', 'A sarcastic interactive comic-style design advertising the speed of the delivery service.'],
    ['الطعم بتاع زمان', 'The Taste of the Old Days', 'التركيز على جودة المكونات ونظافة التقديم لتعزيز ثقة العميل في المنتج الشعبي.', 'A focus on ingredient quality and clean presentation to build customer trust in a popular product.'],
    ['مزاج الجمهور', 'Audience Mood', 'تكوين بصري يبرز تنوع الأصناف الجانبية التي تكمل الوجبة الأساسية.', 'A visual composition highlighting the range of side dishes that complete the main meal.'],
    ['أصلي مصري', 'Authentically Egyptian', 'هوية بصرية تعكس الأصالة والتراث المصري باستخدام ألوان حيوية ونصوص جريئة.', 'A visual identity reflecting Egyptian heritage and tradition, using lively colours and bold type.'],
  ],
  bravo: [
    ['برافو - إعلان ترويجي', 'Bravo - Promo Ad', 'تصميم إعلاني جذاب يعكس هوية برافو بقوة ووضوح.', 'An attractive promo design reflecting the Bravo identity with strength and clarity.'],
    ['برافو - عرض جديد', 'Bravo - New Offer', 'إبراز عرض جديد بأسلوب بصري واضح ومباشر.', 'Highlighting a new offer in a clear, direct visual style.'],
  ],
  sultana: [
    ['سلطانة - تصميم إعلاني', 'Sultana - Advertising Design', 'تصميم إعلاني أنيق يعكس هوية سلطانة.', 'An elegant advertising design reflecting the Sultana identity.'],
    ['سلطانة - عرض مميز', 'Sultana - Special Offer', 'إبراز عرض مميز بأسلوب جاذب وواضح.', 'Presenting a special offer in an appealing, clear style.'],
    ['سلطانة - منشور سوشيال', 'Sultana - Social Post', 'منشور سوشيال ميديا متوازن يعزز التفاعل مع المتابعين.', 'A balanced social post that boosts engagement with followers.'],
  ],
  'al-bir': [
    ['حملة التبرع', 'Donation Campaign', 'تصميم دعائي لحملة تبرع بأسلوب مؤثر وواضح.', 'An appeal design for a donation campaign, clear and moving.'],
    ['كفالة الأيتام', 'Orphan Sponsorship', 'تصميم يحفّز على كفالة الأيتام برسالة إنسانية.', 'A design encouraging orphan sponsorship with a humane message.'],
    ['مشروع إفطار صائم', 'Iftar Project', 'إعلان عن مشروع إفطار صائم بروح رمضانية.', 'An ad for an iftar project with a Ramadan spirit.'],
    ['كسوة الشتاء', 'Winter Clothing Drive', 'حملة كسوة الشتاء بأسلوب بصري دافئ.', 'A winter clothing drive in a warm visual style.'],
    ['توزيع السلال الغذائية', 'Food Basket Distribution', 'تصميم يبرز توزيع السلال الغذائية على المستحقين.', 'A design highlighting food-basket distribution to those in need.'],
    ['رعاية الأسر', 'Supporting Families', 'التركيز على رعاية الأسر الأولى بالرعاية.', 'Focusing on supporting the families most in need.'],
    ['بناء المساجد', 'Mosque Building', 'حملة للمساهمة في بناء وترميم المساجد.', 'A campaign to help build and restore mosques.'],
    ['مشروع الأضاحي', 'Qurbani Project', 'إعلان عن مشروع الأضاحي وتفاصيله.', 'An announcement for the Qurbani project and its details.'],
    ['دعوة للتبرع', 'Donation Appeal', 'تصميم مباشر يحث على التبرع.', 'A direct design urging donation.'],
    ['شركاء الخير', 'Partners in Good', 'تكريم ودعوة لشركاء الخير.', 'Recognising and inviting partners in good.'],
    ['حملة تبرعات', 'Fundraising Campaign', 'تصميم لحملة جمع تبرعات بهدف واضح.', 'A design for a fundraising campaign with a clear goal.'],
    ['شكراً للمتبرعين', 'Thank You Donors', 'رسالة شكر للمتبرعين بأسلوب أنيق.', 'A thank-you message to donors, elegantly presented.'],
  ],
  'care-center': [
    ['خدماتنا', 'Our Services', 'عرض خدمات مركز الرعاية بشكل واضح ومنظم.', "Presenting the care centre's services clearly and neatly."],
    ['فريق العمل', 'Our Team', 'إبراز فريق العمل والكفاءات في المركز.', "Highlighting the centre's team and expertise."],
    ['عرض خاص', 'Special Offer', 'إعلان عن عرض خاص للعملاء الجدد.', 'Announcing a special offer for new clients.'],
    ['رعاية متكاملة', 'Full Care', 'تصميم يبرز الرعاية الشاملة للمرضى.', 'A design highlighting comprehensive patient care.'],
    ['حجز موعد', 'Book Appointment', 'دعوة لحجز موعد بسهولة ووضوح.', 'An easy, clear call to book an appointment.'],
    ['تواصل معنا', 'Contact Us', 'تصميم يبرز بيانات التواصل مع المركز.', "A design highlighting the centre's contact details."],
  ],
  namaa: [
    ['نماء للتنمية العمرانية', 'Namaa Urban Development', 'تصميم يعكس توجه نماء في التنمية العمرانية.', "A design reflecting Namaa's urban-development focus."],
  ],
}

/** Flat social projects in brand order; each carries its `brand` id. */
const socialProjects = SOCIAL_BRANDS.flatMap((b) =>
  SOCIAL_COPY[b.id].map(([title, enTitle, description, enDesc], i) => ({
    image: `portfolio-assets/social/${b.slug}/${b.slug}-${i + 1}.webp`,
    category: 'السوشيال',
    badgeColor: 'bg-cyan-500',
    brand: b.id,
    title,
    enTitle,
    description,
    enDesc,
  }))
)

/* ============================================================
   PORTFOLIO DATA
   ============================================================ */
const portfolioData = [
  { image: 'portfolio-assets/تصميم يافطة (1).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'مطاعم فول مازن ومطحن المصطفى', enTitle: 'Mazen Restaurant & Mustafa Mill', enDesc: 'Warm food-sector designs that blend authentic Arabic calligraphy with product imagery that makes you hungry.', description: 'تصميمات دافئة لمجال الأغذية، تجمع بين أصالة الخط العربي وعرض المنتجات بصورة تفتح الشهية.' },
  { image: 'portfolio-assets/تصميم يافطة (2).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'معرض كار ماركت وحلويات إيطاليانو', enTitle: 'Car Market Showroom & Italiano Sweets', enDesc: 'A professional mix of bold car-showroom design and the soft, inviting pull of sweet-shop branding.', description: 'تنوع احترافي بين القوة في تصاميم معارض السيارات والنعومة والجاذبية في تصاميم محلات الحلويات.' },
  { image: 'portfolio-assets/تصميم يافطة (3).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'عطارة زمان وشركة العجوز', enTitle: 'Zaman Attar & Al-Angawaz Company', enDesc: 'Visual identities for commercial businesses built around comfortable layouts that showcase products clearly to passers-by.', description: 'هويات بصرية للأنشطة التجارية تعتمد على التكوين المريح للعين وإبراز المنتجات بشكل واضح للمارة.' },
  { image: 'portfolio-assets/تصميم يافطة (4).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'كافيه الجزيرة وسنتر الهداية', enTitle: 'Al-Jazira Cafe & Al-Hidaya Center', enDesc: 'Attractive colour gradients and bold type used to create a strong visual presence in the street.', description: 'استخدام تدرجات لونية جذابة وخطوط جريئة لخلق حضور بصري قوي في الشارع.' },
  { image: 'portfolio-assets/تصميم يافطة (5).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'عيادة د. أحمد شاكر وحميد فون', enTitle: 'Dr. Ahmed Shaker Clinic & Hamid Phone', enDesc: 'A blend of professionalism and clarity in medical design, paired with the energy of modern tech retail.', description: 'دمج بين الاحترافية والوضوح في التصاميم الطبية، والحيوية والعصرية في محلات التكنولوجيا.' },
  { image: 'portfolio-assets/تصميم يافطة (6).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'أقمشة المهدي وسنتر الزهراء', enTitle: 'Al-Mahdi Fabrics & Al-Zahra Center', enDesc: 'Designs that reflect luxury and elegance to suit fabric and furnishing stores.', description: 'تصاميم تعكس الفخامة والأناقة لتناسب محلات الأقمشة والمفروشات.' },
  { image: 'portfolio-assets/تصميم يافطة (7).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'الحسيني للألوميتال ومكتبة الفجالة', enTitle: 'Al-Husseini Aluminum & Al-Fajala Bookshop', enDesc: 'Bold visual identities that rely on colour contrast to grab attention and communicate the nature of the work at a glance.', description: 'هويات بصرية قوية تعتمد على تباين الألوان لجذب الانتباه وتوضيح طبيعة العمل بسلاسة.' },
  { image: 'portfolio-assets/تصميم يافطة (8).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'آيس كريم منهاتن وكوافير مكة', enTitle: 'Manhatten Ice Cream & Mecca Coiffure', enDesc: 'Lively, refreshing designs in bright colours and modern youthful type.', description: 'تصميمات حيوية ومنعشة بألوان زاهية وخطوط شبابية حديثة.' },
  { image: 'portfolio-assets/تصميم يافطة (9).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'مصطفى موتورز وبيتزا كازاميزا', enTitle: 'Mostafa Motors & Pizza Kazamiza', enDesc: 'A perfect balance of automotive luxury with the warmth and inviting colours of the food sector.', description: 'توازن مثالي بين الفخامة في قطاع السيارات والجاذبية والألوان الساخنة في قطاع الأغذية.' },
  { image: 'portfolio-assets/تصميم يافطة (10).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'صيدلية د. عزة كامل وأبو حوا', enTitle: 'Dr. Azza Kamel Pharmacy & Abu Hawa', enDesc: 'Designs with total clarity and long-distance readability to meet the demands of outdoor signage.', description: 'تصاميم تتميز بالوضوح التام وقابلية القراءة من مسافات بعيدة لتلبية متطلبات اللوحات الخارجية.' },
  { image: 'portfolio-assets/تصميم يافطة (11).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'مخبز أولاد أبو بكر وتنجيد الأقصى', enTitle: 'Abu Bakr Sons Bakery & Al-Aqsa Upholstery', enDesc: 'Visual identities for the Egyptian street, pairing authentic Arabic calligraphy with services presented directly and invitingly.', description: 'هويات بصرية للشارع المصري تجمع بين أصالة الخط العربي وعرض الخدمات بأسلوب مباشر وجذاب.' },
  { image: 'portfolio-assets/تصميم يافطة (12).webp', category: 'اليفت', badgeColor: 'bg-yellow-500', title: 'أسماك سعد وكوافير مافيا ستايل', enTitle: 'Saad Fish & Mafia Style Coiffure', enDesc: 'Dynamic designs that blend lively photography with prominent type to grab passers-by attention.', description: 'تصميمات ديناميكية تعتمد على دمج الصور الحية مع الخطوط البارزة لجذب انتباه المارة بقوة.' },
  { image: 'portfolio-assets/انفوجرافيك 1.webp', category: 'الانفو', badgeColor: 'bg-orange-500', title: 'مهارات إدارة الوقت', enTitle: 'Time Management Skills', enDesc: 'A circular, flowing design that turns the steps of time management into an easy-to-follow visual journey.', description: 'تصميم دائري متدفق يحول خطوات إدارة الوقت إلى رحلة بصرية سهلة الفهم والتتبع.' },
  { image: 'portfolio-assets/انفوجرافيك 2.webp', category: 'الانفو', badgeColor: 'bg-orange-500', title: 'إدارة الحسابات المالية', enTitle: 'Financial Accounting', enDesc: 'Precise geometric distribution of accounting information to simplify complex steps for startups.', description: 'توزيع هندسي دقيق للمعلومات المحاسبية لتبسيط الخطوات المعقدة للشركات الناشئة.' },
  { image: 'portfolio-assets/انفوجرافيك 3.webp', category: 'الانفو', badgeColor: 'bg-orange-500', title: 'تعرف على عقلك الباطن', enTitle: 'Get to Know Your Subconscious', enDesc: 'A professional blend of illustration and text that presents psychological insight in an inventive style.', description: 'دمج احترافي بين الرسم التوضيحي (Illustration) والمحتوى النصي لتقديم معلومة نفسية بأسلوب مبتكر.' },
  { image: 'portfolio-assets/انفوجرافيك 4.webp', category: 'الانفو', badgeColor: 'bg-orange-500', title: 'استراتيجيات التسويق الرقمي', enTitle: 'Digital Marketing Strategies', enDesc: 'A comfortable vertical layout using flat icons to summarise effective marketing approaches.', description: 'تنظيم عمودي مريح للعين باستخدام أيقونات مسطحة (Flat Design) لتلخيص أساليب التسويق الفعالة.' },
  { image: 'portfolio-assets/انفوجرافيك 5.webp', category: 'الانفو', badgeColor: 'bg-orange-500', title: 'أشخاص تحتاجهم في فريقك', enTitle: 'People Your Team Needs', enDesc: 'An engaging tree diagram that highlights the different roles on a team in a way that is easy to remember.', description: 'تصميم شجري جذاب يبرز الأدوار المختلفة في فرق العمل بأسلوب بصري يسهل حفظه وتذكره.' },
  ...socialProjects,
  { image: 'portfolio-assets/digital-art/digital-art-1.webp', category: 'الرسم', badgeColor: 'bg-fuchsia-500', title: 'رسم ديجيتال ١', enTitle: 'Digital Painting 1', enDesc: 'A digitally painted artwork with a creative artistic spirit and fine, expressive detail.', description: 'لوحة مرسومة رقميّاً بروح فنية إبداعية وتفاصيل دقيقة ومعبّرة.' },
  { image: 'portfolio-assets/digital-art/digital-art-2.webp', category: 'الرسم', badgeColor: 'bg-fuchsia-500', title: 'رسم ابو تريكة ديجيتال', enTitle: 'Aboutrika Digital Painting', enDesc: 'A digital painting blending colour and line into a distinctive visual composition.', description: 'رسم ديجيتال يمزج بين اللون والخط في تكوين بصري مميّز.' },
  { image: 'portfolio-assets/digital-art/digital-art-3.webp', category: 'الرسم', badgeColor: 'bg-fuchsia-500', title: 'رسم ديجيتال ٣', enTitle: 'Digital Painting 3', enDesc: 'A high-resolution digital artwork crafted with a rich, artistic touch.', description: 'عمل فني رقمي عالي الدقة مصنوع بلمسة فنية غنية.' },
  { image: 'portfolio-assets/calligraphy/calligraphy-1.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'الزياد بالخط العربي', enTitle: 'Al-Ziyad Calligraphy', enDesc: 'A lettering logo for "Al-Ziyad" with an authentic Arabic calligraphy touch that balances strength and harmony.', description: 'شعار خطّي باسم «الزياد» بلمسة خط عربي أصيلة تجمع بين القوة والاتزان.' },
  { image: 'portfolio-assets/calligraphy/calligraphy-2.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'احمد جويدة بالخط العربي', enTitle: 'Ahmed Gwida Calligraphy', enDesc: 'A calligraphic composition of the name "Ahmed Gwida" in carefully crafted Arabic letterforms.', description: 'تكوين خطّي يحمل اسم «أحمد جويدة» بحروف عربية مصمّمة بعناية.' },
  { image: 'portfolio-assets/calligraphy/rosetti-new.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'روزتي بالخط العربي', enTitle: 'Rosetti Calligraphy', enDesc: 'A lettering logo for "Rosetti" that pairs soft letterforms with an elegant composition.', description: 'شعار خطّي باسم «روزتي» يجمع بين نعومة الحروف وأناقة التكوين.' },
  { image: 'portfolio-assets/calligraphy/al-namir-logo.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'Al Namir', enTitle: 'Al Namir Logo', enDesc: 'A professional logo for "Al Namir" with a contemporary lettering composition that balances strength and clarity.', description: 'لوجو احترافي باسم «Al Namir» بتكوين خطّي معاصر يجمع بين القوة والوضوح.' },
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
  'umrah-1.webp': [1033, 1292],
  'umrah-2.webp': [1033, 1292],
  'umrah-3.webp': [1033, 1292],
  'umrah-4.webp': [1033, 1292],
  'umrah-5.webp': [1033, 1292],
  'umrah-6.webp': [1033, 1292],
  'umrah-7.webp': [1080, 1440],
  'umrah-8.webp': [1080, 1440],
  'medilink-1.webp': [988, 1001],
  'medilink-2.webp': [977, 986],
  'medilink-3.webp': [982, 988],
  'medilink-4.webp': [970, 980],
  'medilink-5.webp': [1004, 990],
  'medilink-6.webp': [990, 987],
  'medilink-7.webp': [997, 976],
  'medilink-8.webp': [980, 983],
  'medilink-9.webp': [980, 994],
  'medilink-10.webp': [990, 990],
  'medilink-11.webp': [1000, 983],
  'medilink-12.webp': [983, 990],
  'chicken-fresh-1.webp': [1033, 1033],
  'chicken-fresh-2.webp': [1033, 1033],
  'chicken-fresh-3.webp': [1033, 1033],
  'chicken-fresh-4.webp': [1033, 1033],
  'chicken-fresh-5.webp': [1033, 1033],
  'fol-nour-1.webp': [1033, 1033],
  'fol-nour-2.webp': [1033, 1033],
  'fol-nour-3.webp': [1033, 1033],
  'fol-nour-4.webp': [1033, 1033],
  'fol-nour-5.webp': [1033, 1033],
  'bravo-1.webp': [1600, 1600],
  'bravo-2.webp': [1280, 1280],
  'sultana-1.webp': [1156, 1155],
  'sultana-2.webp': [1156, 1155],
  'sultana-3.webp': [1156, 1155],
  'al-bir-1.webp': [968, 969],
  'al-bir-2.webp': [959, 952],
  'al-bir-3.webp': [968, 952],
  'al-bir-4.webp': [959, 948],
  'al-bir-5.webp': [968, 948],
  'al-bir-6.webp': [959, 943],
  'al-bir-7.webp': [968, 943],
  'al-bir-8.webp': [959, 950],
  'al-bir-9.webp': [968, 950],
  'al-bir-10.webp': [959, 957],
  'al-bir-11.webp': [968, 957],
  'al-bir-12.webp': [959, 969],
  'care-center-1.webp': [1080, 1350],
  'care-center-2.webp': [1080, 1350],
  'care-center-3.webp': [1080, 1350],
  'care-center-4.webp': [1080, 1350],
  'care-center-5.webp': [1080, 1350],
  'care-center-6.webp': [1080, 1350],
  'namaa-1.webp': [1080, 1440],
  'digital-art-1': [1240, 1772],
  'digital-art-2': [1134, 1457],
  'digital-art-3': [2480, 3508],
  'calligraphy-1': [2000, 2000],
  'calligraphy-2': [2000, 2000],
  'rosetti-new': [2000, 2000],
  'al-namir-logo': [2000, 2000],
}

/** Resolves [w, h] for a portfolio asset path. Falls back to 4:3. */
function dimensionsFor(imagePath) {
  // Match on the BASENAME; social keys include the extension so
  // `medilink-1` never shadow-matches `medilink-10`.
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
    cat: 'prints-menus',
    category: 'المطبوعات',
    categoryId: 'PRINTS-MENUS',
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
    id: 'calligraphy',
    num: '01',
    title: 'الخط العربي',
    enTitle: 'Arabic Calligraphy',
    desc: 'شعارات وحروف بخطوط عربية أصيلة بلمسة فنية مميزة.',
    enDesc: 'Logos and lettering in authentic Arabic scripts with a distinctive artistic touch.',
    icon: 'calligraphy',
    accent: 'lime',
  },
  {
    id: 'digital-art',
    num: '02',
    title: 'الرسم الديجيتال',
    enTitle: 'Digital Art',
    desc: 'أعمال رسم رقمي عالية الدقة بلمسة فنية غنية.',
    enDesc: 'High-resolution digital illustrations crafted with a rich artistic touch.',
    icon: 'art',
    accent: 'gold',
  },
  {
    id: 'social',
    num: '03',
    title: 'تصميمات السوشيال ميديا',
    enTitle: 'Social Media Design',
    desc: 'محتوى بصري جذاب ومتوافق مع مقاسات كل منصة.',
    enDesc: 'Engaging visual content sized for every platform.',
    icon: 'social',
    accent: 'orange',
  },
  {
    id: 'infographics',
    num: '04',
    title: 'الإنفوجرافيك',
    enTitle: 'Infographics',
    desc: 'تحويل المعلومات المعقدة إلى تصاميم بسيطة وواضحة.',
    enDesc: 'Turning complex information into clean, easy-to-read designs.',
    icon: 'infographic',
    accent: 'cyan',
  },
  {
    id: 'prints-menus',
    num: '05',
    title: 'المطبوعات والمنيوهات',
    enTitle: 'Prints & Menus',
    desc: 'هويات بصرية، كروت، فلايرز ومنيوهات جاهزة للطباعة.',
    enDesc: 'Visual identities, cards, flyers and menus, ready for print.',
    icon: 'print',
    accent: 'lime',
  },
  {
    id: 'signage',
    num: '06',
    title: 'تصميم اللافتات الإعلانية',
    enTitle: 'Advertising Signage',
    desc: 'تجهيز الملفات للطباعة بأدق المقاسات، من الفكرة حتى الملف النهائي الجاهز للمطبعة.',
    enDesc: 'Preparing files for print at the most precise dimensions, from idea to the final print-ready file.',
    icon: 'sign',
    accent: 'gold',
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