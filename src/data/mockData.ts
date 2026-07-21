import { ServiceItem, StoreApp, NewsItem, PortfolioProject, NotificationItem, HeroSlide, AITool, WifiNetworkDevice, ClientItem } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: '1',
    title: 'تصفح متجرنا الإلكتروني للتطبيقات والألعاب',
    description: 'تطبيقات مميزة، باشتراكات وألعاب شائعة بأسعار منافسة وتسليم فوري',
    bgGradient: 'from-[#062B7F] via-[#0A4DFF] to-[#00C2FF]',
    icon: 'ShoppingBag',
    badge: 'جديد 2026',
    linkTab: 'store'
  },
  {
    id: '2',
    title: 'أقوى أدوات ونماذج الذكاء الاصطناعي',
    description: 'توليد المحتوى الإعلاني، التصاميم، وإجابات فائقة السرعة بالذكاء الاصطناعي',
    bgGradient: 'from-[#4A154B] via-[#7C3AED] to-[#C084FC]',
    icon: 'Sparkles',
    badge: 'ذكاء اصطناعي',
    linkTab: 'ai'
  },
  {
    id: '3',
    title: 'عروض الدعاية والإعلان والتسويق الشامل',
    description: 'حملات ممولة مستهدفة على جميع منصات التواصل مع ضمان نتائج حقيقية',
    bgGradient: 'from-[#B91C1C] via-[#F44336] to-[#FB923C]',
    icon: 'Megaphone',
    badge: 'خصم 35%',
    linkTab: 'services'
  },
  {
    id: '4',
    title: 'حلول شبكات الواي فاي والبث المباشر',
    description: 'إدارة الشبكات، البث المباشر للفعاليات والمسلسلات بجودة عالية دون تقطيع',
    bgGradient: 'from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]',
    icon: 'Wifi',
    badge: 'خدمات متكاملة',
    linkTab: 'wifi'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'page-funding',
    title: 'إدارة وتمويل الصفحات',
    description: 'تمويل وترويج صفحات السوشيال ميديا (فيسبوك، إنستغرام، تيك توك) وزيادة التفاعل والوصول.',
    iconName: 'FileText',
    bgGradient: 'from-[#8B5CF6] to-[#6D28D9]',
    accentColor: '#8B5CF6',
    category: 'ماركتنج',
    features: ['حملات ممولة عالية الاستهداف', 'إدارة محتوى يومية وتصميم بوستات', 'تقارير أسبوعية وشهرية بالوصول'],
    priceRange: 'تبدأ من $50 / شهرياً',
    estimatedTime: 'تنفيذ خلال 24 ساعة',
    rating: 4.9,
    reviewsCount: 248,
    longDescription: 'نقدم حلولاً متكاملة لإدارة وتمويل صفحاتك على فيسبوك، إنستغرام، وتيك توك بأساليب تسويقية مدروسة تضمن مضاعفة التفاعل، تحويل المتابعين إلى عملاء دائمين، وتحقيق أعلى عائد على الاستثمار الإعلاني بفضل خبرتنا الممتدة تحت إشراف عبدالحميد داوؤد.',
    persuasivePoints: [
      { title: 'استهداف دقيق جداً', description: 'نحدد الجمهور المستهدف بدقة جغرافية وعمرية واهتمامات حقيقية تضمن عدم إهدار الميزانية.' },
      { title: 'تصاميم ونصوص جذابة', description: 'نبتكر تصاميم بصرية احترافية ونصوص إعلانية مقنعة تدفع العميل لاتخاذ قرار الشراء فوراً.' },
      { title: 'تقارير شفافة ودورية', description: 'نقدم تقارير دورية بالأرقام والإحصائيات توضح عدد المشاهدات، النقرات، ونسبة التحويل.' }
    ],
    works: [
      {
        id: 'w1-1',
        title: 'حملة تمويل لمستشفى وعيادات الجعفري',
        client: 'عيادة ومختبرات الجعفري الحديثة',
        stats: '+340% زيادات في التفاعل',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
        description: 'إدارة وتصاميم تمويل شهرية حققت تفاعلاً واسعاً واستقطبت مئات المرضى الجدد.'
      },
      {
        id: 'w1-2',
        title: 'حملة تمويل لشركة تحويلات بن عائض',
        client: 'بن عائض للصرافة والتحويل',
        stats: '+120,000 وصول حقيقي',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80',
        description: 'تمويل مستهدف للتطبيقات المالية وزيادة التنزيلات وتوسيع نطاق التحويلات.'
      }
    ],
    testimonials: [
      {
        id: 't1-1',
        clientName: 'الشيخ بشار منصر',
        clientTitle: 'مدير صرافة بشار منصر',
        rating: 5,
        comment: 'نتائج التمويل كانت مبهرة وحققت انتشاراً غير مسبوق لشركتنا في وقت قياسي. منصة أبو كيان خيارنا الأول دائماً.',
        date: '2026-07-15',
        verified: true
      },
      {
        id: 't1-2',
        clientName: 'د. الجعفري',
        clientTitle: 'عيادة الجعفري الحديثة',
        rating: 5,
        comment: 'الالتزام والاحترافية والسرعة في إطلاق الحملات الإعلانية تميز منصة أبو كيان دائماً. أداء فوق الممتاز.',
        date: '2026-07-10',
        verified: true
      }
    ],
    guarantees: ['ضمان الوصول للفئة المستهدفة 100%', 'تعديل التصاميم والنصوص مجاناً حتى الرضا', 'دعم ومتابعة أسبوعية مباشرة عبر الواتساب']
  },
  {
    id: 'advertising',
    title: 'الدعاية والإعلان',
    description: 'تصميم حملات إعلانية مبتكرة عبر الطرق الرقمية، المطبوعات، والفيديوهات الترويجية.',
    iconName: 'Megaphone',
    bgGradient: 'from-[#F97316] to-[#EA580C]',
    accentColor: '#F97316',
    category: 'إعلان',
    features: ['تصاميم احترافية عالية الجودة', 'كتابة نصوص إعلانية محفزة للبيع', 'استهداف جغرافي وفئوي دقيق'],
    priceRange: 'حسب نوع الحملة',
    estimatedTime: '1 - 3 أيام',
    rating: 4.8,
    reviewsCount: 192,
    longDescription: 'تصميم وإطلاق حملات دعاية وإعلان متكاملة تصنع لعلامتك التجارية بصمة لا تُنسى. ندمج بين الإعلانات الرقمية، المطبوعات الفاخرة، والإعلانات المباشرة لترسيخ الهوية وزيادة المبيعات بنسبة استثنائية.',
    persuasivePoints: [
      { title: 'أفكار إعلانية خارج الصندوق', description: 'نصنع سيناريوهات وأفكار بصرية مبتكرة تلفت الانتباه وتتفوق على المنافسين.' },
      { title: 'تغطية شاملة لكل المنافذ', description: 'نوفر كافة المخرجات الإعلانية بدءاً من الهويات والبلاكات حتى الإعلانات المرئية والمسموعة.' }
    ],
    works: [
      {
        id: 'w2-1',
        title: 'الحملة الإعلانية لمؤسسة النفوي عقارات',
        client: 'مؤسسة النفوي للتجارة والمقاولات',
        stats: '+85% زيادة استفسارات العقارات',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
        description: 'تصميم البروشورات واللوحات الإعلانية الضخمة وتصوير الفيديو الترويجي للمشروع الاستثماري.'
      }
    ],
    testimonials: [
      {
        id: 't2-1',
        clientName: 'المهندس النفوي',
        clientTitle: 'رئيس مجموعة النفوي',
        rating: 5,
        comment: 'إبداع في الأفكار وسرعة في الإنجاز. جعلتم مشاريعنا العقارية محط أنظار الجميع.',
        date: '2026-07-02',
        verified: true
      }
    ],
    guarantees: ['جودة تصاميم بدقة عالية جاهزة للطباعة والعرض', 'تسليم كافة الملفات المصدرية Open Source', 'خصم خاص للعملاء الدائمين']
  },
  {
    id: 'website-management',
    title: 'إدارة المواقع الإلكترونية',
    description: 'صيانة وتحسين أداء المواقع، حماية السيرفرات، تهيئة محركات البحث SEO، وتحديث المحتوى.',
    iconName: 'Globe',
    bgGradient: 'from-[#10B981] to-[#059669]',
    accentColor: '#10B981',
    category: 'برمجيات',
    features: ['تسريع تحكم الموقع وسرعة التحميل', 'نسخ احتياطي يومي تلقائي', 'تحسين ظهورك في قوقل SEO'],
    priceRange: 'تبدأ من $80 / شهرياً',
    estimatedTime: 'دعم 24/7',
    rating: 4.9,
    reviewsCount: 135,
    longDescription: 'خدمة إدارية برمجية شاملة تضمن بقاء موقعك الإلكتروني متصدراً، سريعاً، وآمناً 24 ساعة يومياً. نعتني بتحديث البيانات، التسريع الفائق، حماية البيانات، وأرشفة Google SEO لضمان أقصى استفادة تجارية.',
    persuasivePoints: [
      { title: 'سرعة تحميل خارقة', description: 'ضغط الملفات، تحسين السيرفر، وربط CDN عالمي لتصفح سلس بدون تأخير.' },
      { title: 'تصدر محركات البحث SEO', description: 'تهيئة الكلمات المفتاحية وضمان إفادة الموقع لمحركات البحث لزيادة الزوار مجاناً.' }
    ],
    works: [
      {
        id: 'w3-1',
        title: 'تطوير وإدارة موقع سماء الهندسي',
        client: 'مكتب سماء للمقاولات والهندسة',
        stats: 'سرعة تحميل 99/100',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80',
        description: 'إدارة متكاملة للمحتوى واستضافة فائقة السرعة مع أرشفة جوجل للخدمات المعمارية.'
      }
    ],
    testimonials: [
      {
        id: 't3-1',
        clientName: 'م. أنس الأنسي',
        clientTitle: 'مدير مكتب سماء الهندسي',
        rating: 5,
        comment: 'الموقع أسرع وأسهل للاستخدام بفضل جهود المهندس عبدالحميد والمتابعة المستمرة، عمل ممتاز.',
        date: '2026-06-28',
        verified: true
      }
    ],
    guarantees: ['ضمان تواجد الموقع أونلاين بنسبة 99.9%', 'نسخ احتياطي يومي تلقائي للحماية', 'دعم وتدخل فوري عند أي طارئ']
  },
  {
    id: 'digital-marketing',
    title: 'التسويق الإلكتروني',
    description: 'خطط تسويقية متكاملة للشركات والمتاجر الإلكترونية لزيادة المبيعات والانتشار.',
    iconName: 'TrendingUp',
    bgGradient: 'from-[#0A4DFF] to-[#0044CC]',
    accentColor: '#0A4DFF',
    category: 'تسويق',
    features: ['دراسة المنافسين وتحليل الجمهور', 'تسويق عبر البريد والواتساب', 'تحسين معدل التحويل التحويلي'],
    priceRange: 'استشارة مجانية أولية',
    estimatedTime: 'خطة خلال 48 ساعة',
    rating: 5.0,
    reviewsCount: 310,
    longDescription: 'استراتيجيات تسويقية مدروسة تعتمد على بيانات واضحة لتحويل مشروعك إلى علامة تجارية رائدة. نقوم بتحليل السوق، دراسة سلوك المستهلك، وبناء أقماع مبيعات (Sales Funnels) تحقق أعلى المبيعات المستدامة.',
    persuasivePoints: [
      { title: 'خطط مخصصة لكل نشاط', description: 'لا نستخدم خططاً مكررة؛ بل نصمم استراتيجية فريدة تتماشى مع طبيعة جمهورك.' },
      { title: 'مضاعفة معدل التحويل', description: 'تحسين تجربة المستخدم وتحفيز الزائر على اتخاذ القرار عبر أزرار دعوة جبارة.' }
    ],
    works: [
      {
        id: 'w4-1',
        title: 'خطة التسويق الرقمي لليأسر للصرافة',
        client: 'اليأسر للصرافة والتحويل',
        stats: '+200% نمو المعاملات',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
        description: 'بناء الهوية الرقمية وتسويق خدمات التحويل الفوري واستقطاب العملاء.'
      }
    ],
    testimonials: [
      {
        id: 't4-1',
        clientName: 'إدارة اليأسر للصرافة',
        clientTitle: 'اليأسر للصرافة',
        rating: 5,
        comment: 'خطة التسويق جعلت خدماتنا الخيار الأول للعملاء. نتائج حقيقية وأرقام ملموسة نشعر بها يومياً.',
        date: '2026-07-08',
        verified: true
      }
    ],
    guarantees: ['جلسة استشارية أولية مجانية', 'ضمان تحسين مؤشرات الأداء الرئيسي KPI', 'مرونة عالية في تعديل الأهداف']
  },
  {
    id: 'support-help',
    title: 'الدعم والمساعدة',
    description: 'فريق متخصص متواجد على مدار الساعة للرد على استفساراتكم وحل كافة المشاكل التقنية.',
    iconName: 'Headphones',
    bgGradient: 'from-[#A855F7] to-[#7E22CE]',
    accentColor: '#A855F7',
    category: 'دعم',
    features: ['دعم مباشر عبر الواتساب والمحادثة', 'حل المشاكل الفنية بأقصى سرعة', 'استشارات تقنية وتوجيه للعملاء'],
    priceRange: 'مجاناً للعملاء',
    estimatedTime: 'استجابة فورية',
    rating: 4.9,
    reviewsCount: 420,
    longDescription: 'خدمة الدعم الفني الفوري والمرافقة التقنية الكاملة لجميع عملائنا. نحرص على تقديم الاستشارات، حل الأعطال، والإجابة عن أي استفسار بروح إيجابية وسرعة متناهية على مدار الساعة.',
    persuasivePoints: [
      { title: 'استجابة فورية خلال دقائق', description: 'فريقنا متواجد دائماً عبر الواتساب والمحادثة المباشرة لخدمتك بدون انتظار.' },
      { title: 'حلول تقنية جذرية', description: 'لا نكتفي بالحلول المؤقتة بل نعالج أصل المشكلة لمنع تكرارها نهائياً.' }
    ],
    works: [
      {
        id: 'w5-1',
        title: 'دعم وتكامل شبكة الأمير نت',
        client: 'شبكة الأمير نت للاتصالات',
        stats: 'استجابة أقل من 3 دقائق',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80',
        description: 'متابعة فنية وحل مشاكل الربط وسيرفرات المشتركين مع توفير تحديثات دورية.'
      }
    ],
    testimonials: [
      {
        id: 't5-1',
        clientName: 'أبو الأمير',
        clientTitle: 'صاحب شبكة الأمير نت',
        rating: 5,
        comment: 'دعم فني استثنائي يمتد حتى ساعات متأخرة من الليل. كفاءة وأمانة عالية جداً، نوصي بهم بقوة.',
        date: '2026-07-18',
        verified: true
      }
    ],
    guarantees: ['استجابة فورية عبر الواتساب والمكالمات', 'حل أسباب المشكلة مجاناً', 'استشارات تقنية مجانية لعملائنا']
  },
  {
    id: 'security-safety',
    title: 'الحماية والأمان',
    description: 'تأمين الحسابات، المواقع، والسيرفرات ضد الاختراق مع فحص الثغرات الدائم.',
    iconName: 'ShieldCheck',
    bgGradient: 'from-[#14B8A6] to-[#0D9488]',
    accentColor: '#14B8A6',
    category: 'أمان',
    features: ['استرجاع الحسابات المخترقة', 'تأمين حماية الجدار الناري SSL', 'تشفير وحماية البيانات الحساسة'],
    priceRange: 'تبدأ من $30',
    estimatedTime: 'فوري',
    rating: 4.8,
    reviewsCount: 115,
    longDescription: 'تأمين شامل لحساباتك وسيرفراتك ومواقعك الإلكترونية ضد أي محاولات اختراق أو ثغرات أمنية. نطبق أفضل بروتوكولات التشفير والجدران النارية المتقدمة لمنع أي تسريب للبيانات الحساسة.',
    persuasivePoints: [
      { title: 'استرجاع الحسابات المخترقة', description: 'خبرة متخصصة في استعادة صفحات الفيسبوك وحسابات إنستغرام المغلقة أو المخترقة.' },
      { title: 'تشفير وحماية الجدار الناري', description: 'تركيب شهادات SSL وتأمين قواعد البيانات لمنع الهجمات الإلكترونية DDOS.' }
    ],
    works: [
      {
        id: 'w6-1',
        title: 'استرجاع وتأمين صفحة بن عائض للصرافة',
        client: 'بن عائض للصرافة',
        stats: 'تأمين 100%',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80',
        description: 'استعادة الصفحة الرسمية وحمايتها بمصادقة ثنائية ومشفرة ضد أي اختراق مستقبلي.'
      }
    ],
    testimonials: [
      {
        id: 't6-1',
        clientName: 'الشيخ بن عائض',
        clientTitle: 'بن عائض للصرافة',
        rating: 5,
        comment: 'تم استعادة حساباتنا وتأمينها بنجاح تام وفي وقت قياسي. شكراً للأستاذ عبدالحميد داوؤد.',
        date: '2026-07-12',
        verified: true
      }
    ],
    guarantees: ['ضمان عدم تكرار الاختراق بعد التأمين', 'فحص دوري مجاني للثغرات', 'سرية تامة لبيانات العميل']
  },
  {
    id: 'app-management',
    title: 'إدارة التطبيقات',
    description: 'رفع التطبيقات على Google Play و App Store، متابعة التحديثات وحل الملاحظات.',
    iconName: 'Smartphone',
    bgGradient: 'from-[#EC4899] to-[#DB2777]',
    accentColor: '#EC4899',
    category: 'تطبيقات',
    features: ['رفع وإدارة المتاجر الرسمية', 'تحسين ASO لزيادة التنزيلات', 'متابعة تقييمات العملاء وحل الأعطال'],
    priceRange: 'تبدأ من $40',
    estimatedTime: '1 - 2 أيام',
    rating: 4.7,
    reviewsCount: 98,
    longDescription: 'نأخذ تطبيقك من مرحلة الفكرة إلى آفاق النجاح على متجري Google Play و App Store. نتولى رفع التطبيقات، تحديثها، حل ملاحظات المراجعين، وتحسين ASO لجلب آلاف التنزيلات المباشرة.',
    persuasivePoints: [
      { title: 'قبول مضمون في المتاجر الرسمية', description: 'معرفة كاملة بسياسات جوجل وبلاي ستور لضمان اعتماد التطبيق بدون رفض.' },
      { title: 'تحسين ظهور التطبيق ASO', description: 'اختيار الكلمات المفتاحية والأيقونات واللقطات الترويجية التي تزيد التنزيلات.' }
    ],
    works: [
      {
        id: 'w7-1',
        title: 'رفع وإدارة تطبيق كيان كاش KianCash',
        client: 'منصة أبو كيان الرقمية',
        stats: '+60K تنزيل',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80',
        description: 'إدارة التحديثات والتفاعل مع مراجعات المستهلكين ورفع السيرفرات.'
      }
    ],
    testimonials: [
      {
        id: 't7-1',
        clientName: 'الشيخ أسامة الجعفري',
        clientTitle: 'مؤسسة الجعفري للتوريدات',
        rating: 5,
        comment: 'خدمة راقية وسريعة في رفع التطبيق وإدارة صفحات المتجر الرسمي. شكراً جزيلاً.',
        date: '2026-07-05',
        verified: true
      }
    ],
    guarantees: ['تجهيز متطلبات المتاجر الرسمية 100%', 'حل أي ملاحظات مراجعة مجاناً', 'دعم التحديثات المستقبلية']
  },
  {
    id: 'video-editing',
    title: 'خدمات المونتاج',
    description: 'إنتاج ومونتاج الفيديوهات الإعلانية والترويجية والريلز بجودة 4K مع المؤثرات الصوتية.',
    iconName: 'Video',
    bgGradient: 'from-[#EF4444] to-[#DC2626]',
    accentColor: '#EF4444',
    category: 'إنتاج',
    features: ['مونتاج احترافي للريلز والتيك توك', 'إضافة التعليق الصوتي والترجمة', 'مؤثرات بصرية وصوتية ممتازة'],
    priceRange: 'تبدأ من $25 / فيديو',
    estimatedTime: '24 - 48 ساعة',
    rating: 4.9,
    reviewsCount: 176,
    longDescription: 'إنتاج فيديوهات إعلانية وترويجية وريلز تخطف الأنظار بدقة 4K. نصنع مونتاجاً ديناميكياً سريعاً مع تعليق صوتي احترافي، مؤثرات بصرية مذهلة، وموسيقى حصرية تلائم هوية علامتك التجارية وتحفز على المبيعات.',
    persuasivePoints: [
      { title: 'مونتاج موجه لزيادة المبيعات', description: 'نركز على أول 3 ثوانٍ في الفيديو للفت انتباه المشاهد وعدم تجاوز الإعلان.' },
      { title: 'تعليق صوتي ومؤثرات سينمائية', description: 'أصوات تعليق احترافية بلهجات متعددة مع ترجمة نصوص ديناميكية جذابة.' }
    ],
    works: [
      {
        id: 'w8-1',
        title: 'فيديو ترويجي لشركة التسهيل للمقاولات',
        client: 'التسهيل للمقاولات العامة',
        stats: 'أكثر من 150,000 مشاهدة',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=600&auto=format&fit=crop&q=80',
        description: 'إنتاج فيديو موشن جرافيك وتصوير مواقع المعدات الثقيلة بروعة إخراجية.'
      },
      {
        id: 'w8-2',
        title: 'ريلز إعلاني لعبدالله الجعفري للكهرباء',
        client: 'عبدالله الجعفري للكهرباء والبروفايل',
        stats: '+80K تفاعل',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80',
        description: 'مونتاج سينمائي يستعرض إضاءات البروفايل والديكورات الحديثة بكفاءة.'
      }
    ],
    testimonials: [
      {
        id: 't8-1',
        clientName: 'م. عبدالله الجعفري',
        clientTitle: 'الجعفري للكهرباء والبروفايل',
        rating: 5,
        comment: 'المونتاج أظهر أعمالنا بشكل فخم جداً وجلب لنا عشرات الطلبات الجديدة. لمسة إخراجية ساحرة.',
        date: '2026-07-14',
        verified: true
      }
    ],
    guarantees: ['تعديلات غير محدودة على المونتاج حتى الاعتماد', 'تصدير بأعلى دقة 4K 60fps مناسبة لجميع المنصات', 'تسليم سريع خلال 24-48 ساعة']
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: '1',
    title: 'أهلاً بكم في التحديث الجديد لمنصة أبو كيان الرقمية 2026 - من العايدين وكل عام وأنتم بخير',
    date: '2026-07-21',
    category: 'تحديث رئيسي'
  },
  {
    id: '2',
    title: 'للتواصل المباشر مع إدارة المنصة (عبدالحميد داوؤد) مسؤول التصميم والتطوير اتصل أو راسلنا عبر الواتساب: 778215553 (+967)',
    date: '2026-07-21',
    category: 'إدارة المنصة'
  },
  {
    id: '3',
    title: 'منصة أبو كيان تُرحب بجميع العملاء وتوفر خدمة الدفع بكافة العملات: الريال اليمني (ر.ي) • الريال السعودي (ر.س) • الدولار الأمريكي ($)',
    date: '2026-07-20',
    category: 'المدفوعات'
  },
  {
    id: '4',
    title: 'إطلاق باقات التسويق الرقمي والدعاية والإعلان بخصومات خاصة لشركاء النجاح وأبرز العملاء الأوفياء',
    date: '2026-07-20',
    category: 'عروض جديدة'
  },
  {
    id: '5',
    title: 'إضافة قسم خاص لأبرز العملاء الأوفياء وشركاء النجاح مع استعراض الرسائل التقديرية لكل مؤسسة وشركة',
    date: '2026-07-19',
    category: 'ميزة جديدة'
  }
];

