export const site = {
  name: {
    fa: "امیدرضا شهبازی",
    en: "OmidReza Shahbazi",
  },
  handle: "itzOmidReza",
  happyClients: 10,
  role: {
    fa: "توسعه‌دهنده‌ی فول‌استک وب",
    en: "Full-Stack Web Developer",
  },
  tagline: {
    fa: "تبدیل ایده‌ها به اپلیکیشن‌های وب آماده‌ی تولید",
    en: "Turning ideas into production-ready web apps",
  },
  bio: {
    short: {
      fa: "دانشجوی مهندسی نرم‌افزار و توسعه‌دهنده‌ی فول‌استک، با تمرکز روی معماری تمیز و تجربه‌ی کاربری. اپلیکیشن‌های وب مدرن، قابل‌نگهداری و در دسترس می‌سازم.",
      en: "Software Engineering student and Full-Stack Web Developer, focused on clean architecture and user experience. I build modern, accessible, and maintainable web applications.",
    },
    long: {
      fa: "دانشجوی مهندسی نرم‌افزار هستم و روی توسعه‌ی وب و سیستم‌های مقیاس‌پذیر تمرکز دارم. علاقه‌مندم ایده‌ها رو به اپلیکیشن‌های آماده‌ی تولید تبدیل کنم و به‌طور مداوم کیفیت کد، تجربه‌ی کاربری و عملکرد رو بهبود بدم. فرانت‌اند حرفه‌ای رو با راهکارهای بک‌اند قدرتمند ترکیب می‌کنم و در حال حاضر مشغول یادگیری و به‌کارگیری ابزارهای هوش مصنوعی و یادگیری ماشین در پروژه‌های واقعی هستم.",
      en: "I'm a Software Engineering student focused on web development and scalable systems. I enjoy turning ideas into production-ready applications and continuously improving code quality, UX, and performance. I combine frontend polish with robust backend solutions, and I'm actively exploring Machine Learning and AI tools to build smarter products.",
    },
  },
  currentFocus: {
    fa: [
      "ساخت اپلیکیشن‌های وب با Nuxt، TypeScript و NestJS",
      "طراحی سیستم‌های UI تمیز و قابل‌استفاده‌ی مجدد",
      "بررسی قابلیت‌های مبتنی بر هوش مصنوعی برای محصولات وب",
    ],
    en: [
      "Building web applications using Nuxt, TypeScript, and NestJS",
      "Designing clean and reusable UI systems",
      "Exploring AI-powered features for web products",
    ],
  },
  learning: {
    fa: [
      "پایتون برای پردازش داده و یادگیری ماشین",
      "مبانی یادگیری ماشین",
      "یکپارچه‌سازی API و ابزارهای هوش مصنوعی در اپلیکیشن‌های واقعی",
    ],
    en: [
      "Python for data processing and ML",
      "Machine Learning fundamentals",
      "Integrating AI APIs & tools into real-world apps",
    ],
  },
  lookingFor: {
    fa: [
      "همکاری در پروژه‌های اوپن‌سورس",
      "کارآموزی یا منتورشیپ در نقش‌های فول‌استک",
      "پروژه‌هایی که ML/AI رو با تجربه‌ی کاربری وب ترکیب می‌کنن",
    ],
    en: [
      "Open-source collaboration",
      "Internships or mentorship in full-stack roles",
      "Projects combining ML / AI with web UX",
    ],
  },
  contact: {
    email: "itzOmidReza@gmail.com",
    website: "https://www.itzomidreza.ir/",
    telegram: "https://t.me/itzOmidReza",
    linkedin: "https://www.linkedin.com/in/omidrezashahbazi/",
    github: "https://github.com/itzOmidReza",
  },
  // مسیر رزومه‌ی PDF — فایل واقعی رو توی public/OmidRezaCV.pdf قرار بده
  resumeUrl: "/OmidRezaCV.pdf",
  // آیکون‌های شبکه‌ی اجتماعی برای Footer/Contact — url خالی = آیکون مخفی
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/itzOmidReza",
      icon: "simple-icons:github",
      showInContact: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/omidrezashahbazi/",
      icon: "simple-icons:linkedin",
      showInContact: true,
    },
    {
      name: "Leetcode",
      url: "",
      icon: "simple-icons:leetcode",
      showInContact: false,
    },
    {
      name: "Behance",
      url: "",
      icon: "simple-icons:behance",
      showInContact: false,
    },
    {
      name: "Email",
      url: "mailto:itzOmidReza@gmail.com",
      icon: "", // پایین توضیح دادم چرا خالی گذاشتیم
      showInContact: true,
    },
    {
      name: "Telegram",
      url: "https://t.me/itzOmidReza",
      icon: "simple-icons:telegram",
      showInContact: true,
    },
    {
      name: "Whatsapp",
      url: "",
      icon: "simple-icons:whatsapp",
      showInContact: false,
    },
    {
      name: "Facebook",
      url: "",
      icon: "simple-icons:facebook",
      showInContact: false,
    },
    {
      name: "Messenger",
      url: "",
      icon: "simple-icons:messenger",
      showInContact: false,
    },
    {
      name: "Instagram",
      url: "",
      icon: "simple-icons:instagram",
      showInContact: false,
    },
  ],
} as const;
