
/* MH Digital — Site logic */
(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const app = $("#app");
  const nav = $("#mainNav");
  const menuToggle = $("#menuToggle");
  const languageToggle = $("#languageToggle");
  const themeToggle = $("#themeToggle");
  const toast = $("#toast");

  if (!app) return;

  let language = "ar";
  let toastTimer;

  const translations = {
    ar: {
      home: "الرئيسية", services: "الخدمات", packages: "الباقات",
      about: "من نحن", jobs: "الوظائف", contact: "تواصل معنا",
      consultation: "اطلب استشارة", privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام", footerLinks: "روابط مهمة",
      footerLegal: "السياسات", rights: "جميع الحقوق محفوظة.",
      footerDesc: "حلول ويب عملية تساعد نشاطك التجاري على بناء حضور رقمي احترافي.",
      languageButton: "English", menuLabel: "فتح القائمة",
      backTop: "العودة للأعلى ↑", homeTitle: "حوّل فكرتك إلى حضور رقمي",
      homeAccent: "احترافي", homeDescription: "نساعدك على بناء موقع إلكتروني واضح، سريع، ومتجاوب مع احتياجات نشاطك التجاري.",
      exploreServices: "اكتشف خدماتنا", startProject: "ابدأ مشروعك",
      ourServices: "خدماتنا", servicesIntro: "حلول رقمية تساعدك على تقديم أعمالك بصورة أفضل.",
      ourPackages: "باقات مرنة", packagesIntro: "اختر نقطة البداية المناسبة لمشروعك، ثم خصّص التفاصيل حسب احتياجك.",
      aboutTitle: "نبني تجارب رقمية تخدم أهدافك",
      aboutIntro: "نركز على تصميم مواقع عملية، واضحة، سهلة الاستخدام، وقابلة للتطوير.",
      jobsTitle: "الوظائف والتعاون", jobsIntro: "هل ترغب في التعاون معنا؟ أرسل نبذة عن خبراتك ومجال اهتمامك.",
      contactTitle: "دعنا نتحدث عن مشروعك", contactIntro: "أخبرنا بفكرتك وسنساعدك في تحديد الخطوة التالية.",
      consultationTitle: "اطلب استشارة لمشروعك", consultationIntro: "شاركنا تفاصيل أولية عن مشروعك لتحديد احتياجاته.",
      privacyTitle: "سياسة الخصوصية", termsTitle: "الشروط والأحكام",
      send: "إرسال الطلب", name: "الاسم", email: "البريد الإلكتروني",
      subject: "نوع الطلب", message: "تفاصيل الطلب", chooseSubject: "اختر نوع الطلب",
      website: "تصميم موقع", store: "متجر إلكتروني", redesign: "تطوير أو تحسين موقع",
      consultationOption: "استشارة", jobOption: "طلب تعاون أو وظيفة", other: "أخرى",
      emailPlaceholder: "name@example.com", namePlaceholder: "اكتب اسمك",
      messagePlaceholder: "أخبرنا عن مشروعك أو استفسارك...",
      formNotice: "هذا النموذج تجريبي حاليًا ولا يرسل البيانات إلى خادم. لا تدخل معلومات حساسة.",
      formSuccess: "تم التحقق من النموذج، لكن لم تُرسل البيانات. يلزم ربط خدمة إرسال أولًا.",
      formInvalid: "يرجى ملء الحقول المطلوبة بصورة صحيحة.",
      notFound: "الصفحة غير موجودة", notFoundText: "لم نعثر على الصفحة المطلوبة.",
      backHome: "العودة إلى الرئيسية", more: "اعرف المزيد",
      footerTagline: "حلول رقمية عملية لأفكار تستحق الظهور.",
      webDesign: "تصميم المواقع", webDesignDesc: "مواقع متجاوبة تساعد العملاء على التعرف على خدماتك بسهولة.",
      ecommerce: "المتاجر الإلكترونية", ecommerceDesc: "واجهة واضحة لعرض المنتجات وتنظيم تجربة الشراء.",
      uiux: "تجربة المستخدم", uiuxDesc: "تنظيم الصفحات والمحتوى لتسهيل الوصول إلى المعلومات.",
      maintenance: "الدعم والتحسين", maintenanceDesc: "تحسينات تقنية ومحتوى تساعد على استمرار جودة الموقع.",
      landing: "صفحات الهبوط", landingDesc: "صفحات مركزة لشرح خدمة أو حملة أو منتج.",
      consulting: "الاستشارات الرقمية", consultingDesc: "مساعدة في تحديد نطاق المشروع والأولويات التقنية.",
      whyUs: "لماذا MH؟", whyIntro: "نؤمن بأن الموقع الجيد يجمع بين الشكل الواضح والوظيفة المفيدة.",
      clearDesign: "تصميم واضح", clearDesignDesc: "واجهة منظمة تسهّل على الزائر فهم ما تقدمه.",
      responsive: "متوافق مع الأجهزة", responsiveDesc: "تجربة استخدام مرنة على الهاتف والكمبيوتر.",
      practical: "حلول عملية", practicalDesc: "اختيارات تناسب احتياجات المشروع بدل التعقيد غير الضروري.",
      process: "كيف نعمل", processIntro: "خطوات واضحة من الفكرة إلى الإطلاق.",
      stepOne: "فهم الاحتياج", stepOneDesc: "نحدد أهدافك والجمهور والوظائف المطلوبة.",
      stepTwo: "التصميم والتطوير", stepTwoDesc: "نحوّل المتطلبات إلى واجهة وتجربة قابلة للاستخدام.",
      stepThree: "المراجعة والإطلاق", stepThreeDesc: "نراجع الصفحات ونتأكد من ملاءمتها للأجهزة المختلفة.",
      starter: "الانطلاقة", starterDesc: "لصفحة تعريفية أو مشروع صغير.",
      business: "الأعمال", businessDesc: "لموقع خدمات متعدد الأقسام.",
      custom: "حل مخصص", customDesc: "للمشروعات ذات المتطلبات الخاصة.",
      askPrice: "اطلب عرض سعر", tailored: "يحدد السعر حسب نطاق العمل",
      featureResponsive: "تصميم متجاوب", featurePages: "صفحات حسب الاتفاق",
      featureBasicSeo: "تهيئة أساسية لمحركات البحث", featureContact: "قسم تواصل",
      featureMore: "إمكانية إضافة خصائص حسب الاتفاق",
      noVacancies: "لا توجد وظائف معلنة هنا حاليًا.",
      jobNote: "يمكنك إرسال نبذة عن خبراتك عبر نموذج التواصل، لكن النموذج لن يرسلها تلقائيًا دون ربطه بخدمة استقبال.",
      privacyIntro: "نوضح هنا المبادئ العامة للتعامل مع المعلومات عند استخدام هذا الموقع.",
      privacyBody: "هذا الموقع التعريفي لا يفترض أن يجمع معلومات تلقائيًا عبر نموذج فعّال في هذه النسخة. إذا أُضيفت خدمة تواصل أو تحليلات مستقبلًا، فيجب توضيح البيانات التي تُجمع والغرض منها وطريقة الاحتفاظ بها. لا ترسل معلومات حساسة عبر نموذج غير مربوط بخدمة آمنة.",
      termsIntro: "باستخدامك الموقع، يرجى مراعاة البنود العامة التالية.",
      termsBody: "المعلومات المعروضة للتعريف بالخدمات ولا تمثل عرضًا تعاقديًا نهائيًا. تُحدد الأسعار والمواعيد ونطاق العمل بعد الاتفاق كتابةً. يجب الاتفاق على حقوق المحتوى والتصميم والتعديلات والتسليم قبل بدء أي مشروع. تخضع الخدمات لأي اتفاق مكتوب منفصل بين الطرفين.",
      ctaTitle: "هل لديك فكرة تريد تنفيذها؟",
      ctaText: "ابدأ بتوضيح احتياجك، وسنساعدك على تحديد الخطوة المناسبة.",
      noFake: "لا نعرض أسعارًا أو بيانات اتصال غير مؤكدة."
    },
    en: {
      home: "Home", services: "Services", packages: "Packages",
      about: "About", jobs: "Careers", contact: "Contact",
      consultation: "Request a consultation", privacy: "Privacy Policy",
      terms: "Terms & Conditions", footerLinks: "Quick links",
      footerLegal: "Policies", rights: "All rights reserved.",
      footerDesc: "Practical web solutions that help businesses build a professional digital presence.",
      languageButton: "العربية", menuLabel: "Open menu",
      backTop: "Back to top ↑", homeTitle: "Turn your idea into a",
      homeAccent: "professional digital presence", homeDescription: "We help you build a clear, fast, responsive website tailored to your business needs.",
      exploreServices: "Explore services", startProject: "Start a project",
      ourServices: "Our services", servicesIntro: "Digital solutions that present your business more effectively.",
      ourPackages: "Flexible packages", packagesIntro: "Choose a starting point and tailor the details to your needs.",
      aboutTitle: "Digital experiences built around your goals",
      aboutIntro: "We focus on practical, clear, user-friendly websites that can grow with your project.",
      jobsTitle: "Careers & collaboration", jobsIntro: "Interested in working with us? Tell us about your skills and interests.",
      contactTitle: "Let's discuss your project", contactIntro: "Tell us about your idea and we can help identify the next step.",
      consultationTitle: "Request a consultation", consultationIntro: "Share an overview of your project and its needs.",
      privacyTitle: "Privacy Policy", termsTitle: "Terms & Conditions",
      send: "Submit request", name: "Name", email: "Email",
      subject: "Request type", message: "Request details", chooseSubject: "Choose a request type",
      website: "Website design", store: "Online store", redesign: "Website improvement",
      consultationOption: "Consultation", jobOption: "Career or collaboration", other: "Other",
      emailPlaceholder: "name@example.com", namePlaceholder: "Your name",
      messagePlaceholder: "Tell us about your project or question...",
      formNotice: "This form is currently a demo and does not send data to a server. Do not enter sensitive information.",
      formSuccess: "Form validated, but nothing was sent. Connect a submission service first.",
      formInvalid: "Please complete the required fields correctly.",
      notFound: "Page not found", notFoundText: "We could not find the requested page.",
      backHome: "Back home", more: "Learn more",
      footerTagline: "Practical digital solutions for ideas worth sharing.",
      webDesign: "Website design", webDesignDesc: "Responsive websites that help customers understand your services.",
      ecommerce: "Online stores", ecommerceDesc: "Clear product presentation and a structured shopping experience.",
      uiux: "User experience", uiuxDesc: "Organized pages and content that make information easy to find.",
      maintenance: "Support & improvement", maintenanceDesc: "Technical and content improvements to keep your site useful.",
      landing: "Landing pages", landingDesc: "Focused pages for a service, campaign, or product.",
      consulting: "Digital consulting", consultingDesc: "Help defining project scope and technical priorities.",
      whyUs: "Why MH?", whyIntro: "We believe a good website combines clear design with useful functionality.",
      clearDesign: "Clear design", clearDesignDesc: "An organized interface that explains what you offer.",
      responsive: "Responsive", responsiveDesc: "A flexible experience on mobile and desktop.",
      practical: "Practical solutions", practicalDesc: "Choices that fit your project without unnecessary complexity.",
      process: "Our process", processIntro: "Clear steps from idea to launch.",
      stepOne: "Understand", stepOneDesc: "We define your goals, audience, and required features.",
      stepTwo: "Design & build", stepTwoDesc: "We turn requirements into a usable interface.",
      stepThree: "Review & launch", stepThreeDesc: "We review the pages across different screen sizes.",
      starter: "Starter", starterDesc: "For a landing page or small project.",
      business: "Business", businessDesc: "For a multi-section services website.",
      custom: "Custom solution", customDesc: "For projects with specific requirements.",
      askPrice: "Request a quote", tailored: "Price depends on scope",
      featureResponsive: "Responsive design", featurePages: "Pages as agreed",
      featureBasicSeo: "Basic search optimization", featureContact: "Contact section",
      featureMore: "Additional features by agreement",
      noVacancies: "No vacancies are listed here at the moment.",
      jobNote: "You may describe your experience using the contact form, but it will not be sent automatically until a submission service is connected.",
      privacyIntro: "These are the general principles for handling information when using this website.",
      privacyBody: "This informational site does not assume automatic data collection through an active form in this version. If contact or analytics services are added, the collected data, purpose, and retention method should be explained. Do not submit sensitive information through an unconnected form.",
      termsIntro: "Please consider the following general terms when using this website.",
      termsBody: "The information is provided for general service information and is not a final contractual offer. Prices, schedules, and scope are agreed in writing. Content rights, design rights, revisions, and delivery should be agreed before a project begins. A separate written agreement may govern specific services.",
      ctaTitle: "Have an idea to build?",
      ctaText: "Tell us what you need and we can help define a suitable next step.",
      noFake: "We do not display unverified prices or contact details."
    }
  };

  const t = (key) => translations[language][key] || translations.ar[key] || key;

  const serviceKeys = [
    ["✦", "webDesign", "webDesignDesc"],
    ["▣", "ecommerce", "ecommerceDesc"],
    ["◎", "uiux", "uiuxDesc"],
    ["↻", "maintenance", "maintenanceDesc"],
    ["↗", "landing", "landingDesc"],
    ["◇", "consulting", "consultingDesc"]
  ];

  function serviceCards() {
    return serviceKeys.map(([icon, title, desc]) => `
      <article class="card">
        <div class="card-icon" aria-hidden="true">${icon}</div>
        <h3>${t(title)}</h3>
        <p>${t(desc)}</p>
        <a class="card-link" href="./?page=contact">${t("more")} <span aria-hidden="true">←</span></a>
      </article>
    `).join("");
  }

  function pageHero(title, intro) {
    return `<section class="page-hero"><div class="container">
      <div class="breadcrumb">MH / ${title}</div>
      <h1>${title}</h1><p>${intro}</p>
    </div></section>`;
  }

  function cta() {
    return `<section class="section"><div class="container">
      <div class="cta-panel"><div><h2>${t("ctaTitle")}</h2>
      <p>${t("ctaText")}</p></div>
      <a class="button" href="./?page=contact">${t("contact")}</a></div>
    </div></section>`;
  }

  function contactForm() {
    return `<form id="contactForm" class="form-card">
      <div class="form-grid">
        <div class="form-field">
          <label for="name">${t("name")} *</label>
          <input id="name" name="name" autocomplete="name" required maxlength="100" placeholder="${t("namePlaceholder")}">
        </div>
        <div class="form-field">
          <label for="email">${t("email")} *</label>
          <input id="email" name="email" type="email" autocomplete="email" required maxlength="150" placeholder="${t("emailPlaceholder")}">
        </div>
        <div class="form-field full">
          <label for="subject">${t("subject")} *</label>
          <select id="subject" name="subject" required>
            <option value="">${t("chooseSubject")}</option>
            <option>${t("website")}</option><option>${t("store")}</option>
            <option>${t("redesign")}</option><option>${t("consultationOption")}</option>
            <option>${t("jobOption")}</option><option>${t("other")}</option>
          </select>
        </div>
        <div class="form-field full">
          <label for="message">${t("message")} *</label>
          <textarea id="message" name="message" required minlength="10" maxlength="3000" placeholder="${t("messagePlaceholder")}"></textarea>
        </div>
      </div>
      <button class="button" type="submit">${t("send")}</button>
      <p class="form-note">${t("formNotice")}</p>
    </form>`;
  }

  function homePage() {
    return `
      <section class="hero"><div class="container hero-grid">
        <div>
          <span class="eyebrow">MH Digital Solutions</span>
          <h1>${t("homeTitle")} <span>${t("homeAccent")}</span></h1>
          <p>${t("homeDescription")}</p>
          <div class="hero-actions">
            <a class="button" href="./?page=contact">${t("startProject")}</a>
            <a class="button button-outline" href="./?page=services">${t("exploreServices")}</a>
          </div>
          <div class="stats-grid">
            <div class="stat-card"><strong>01</strong><span>${t("stepOne")}</span></div>
            <div class="stat-card"><strong>02</strong><span>${t("stepTwo")}</span></div>
            <div class="stat-card"><strong>03</strong><span>${t("stepThree")}</span></div>
          </div>
        </div>
        <aside class="hero-card">
          <div class="hero-card-mark">MH</div>
          <h2>Web Design<br>&amp; Digital Solutions</h2>
          <p>${t("footerTagline")}</p>
          <div class="hero-points">
            <div class="hero-point"><span>✓</span>${t("clearDesign")}</div>
            <div class="hero-point"><span>✓</span>${t("responsive")}</div>
            <div class="hero-point"><span>✓</span>${t("practical")}</div>
          </div>
        </aside>
      </div></section>

      <section class="section"><div class="container">
        <div class="section-heading"><span class="section-kicker">MH Digital</span>
          <h2>${t("ourServices")}</h2><p>${t("servicesIntro")}</p></div>
        <div class="cards-grid">${serviceCards()}</div>
      </div></section>

      <section class="section section-alt"><div class="container split-grid">
        <div><span class="section-kicker">${t("whyUs")}</span>
          <h2>${t("aboutTitle")}</h2><p>${t("aboutIntro")}</p>
          <ul class="check-list">
            <li>${t("clearDesignDesc")}</li><li>${t("responsiveDesc")}</li>
            <li>${t("practicalDesc")}</li>
          </ul>
          <a class="button button-dark" href="./?page=about">${t("about")}</a>
        </div>
        <div class="feature-panel"><div><div class="monogram">MH</div>
          <p>${t("footerTagline")}</p></div></div>
      </div></section>

      <section class="section"><div class="container">
        <div class="section-heading"><span class="section-kicker">${t("packages")}</span>
          <h2>${t("ourPackages")}</h2><p>${t("packagesIntro")}</p></div>
        ${packageCards()}
      </div></section>${cta()}`;
  }

  function packageCards() {
    return `<div class="cards-grid">
      <article class="card package-card">
        <div class="card-icon">◇</div><h3>${t("starter")}</h3><p>${t("starterDesc")}</p>
        <div class="price">${t("tailored")}</div>
        <ul><li>${t("featureResponsive")}</li><li>${t("featureContact")}</li><li>${t("featureBasicSeo")}</li></ul>
        <a class="button button-outline" href="./?page=contact">${t("askPrice")}</a>
      </article>
      <article class="card package-card featured">
        <span class="popular-label">${t("business")}</span>
        <div class="card-icon">▣</div><h3>${t("business")}</h3><p>${t("businessDesc")}</p>
        <div class="price">${t("tailored")}</div>
        <ul><li>${t("featureResponsive")}</li><li>${t("featurePages")}</li><li>${t("featureBasicSeo")}</li></ul>
        <a class="button" href="./?page=contact">${t("askPrice")}</a>
      </article>
      <article class="card package-card">
        <div class="card-icon">✧</div><h3>${t("custom")}</h3><p>${t("customDesc")}</p>
        <div class="price">${t("tailored")}</div>
        <ul><li>${t("featurePages")}</li><li>${t("featureMore")}</li><li>${t("responsive")}</li></ul>
        <a class="button button-outline" href="./?page=contact">${t("askPrice")}</a>
      </article>
    </div>`;
  }

  function servicesPage() {
    return `${pageHero(t("ourServices"), t("servicesIntro"))}
      <section class="content-section"><div class="container">
        <div class="cards-grid">${serviceCards()}</div>
      </div></section>${cta()}`;
  }

  function packagesPage() {
    return `${pageHero(t("ourPackages"), t("packagesIntro"))}
      <section class="content-section"><div class="container">
        ${packageCards()}
        <p class="form-note">${t("noFake")}</p>
      </div></section>${cta()}`;
  }

  function aboutPage() {
    return `${pageHero(t("aboutTitle"), t("aboutIntro"))}
      <section class="content-section"><div class="container split-grid">
        <div><h2>${t("whyUs")}</h2><p>${t("whyIntro")}</p>
          <ul class="check-list">
            <li>${t("clearDesignDesc")}</li><li>${t("responsiveDesc")}</li><li>${t("practicalDesc")}</li>
          </ul></div>
        <div class="feature-panel"><div><div class="monogram">MH</div><p>${t("footerTagline")}</p></div></div>
      </div></section>
      <section class="section section-alt"><div class="container">
        <div class="section-heading"><h2>${t("process")}</h2><p>${t("processIntro")}</p></div>
        <div class="cards-grid">
          ${[["01","stepOne","stepOneDesc"],["02","stepTwo","stepTwoDesc"],["03","stepThree","stepThreeDesc"]].map(([n,h,p])=>`
          <article class="card"><div class="card-icon">${n}</div><h3>${t(h)}</h3><p>${t(p)}</p></article>`).join("")}
        </div>
      </div></section>${cta()}`;
  }

  function jobsPage() {
    return `${pageHero(t("jobsTitle"), t("jobsIntro"))}
      <section class="content-section"><div class="container">
        <div class="empty-state"><div class="card-icon" style="margin-inline:auto">✧</div>
          <h2>${t("noVacancies")}</h2><p>${t("jobNote")}</p>
          <a class="button" href="./?page=contact">${t("contact")}</a>
        </div>
      </div></section>`;
  }

  function contactPage(consultation = false) {
    const title = consultation ? t("consultationTitle") : t("contactTitle");
    const intro = consultation ? t("consultationIntro") : t("contactIntro");
    return `${pageHero(title, intro)}
      <section class="content-section"><div class="container split-grid">
        <div><h2>${t("contact")}</h2><p>${t("contactIntro")}</p>
          <div class="contact-options">
            <div class="contact-option"><strong>${t("subject")}</strong><p>${t("noFake")}</p></div>
            <div class="contact-option"><strong>${t("message")}</strong><p>${t("formNotice")}</p></div>
          </div>
        </div>
        <div>${contactForm()}</div>
      </div></section>`;
  }

  function legalPage(type) {
    const isPrivacy = type === "privacy";
    const title = isPrivacy ? t("privacyTitle") : t("termsTitle");
    const intro = isPrivacy ? t("privacyIntro") : t("termsIntro");
    const body = isPrivacy ? t("privacyBody") : t("termsBody");
    return `${pageHero(title, intro)}
      <section class="content-section"><article class="container card">
        <h2>${title}</h2><p>${body}</p>
        <div class="notice">${t("noFake")}</div>
      </article></section>`;
  }

  function notFoundPage() {
    return `${pageHero(t("notFound"), t("notFoundText"))}
      <section class="content-section"><div class="container empty-state">
        <h2>404</h2><p>${t("notFoundText")}</p>
        <a class="button" href="./?page=home">${t("backHome")}</a>
      </div></section>`;
  }

  function currentPage() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get("page") || "home";
    const pages = {
      home: homePage,
      services: servicesPage,
      packages: packagesPage,
      about: aboutPage,
      jobs: jobsPage,
      contact: () => contactPage(false),
      consultation: () => contactPage(true),
      privacy: () => legalPage("privacy"),
      terms: () => legalPage("terms")
    };
    return { page, render: pages[page] || notFoundPage };
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4500);
  }

  function renderPage({ updateHistory = false } = {}) {
    const { page, render } = currentPage();
    app.innerHTML = render();

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = `MH | ${({
      home: t("home"), services: t("services"), packages: t("packages"),
      about: t("about"), jobs: t("jobs"), contact: t("contact"),
      consultation: t("consultation"), privacy: t("privacy"), terms: t("terms")
    })[page] || t("notFound")}`;

    document.querySelectorAll("[data-page]").forEach(link => {
      link.classList.toggle("active", link.dataset.page === page);
      if (link.dataset.page === page) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[language][key]) el.textContent = t(key);
    });

    if (languageToggle) languageToggle.textContent = t("languageButton");
    if (menuToggle) menuToggle.setAttribute("aria-label", t("menuLabel"));
    const backToTop = $("#backToTop");
    if (backToTop) backToTop.textContent = t("backTop");
    if ($("#year")) $("#year").textContent = new Date().getFullYear();

    closeMenu();

    if (updateHistory) window.history.pushState({}, "", `?page=${page}`);
    if (updateHistory) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      language = language === "ar" ? "en" : "ar";
      renderPage();
    });
  }

  if (themeToggle) {
    const savedTheme = (() => {
      try { return localStorage.getItem("mh-theme"); } catch (_) { return null; }
    })();
    if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";
    themeToggle.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";

    themeToggle.addEventListener("click", () => {
      const dark = document.documentElement.dataset.theme !== "dark";
      if (dark) document.documentElement.dataset.theme = "dark";
      else delete document.documentElement.dataset.theme;
      themeToggle.textContent = dark ? "☀" : "☾";
      try { localStorage.setItem("mh-theme", dark ? "dark" : "light"); } catch (_) {}
    });
  }

  document.addEventListener("click", event => {
    const link = event.target.closest('a[href*="?page="]');
    if (!link) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || !url.searchParams.has("page")) return;

    event.preventDefault();
    const page = url.searchParams.get("page") || "home";
    window.history.pushState({}, "", `?page=${encodeURIComponent(page)}`);
    renderPage();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("popstate", () => renderPage());

  app.addEventListener("submit", event => {
    if (event.target.id !== "contactForm") return;
    event.preventDefault();

    const form = event.target;
    if (!form.reportValidity()) {
      showToast(t("formInvalid"));
      return;
    }

    // لا يتم إرسال البيانات أو تخزينها في هذه النسخة.
    showToast(t("formSuccess"));
    form.reset();
  });

  const backToTop = $("#backToTop");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  renderPage();
})();