export const STORE_APPS: StoreApp[] = [
  {
    id: 'app-1',
    title: 'تطبيق أبو كيان تي في (Abukian TV)',
    subtitle: 'بث مباشر للقنوات والمسلسلات بجودة 4K و بدون تقطيع',
    category: 'apps',
    subCategory: 'تطبيقات الترفيه',
    rating: 4.9,
    reviewsCount: 3420,
    downloads: '+85K تنزيل',
    size: '28 ميجابايت',
    version: 'v3.2.0',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني بالكامل',
    description: 'تطبيق مشغل البث المباشر والقنوات الرياضية والترفيهية والسينما بدون تقطيع. يدعم جميع أجهزة الشاشات الذكية الهواتف والتلفزيون.',
    whatsNew: 'إضافة سيرفرات بث جديدة فائقة السرعة مع تحسين الواجهة وتصنيفات الأفلام والمسلسلات رمضانية 2026.',
    isAbuKianApp: true,
    isPopular: true,
    screenshots: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&q=80',
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80'
    ],
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['اتصال إنترنت عالي السرعة', 'التخزين المؤقت', 'الإشعارات المباشرة', 'العرض فوق التطبيقات الأُخرى']
    },
    comments: [
      { id: 'c1', userName: 'المهندس خالد العفيف', rating: 5, comment: 'تطبيق أسطوري وسريع جداً في البث بدون تقطيع، شكراً لأستاذ عبدالحميد داوؤد على المجهود الرائع.', date: '2026-07-20' },
      { id: 'c2', userName: 'د. سامي المقطري', rating: 5, comment: 'أفضل تطبيق شاشات تلفزيون جربته حتى الآن، السيرفرات قوية جداً.', date: '2026-07-18' }
    ]
  },
  {
    id: 'app-2',
    title: 'تطبيق كيان كاش للمدفوعات الرقمية (KianCash)',
    subtitle: 'إدارة الحسابات والتحويلات بكافة العملات (ر.ي / ر.س / $)',
    category: 'apps',
    subCategory: 'تطبيقات المحاسبة والحسابات',
    rating: 5.0,
    reviewsCount: 2180,
    downloads: '+60K تنزيل',
    size: '34 ميجابايت',
    version: 'v2.1.0',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'تطبيق المحفظة الرقمية الشامل لإدارة التحويلات المالية والسدادات الفورية بكافة العملات الوطنية والأجنبية بكل أمان ودقة.',
    whatsNew: 'دعم السداد الفوري لكروت الإنترنت والشبكات اللاسلكية وتتبع المعاملات عبر WhatsApp.',
    isAbuKianApp: true,
    isPopular: true,
    screenshots: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80'
    ],
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الكاميرا لمسح كود QR', 'الإنترنت والرسائل النصية SMS', 'البصمة للحماية']
    },
    comments: [
      { id: 'c3', userName: 'الشيخ عبدالرحمن الشرعبي', rating: 5, comment: 'سهولة في التعامل وسرعة فائقة في تحويل العملات وتوثيق الحسابات.', date: '2026-07-19' }
    ]
  },
  {
    id: 'app-3',
    title: 'تطبيق مدير شبكات المايكروتك والواي فاي',
    subtitle: 'التحكم بالشبكة، إصدار كروت الإنترنت، ومراقبة المشتركين',
    category: 'apps',
    subCategory: 'تطبيقات الخدمات',
    rating: 4.8,
    reviewsCount: 1950,
    downloads: '+120K تنزيل',
    size: '18 ميجابايت',
    version: 'v4.0.1',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'الأداة الأقوى لأصحاب شبكات الواي فاي وسيرفرات المايكروتك لطباعة الكروت وإغلاق الثغرات ومتابعة سرعات المشتركين.',
    whatsNew: 'طباعة طباعة حرارية فورية مع دعم البارکود ومشاركة الكروت عبر الواتساب مباشرة.',
    isAbuKianApp: true,
    isPopular: true,
    screenshots: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80'
    ],
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الشبكة المحلية LAN/Wi-Fi', 'البلوتوث للطباعة الحرارية', 'التخزين']
    }
  },
  {
    id: 'app-4',
    title: 'تطبيق المصمم العربي والبوستات الإعلانية',
    subtitle: 'صمم شعاراتك وبوستاتك وسيرتك الذاتية في دقائق',
    category: 'apps',
    subCategory: 'تطبيقات التصميم',
    rating: 4.9,
    reviewsCount: 4100,
    downloads: '+90K تنزيل',
    size: '65 ميجابايت',
    version: 'v2.8.5',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني (قوالب برو)',
    description: 'محرر تصاميم عربي شامل يحتوي على آلاف الخطوط العربية والقوالب الجاهزة للإعلانات والمناسبات.',
    whatsNew: 'إضافة أكثر من 500 خط عربي حديث مع إمكانية إزالة الخلفية بضغطة زر باستخدام AI.',
    isAbuKianApp: true,
    isPopular: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['معرض الصور والتخزين', 'الإنترنت']
    }
  },
  {
    id: 'app-5',
    title: 'تطبيق المصحف الشريف الشامل مع الأذكار والتفاسير',
    subtitle: 'قراءة واستماع بدون إنترنت بصوت كبار القراء',
    category: 'apps',
    subCategory: 'تطبيقات إسلامية',
    rating: 5.0,
    reviewsCount: 15400,
    downloads: '+250K تنزيل',
    size: '85 ميجابايت',
    version: 'v5.0.0',
    image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني بالكامل (بدون إعلانات)',
    description: 'تطبيق إسلامي متكامل يحتوي على المصحف الشريف بالخط العثماني، التفسير الميسر، مواقيت الصلاة مع الأذان، وأذكار الصباح والمساء.',
    whatsNew: 'تحديث البوصلة وتحديد اتجاه القبلة بدقة متناهية ودعم الأذكار الصوتية.',
    isAbuKianApp: true,
    isPopular: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الموقع الجغرافي لأوقات الصلاة', 'الصوتيات']
    }
  },
  {
    id: 'app-6',
    title: 'تطبيق المحاسب الذكي ومسجل الديون والعملاء',
    subtitle: 'تسجيل المبيعات والديون والفواتير للأنشطة التجارية',
    category: 'apps',
    subCategory: 'تطبيقات المحاسبة والحسابات',
    rating: 4.8,
    reviewsCount: 1240,
    downloads: '+45K تنزيل',
    size: '22 ميجابايت',
    version: 'v1.9.0',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'برنامج محاسبي مبسط للمحلات والمؤسسات لإدارة الديون، حساب الأرباح، وإرسال كشوفات الحساب للعملاء عبر الواتساب.',
    whatsNew: 'مزامنة سحابية تلقائية لمنع فقدان البيانات عند تغيير الهاتف.',
    isAbuKianApp: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['النسخ الاحتياطي والتخزين', 'الإنترنت']
    }
  },
  {
    id: 'app-7',
    title: 'تطبيق المحادثات والتواصل الفوري KianChat',
    subtitle: 'تواصل سريع ومشفر مع المجموعات ومشاركة الملفات',
    category: 'apps',
    subCategory: 'تطبيقات التواصل',
    rating: 4.7,
    reviewsCount: 890,
    downloads: '+30K تنزيل',
    size: '42 ميجابايت',
    version: 'v1.5.2',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'تطبيق دردشة ومحادثات آمن وسريع يضمن تشفير البيانات ومشاركة الصور والفيديوهات عالية الجودة.',
    whatsNew: 'إضافة مكالمات صوتية واضحة جداً وتقليل استهلاك بيانات الإنترنت.',
    isAbuKianApp: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الكاميرا والمايكروفون', 'جهات الاتصال', 'الإنترنت']
    }
  },
  {
    id: 'app-8',
    title: 'تطبيق أبعاد الأكاديمي للتعليم والتطوير',
    subtitle: 'دورات تدريبية واختبارات شهادات رقمية معتمدة',
    category: 'apps',
    subCategory: 'تطبيقات تعليمية',
    rating: 4.9,
    reviewsCount: 670,
    downloads: '+20K تنزيل',
    size: '50 ميجابايت',
    version: 'v2.0.0',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'منصة تعليمية تقدم كورسات متخصصة في البرمجة والتسويق والتصميم واللغات مع اختبارات تفاعلية.',
    isAbuKianApp: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الإنترنت', 'التخزين لمشاهدة الفيديو بدون إنترنت']
    }
  },
  {
    id: 'app-9',
    title: 'تطبيق محرر الفيديوهات والمونتاج ProReels',
    subtitle: 'قص الفيديوهات، إضافة المؤثرات، والترجمة التلقائية',
    category: 'apps',
    subCategory: 'تطبيقات المونتاج',
    rating: 4.8,
    reviewsCount: 1450,
    downloads: '+55K تنزيل',
    size: '92 ميجابايت',
    version: 'v3.1.2',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'تطبيق المونتاج الاحترافي لصناع المحتوى والريلز والتيك توك بجودة تصدير تصل إلى 4K 60fps.',
    isAbuKianApp: true,
    developerInfo: {
      name: 'منصة أبو كيان الرقمية',
      owner: 'عبدالحميد داوؤد',
      email: 'support@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['معرض الفيديوهات والتخزين']
    }
  },
  {
    id: 'app-10',
    title: 'تطبيق إدارة الأعمال والمهام اليومية (BizManager)',
    subtitle: 'متابعة المشاريع وتوزيع المهام مع فريق العمل',
    category: 'apps',
    subCategory: 'تطبيقات الأعمال العامة',
    rating: 4.7,
    reviewsCount: 520,
    downloads: '+15K تنزيل',
    size: '30 ميجابايت',
    version: 'v1.8.0',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'تطبيق تنظيم مهام الشركات والمؤسسات ومتابعة الأداء مع إشعارات تنبيهية للمواعيد النهائية.',
    isAbuKianApp: false,
    developerInfo: {
      name: 'المطور الشريك - BizTech Global',
      owner: 'فريق البرمجيات الدولية',
      email: 'dev@biztech.com',
      website: 'https://biztech.com',
      supportPhone: '778215553',
      permissions: ['الإنترنت', 'الإشعارات']
    }
  },

  // GAMES SECTION (الألعاب المشوقة)
  {
    id: 'game-1',
    title: 'لعبة أسطورة الشوارع والسباقات 3D (Street Legends)',
    subtitle: 'تحديات السيارات الحقيقية أونلاين وتعديل المحركات',
    category: 'games',
    subCategory: 'ألعاب سباق وإثارة',
    rating: 4.9,
    reviewsCount: 5200,
    downloads: '+180K تنزيل',
    size: '280 ميجابايت',
    version: 'v2.1.0',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'لعبة سباقات السيارات الأولى باللغة العربية بجرعة إثارة عالية، مضامير حقيقية، وتحديات مع لاعبين من كافة الدول.',
    whatsNew: 'إضافة 12 سيارة رياضية جديدة، حلبة صحراوية جديدة، وتعديل الأصوات الواقعية للمحركات.',
    isAbuKianApp: true,
    isPopular: true,
    isNew: true,
    screenshots: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80'
    ],
    developerInfo: {
      name: 'استوديو ألعاب أبو كيان الرقمي',
      owner: 'عبدالحميد داوؤد',
      email: 'games@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['معالج الجرافيك 3D', 'الاتصال أونلاين', 'حفظ التقدم']
    },
    comments: [
      { id: 'cg1', userName: 'الكابتن طارق', rating: 5, comment: 'لعبة خرافية والجرافيكس عالي الجودة جداً، التعديلات على السيارات حقيقية!', date: '2026-07-20' }
    ]
  },
  {
    id: 'game-2',
    title: 'لعبة صقور الصحراء والمعارك الاستراتيجية',
    subtitle: 'ابنِ قلعتك ووجّه جيوشك للاستيلاء على الموارد',
    category: 'games',
    subCategory: 'ألعاب استراتيجية واكشن',
    rating: 4.8,
    reviewsCount: 3100,
    downloads: '+95K تنزيل',
    size: '410 ميجابايت',
    version: 'v1.4.0',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=80',
    price: 'مجاني',
    description: 'لعبة الحروب العربية الاستراتيجية المباشرة مع إمكانية تحالف القادة وبناء الجيوش القوية والحصون.',
    isAbuKianApp: true,
    isPopular: true,
    developerInfo: {
      name: 'استوديو ألعاب أبو كيان الرقمي',
      owner: 'عبدالحميد داوؤد',
      email: 'games@abukian.com',
      website: 'https://abukian.com',
      supportPhone: '778215553',
      permissions: ['الإنترنت', 'حفظ ألعاب السحاب']
    }
  },

  // PACKAGES & SUBSCRIPTIONS SECTION (الباقات والاشتراكات)
  {
    id: 'pkg-1',
    title: 'باقة التسويق والدعاية والإعلان الذهبية 2026',
    subtitle: 'حملات ممولة، تصميم 20 بوست، فيديو موشن، وإدارة حسابات',
    category: 'subscriptions',
    subCategory: 'الباقات المميزة',
    rating: 5.0,
    reviewsCount: 450,
    downloads: '+1.5K باقة',
    size: 'خدمة متكاملة',
    version: 'اصدار 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80',
    price: 'ر.ي 85,000 / $120',
    description: 'الباقة الأكثر طلباً للشركات والمؤسسات والمحلات التجارية لشهر كامل من الدعاية والإعلان والوصول للعملاء الحقيقيين.',
    isPopular: true,
    isAbuKianApp: true
  },
  {
    id: 'pkg-2',
    title: 'باقة تصميم المتجر والتطبيق الإلكتروني الخاص',
    subtitle: 'متجر إلكتروني + تطبيق أندرويد وآيفون مع رفع المتاجر',
    category: 'subscriptions',
    subCategory: 'الباقات المميزة',
    rating: 5.0,
    reviewsCount: 310,
    downloads: '+800 متجر',
    size: 'برمجة خاصة',
    version: 'v2026.1',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&auto=format&fit=crop&q=80',
    price: 'ر.ي 220,000 / $350',
    description: 'بناء متجرك وتطبيقك الرقمي الخاص بكامل الصلاحيات ولوحة تحكم عربية سهلة الاستخدام مع ربط طرق الدفع والواتساب.',
    isPopular: true,
    isAbuKianApp: true
  },

  // TOP-UP & RECHARGE SECTION (شحن التطبيقات والخدمات)
  {
    id: 'topup-1',
    title: 'شحن شدات ببجي وجواهر فري فاير (PUBG UC & Free Fire)',
    subtitle: 'شحن فوري برقم الآيدي (ID) بكافة العملات',
    category: 'services',
    subCategory: 'شحن التطبيقات والخدمات',
    rating: 4.9,
    reviewsCount: 8900,
    downloads: '+50K شحنة',
    size: 'تسليم فوري',
    version: 'تلقائي',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=80',
    price: 'أسعار الجملة الفورية',
    description: 'شحن مباشر ومضمون 100% لجميع الألعاب والبطاقات الرقمية برقم اللاعب ID مع إيصال رسمي سريح.',
    isPopular: true,
    isAbuKianApp: true
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'هوية بصرية كاملة لمطعم الفخامة',
    category: 'تصميم هويات',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80',
    description: 'تصميم المنيو، اللوجو، المطبوعات، والحملة الإعلانية الافتتاحية للمطعم مع أداء قياسي.',
    clientName: 'شركة الفخامة للضيافة',
    year: '2026',
    tags: ['لوجو', 'منيو', 'حملة إعلانية']
  },
  {
    id: 'proj-2',
    title: 'متجر إلكتروني شامل لبيع العطور والبخور',
    category: 'تطوير متاجر',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&auto=format&fit=crop&q=80',
    description: 'بناء متجر إلكتروني متكامل باللغتين العربية والإنجليزية مع ربط بوابات الدفع وشركات الشحن.',
    clientName: 'عطور الأسطورة',
    year: '2026',
    tags: ['متجر إلكتروني', 'UI/UX', 'دفع إلكتروني']
  },
  {
    id: 'proj-3',
    title: 'حملة تسويقية ممولة لمنصة تعليمية',
    category: 'تسويق إلكتروني',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    description: 'حققت الحملة أكثر من 1.2 مليون مشاهدة و 15,000 تسجيل جديد خلال 14 يوماً فقط.',
    clientName: 'منصة أكاديميا',
    year: '2025',
    tags: ['حملة ممولة', 'ترايد', 'سوشيال ميديا']
  },
  {
    id: 'proj-4',
    title: 'فيديو موشن جرافيك ترويجي لتطبيق بنكي',
    category: 'مونتاج وإنتاج',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
    description: 'فيديو موشن جرافيك بدقة 4K يعرض مميزات التطبيق بأسلوب مبتكر وموسيقى تصويرية خاصة.',
    clientName: 'محفظة كاش الرقمية',
    year: '2026',
    tags: ['موشن جرافيك', 'صوتيات', 'ريلز']
  }
];

