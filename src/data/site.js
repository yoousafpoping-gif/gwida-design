/* ============================================================
   ASSET HELPERS
   Paths mirror the real filenames inside public/portfolio-assets/
   Spaces / parentheses are percent-encoded once via encodeURI().
   ============================================================ */

export const PROFILE_IMG = '/portfolio-assets/profile.webp'

export const asset = (p) => encodeURI(p)

/* Grid cards render a downscaled twin (see make_thumbs.py) so the home
   page never downloads a 2000px original just to show a 400px tile. The
   `thumbs/` folder mirrors the source tree, so the path swap is trivial.
   The lightbox keeps using the full-resolution original for the lens. */
export const thumbOf = (p) =>
  encodeURI(p.replace('portfolio-assets/', 'portfolio-assets/thumbs/'))

/* The very largest originals (long side > 1400px) also get a balanced
   "large" twin (see make_large.py). The lightbox opens that instead of
   the heavy original, so a click paints fast; the original stays on disk
   as the source of truth. `largeOf` is only applied to those files. */
export const LARGE_MAX_SIDE = 1400
export const largeOf = (p) =>
  encodeURI(p.replace('portfolio-assets/', 'portfolio-assets/large/'))

/* ============================================================
   NAVIGATION
   ============================================================ */
export const NAV_LINKS = [
  { id: 'home', label: 'الرئيسية', enLabel: 'Home' },
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
    ['البرنامج المميز — المولد النبوي', 'The Premium Package — Prophet\'s Birthday', 'برنامج عمرة من شركة العميلي ترافيل بإقامة في فندق الماسة بدر على بُعد 500م من الحرم.', 'An Umrah package by Al-Omaily Travel staying at Al-Masa Badr Hotel, 500m from the Haram.'],
    ['البرنامج المميز الاقتصادي', 'The Premium Economy Package', 'عرض عمرة من العميلي ترافيل يبدأ من ألف جنيه بدون مواصلات.', 'An Umrah offer by Al-Omaily Travel starting from one thousand pounds, without transport.'],
    ['البرنامج الاقتصادي — فنادق الزهراء', 'The Economy Package — Al-Zahra Hotels', 'برنامج عمرة اقتصادي يشمل السكن في فنادق الزهراء والطيران بين القاهرة وجدة.', 'An economy Umrah package with Al-Zahra hotel stays and Cairo–Jeddah flights.'],
    ['البرنامج المميز — فندق الجنادرية', 'The Premium Package — Al-Janaderiya Hotel', 'برنامج عمرة مميز بالإقامة في فندق الجنادرية بمكة دون مواصلات.', 'A premium Umrah package staying at Al-Janaderiya Hotel in Mecca, without transport.'],
    ['فندق سرايا الجوار بمكة', 'Saraya Al-Jiwar Hotel — Mecca', 'إعلان فندق سرايا الجوار ضمن مجموعة ديار بإقامة قريبة من الحرم.', 'An ad for Saraya Al-Jiwar Hotel (Diyar Group) with a stay close to the Haram.'],
    ['عمرة رمضان — سكن قرب الحرم', 'Ramadan Umrah — Stay Near the Haram', 'البرنامج المميز لعمرة رمضان بإقامة على بعد دقيقتين من الحرم.', 'The premium Ramadan Umrah package with a stay two minutes from the Haram.'],
    ['عمرة رمضان — البرنامج المميز', 'Ramadan Umrah — The Premium Package', 'برنامج عمرة رمضان المميز بإقامة كاملة لمدة شهر.', 'The premium Ramadan Umrah package with a full month\'s stay.'],
    ['عمرة شعبان ورمضان — الاقتصادي', 'Sha\'ban & Ramadan Umrah — Economy', 'البرنامج الاقتصادي لعمرة شعبان ورمضان بإقامة كاملة خمسة عشر يوماً.', 'The economy Sha\'ban and Ramadan Umrah package with a full fifteen-day stay.'],
  ],
  medilink: [
    ['كل اللي هتحتاجه', 'Everything You Need', 'ميد لينك للمستلزمات الطبية — كل ما تحتاجه من مستلزمات طبية في مكان واحد.', 'MediLink medical supplies — everything you need in one place.'],
    ['عرض خاص: سكراب مجاناً', 'Special Offer: Free Scrubs', 'عرض خاص على المستلزمات الطبية — اشترِ واحداً واحصل على سكراب مجاناً.', 'A special offer on medical supplies — buy one and get scrubs free.'],
    ['التخلص من الألم', 'Getting Rid of Pain', 'حلول ميد لينك لإنهاء المعاناة والتخلص من الألم.', 'MediLink solutions to end suffering and relieve pain.'],
    ['أجهزة ومستلزمات طبية', 'Medical Devices & Supplies', 'تشكيلة من الأجهزة والمستلزمات الطبية الحديثة.', 'A range of modern medical devices and supplies.'],
    ['مستلزماتك بين يديك', 'Your Supplies at Hand', 'مستلزماتك الطبية متاحة لديك بسهولة.', 'Your medical supplies readily available to you.'],
    ['ابعت اللوكيشن', 'Send Your Location', 'خدمة توصيل ميد لينك — ابعت اللوكيشن ونتولى الباقي.', 'MediLink delivery service — send your location and we handle the rest.'],
    ['لكل تعب نهاية', 'Every Hardship Has an End', 'ابدأ من حيث يجب — لكل تعب نهاية مع ميد لينك.', 'Start where it matters — every hardship has an end with MediLink.'],
    ['خدمة عملاء ميد لينك', 'MediLink Customer Service', 'دعم وخدمة عملاء من ميد لينك للمستلزمات الطبية.', 'Support and customer service from MediLink medical supplies.'],
    ['الوقاية خير من العلاج', 'Prevention Is Better Than Cure', 'أدوات صحية تستحقها ابتسامتك — الوقاية خير من العلاج.', 'Health tools your smile deserves — prevention is better than cure.'],
    ['كل اللي هتحتاجه موجود', 'Everything You Need Is Here', 'كل المستلزمات الطبية موجودة — ما تنتظرش.', 'All medical supplies are in stock — no need to wait.'],
    ['مستلزمات بجودة فائقة', 'Supplies of Premium Quality', 'مستلزماتك الطبية متوفرة وبجودة فائقة.', 'Your medical supplies available in premium quality.'],
    ['عروض محدودة', 'Limited Offers', 'عروض محدودة على مجموعة المستلزمات الطبية.', 'Limited offers across the medical-supplies range.'],
  ],
  'chicken-fresh': [
    ['ميكس تشكن فريش', 'Chicken Fresh Mix', 'عرض ميكس تشكن فريش مع هدية أرز وبيبسي وبطاطس وستربس.', 'The Chicken Fresh Mix offer with free rice, Pepsi, fries and strips.'],
    ['معمولة بحب', 'Made with Love', 'وجبة تشكن فريش معمولة بحب.', 'A Chicken Fresh meal made with love.'],
    ['عرض اللمة الحلوة', 'The Sweet Gathering Deal', 'عرض اللمة الحلوة — بروست كبير مع بطاطس وسلو كول وبيبسي.', 'The sweet gathering deal — large broast with fries, coleslaw and Pepsi.'],
    ['عرض الكرسبي', 'The Crispy Deal', 'عرض على وجبات الكرسبي لجميع الوجبات.', 'A deal on crispy meals across the whole menu.'],
    ['وجبة عائلي ستربس', 'Family Strips Meal', 'وجبة عائلي ستربس مع أرز وبطاطس وسلو كول وخبز.', 'A family strips meal with rice, fries, coleslaw and bread.'],
  ],
  'fol-nour': [
    ['عرض للمؤسسات الطبية', 'Offer for Medical Institutions', 'عرض خاص للمؤسسات الطبية — فطار بـ100 مع هدية.', 'A special offer for medical institutions — breakfast at 100 with a gift.'],
    ['أسرع من صواريخ إيران', 'Faster Than Missiles', 'تصميم ساخر عن سرعة خدمة الدليفري.', 'A witty design about the speed of the delivery service.'],
    ['الطعم بتاع زمان', 'The Old-School Taste', 'ليه فول نور؟ عشان الطعم بتاع زمان.', 'Why Fol Nour? For that old-school taste.'],
    ['اطلب مزاجك', 'Order Your Mood', 'من الجمهور — اطلب مزاجك واضبط.', 'From the audience — order your mood and get it right.'],
    ['طعم لمحكاية', 'A Taste for a Story', 'طعم أصلي لمحكاية.', 'An authentic taste for a story.'],
  ],
  bravo: [
    ['عرض خاص: إعلانات للعيادات', 'Special Offer: Clinic Advertising', 'برافو — عرض على الإعلانات الرقمية للعيادات: عيادتك تستحق حضوراً قوياً أونلاين.', 'Bravo — an offer on digital advertising for clinics: your clinic deserves a strong online pulse.'],
    ['أغلفة كتب الأكاديمية', 'The Academy Book Covers', 'برافو — تصميم أغلفة سلسلة الأكاديمية بالإنجليزية للفصل الأول 2026.', 'Bravo — designing The Academy\'s English series covers for the first term 2026.'],
  ],
  sultana: [
    ['لكل لون حكاية', 'Every Colour Tells a Story', 'سلطانة — لكل لون حكاية ما تنتهيش.', 'Sultana — every colour tells a never-ending story.'],
    ['سلطانة بوكس', 'Sultana Box', 'اطلبي سلطانة بوكس الآن.', 'Order the Sultana Box now.'],
    ['أينما كنتي', 'Wherever You Are', 'سلطانة معك أينما كنتي.', 'Sultana is with you wherever you are.'],
  ],
  'al-bir': [
    ['«إنها طيبة» — مبادرة', 'It Is Taybah — An Initiative', 'منشور عن مبادرة «إنها طيبة» وتعريف بمعالم المدينة المنورة بالتعاون مع الخطوط السعودية.', 'A post on the "It is Taybah" initiative presenting Madinah\'s landmarks with Saudia.'],
    ['من روائع البر — صدقة عمر', 'Al-Bir Tales — Umar\'s Endowment', 'من روائع وحكايات البر بالمدينة المنورة — صدقة عمر بن الخطاب وأصل الوقف.', 'From the tales of Al-Bir in Madinah — Umar ibn al-Khattab\'s charity and the origin of waqf.'],
    ['من روائع البر — الاحتساب', 'Al-Bir Tales — Seeking Reward', 'سلسلة روائع وحكايات البر بالمدينة المنورة — الاحتساب.', 'The Al-Bir tales series from Madinah — seeking reward.'],
    ['مسجد المدينة المنورة ببشيفيلد', 'Madinah Mosque in Sheffield', 'تعريف بمسجد المدينة المنورة في شفيلد بإنجلترا من مركز بحوث ودراسات المدينة المنورة.', 'Introducing the Madinah Mosque in Sheffield, UK, from the Madinah Research & Studies Centre.'],
    ['الصدقة الجارية — حسابات التبرع', 'Ongoing Charity — Donation Accounts', 'حسابات التبرع للصدقة الجارية عبر جمعية البر بالمدينة المنورة.', 'Donation accounts for ongoing charity via Al-Bir in Madinah.'],
    ['شكراً لجهودكم', 'Thank You for Your Efforts', 'شكر وتقدير لجهود المتطوعين خلال جائحة كورونا.', 'Thanking and honouring volunteers during the COVID-19 pandemic.'],
    ['تبرعك صدقة جارية', 'Your Donation, Ongoing Charity', 'التبرع عبر الحسابات البنكية للصدقة الجارية.', 'Donating through the bank accounts for ongoing charity.'],
    ['تبرع شهري برسالة', 'Monthly Donation by SMS', 'للتبرع أرسل رسالة فارغة — 12 ريالاً شهرياً أو 10 ريالات.', 'To donate, send a blank message — 12 riyals monthly, or 10 riyals.'],
    ['﴿رب أنزلني منزلاً مباركاً﴾', '\'My Lord, Settle Me in a Blessed Place\'', 'آية قرآنية مع حسابات التبرع للصدقة الجارية.', 'A Quranic verse with the donation accounts for ongoing charity.'],
    ['قالب تصميم', 'Design Template', 'قالب تصميم بنص لوريم إبسوم.', 'A design template using lorem-ipsum placeholder text.'],
    ['أنا المدينة — قصيدة', 'I Am Madinah — A Poem', 'قصيدة في حب المدينة المنورة.', 'A poem in love of Madinah.'],
    ['الموارد البشرية', 'Human Resources', 'تصميم لمركز بحوث ودراسات المدينة المنورة.', 'A design for the Madinah Research & Studies Centre.'],
  ],
  'care-center': [
    ['العلاج الطبيعي وتأهيل الأطفال', 'Physiotherapy & Child Rehabilitation', 'مركز الرعاية — العلاج الطبيعي المكثف وتأهيل الأطفال والتدخل المبكر.', 'Care Center — intensive physiotherapy, child rehabilitation and early intervention.'],
    ['تنمية المهارات', 'Skills Development', 'تنمية المهارات ومعالجة صعوبات التعلم.', 'Developing skills and addressing learning difficulties.'],
    ['التأهيل بعد العمليات', 'Post-Surgery Rehabilitation', 'تأهيل ما بعد العمليات بمركز الرعاية.', 'Post-surgery rehabilitation at the Care Center.'],
    ['إيد بتبني وإيد بتطمن', 'One Hand Builds, One Reassures', 'رسالة رعاية وتأهيل بأيدي فريق المركز.', 'A message of care and rehabilitation by the centre\'s team.'],
    ['ركن كل طفل', 'Every Child\'s Corner', 'ركن مخصص لكل طفل في المركز.', 'A dedicated corner for every child at the centre.'],
    ['جلسة مجانية لأول زيارة', 'Free Session for the First Visit', 'نتشرف بزيارتكم — جلسة مجانية لأول زيارة.', 'We welcome your visit — a free session for the first visit.'],
  ],
  namaa: [
    ['نماء للتنمية العمرانية', 'Namaa Urban Development', 'استثمر في قلب جدة التاريخية — خدمات كاملة وموقع استراتيجي وعائد استثماري وضمانات.', 'Invest in the heart of historic Jeddah — full services, a strategic location, returns and guarantees.'],
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
  { image: 'portfolio-assets/calligraphy/al-ziyad.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'الزياد', enTitle: 'Al-Ziyad', enDesc: 'A lettering logo for "Al-Ziyad" with an authentic Arabic calligraphy touch that balances strength and harmony.', description: 'شعار خطّي باسم «الزياد» بلمسة خط عربي أصيلة تجمع بين القوة والاتزان.' },
  { image: 'portfolio-assets/calligraphy/ahmed-gwida.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'أحمد جويدة', enTitle: 'Ahmed Gwida', enDesc: 'A calligraphic composition of the name "Ahmed Gwida" in carefully crafted Arabic letterforms.', description: 'تكوين خطّي يحمل اسم «أحمد جويدة» بحروف عربية مصمّمة بعناية.' },
  { image: 'portfolio-assets/calligraphy/rosetti.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'روزتي', enTitle: 'Rosetti', enDesc: 'A lettering logo for "Rosetti" that pairs soft letterforms with an elegant composition.', description: 'شعار خطّي باسم «روزتي» يجمع بين نعومة الحروف وأناقة التكوين.' },
  { image: 'portfolio-assets/calligraphy/al-namir.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'النمير فارمسي', enTitle: 'Al Namir Pharmacy', enDesc: 'A bilingual logo for "Al Namir Pharmacy" pairing an Arabic lettering mark with a clean latin wordmark.', description: 'لوجو ثنائي اللغة لصيدلية «النمير» يجمع بين الخط العربي واللاتيني بتكوين نظيف.' },
  { image: 'portfolio-assets/calligraphy/al-tahami.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'التهامي للاستثمار العقاري والمقاولات', enTitle: 'Al-Tahami Real Estate & Contracting', enDesc: 'A corporate calligraphy logo for "Al-Tahami" for real-estate investment and contracting, blending the trade name with a solid wordmark.', description: 'شعار خطّي مؤسسي لـ«التهامي» للاستثمار العقاري والمقاولات، يجمع بين الاسم التجاري والكتابة الواضحة.' },
  { image: 'portfolio-assets/calligraphy/gulf-lab.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'مختبر الخليج البيطري', enTitle: 'Gulf Veterinary Lab', enDesc: 'A logo for "Gulf Lab", a comprehensive veterinary laboratory, with a medical mark alongside the Arabic lettering.', description: 'لوجو «مختبر الخليج» الشامل البيطري، يجمع بين الرمز الطبي والخط العربي.' },
  { image: 'portfolio-assets/calligraphy/hisham-rishwan.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'هشام رشوان للأعمال الفنية', enTitle: 'Hisham Rishwan for Artistic Works', enDesc: 'A calligraphy logo for "Hisham Rishwan for Artistic Works", turning the name into a striking lettering mark.', description: 'شعار خطّي لـ«هشام رشوان للأعمال الفنية» يحوّل الاسم إلى تكوين خطّي لافت.' },
  { image: 'portfolio-assets/calligraphy/you-can.webp', category: 'الخط', badgeColor: 'bg-emerald-500', title: 'You Can — تطبيق جوال', enTitle: 'You Can — Mobile App', enDesc: 'A modern logo for the "You Can" mobile application with a bold, contemporary lettering mark.', description: 'لوجو عصري لتطبيق الجوال «You Can» بتكوين حروفي جريء ومعاصر.' },
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
  'al-ziyad': [1024, 1024],
  'ahmed-gwida': [1024, 1024],
  'rosetti': [1024, 1024],
  'al-namir': [1024, 1024],
  'al-tahami': [1024, 1024],
  'gulf-lab': [1024, 1024],
  'hisham-rishwan': [1024, 1024],
  'you-can': [1024, 1024],
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
    thumb: thumbOf(p.image),
    large: Math.max(width, height) > LARGE_MAX_SIDE ? largeOf(p.image) : null,
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
    thumb: thumbOf(`${MENU_DIR}/${file}`),
    large: Math.max(width, height) > LARGE_MAX_SIDE ? largeOf(`${MENU_DIR}/${file}`) : null,
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
  { value: '+2500', label: 'مشروعاً منجزاً', enLabel: 'Projects Delivered' },
  { value: '4', label: 'مجالات تخصص', enLabel: 'Specialties' },
]