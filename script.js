```javascript
"use strict";

/*
 * MH — Web Design & Digital Solutions
 * Note: Contact/consultation forms are demo-only until
 * a Google Sheets submission endpoint is connected and tested.
 */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const translations = {
  ar: {
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navPackages: "الباقات",
    navAbout: "من نحن",
    navJobs: "الوظائف",
    navContact: "تواصل معنا",
    navCTA: "اطلب استشارة",
    footerDescription:
      "نصمم ونطوّر مواقع ويب احترافية تساعد أعمالك على بناء حضور رقمي واضح وموثوق.",
    quickLinks: "روابط سريعة",
    footerServices: "خدماتنا",
    footerCompany: "الشركة",
    footerLegal: "السياسات",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام",
    copyright: "جميع الحقوق محفوظة.",
    backToTop: "العودة إلى الأعلى",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundText: "عذرًا، لم نتمكن من العثور على الصفحة المطلوبة.",
    homeButton: "العودة للرئيسية",
    servicesTitle: "خدماتنا",
    servicesIntro:
      "حلول ويب عملية تساعد مشروعك على الظهور بصورة احترافية والنمو بثقة.",
    packagesTitle: "الباقات",
    packagesIntro:
      "خيارات مرنة تناسب احتياجات المشاريع المختلفة، مع عرض سعر مخصص لكل مشروع.",
    aboutTitle: "من نحن",
    aboutIntro:
      "MH شركة متخصصة في تصميم وتطوير المواقع والحلول الرقمية العملية للأعمال.",
    jobsTitle: "انضم إلى شبكة MH",
    jobsIntro:
      "نتعاون مع المواهب المناسبة ونبحث عن أشخاص لديهم الرغبة في التعلم وتحقيق نتائج واضحة.",
    contactTitle: "تواصل معنا",
    contactIntro:
      "أخبرنا عن مشروعك واحتياجاتك، وسنساعدك على تحديد الخطوة التالية.",
    consultationTitle: "اطلب استشارة مجانية",
    consultationIntro:
      "شاركنا فكرة مشروعك وبعض التفاصيل الأساسية لنفهم احتياجاتك.",
    details: "التفاصيل",
    learnMore: "اعرف المزيد",
    requestPackage: "استفسر عن الباقة",
    applyNow: "قدّم الآن",
    sendRequest: "إرسال الطلب",
    sendContact: "إرسال الرسالة",
    requiredNote: "الحقول المعلّمة مطلوبة.",
    demoNotice:
      "النموذج غير متصل بعد بنظام استقبال الطلبات. لن يتم إرسال البيانات أو حفظها حاليًا.",
    formDemoSuccess:
      "هذا نموذج تجريبي فقط؛ لم يتم إرسال بياناتك أو حفظها. سنفعّل الإرسال بعد ربطه واختباره.",
    name: "الاسم الكامل",
    whatsapp: "رقم واتساب",
    project: "اسم الشركة أو المشروع",
    businessType: "نوع النشاط",
    existingWebsite: "هل لديك موقع حالي؟",
    budget: "الميزانية المتوقعة",
    contactTime: "الوقت المناسب للتواصل",
    description: "وصف مختصر للمشروع",
    email: "البريد الإلكتروني (اختياري)",
    chooseOption: "اختر من القائمة",
    noWebsite: "لا يوجد",
    hasWebsite: "نعم، لدي موقع",
    redesign: "أريد إعادة تصميم موقعي",
    businessTypePlaceholder: "مثال: شركة خدمات أو عيادة",
    budget1: "أقل من 10,000 جنيه",
    budget2: "10,000–20,000 جنيه",
    budget3: "20,000–35,000 جنيه",
    budget4: "35,000–50,000 جنيه",
    budget5: "أكثر من 50,000 جنيه",
    budget6: "غير محددة، أحتاج إلى استشارة",
    time1: "صباحًا",
    time2: "ظهرًا",
    time3: "مساءً",
    time4: "أي وقت مناسب",
    aboutMission: "مهمتنا",
    aboutMissionText:
      "تقديم مواقع وحلول ويب تجمع بين التصميم الاحترافي وسهولة الاستخدام والاحتياجات الحقيقية للعمل.",
    aboutVision: "رؤيتنا",
    aboutVisionText:
      "أن نكون شريكًا موثوقًا للأعمال التي تسعى إلى حضور رقمي قوي وقابل للتطوير.",
    aboutApproach: "كيف نعمل",
    aboutApproachText:
      "نبدأ بفهم المشروع، ثم نحدد النطاق والمتطلبات بوضوح قبل التصميم والتطوير والاختبار والتسليم.",
    whyTitle: "لماذا MH؟",
    whyIntro: "نعمل على تقديم تجربة واضحة ومنظمة من بداية المشروع وحتى التسليم.",
    processTitle: "كيف نعمل؟",
    processIntro: "خطوات واضحة تساعد على تنظيم العمل وتقليل المفاجآت.",
    process1: "التواصل والاستشارة",
    process1Text: "نفهم نشاطك وأهدافك وما تحتاج إليه.",
    process2: "تحديد المتطلبات",
    process2Text: "نتفق على نطاق المشروع والصفحات والوظائف المطلوبة.",
    process3: "العرض والاتفاق",
    process3Text: "نوضح التكلفة والجدول الزمني والتعديلات والضمان في الاتفاق.",
    process4: "التصميم والتطوير",
    process4Text: "نحوّل المتطلبات إلى تجربة ويب مناسبة لنشاطك.",
    process5: "المراجعة والتعديلات",
    process5Text: "تراجع العمل وتُنفّذ التعديلات المتفق عليها.",
    process6: "الاختبار والتجهيز",
    process6Text: "نختبر الصفحات والتوافق والأداء قبل التسليم.",
    process7: "التسليم والدعم",
    process7Text: "تستلم المشروع وفق بنود الاتفاق ونطاق الدعم المحدد.",
    trustTitle: "معايير العمل",
    trust1: "متوافق مع الأجهزة",
    trust1Text: "تجربة مناسبة للهاتف والكمبيوتر.",
    trust2: "اهتمام بالأداء",
    trust2Text: "مراعاة سرعة التحميل وجودة التنفيذ.",
    trust3: "اتفاق واضح",
    trust3Text: "نطاق وتكلفة وجدول زمني محدد.",
    trust4: "تسليم منظم",
    trust4Text: "تسليم الملفات وفق الاتفاق.",
    ctaTitle: "هل لديك فكرة لمشروعك؟",
    ctaText: "ابدأ بمشاركة فكرتك، وسنساعدك في تحديد المتطلبات المناسبة.",
    ctaButton: "ابدأ من هنا",
    customQuote: "يُحدّد السعر بعد فهم متطلبات المشروع.",
    included: "مناسبة لمن",
    features: "ماذا تشمل",
    packageCTA: "لنتحدث عن مشروعك",
    jobDeveloper: "مطوّر مواقع مستقل",
    jobDeveloperText:
      "نبحث عن مطوري ويب للتعاون في مشاريع قادمة، من التصميم والتطوير إلى الاختبار والإطلاق.",
    jobSales: "مندوب مبيعات",
    jobSalesText:
      "فرصة عمل عن بُعد للتواصل مع الشركات الصغيرة والمتوسطة والتعريف بخدمات MH.",
    jobTypeFreelance: "تعاون حر حسب المشروع",
    jobTypeRemote: "عن بُعد",
    jobTypeCommission: "نظام قائم على النتائج والعمولة في البداية",
    jobDeveloperDetails:
      "نبحث عن مطور يمتلك خبرة قوية وأعمالًا سابقة يمكن عرضها، ويستطيع التعاون على تنفيذ مواقع ويب بجودة عالية.",
    jobDeveloperRequirements:
      "خبرة قوية في تطوير الويب، فهم جيد لتجربة المستخدم، ومحفظة أعمال. قد تشمل المشاريع WordPress أو React أو Next.js أو الواجهات الخلفية وواجهات API وتحسين الأداء.",
    jobSalesDetails:
      "يشمل العمل البحث عن عملاء محتملين عبر مصادر مثل Google Maps وFacebook وInstagram، والتواصل معهم وفهم احتياجاتهم ومتابعة الفرص حتى إتمام الاتفاق.",
    jobSalesRequirements:
      "لا يشترط وجود خبرة سابقة. نوفر تدريبًا ودعمًا عبر الإنترنت. يعتمد المقابل في البداية على النتائج والعمولة، وتُناقش التفاصيل خلال المقابلة.",
    jobConditions: "طبيعة التعاون والتفاصيل المالية تُوضّح قبل الاتفاق.",
    applyDeveloper: "التقديم لوظيفة مطوّر المواقع",
    applySales: "التقديم لوظيفة مندوب المبيعات",
    privacyIntro:
      "توضح هذه السياسة كيفية التعامل مع المعلومات التي تقدمها عند استخدام موقع MH.",
    privacyData: "المعلومات التي تقدمها",
    privacyDataText:
      "قد تتضمن المعلومات الاسم ووسيلة التواصل وتفاصيل المشروع والميزانية وأي معلومات تختار مشاركتها عبر النماذج.",
    privacyUse: "كيف نستخدم المعلومات",
    privacyUseText:
      "تُستخدم المعلومات للرد على الاستفسارات وفهم متطلبات المشاريع والتواصل بشأن الخدمات أو فرص التعاون.",
    privacyServices: "الخدمات الخارجية",
    privacyServicesText:
      "قد نستخدم خدمات خارجية مثل Google Forms وGoogle Sheets عند تفعيل النماذج. تخضع البيانات حينها لشروط وسياسات مزوّد الخدمة.",
    privacySafety: "حماية المعلومات",
    privacySafetyText:
      "نتخذ خطوات تنظيمية وتقنية مناسبة لحماية المعلومات، لكن لا يمكن ضمان أمن أي نظام إلكتروني بصورة مطلقة.",
    privacyContact: "الاستفسارات",
    privacyContactText:
      "يمكنك التواصل معنا عبر وسائل الاتصال التي ستُعلن على الموقع عند تفعيلها.",
    termsIntro:
      "تنظم هذه الشروط استخدام الموقع وطريقة الاتفاق على خدمات MH.",
    termsScope: "نطاق المشروع",
    termsScopeText:
      "يحدد الاتفاق الخاص بكل مشروع نطاق العمل والتكلفة والجدول الزمني والمخرجات والتعديلات والضمان.",
    termsPayment: "الدفع",
    termsPaymentText:
      "خطة الدفع الافتراضية هي 50% مقدمًا و50% عند التسليم، ما لم يُتفق كتابةً على غير ذلك.",
    termsOwnership: "الملكية والتسليم",
    termsOwnershipText:
      "تُنقل ملكية ملفات المشروع الأساسية إلى العميل وفق بنود الاتفاق وبعد استيفاء الالتزامات المالية.",
    termsRevisions: "التعديلات",
    termsRevisionsText:
      "تشمل التعديلات ما ينص عليه العرض أو الباقة. أما الإضافات الجديدة أو تغيير نطاق المشروع فقد تتطلب تكلفة ومدة إضافيتين.",
    termsWarranty: "الضمان الفني",
    termsWarrantyText:
      "يشمل الضمان الافتراضي 30 يومًا للأخطاء التقنية ضمن نطاق العمل المتفق عليه، ولا يشمل الميزات الجديدة أو التغييرات خارج النطاق.",
    termsSchedule: "الجدول الزمني",
    termsScheduleText:
      "يعتمد التنفيذ على نطاق المشروع وتوفير العميل للمحتوى والمواد والموافقات المطلوبة في الوقت المناسب.",
    termsChanges: "التغييرات",
    termsChangesText:
      "تُناقش أي تغييرات في النطاق أو التكلفة أو المدة ويُتفق عليها قبل تنفيذها.",
    termsUse: "استخدام الموقع",
    termsUseText:
      "يُرجى عدم إساءة استخدام الموقع أو محاولة تعطيله أو استخدام نماذجه لأغراض غير مشروعة.",
    service1: "تصميم وتطوير المواقع",
    service1Text: "مواقع احترافية تعكس نشاطك وتعرض خدماتك بصورة واضحة.",
    service2: "إعادة تصميم المواقع",
    service2Text: "تحديث تصميم موقعك وتحسين تجربة المستخدم والتنظيم.",
    service3: "تحسين المواقع الحالية",
    service3Text: "تحسين تجربة الاستخدام والأداء وتنظيم المحتوى.",
    service4: "كتابة المحتوى",
    service4Text: "محتوى واضح ومنظم يساعد الزوار على فهم خدماتك.",
    service5: "الهوية والشعار",
    service5Text: "هوية بصرية أساسية تعزز تميّز علامتك التجارية.",
    service6: "تحسين محركات البحث",
    service6Text: "أساسيات SEO التقنية والمحتوى لتهيئة الموقع للظهور.",
    service7: "الصيانة والدعم",
    service7Text: "دعم وصيانة وفق نطاق الخدمة المتفق عليه.",
    package1: "Launch",
    package1Text: "بداية عملية للمشروعات الصغيرة أو الوجود الرقمي الأساسي.",
    package2: "Starter",
    package2Text: "خيار مناسب للأعمال التي تحتاج إلى موقع تعريفي واضح.",
    package3: "Business",
    package3Text: "حل متوازن للشركات التي تحتاج إلى عرض خدماتها باحترافية.",
    package4: "Professional",
    package4Text: "موقع أوسع بمحتوى وصفحات واحتياجات أكثر تقدمًا.",
    package5: "Premium",
    package5Text: "حل متقدم للمشاريع التي تحتاج إلى تجربة ومحتوى مخصصين.",
    package6: "Custom",
    package6Text: "حل يُصمم وفق متطلبات مشروعك الخاصة.",
    package1Who: "مشروع ناشئ يحتاج إلى حضور رقمي بسيط.",
    package2Who: "نشاط يريد موقعًا تعريفيًا منظمًا.",
    package3Who: "شركة تريد عرض خدماتها وتفاصيلها بصورة احترافية.",
    package4Who: "مشروع يحتاج إلى صفحات ومحتوى أكثر تفصيلًا.",
    package5Who: "نشاط يحتاج إلى تجربة ويب مخصصة واهتمام أكبر بالتفاصيل.",
    package6Who: "مشروع لديه متطلبات خاصة أو نطاق عمل غير تقليدي.",
    package1Feature1: "تخطيط وتصميم أساسي",
    package1Feature2: "صفحات ومحتوى حسب الاتفاق",
    package1Feature3: "تصميم متوافق مع الهاتف",
    package2Feature1: "تصميم متناسق مع الهوية",
    package2Feature2: "صفحات تعريفية أساسية",
    package2Feature3: "نموذج تواصل عند الحاجة",
    package3Feature1: "هيكل صفحات مناسب للنشاط",
    package3Feature2: "عرض منظم للخدمات",
    package3Feature3: "تهيئة أساسية لمحركات البحث",
    package4Feature1: "صفحات ومحتوى موسع",
    package4Feature2: "تخصيص أكبر للتصميم",
    package4Feature3: "اهتمام بالأداء وSEO",
    package5Feature1: "تصميم أكثر تخصيصًا",
    package5Feature2: "تنظيم محتوى متقدم",
    package5Feature3: "مراجعة دقيقة للأداء والتجربة",
    package6Feature1: "نطاق عمل يُحدّد حسب المشروع",
    package6Feature2: "مخرجات وجدول زمني مخصصان",
    package6Feature3: "عرض سعر بعد دراسة المتطلبات",
    serviceDetailTitle: "تفاصيل الخدمة",
    packageDetailTitle: "تفاصيل الباقة",
    jobDetailTitle: "تفاصيل الوظيفة",
    serviceDetailIntro:
      "نحدد نطاق الخدمة وفق احتياجات نشاطك وأهداف مشروعك.",
    packageDetailIntro:
      "المحتويات النهائية والمدة والتكلفة تُحدّد بعد مناقشة المتطلبات.",
    jobDetailIntro:
      "راجع التفاصيل والمتطلبات ثم استخدم رابط التقديم الخاص بالفرصة.",
    why1: "تصميم متجاوب",
    why1Text: "واجهة تراعي أحجام الشاشات المختلفة.",
    why2: "وضوح من البداية",
    why2Text: "نتفق على النطاق والتكلفة والمخرجات قبل التنفيذ.",
    why3: "اهتمام بالتفاصيل",
    why3Text: "نراجع تنظيم المحتوى وتجربة الاستخدام والأداء.",
    why4: "تسليم وفق الاتفاق",
    why4Text: "تكون الملفات والمخرجات واضحة ضمن بنود المشروع.",
    contactFormTitle: "أرسل تفاصيل مشروعك",
    consultationFormTitle: "معلومات الاستشارة",
    serviceQuestion: "هل لديك خدمة معينة تحتاج إليها؟",
    chooseService: "اختر الخدمة",
    serviceOption1: "تصميم وتطوير المواقع",
    serviceOption2: "إعادة تصميم موقع",
    serviceOption3: "تحسين موقع قائم",
    serviceOption4: "كتابة المحتوى",
    serviceOption5: "الهوية والشعار",
    serviceOption6: "تحسين محركات البحث",
    serviceOption7: "الصيانة والدعم",
    serviceOption8: "أحتاج إلى المساعدة في الاختيار",
    footerCareers: "الوظائف والتعاون",
    careersCTA: "استكشف فرص التعاون",
    noPrice: "السعر حسب متطلبات المشروع",
    back: "رجوع",
    optional: "اختياري",
    privacyShort:
      "نستخدم المعلومات التي تقدمها فقط للأغراض الموضحة في سياسة الخصوصية.",
    loading: "جارٍ التحميل..."
  },

  en: {
    navHome: "Home",
    navServices: "Services",
    navPackages: "Packages",
    navAbout: "About",
    navJobs: "Careers",
    navContact: "Contact",
    navCTA: "Get a Consultation",
    footerDescription:
      "We design and develop professional websites that help businesses build a clear, credible online presence.",
    quickLinks: "Quick Links",
    footerServices: "Services",
    footerCompany: "Company",
    footerLegal: "Policies",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    copyright: "All rights reserved.",
    backToTop: "Back to top",
    notFoundTitle: "Page Not Found",
    notFoundText: "Sorry, we couldn't find the page you're looking for.",
    homeButton: "Back to Home",
    servicesTitle: "Our Services",
    servicesIntro:
      "Practical web solutions that help your business look professional and grow with confidence.",
    packagesTitle: "Packages",
    packagesIntro:
      "Flexible options for different project needs, with a custom quote for every project.",
    aboutTitle: "About MH",
    aboutIntro:
      "MH specializes in website design, development, and practical digital solutions for businesses.",
    jobsTitle: "Join the MH Network",
    jobsIntro:
      "We collaborate with the right talent and welcome people eager to learn and deliver results.",
    contactTitle: "Contact Us",
    contactIntro:
      "Tell us about your project and needs, and we'll help you identify the next step.",
    consultationTitle: "Request a Free Consultation",
    consultationIntro:
      "Share your project idea and a few details so we can understand your needs.",
    details: "Details",
    learnMore: "Learn More",
    requestPackage: "Ask About This Package",
    applyNow: "Apply Now",
    sendRequest: "Submit Request",
    sendContact: "Send Message",
    requiredNote: "Fields marked required must be completed.",
    demoNotice:
      "This form is not connected to a submission system yet. Your data will not be sent or saved.",
    formDemoSuccess:
      "This is a demo form only. Your information has not been sent or saved. Submission will be enabled after integration and testing.",
    name: "Full Name",
    whatsapp: "WhatsApp Number",
    project: "Company or Project Name",
    businessType: "Business Type",
    existingWebsite: "Do you have an existing website?",
    budget: "Estimated Budget",
    contactTime: "Preferred Contact Time",
    description: "Brief Project Description",
    email: "Email (optional)",
    chooseOption: "Choose an option",
    noWebsite: "No website",
    hasWebsite: "Yes, I have a website",
    redesign: "I want to redesign my website",
    businessTypePlaceholder: "e.g. service company or clinic",
    budget1: "Under EGP 10,000",
    budget2: "EGP 10,000–20,000",
    budget3: "EGP 20,000–35,000",
    budget4: "EGP 35,000–50,000",
    budget5: "Over EGP 50,000",
    budget6: "Not sure — I need a consultation",
    time1: "Morning",
    time2: "Midday",
    time3: "Evening",
    time4: "Any time",
    aboutMission: "Our Mission",
    aboutMissionText:
      "To deliver websites and web solutions that combine professional design, usability, and real business needs.",
    aboutVision: "Our Vision",
    aboutVisionText:
      "To become a trusted partner for businesses seeking a strong, scalable digital presence.",
    aboutApproach: "How We Work",
    aboutApproachText:
      "We understand the project first, then define the scope and requirements before design, development, testing, and delivery.",
    whyTitle: "Why MH?",
    whyIntro: "We aim to provide a clear, organized experience from project start to delivery.",
    processTitle: "How We Work",
    processIntro: "Clear steps help organize delivery and reduce surprises.",
    process1: "Discovery & Consultation",
    process1Text: "We learn about your business, goals, and needs.",
    process2: "Requirements",
    process2Text: "We agree on the scope, pages, and required functionality.",
    process3: "Proposal & Agreement",
    process3Text: "We clarify cost, timeline, revisions, and warranty in the agreement.",
    process4: "Design & Development",
    process4Text: "We turn the requirements into a website suited to your business.",
    process5: "Review & Revisions",
    process5Text: "You review the work and we make the agreed revisions.",
    process6: "Testing & Preparation",
    process6Text: "We test pages, compatibility, and performance before delivery.",
    process7: "Delivery & Support",
    process7Text: "You receive the project according to the agreement and support scope.",
    trustTitle: "Our Standards",
    trust1: "Responsive Design",
    trust1Text: "Designed for mobile and desktop.",
    trust2: "Performance Focus",
    trust2Text: "Attention to loading speed and implementation quality.",
    trust3: "Clear Agreement",
    trust3Text: "Defined scope, price, and timeline.",
    trust4: "Organized Handover",
    trust4Text: "Files delivered according to the agreement.",
    ctaTitle: "Have a project idea?",
    ctaText: "Share your idea and we'll help define the right requirements.",
    ctaButton: "Get Started",
    customQuote: "Pricing is determined after reviewing project requirements.",
    included: "Who It's For",
    features: "What's Included",
    packageCTA: "Let's Discuss Your Project",
    jobDeveloper: "Freelance Web Developer",
    jobDeveloperText:
      "We are looking for web developers to collaborate on upcoming projects, from design and development to testing and launch.",
    jobSales: "Sales Representative",
    jobSalesText:
      "A remote opportunity to connect with small and medium-sized businesses and introduce MH services.",
    jobTypeFreelance: "Project-based freelance",
    jobTypeRemote: "Remote",
    jobTypeCommission: "Initially results- and commission-based",
    jobDeveloperDetails:
      "We seek a developer with strong experience and a portfolio who can collaborate on delivering high-quality websites.",
    jobDeveloperRequirements:
      "Strong web development experience, a good understanding of user experience, and a portfolio. Projects may involve WordPress, React, Next.js, backend development, APIs, and performance optimization.",
    jobSalesDetails:
      "The role includes finding potential clients through sources such as Google Maps, Facebook, and Instagram, contacting them, understanding their needs, and following up through agreement.",
    jobSalesRequirements:
      "Previous experience is not required. Online training and support are provided. Initial compensation is based on results and commission; details are discussed during the interview.",
    jobConditions: "Working arrangements and financial details are clarified before any agreement.",
    applyDeveloper: "Apply for Web Developer",
    applySales: "Apply for Sales Representative",
    privacyIntro:
      "This policy explains how information you provide when using the MH website is handled.",
    privacyData: "Information You Provide",
    privacyDataText:
      "Information may include your name, contact details, project information, budget, and anything else you choose to share through forms.",
    privacyUse: "How We Use Information",
    privacyUseText:
      "Information is used to respond to inquiries, understand project requirements, and communicate about services or collaboration opportunities.",
    privacyServices: "Third-Party Services",
    privacyServicesText:
      "We may use third-party services such as Google Forms and Google Sheets when forms are enabled. Their own terms and privacy policies then apply.",
    privacySafety: "Information Security",
    privacySafetyText:
      "We take appropriate organizational and technical steps to protect information, but no electronic system can be guaranteed completely secure.",
    privacyContact: "Questions",
    privacyContactText:
      "You can contact us through the contact methods published on the website once they are available.",
    termsIntro:
      "These terms govern website use and how MH service agreements are arranged.",
    termsScope: "Project Scope",
    termsScopeText:
      "Each project's agreement defines scope, cost, timeline, deliverables, revisions, and warranty.",
    termsPayment: "Payment",
    termsPaymentText:
      "The default payment schedule is 50% upfront and 50% on delivery unless otherwise agreed in writing.",
    termsOwnership: "Ownership & Delivery",
    termsOwnershipText:
      "Ownership of core project files transfers to the client according to the agreement after financial obligations are fulfilled.",
    termsRevisions: "Revisions",
    termsRevisionsText:
      "Revisions are limited to those stated in the proposal or package. New features or scope changes may require additional cost and time.",
    termsWarranty: "Technical Warranty",
    termsWarrantyText:
      "The default warranty covers technical errors within the agreed scope for 30 days. It excludes new features or out-of-scope changes.",
    termsSchedule: "Timeline",
    termsScheduleText:
      "Delivery depends on project scope and the timely provision of content, materials, and approvals by the client.",
    termsChanges: "Changes",
    termsChangesText:
      "Any change in scope, cost, or timeline must be discussed and agreed before implementation.",
    termsUse: "Website Use",
    termsUseText:
      "Please do not misuse the website, attempt to disrupt it, or use its forms for unlawful purposes.",
    service1: "Website Design & Development",
    service1Text: "Professional websites that represent your business and present your services clearly.",
    service2: "Website Redesign",
    service2Text: "Refresh your website's design and improve usability and structure.",
    service3: "Existing Website Improvements",
    service3Text: "Improve usability, performance, and content organization.",
    service4: "Content Writing",
    service4Text: "Clear, organized content that helps visitors understand your services.",
    service5: "Brand Identity & Logo",
    service5Text: "A foundational visual identity that strengthens brand recognition.",
    service6: "Search Engine Optimization",
    service6Text: "Technical and content SEO foundations to prepare your website for search.",
    service7: "Maintenance & Support",
    service7Text: "Maintenance and support within the agreed service scope.",
    package1: "Launch",
    package1Text: "A practical start for small projects or a basic online presence.",
    package2: "Starter",
    package2Text: "For businesses that need a clear informational website.",
    package3: "Business",
    package3Text: "A balanced solution for businesses presenting services professionally.",
    package4: "Professional",
    package4Text: "A broader website with more pages, content, and advanced needs.",
    package5: "Premium",
    package5Text: "An advanced solution for projects needing a more customized experience.",
    package6: "Custom",
    package6Text: "A solution tailored to your project's specific requirements.",
    package1Who: "A new project that needs a simple online presence.",
    package2Who: "A business looking for a structured informational website.",
    package3Who: "A company wanting to present services professionally.",
    package4Who: "A project requiring more detailed pages and content.",
    package5Who: "A business requiring a customized experience and extra attention to detail.",
    package6Who: "A project with special requirements or a non-standard scope.",
    package1Feature1: "Basic planning and design",
    package1Feature2: "Pages and content as agreed",
    package1Feature3: "Mobile-friendly design",
    package2Feature1: "Design aligned with your brand",
    package2Feature2: "Core informational pages",
    package2Feature3: "Contact form when needed",
    package3Feature1: "Structure suited to your business",
    package3Feature2: "Organized service presentation",
    package3Feature3: "Basic search engine optimization",
    package4Feature1: "Expanded pages and content",
    package4Feature2: "More design customization",
    package4Feature3: "Attention to performance and SEO",
    package5Feature1: "More customized design",
    package5Feature2: "Advanced content structure",
    package5Feature3: "Detailed performance and usability review",
    package6Feature1: "Scope tailored to the project",
    package6Feature2: "Custom deliverables and timeline",
    package6Feature3: "Quote after requirements review",
    serviceDetailTitle: "Service Details",
    packageDetailTitle: "Package Details",
    jobDetailTitle: "Role Details",
    serviceDetailIntro:
      "We define the service scope around your business needs and project goals.",
    packageDetailIntro:
      "Final inclusions, timeline, and pricing are determined after discussing requirements.",
    jobDetailIntro:
      "Review the details and requirements, then use the relevant application link.",
    why1: "Responsive Design",
    why1Text: "Layouts that adapt to different screen sizes.",
    why2: "Clarity from the Start",
    why2Text: "Scope, cost, and deliverables are agreed before work begins.",
    why3: "Attention to Detail",
    why3Text: "We review content structure, usability, and performance.",
    why4: "Agreed Handover",
    why4Text: "Project files and deliverables are defined in the agreement.",
    contactFormTitle: "Tell Us About Your Project",
    consultationFormTitle: "Consultation Details",
    serviceQuestion: "Which service do you need?",
    chooseService: "Choose a service",
    serviceOption1: "Website Design & Development",
    serviceOption2: "Website Redesign",
    serviceOption3: "Existing Website Improvements",
    serviceOption4: "Content Writing",
    serviceOption5: "Brand Identity & Logo",
    serviceOption6: "Search Engine Optimization",
    serviceOption7: "Maintenance & Support",
    serviceOption8: "I need help choosing",
    footerCareers: "Careers & Collaboration",
    careersCTA: "Explore Opportunities",
    noPrice: "Pricing depends on project requirements",
    back: "Back",
    optional: "Optional",
    privacyShort:
      "We use information you provide only for the purposes described in our privacy policy.",
    loading: "Loading..."
  }
};

const services = [
  { id: 1, icon: "▧", slug: "website-design", features: [ "صفحات مناسبة للنشاط", "تصميم متوافق مع الأجهزة", "تنظيم المحتوى وتجربة الاستخدام" ] },
  { id: 2, icon: "✎", slug: "website-redesign", features: [ "مراجعة التصميم الحالي", "تحسين تنظيم الصفحات", "تجربة استخدام أوضح" ] },
  { id: 3, icon: "↗", slug: "website-improvement", features: [ "مراجعة الأداء", "تحسين تجربة الاستخدام", "تنظيم المحتوى" ] },
  { id: 4, icon: "✦", slug: "content-writing", features: [ "صياغة واضحة", "تنظيم المعلومات", "محتوى مناسب للجمهور" ] },
  { id: 5, icon: "◈", slug: "brand-identity", features: [ "اتجاه بصري متناسق", "تصميم شعار حسب الاتفاق", "تسليم المخرجات المتفق عليها" ] },
  { id: 6, icon: "⌕", slug: "seo", features: [ "عناوين ووصف الصفحات", "تنظيم بنية المحتوى", "أساسيات SEO التقنية" ] },
  { id: 7, icon: "⚙", slug: "maintenance", features: [ "متابعة فنية حسب الاتفاق", "معالجة الأعطال ضمن النطاق", "تحديثات وفق خطة الخدمة" ] }
];

const packages = [
  { id: 1, slug: "launch", featured: false },
  { id: 2, slug: "starter", featured: false },
  { id: 3, slug: "business", featured: true },
  { id: 4, slug: "professional", featured: false },
  { id: 5, slug: "premium", featured: false },
  { id: 6, slug: "custom", featured: false }
];

const jobs = [
  {
    id: "developer",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSd6ltQzegUQS5rssIU0x9lbTpQnHeRvr4zcc3mMAPVTxle6Ig/viewform?usp=publish-editor"
  },
  {
    id: "sales",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSe4Q1aN909Io6-PZjbTcxdXZQxMAGhHbPh412Qjkth-1I3A0A/viewform?usp=header"
  }
];

const state = {
  lang: localStorage.getItem("mh-lang") || "ar",
  theme: localStorage.getItem("mh-theme") || "light"
};

function t(key) {
  return translations[state.lang][key] || translations.ar[key] || key;
}

function pageUrl(page, id = "") {
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("page", page);
  if (id) url.searchParams.set("id", id);
  return url.pathname + url.search;
}

function link(page, label, id = "", className = "") {
  return `<a class="${className}" href="${pageUrl(page, id)}">${label}</a>`;
}

function iconTile(icon, title, description) {
  return `
    <article class="card reveal">
      <div class="card-icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `;
}