export const AI_TOOLS_LIST: AITool[] = [
  {
    id: 'ai-ad-writer',
    title: 'مولد الإعلانات الاحترافية',
    description: 'اكتب اسم منتجك واحصل فوراً على 3 نماذج إعلانية جذابة مع الهاشتاغات والعناوين الرئيسية.',
    icon: 'Sparkles',
    placeholder: 'مثال: عطور رجالية فاخرة ثبات 24 ساعة مع توصيل مجاني...',
    category: 'تسويق'
  },
  {
    id: 'ai-social-caption',
    title: 'كاتب بوستات السوشيال ميديا',
    description: 'قم بتوليد منشورات تفاعلية لفيسبوك وإنستغرام مع إيموجيات جذابة وأسئلة للتفاعل.',
    icon: 'FileText',
    placeholder: 'اكتب موضوع المنشور أو الفكرة الأساسية...',
    category: 'محتوى'
  },
  {
    id: 'ai-logo-ideas',
    title: 'مبتكر أفكار الشعارات الهوية',
    description: 'احصل على أفكار أيقونات وألوان وشعارات لفظية لعلامتك التجارية بالذكاء الاصطناعي.',
    icon: 'Palette',
    placeholder: 'اسم شركتك وطبيعة مجال العمل...',
    category: 'تصميم'
  },
  {
    id: 'ai-video-script',
    title: 'كاتب سيناريو فيديوهات الريلز',
    description: 'ولّد سيناريو فيديو قصير (15-30 ثانية) مع المشاهد والتعليق الصوتي المناسب.',
    icon: 'Video',
    placeholder: 'عن ماذا تريد أن تتحدث في الفيديو؟',
    category: 'فيديو'
  }
];

export const WIFI_CONNECTED_DEVICES: WifiNetworkDevice[] = [
  { id: '1', name: 'iPhone 15 Pro Max', ip: '192.168.1.102', mac: 'BC:D1:D3:88:99:A1', signal: 'excellent', connectedAt: 'منذ ساعتين', speed: '45 Mbps' },
  { id: '2', name: 'Samsung Smart TV 65"', ip: '192.168.1.115', mac: '70:2A:D5:11:22:B4', signal: 'excellent', connectedAt: 'منذ 5 ساعات', speed: '80 Mbps' },
  { id: '3', name: 'MacBook Air M2', ip: '192.168.1.108', mac: 'A4:83:E7:44:11:00', signal: 'good', connectedAt: 'منذ 30 دقيقة', speed: '60 Mbps' },
  { id: '4', name: 'PlayStation 5', ip: '192.168.1.120', mac: '00:D8:61:55:77:33', signal: 'excellent', connectedAt: 'منذ 4 ساعات', speed: '95 Mbps' }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    title: 'مرحباً بك في منصة أبو كيان الرقمية 2026',
    message: 'سعداء بوجودك معنا! يمكنك الآن الدفع والتسوق بكافة العملات المحلية والدولية (ريال يمني، ريال سعودي، دولار).',
    time: 'منذ 10 دقائق',
    read: false,
    type: 'success'
  },
  {
    id: 'n2',
    title: 'عرض خاص على تمويل الصفحات',
    message: 'احصل على خصم 30% على جميع حملات الفيسبوك والانستغرام هذا الأسبوع.',
    time: 'منذ ساعتين',
    read: false,
    type: 'promo'
  },
  {
    id: 'n3',
    title: 'تم إضافة أدوات الذكاء الاصطناعي 2026',
    message: 'جرب مولد النصوص الإعلانية الجديد واجعل إعلاناتك أكثر جاذبية بضغطة زر.',
    time: 'منذ يوم',
    read: false,
    type: 'info'
  }
];