function sectionHeading(title, description, eyebrow = "") {
  return `
    <div class="section-heading reveal">
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ""}
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}

function ctaPanel() {
  return `
    <section class="section-sm">
      <div class="container">
        <div class="cta-panel reveal">
          <div>
            <h2>${t("ctaTitle")}</h2>
            <p>${t("ctaText")}</p>
          </div>
          ${link("consultation", t("ctaButton"), "", "btn")}
        </div>
      </div>
    </section>
  `;
}

function pageHero(title, intro, crumb = "") {
  return `
    <section class="page-hero">
      <div class="container">
        ${crumb ? `<div class="breadcrumbs">${link("home", t("navHome"))}<span> / </span><span>${crumb}</span></div>` : ""}
        <h1>${title}</h1>
        <p>${intro}</p>
      </div>
    </section>
  `;
}

function serviceCards(limit = services.length) {
  return `
    <div class="cards-grid">
      ${services.slice(0, limit).map(service => `
        <article class="card reveal">
          <div class="card-icon" aria-hidden="true">${service.icon}</div>
          <h3>${t(`service${service.id}`)}</h3>
          <p>${t(`service${service.id}Text`)}</p>
          ${link("service", `${t("learnMore")} <span aria-hidden="true">←</span>`, service.slug, "text-link")}
        </article>
      `).join("")}
    </div>
  `;
}

function packageCards() {
  return `
    <div class="cards-grid">
      ${packages.map(item => `
        <article class="card package-card reveal ${item.featured ? "featured" : ""}">
          <span class="package-tag">${item.id === 6 ? t("customQuote") : t("noPrice")}</span>
          <h3>${t(`package${item.id}`)}</h3>
          <p class="package-subtitle">${t(`package${item.id}Text`)}</p>
          <p><strong>${t("included")}:</strong> ${t(`package${item.id}Who`)}</p>
          <ul class="check-list">
            ${[1, 2, 3].map(n => `<li>${t(`package${item.id}Feature${n}`)}</li>`).join("")}
          </ul>
          ${link("package", t("requestPackage"), item.slug, "btn btn-outline btn-block")}
        </article>
      `).join("")}
    </div>
  `;
}

function trustItems() {
  return `
    <div class="trust-grid">
      ${[1, 2, 3, 4].map((n, i) => `
        <div class="trust-item reveal">
          <span class="trust-icon" aria-hidden="true">${["✓", "↗", "◇", "⌘"][i]}</span>
          <div><strong>${t(`trust${n}`)}</strong><small>${t(`trust${n}Text`)}</small></div>
        </div>
      `).join("")}
    </div>
  `;
}

function processSteps() {
  return `
    <div class="steps-grid">
      ${[1, 2, 3, 4, 5, 6, 7].map(n => `
        <article class="step-card reveal">
          <h3>${t(`process${n}`)}</h3>
          <p>${t(`process${n}Text`)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function homePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <span class="eyebrow">MH · Web Design & Digital Solutions</span>
          <h1>${state.lang === "ar"
            ? 'نحوّل نشاطك التجاري إلى <span class="accent">حضور احترافي</span> على الإنترنت'
            : 'Turn your business into a <span class="accent">professional online presence</span>'}</h1>
          <p>${state.lang === "ar"
            ? "موقع احترافي يصنع فرقًا في عملك، مع حلول ويب عملية مصممة لدعم نمو أعمالك."
            : "A professional website that makes a difference, with practical web solutions designed to support your business growth."}</p>
          <div class="hero-actions">
            ${link("consultation", t("navCTA"), "", "btn")}
            ${link("services", t("navServices"), "", "btn btn-outline")}
          </div>
          <div class="hero-note">
            <span aria-hidden="true">✓</span>
            ${state.lang === "ar"
              ? "نطاق واضح · اتفاق منظم · حلول تناسب احتياجاتك"
              : "Clear scope · Organized agreements · Solutions for your needs"}
          </div>
        </div>

        <div class="hero-visual reveal" aria-label="Website design mockup">
          <div class="mockup-window">
            <div class="mockup-top">
              <span class="mockup-dot"></span><span class="mockup-dot"></span><span class="mockup-dot"></span>
              <div class="mockup-address">yourbusiness.com</div>
            </div>
            <div class="mockup-content">
              <div class="mockup-nav">
                <span class="mockup-mini-brand">YOUR BRAND</span>
                <span>HOME &nbsp; SERVICES &nbsp; CONTACT</span>
              </div>
              <div class="mockup-lines">
                <div class="mockup-line large"></div>
                <div class="mockup-line medium"></div>
                <div class="mockup-line short"></div>
              </div>
              <div class="mockup-copy">
                ${state.lang === "ar"
                  ? "واجهة منظمة لعرض خدماتك ومساعدة العملاء على فهم ما تقدمه."
                  : "A clear interface to present your services and help customers understand your business."}
              </div>
              <span class="mockup-button"></span>
              <div class="mockup-cards">
                <div class="mockup-card"><span></span><i></i></div>
                <div class="mockup-card"><span></span><i></i></div>
                <div class="mockup-card"><span></span><i></i></div>
              </div>
            </div>
          </div>
          <div class="hero-float">
            ${state.lang === "ar" ? "مصمم لعملك" : "Built for your business"}
            <span>${state.lang === "ar" ? "وضوح · أداء · تجربة" : "Clarity · Performance · UX"}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip">${`<div class="container">${trustItems()}</div>`}</section>

    <section class="section">
      <div class="container">
        ${sectionHeading(t("servicesTitle"), t("servicesIntro"), state.lang === "ar" ? "ما نقدمه" : "What We Do")}
        ${serviceCards(3)}
        <div class="text-center" style="margin-top:30px">${link("services", t("details"), "", "btn btn-outline")}</div>
      </div>
    </section>

    <section class="section" style="background:var(--surface)">
      <div class="container">
        ${sectionHeading(t("packagesTitle"), t("packagesIntro"), state.lang === "ar" ? "حلول مرنة" : "Flexible Solutions")}
        ${packageCards()}
      </div>
    </section>

    <section class="section">
      <div class="container split-layout">
        <div class="split-copy reveal">
          <span class="eyebrow">${t("whyTitle")}</span>
          <h2>${state.lang === "ar" ? "شراكة واضحة من الفكرة حتى التسليم" : "A clear partnership from idea to delivery"}</h2>
          <p>${t("whyIntro")}</p>
          <ul class="check-list">
            ${[1, 2, 3, 4].map(n => `<li><span><strong>${t(`why${n}`)}</strong><br><span class="text-muted">${t(`why${n}Text`)}</span></span></li>`).join("")}
          </ul>
          ${link("about", t("learnMore"), "", "text-link")}
        </div>
        <div class="feature-panel reveal">
          ${[1, 2, 3, 4].map(n => `<div class="feature-tile"><strong>${t(`trust${n}`)}</strong><p>${t(`trust${n}Text`)}</p></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" style="background:var(--surface)">
      <div class="container">
        ${sectionHeading(t("processTitle"), t("processIntro"))}
        ${processSteps()}
      </div>
    </section>

    ${ctaPanel()}
  `;
}

function servicesPage() {
  return `
    ${pageHero(t("servicesTitle"), t("servicesIntro"))}
    <section class="section">
      <div class="container">
        ${serviceCards()}
      </div>
    </section>
    ${ctaPanel()}
  `;
}

function packagesPage() {
  return `
    ${pageHero(t("packagesTitle"), t("packagesIntro"))}
    <section class="section">
      <div class="container">
        <div class="notice" style="margin-bottom:28px">
          ${state.lang === "ar"
            ? "لا نعرض أسعارًا ثابتة؛ يتم تحديد السعر وفق نطاق العمل والمتطلبات والمدة المتفق عليها."
            : "We do not publish fixed prices. Each quote depends on scope, requirements, and the agreed timeline."}
        </div>
        ${packageCards()}
      </div>
    </section>
    ${ctaPanel()}
  `;
}

function aboutPage() {
  return `
    ${pageHero(t("aboutTitle"), t("aboutIntro"))}
    <section class="section">
      <div class="container split-layout">
        <div class="split-copy reveal">
          <span class="eyebrow">MH</span>
          <h2>${state.lang === "ar" ? "حلول ويب تبدأ بفهم احتياجاتك" : "Web solutions that start with understanding your needs"}</h2>
          <p>${state.lang === "ar"
            ? "نساعد الشركات والمشروعات على بناء حضور رقمي من خلال تصميم وتطوير مواقع واضحة وعملية. نركز على احتياجات النشاط، وسهولة الاستخدام، والتنفيذ المنظم."
            : "We help businesses build a digital presence through clear, practical website design and development. We focus on business needs, usability, and organized delivery."}</p>
        </div>
        <div class="feature-panel reveal">
          <div class="feature-tile"><strong>${t("aboutMission")}</strong><p>${t("aboutMissionText")}</p></div>
          <div class="feature-tile"><strong>${t("aboutVision")}</strong><p>${t("aboutVisionText")}</p></div>
          <div class="feature-tile" style="grid-column:1/-1"><strong>${t("aboutApproach")}</strong><p>${t("aboutApproachText")}</p></div>
        </div>
      </div>
    </section>
    <section class="section" style="background:var(--surface)">
      <div class="container">
        ${sectionHeading(t("trustTitle"), t("whyIntro"))}
        ${trustItems()}
      </div>
    </section>
    ${ctaPanel()}
  `;
}

function jobsPage() {
  return `
    ${pageHero(t("jobsTitle"), t("jobsIntro"))}
    <section class="section">
      <div class="container cards-grid">
        <article class="card job-card reveal">
          <div class="card-icon" aria-hidden="true">⌘</div>
          <div class="job-meta"><span>${t("jobTypeFreelance")}</span></div>
          <h3>${t("jobDeveloper")}</h3>
          <p>${t("jobDeveloperText")}</p>
          <p class="text-muted">${t("jobDeveloperRequirements")}</p>
          <a class="btn btn-outline" href="${jobs[0].form}" target="_blank" rel="noopener noreferrer">${t("applyNow")} ↗</a>
        </article>
        <article class="card job-card reveal">
          <div class="card-icon" aria-hidden="true">↗</div>
          <div class="job-meta"><span>${t("jobTypeRemote")}</span><span>${t("jobTypeCommission")}</span></div>
          <h3>${t("jobSales")}</h3>
          <p>${t("jobSalesText")}</p>
          <p class="text-muted">${t("jobSalesRequirements")}</p>
          <a class="btn btn-outline" href="${jobs[1].form}" target="_blank" rel="noopener noreferrer">${t("applyNow")} ↗</a>
        </article>
      </div>
      <div class="container" style="margin-top:24px">
        <div class="notice">${t("jobConditions")}</div>
      </div>
    </section>
  `;
}

function contactForm(isConsultation = false) {
  return `
    <div class="form-card">
      <h2>${isConsultation ? t("consultationFormTitle") : t("contactFormTitle")}</h2>
      <p class="text-muted">${t("requiredNote")}</p>
      <div class="notice">${t("demoNotice")}</div>

      <form class="lead-form" data-form-kind="${isConsultation ? "consultation" : "contact"}">
        <div class="form-grid">
          <div class="form-field">
            <label for="lead-name">${t("name")} *</label>
            <input id="lead-name" name="name" autocomplete="name" required maxlength="120">
          </div>

          <div class="form-field">
            <label for="lead-whatsapp">${t("whatsapp")} *</label>
            <input id="lead-whatsapp" name="whatsapp" type="tel" autocomplete="tel" required maxlength="40">
          </div>

          <div class="form-field">
            <label for="lead-project">${t("project")} *</label>
            <input id="lead-project" name="project" required maxlength="150">
          </div>

          <div class="form-field">
            <label for="lead-business">${t("businessType")} *</label>
            <input id="lead-business" name="businessType" required maxlength="150" placeholder="${t("businessTypePlaceholder")}">
          </div>

          <div class="form-field">
            <label for="lead-website">${t("existingWebsite")}</label>
            <select id="lead-website" name="existingWebsite">
              <option value="">${t("chooseOption")}</option>
              <option value="no">${t("noWebsite")}</option>
              <option value="yes">${t("hasWebsite")}</option>
              <option value="redesign">${t("redesign")}</option>
            </select>
          </div>

          <div class="form-field">
            <label for="lead-budget">${t("budget")} *</label>
            <select id="lead-budget" name="budget" required>
              <option value="">${t("chooseOption")}</option>
              ${[1, 2, 3, 4, 5, 6].map(n => `<option value="${t(`budget${n}`)}">${t(`budget${n}`)}</option>`).join("")}
            </select>
          </div>

          <div class="form-field">
            <label for="lead-time">${t("contactTime")}</label>
            <select id="lead-time" name="contactTime">
              <option value="">${t("chooseOption")}</option>
              ${[1, 2, 3, 4].map(n => `<option value="${t(`time${n}`)}">${t(`time${n}`)}</option>`).join("")}
            </select>
          </div>

          <div class="form-field">
            <label for="lead-email">${t("email")}</label>
            <input id="lead-email" name="email" type="email" autocomplete="email" maxlength="200">
          </div>

          <div class="form-field full">
            <label for="lead-description">${t("description")} *</label>
            <textarea id="lead-description" name="description" required maxlength="3000"></textarea>
          </div>
        </div>

        <p class="form-hint">${t("privacyShort")}</p>
        <div class="form-actions">
          <button class="btn" type="submit">${isConsultation ? t("sendRequest") : t("sendContact")}</button>
          ${link("privacy", t("privacy"), "", "text-link")}
        </div>
        <div class="form-message" role="status" aria-live="polite"></div>
      </form>
    </div>
  `;
}

function contactPage(isConsultation = false) {
  const title = isConsultation ? t("consultationTitle") : t("contactTitle");
  const intro = isConsultation ? t("consultationIntro") : t("contactIntro");

  return `
    ${pageHero(title, intro)}
    <section class="section">
      <div class="container form-layout">
        ${contactForm(isConsultation)}
        <aside class="info-card">
          <h2>${state.lang === "ar" ? "قبل أن نبدأ" : "Before We Begin"}</h2>
          <div class="info-list">
            <div class="info-item">
              <span class="trust-icon" aria-hidden="true">1</span>
              <div><strong>${t("process1")}</strong><p>${t("process1Text")}</p></div>
            </div>
            <div class="info-item">
              <span class="trust-icon" aria-hidden="true">2</span>
              <div><strong>${t("process2")}</strong><p>${t("process2Text")}</p></div>
            </div>
            <div class="info-item">
              <span class="trust-icon" aria-hidden="true">3</span>
              <div><strong>${t("process3")}</strong><p>${t("process3Text")}</p></div>
            </div>
          </div>
          <p class="text-muted" style="margin-top:24px">${t("privacyShort")}</p>
        </aside>
      </div>
    </section>
  `;
}

function serviceDetailPage(slug) {
  const service = services.find(item => item.slug === slug);
  if (!service) return notFoundPage();

  const title = t(`service${service.id}`);
  const features = service.features.map((feature, index) => {
    const enFeatures = {
      1: ["Pages suited to your business", "Review of the existing design", "Performance review", "Clear writing", "Consistent visual direction", "Page titles and descriptions", "Technical support as agreed"],
      2: ["Responsive design", "Improved page structure", "Usability review"],
      3: ["Performance review", "Usability improvements", "Content organization"]
    };
    return state.lang === "en"
      ? (enFeatures[service.id]?.[index] || feature)
      : feature;
  });

  return `
    ${pageHero(title, t("serviceDetailIntro"), title)}
    <section class="section">
      <div class="container detail-layout">
        <article class="detail-main">
          <div class="card-icon" aria-hidden="true">${service.icon}</div>
          <h2>${title}</h2>
          <p>${t(`service${service.id}Text`)}</p>
          <h3>${t("features")}</h3>
          <ul class="check-list">${features.map(item => `<li>${item}</li>`).join("")}</ul>
          <h3>${state.lang === "ar" ? "خطوات التنفيذ" : "Delivery Process"}</h3>
          <p>${t("aboutApproachText")}</p>
        </article>
        <aside class="detail-sidebar">
          <h3>${state.lang === "ar" ? "هل هذه الخدمة مناسبة لك؟" : "Is This Service Right for You?"}</h3>
          <p>${state.lang === "ar"
            ? "نناقش احتياجات نشاطك أولًا، ثم نحدد نطاق الخدمة والتكلفة والمدة قبل البدء."
            : "We discuss your business needs first, then define scope, price, and timeline before work begins."}</p>
          ${link("consultation", t("navCTA"), "", "btn btn-block")}
          <p>${t("customQuote")}</p>
        </aside>
      </div>
    </section>
    ${ctaPanel()}
  `;
}

function packageDetailPage(slug) {
  const item = packages.find(pkg => pkg.slug === slug);
  if (!item) return notFoundPage();

  return `
    ${pageHero(t(`package${item.id}`), t("packageDetailIntro"), t("packagesTitle"))}
    <section class="section">
      <div class="container detail-layout">
        <article class="detail-main">
          <span class="eyebrow">${t("noPrice")}</span>
          <h2>${t(`package${item.id}`)}</h2>
          <p>${t(`package${item.id}Text`)}</p>
          <h3>${t("included")}</h3>
          <p>${t(`package${item.id}Who`)}</p>
          <h3>${t("features")}</h3>
          <ul class="check-list">
            ${[1, 2, 3].map(n => `<li>${t(`package${item.id}Feature${n}`)}</li>`).join("")}
          </ul>
          <div class="notice">
            ${state.lang === "ar"
              ? "تُحدّد الصفحات والميزات والمدة النهائية في العرض والاتفاق الخاص بمشروعك."
              : "Final pages, features, and timeline are specified in your project proposal and agreement."}
          </div>
        </article>
        <aside class="detail-sidebar">
          <h3>${t("packageCTA")}</h3>
          <p>${t("customQuote")}</p>
          ${link("consultation", t("navCTA"), "", "btn btn-block")}
          <p>${t("termsPayment")}</p>
        </aside>
      </div>
    </section>
    ${ctaPanel()}
  `;
}

function jobDetailPage(id) {
  const job = jobs.find(item => item.id === id);
  if (!job) return notFoundPage();

  const isDeveloper = id === "developer";
  const title = t(isDeveloper ? "jobDeveloper" : "jobSales");
  const details = t(isDeveloper ? "jobDeveloperDetails" : "jobSalesDetails");
  const requirements = t(isDeveloper ? "jobDeveloperRequirements" : "jobSalesRequirements");
  const buttonText = t(isDeveloper ? "applyDeveloper" : "applySales");

  return `
    ${pageHero(title, t("jobDetailIntro"), t("jobsTitle"))}
    <section class="section">
      <div class="container detail-layout">
        <article class="detail-main">
          <h2>${title}</h2>
          <p>${details}</p>
          <h3>${state.lang === "ar" ? "المتطلبات" : "Requirements"}</h3>
          <p>${requirements}</p>
          <div class="notice">${t("jobConditions")}</div>
        </article>
        <aside class="detail-sidebar">
          <h3>${state.lang === "ar" ? "طريقة التقديم" : "How to Apply"}</h3>
          <p>${state.lang === "ar"
            ? "افتح نموذج التقديم الخارجي وأكمل المعلومات المطلوبة."
            : "Open the external application form and complete the requested information."}</p>
          <a class="btn btn-block" href="${job.form}" target="_blank" rel="noopener noreferrer">${buttonText} ↗</a>
          <p>${t("jobTypeRemote")}</p>
        </aside>
      </div>
    </section>
  `;
}

function privacyPage() {
  const sections = [
    ["privacyData", "privacyDataText"],
    ["privacyUse", "privacyUseText"],
    ["privacyServices", "privacyServicesText"],
    ["privacySafety", "privacySafetyText"],
    ["privacyContact", "privacyContactText"]
  ];

  return `
    ${pageHero(t("privacy"), t("privacyIntro"))}
    <section class="section">
      <div class="container">
        <article class="detail-main">
          ${sections.map(([heading, body]) => `<h2>${t(heading)}</h2><p>${t(body)}</p>`).join("")}
          <p class="text-muted">${state.lang === "ar" ? "آخر تحديث: أكتوبر 2026" : "Last updated: October 2026"}</p>
        </article>
      </div>
    </section>
  `;
}

function termsPage() {
  const sections = [
    ["termsScope", "termsScopeText"],
    ["termsPayment", "termsPaymentText"],
    ["termsOwnership", "termsOwnershipText"],
    ["termsRevisions", "termsRevisionsText"],
    ["termsWarranty", "termsWarrantyText"],
    ["termsSchedule", "termsScheduleText"],
    ["termsChanges", "termsChangesText"],
    ["termsUse", "termsUseText"]
  ];

  return `
    ${pageHero(t("terms"), t("termsIntro"))}
    <section class="section">
      <div class="container">
        <article class="detail-main">
          ${sections.map(([heading, body]) => `<h2>${t(heading)}</h2><p>${t(body)}</p>`).join("")}
          <p class="text-muted">${state.lang === "ar" ? "آخر تحديث: أكتوبر 2026" : "Last updated: October 2026"}</p>
        </article>
      </div>
    </section>
  `;
}

function notFoundPage() {
  return `
    <section class="section">
      <div class="container">
        <div class="empty-state">
          <span class="eyebrow">404</span>
          <h2>${t("notFoundTitle")}</h2>
          <p>${t("notFoundText")}</p>
          ${link("home", t("homeButton"), "", "btn")}
        </div>
      </div>
    </section>
  `;
}

function renderPage() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || "home";
  const id = params.get("id") || "";

  const pages = {
    home: homePage,
    services: servicesPage,
    packages: packagesPage,
    about: aboutPage,
    jobs: jobsPage,
    contact: () => contactPage(false),
    consultation: () => contactPage(true),
    privacy: privacyPage,
    terms: termsPage,
    service: () => serviceDetailPage(id),
    package: () => packageDetailPage(id),
    job: () => jobDetailPage(id)
  };

  const render = pages[page] || notFoundPage;
  $("#app").innerHTML = render();

  const titleMap = {
    home: state.lang === "ar"
      ? "MH | تصميم وتطوير المواقع والحلول الرقمية"
      : "MH | Web Design & Digital Solutions",
    services: t("servicesTitle"),
    packages: t("packagesTitle"),
    about: t("aboutTitle"),
    jobs: t("jobsTitle"),
    contact: t("contactTitle"),
    consultation: t("consultationTitle"),
    privacy: t("privacy"),
    terms: t("terms")
  };

  const detailTitle = page === "service"
    ? (services.find(item => item.slug === id) ? t(`service${services.find(item => item.slug === id).id}`) : t("notFoundTitle"))
    : page === "package"
      ? (packages.find(item => item.slug === id) ? t(`package${packages.find(item => item.slug === id).id}`) : t("notFoundTitle"))
      : page === "job"
        ? (jobs.find(item => item.id === id) ? t(id === "developer" ? "jobDeveloper" : "jobSales") : t("notFoundTitle"))
        : "";

  document.title = `${detailTitle || titleMap[page] || t("notFoundTitle")} | MH`;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = page === "home"
      ? (state.lang === "ar"
        ? "MH لتصميم وتطوير المواقع والحلول الرقمية العملية للأعمال."
        : "MH designs and develops professional websites and practical digital solutions for businesses.")
      : (page === "services" ? t("servicesIntro")
        : page === "packages" ? t("packagesIntro")
        : page === "about" ? t("aboutIntro")
        : page === "jobs" ? t("jobsIntro")
        : page === "contact" ? t("contactIntro")
        : page === "consultation" ? t("consultationIntro")
        : t("privacyShort"));
  }

  applyTranslations();
  setupReveal();
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.theme = state.theme;

  const langButton = $("#language-toggle");
  if (langButton) {
    langButton.textContent = state.lang === "ar" ? "EN" : "ع";
    langButton.setAttribute("aria-label", state.lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  }

  const themeButton = $("#theme-toggle");
  if (themeButton) {
    themeButton.textContent = state.theme === "dark" ? "☀" : "☾";
    themeButton.setAttribute("aria-label", state.theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeButton.title = themeButton.getAttribute("aria-label");
  }

  const menuButton = $("#menu-toggle");
  if (menuButton) {
    menuButton.setAttribute("aria-label", state.lang === "ar" ? "فتح القائمة" : "Open menu");
  }

  const links = $$(".nav-links a");
  const currentPage = new URLSearchParams(window.location.search).get("page") || "home";
  links.forEach(anchor => {
    anchor.classList.remove("active");
    const url = new URL(anchor.href, window.location.origin);
    const linkPage = url.searchParams.get("page") || "home";
    const matches =
      linkPage === currentPage ||
      (currentPage === "service" && linkPage === "services") ||
      (currentPage === "package" && linkPage === "packages") ||
      (currentPage === "job" && linkPage === "jobs");
    if (matches) anchor.classList.add("active");
  });

  const footer = $("#footer-content");
  if (footer) footer.innerHTML = footerMarkup();

  const toast = $("#toast");
  if (toast) toast.setAttribute("aria-live", "polite");
}

function footerMarkup() {
  return `
    <div class="container footer-main">
      <div class="footer-about">
        <a class="brand" href="${pageUrl("home")}">
          <span class="brand-mark">MH</span>
          <span class="brand-copy"><strong>MH</strong><small>Web Design & Digital Solutions</small></span>
        </a>
        <p>${t("footerDescription")}</p>
      </div>
      <div class="footer-column">
        <h3>${t("quickLinks")}</h3>
        <nav class="footer-links" aria-label="${t("quickLinks")}">
          ${link("home", t("navHome"))}
          ${link("services", t("navServices"))}
          ${link("packages", t("navPackages"))}
          ${link("about", t("navAbout"))}
          ${link("jobs", t("navJobs"))}
          ${link("contact", t("navContact"))}
        </nav>
      </div>
      <div class="footer-column">
        <h3>${t("footerCompany")}</h3>
        <nav class="footer-links" aria-label="${t("footerLegal")}">
          ${link("consultation", t("navCTA"))}
          ${link("privacy", t("privacy"))}
          ${link("terms", t("terms"))}
        </nav>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${new Date().getFullYear()} MH. ${t("copyright")}</span>
      <div class="footer-legal">
        <a href="${pageUrl("privacy")}">${t("privacy")}</a>
        <a href="${pageUrl("terms")}">${t("terms")}</a>
      </div>
    </div>
  `;
}

function setupReveal() {
  const elements = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

function setupLeadForms() {
  $$(".lead-form").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const message = $(".form-message", form);
      message.textContent = t("formDemoSuccess");
      message.classList.add("show");
      message.scrollIntoView({ behavior: "smooth", block: "nearest" });
      form.reset();
    });
  });
}

function setupMenu() {
  const menuButton = $("#menu-toggle");
  const nav = $("#primary-nav");
  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
  });

  $$("a", nav).forEach(anchor => {
    anchor.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });

  document.addEventListener("click", event => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }
  });
}

function setupBackToTop() {
  const button = $("#back-to-top");
  if (!button) return;

  const update = () => button.classList.toggle("visible", window.scrollY > 450);
  window.addEventListener("scroll", update, { passive: true });
  update();

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function setupHeaderControls() {
  const langButton = $("#language-toggle");
  const themeButton = $("#theme-toggle");

  langButton?.addEventListener("click", () => {
    state.lang = state.lang === "ar" ? "en" : "ar";
    localStorage.setItem("mh-lang", state.lang);
    renderPage();
  });

  themeButton?.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("mh-theme", state.theme);
    applyTranslations();
  });
}

function setupNavigation() {
  document.addEventListener("click", event => {
    const anchor = event.target.closest("a");
    if (!anchor) return;

    if (
      anchor.target === "_blank" ||
      anchor.hasAttribute("download") ||
      anchor.origin !== window.location.origin ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey
    ) return;

    const url = new URL(anchor.href);
    if (!url.searchParams.has("page")) return;

    event.preventDefault();
    history.pushState({}, "", url.pathname + url.search);
    renderPage();
    setupLeadForms();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("popstate", () => {
    renderPage();
    setupLeadForms();
  });
}

function initialize() {
  applyTranslations();
  $("#footer-content").innerHTML = footerMarkup();
  renderPage();
  setupHeaderControls();
  setupMenu();
  setupBackToTop();
  setupNavigation();
  setupLeadForms();
}

document.addEventListener("DOMContentLoaded", initialize);
```