export const PLATFORM_INFO = {
  name: 'منصة أبو كيان الرقمية',
  leaderName: 'عبدالحميد داوؤد',
  leaderRole: 'مسؤول التصميم والدعاية والإعلان والتسويق والبرمجة والتطوير',
  phone: '778215553',
  phoneFull: '+967 778215553',
  whatsappUrl: 'https://wa.me/967778215553',
  currencies: [
    { code: 'YER', symbol: 'ر.ي', name: 'ريال يمني', rateText: '1$ = 530 ر.ي (صنعاء) / 1680 ر.ي (عدن)' },
    { code: 'SAR', symbol: 'ر.س', name: 'ريال سعودي', rateText: '1$ = 3.75 ر.س' },
    { code: 'USD', symbol: '$', name: 'دولار أمريكي', rateText: 'العملة الأساسية' }
  ]
};

export const LOYAL_CLIENTS: ClientItem[] = [
  {
    id: 'c1',
    name: 'عيادة ومختبرات الجعفري الحديثة',
    subtitle: 'خدمات طبية وتشخيصية متكاملة بأحدث الأجهزة',
    category: 'القطاع الطبي والصحي',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'شكراً لعيادة ومختبرات الجعفري الحديثة على ثقتكم الدائمة بنا لتعزيز حضوركم الرقمي وخدمة المرضى بأعلى معايير الدقة والاهتمام.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  },
  {
    id: 'c2',
    name: 'مركز الزيادي الطبي',
    subtitle: 'الرعاية الصحية الشاملة والاستشارات التخصصية',
    category: 'المراكز الطبية والمستشفيات',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'فخورون بشراكتنا الناجحة مع مركز الزيادي الطبي ومرافقتهم في مسيرة التميز الرقمي وخدمة المجتمع بكفاءة عالية.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  },
  {
    id: 'c3',
    name: 'بشار منصر للصرافة والتحويل',
    subtitle: 'خدمات مالية وتحويلات سريعة وآمنة بجميع العملات',
    category: 'القطاع المصرفي والمالي',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'أنتم عنوان الثقة والسرعة المالية، نعتز بتقديم خدمات التسويق والهوية لشبكة تحويلاتكم الراسخة.',
    partnershipYear: 'شريك نجاح منذ 2022',
    verified: true
  },
  {
    id: 'c4',
    name: 'بن عائض للصرافة والتحويل',
    subtitle: 'حلول المبادلات النقدية والتحويلات المحلية والدولية',
    category: 'الصرافة والتحويلات',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'كل الامتنان لإدارة بن عائض للصرافة والتحويل على اختيارهم منصة أبو كيان لتطوير علامتهم التجارية وتوسيع انتشارهم.',
    partnershipYear: 'شريك نجاح منذ 2024',
    verified: true
  },
  {
    id: 'c5',
    name: 'أسامة الجعفري لأجود انواع القات العال',
    subtitle: 'تجارة واستيراد أجود الأصناف الفاخرة العالية الجودة',
    category: 'التجارة والتوريدات الفاخرة',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'كل الثناء والتقدير للشيخ أسامة الجعفري على التعامل الرفيع والأخلاق العالية، شراكتكم نعتز بها ونفخر دائماً بدعم أعمالكم.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  },
  {
    id: 'c6',
    name: 'مؤسسة النفوي للتجارة والمقاولات والإستثمار العقاري',
    subtitle: 'تطوير عقاري ومشاريع مقاولات واستثمار حديث',
    category: 'العقارات والاستثمار',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'صناع الصروح والأبنية الشامخة، شرفنا بتعزيز حضوركم الإعلاني وتوثيق مشاريعكم الاستثمارية الناجحة بأحدث التقنيات.',
    partnershipYear: 'شريك نجاح منذ 2022',
    verified: true
  },
  {
    id: 'c7',
    name: 'التسهيل للمقاولات العامة وتأجير أدوات ومستلزمات المقاولين',
    subtitle: 'معدات بناء ثقيلة وتأجير المستلزمات الهندسية',
    category: 'المقاولات والخدمات اللوجستية',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'شكراً لمؤسسة التسهيل للمقاولات على روح التعاون والعمل الجاد، نسعد بكوننا الذراع التسويقية والتقنية لنجاحكم المستمر.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  },
  {
    id: 'c8',
    name: 'عبدالله الجعفري لجميع أعمال الكهرباء والبروفايل',
    subtitle: 'تأسيس وتشطيب الديكورات الضوئية والشبكات الكهربائية',
    category: 'الخدمات الفنية والديكور',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'إبداع منقطع النظير في لمساتكم الفنية الهندسية، نحرص على إبراز أعمالكم الراقية لكل العملاء بلمسة رقمية فريدة.',
    partnershipYear: 'شريك نجاح منذ 2024',
    verified: true
  },
  {
    id: 'c9',
    name: 'مكتب سماء للمقاولات والإستشارات الهندسية/المهندس أنس الأنسي',
    subtitle: 'استشارات هندسية وتصاميم معمارية وخرائط راقية',
    category: 'الهندسة والتخطيط المعماري',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'خالص التقدير للمهندس القدير أنس الأنسي ومكتب سماء الهندسي، رؤيتكم المعمارية تلهمنا دائماً للارتقاء بالتصاميم الرقمية.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  },
  {
    id: 'c10',
    name: 'شبكة الأمير نت',
    subtitle: 'حلول الاتصالات والبث اللاسلكي للإنترنت السريع',
    category: 'شبكات الاتصالات والإنترنت',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'رواد التوصيل والشبكات اللاسلكية، نفخر بتوفير الدعم البرمجي وأنظمة المايكروتك المتقدمة لشبكتكم الرائدة.',
    partnershipYear: 'شريك نجاح منذ 2022',
    verified: true
  },
  {
    id: 'c11',
    name: 'اليأسر للصرافة والتحويل',
    subtitle: 'ثقة، أمان، وسرعة فائقة في التعاملات المصرفية',
    category: 'الخدمات المالية والمصرفية',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'تحية إجلال لمؤسسة اليأسر للصرافة على الشراكة المثمرة والعمل الدؤوب، دمتم صرحاً مالياً يشار إليه بالبنان في كل مكان.',
    partnershipYear: 'شريك نجاح منذ 2024',
    verified: true
  },
  {
    id: 'c12',
    name: 'مكتب ابو شهاب للخدمات العامة',
    subtitle: 'تسهيل وتخليص المعاملات الحكومية والتجارية بموثوقية',
    category: 'الخدمات العامة وتسهيل المعاملات',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80',
    heartMessage: 'كل الشكر لمكتب أبو شهاب للخدمات العامة على الأمانة والسرعة، يسعدنا دوماً أن نكون شريككم التقني والإعلامي المفضل.',
    partnershipYear: 'شريك نجاح منذ 2023',
    verified: true
  }
];

