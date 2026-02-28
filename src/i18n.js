import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {

        "projectsBtn": "My Projects",
        "stats": {
          "real": "Real Projects",
          "group": "Group Projects",
          "mini": "Mini Projects"
        },
        "projects": [
          {
            "title": "Articles",
            "desc": "You can find articles with famous people and everything is free",
            "viewDetails": "View Details"
          },
          {
            "title": "Ramadan",
            "desc": "Tracks how many fasts you have kept during Ramadan and gives exact info",
            "viewDetails": "View Details"
          },
          {
            "title": "Rockpaper",
            "desc": "A fun game to play with friends when bored",
            "viewDetails": "View Details"
          },
          {
            "title": "Statisda",
            "desc": "CRM-like platform, very advanced",
            "viewDetails": "View Details"
          },
          {
            "title": "Testify",
            "desc": "A website to check your English level in a few hours at home",
            "viewDetails": "View Details"
          },
          {
            "title": "Laptop",
            "desc": "A laptop store website offering a wide and large selection",
            "viewDetails": "View Details"
          }
        ],

        hello: "Hello! I'm",
        roles: ["Developer", "Designer", "Creator", "Blogger"],
        desc: "Frontend developer and designer. I create modern, fast and user-friendly websites. Currently studying at Ilmla IT Center.",
        aboutBtn: "About me",
        projectsBtn: "My Projects",
        flipName: "Yusuf Aminov",
        flipBirthday: "📅 2010",
        flipAge: "🎂 Age: 16",
        flipDev: "💻 Frontend Developer",
        flipDesigner: "🎨 Designer",

        nav: {
          about: "About",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact",
        },
        about: {
          title: "About Me",
          name: "Name",
          birth: "Birth Year",
          profession: "Profession",
          education: "Education",
          info: {
            name: "Yusuf Aminov",
            birth: "2010",
            profession: "Frontend Developer & Designer",
            education: "Ilmla IT Center"
          },
          roles: [
            {
              title: "UX / UI Designer",
              desc: "I design interfaces that are user-friendly, aesthetic, and clear."
            },
            {
              title: "Software Developer",
              desc: "I build fast, reliable, and scalable web applications using JavaScript."
            },
            {
              title: "Creator",
              desc: "I bring creativity and unique ideas to every project."
            },
            {
              title: "Student",
              desc: "Studying at Ilmla IT Center and constantly improving my skills."
            }
          ]
        },
        contact: {
          title: "Contact Me",
          desc: "Leave a message if you have any questions",
          name: "Your Name",
          phone: "Phone Number",
          message: "Message",
          send: "Send",
          sending: "Sending...",
          successTitle: "Message Sent",
          successDesc: "It has arrived in the email 📩",
          phoneError: "Phone number must be 9 digits"
        },
        skills: {
          title: "My IT & Design Skills 💻🎨",
          itTitle: "IT Skills",
          designTitle: "Design Skills",
          html: "The main markup language to create web page structure.",
          css: "Style and make web pages responsive with beautiful design.",
          scss: "Extended syntax for writing CSS more organized and easier.",
          js: "Programming language to make web pages interactive and dynamic.",
          node: "Platform to run JavaScript on the server side.",
          python: "Suitable language for backend, automation and AI projects.",
          sql: "Language to work with databases and write queries.",
          react: "Library for building modern and fast user interfaces.",
          reactRouter: "Navigation between pages in React projects.",
          ts: "Adds types to JavaScript to reduce errors.",
          tailwind: "Quick and beautiful design using utility classes.",
          flask: "Lightweight and fast backend framework based on Python.",
          figma: "Tool for designing interfaces and creating prototypes.",
          canva: "Platform for quick graphic designs and posts.",
          adobe: "Tool to create visual content and simple designs.",
          uxui: "Principles of user experience and interface design.",
        },
      },
    },
    uz: {
      translation: {



        "projectsBtn": "Loyihalarim",
        "stats": {
          "real": "Real loyihalar",
          "group": "Guruh loyihalari",
          "mini": "Mini loyihalar"
        },
        "projects": [
          {
            "title": "Maqolalar",
            "desc": "Taniqli insonlar bilan qilingan maqolalarni topishingiz mumkin va barchasi tekin",
            "viewDetails": "Ko‘rish"
          },
          {
            "title": "Ramadan",
            "desc": "Ramazon oyida qancha ro'za tutganingizni hisoblab sizga aniq ma'lumot beradi",
            "viewDetails": "Ko‘rish"
          },
          {
            "title": "Rockpaper",
            "desc": "Zerikkanda do'stlar bilan o'ynash uchun ajoyib o'yin",
            "viewDetails": "Ko‘rish"
          },
          {
            "title": "Statisda",
            "desc": "Crmga o'xshash platforma. Juda advanced qilib ishlangan",
            "viewDetails": "Ko‘rish"
          },
          {
            "title": "Testify",
            "desc": "O'zingiz uyda bir necha soat ichida English tili darajangizni aniqlash uchun yaratilgan websayt",
            "viewDetails": "Ko‘rish"
          },
          {
            "title": "Laptop",
            "desc": "Turli va katta tanlov imkoniyatini beradigan noutbuklar do'koni sayti",
            "viewDetails": "Ko‘rish"
          }
        ],

        hello: "Salom! Men",
        roles: ["Dasturchi", "Designer", "Ijodkor", "Bloger"],
        desc: "Frontend dasturchi va dizayner. Zamonaviy, tezkor va foydalanuvchi uchun qulay web-saytlar yarataman. Hozirda Ilmla IT markazida o‘qiyman.",
        aboutBtn: "Men haqimda",
        projectsBtn: "Loyihalarim",
        flipName: "Aminov Yusuf",
        flipBirthday: "📅 2010-yil",
        flipAge: "🎂 Yosh: 16",
        flipDev: "💻 Frontend dasturchi",
        flipDesigner: "🎨 Designer",

        nav: {
          about: "Men haqimda",
          experience: "Tajriba",
          projects: "Loyihalar",
          contact: "Bog‘lanish",
        },

        about: {
          title: "Men haqimda",
          name: "Ism",
          birth: "Tug‘ilgan yil",
          profession: "Kasb",
          education: "Ta’lim",
          info: {
            name: "Yusuf Aminov",
            birth: "2010",
            profession: "Frontend Dasturchi & Dizayner",
            education: "Ilmla IT markazi"
          },
          roles: [
            {
              title: "UX / UI Dizayner",
              desc: "Foydalanuvchi uchun qulay, estetik va tushunarli interfeyslar loyihalayman."
            },
            {
              title: "Software Dasturchi",
              desc: "JavaScript asosida tezkor, ishonchli va scalable web-ilovalar yarataman."
            },
            {
              title: "Ijodkor",
              desc: "Har bir loyihaga kreativ yondashuv va o‘ziga xos g‘oya olib kiraman."
            },
            {
              title: "Talaba",
              desc: "Ilmla IT markazida tahsil olib, doimiy ravishda bilimimni oshiraman."
            }
          ]
        },
        contact: {
          title: "Bog‘lanish",
          desc: "Savoling bo‘lsa yozib qoldiring",
          name: "Ismingiz",
          phone: "Telefon raqam",
          message: "Xabaringiz (internet bo'lmasa jo'nata olmaysiz)",
          send: "Yuborish",
          sending: "Yuborilmoqda...",
          successTitle: "Xabar yuborildi",
          successDesc: "Emailga keldi 📩",
          phoneError: "Telefon raqami 9 ta raqam bo‘lishi kerak"
        },
        skills: {
          title: "IT va Dizayn Ko‘nikmalarim 💻🎨",
          itTitle: "IT Ko‘nikmalar",
          designTitle: "Dizayn Ko‘nikmalar",
          html: "Veb sahifalar tuzilmasini yaratish uchun asosiy belgilash tili.",
          css: "Veb sahifalarni chiroyli dizaynda bezash va moslashuvchan qilish.",
          scss: "CSS’ni yanada qulay va tartibli yozish uchun kengaytirilgan sintaksis.",
          js: "Veb sahifalarni interaktiv va jonli qilish uchun dasturlash tili.",
          node: "JavaScript orqali server tomonida ishlash imkonini beruvchi platforma.",
          python: "Backend, avtomatlashtirish va AI loyihalar uchun qulay til.",
          sql: "Ma’lumotlar bazasi bilan ishlash va so‘rovlar yozish tili.",
          react: "Zamonaviy va tezkor foydalanuvchi interfeyslarini yaratish kutubxonasi.",
          reactRouter: "React loyihalarda sahifalar o‘rtasida navigatsiya qilish.",
          ts: "JavaScript’ga turlar qo‘shib, xatolarni kamaytirish.",
          tailwind: "Utility class’lar orqali tez va chiroyli dizayn qilish.",
          flask: "Python asosida yengil va tezkor backend framework.",
          figma: "Interfeys dizaynlarini chizish va prototip qilish uchun vosita.",
          canva: "Tezkor grafik dizaynlar va postlar tayyorlash platformasi.",
          adobe: "Vizual kontent va oddiy dizaynlar yaratish uchun vosita.",
          uxui: "Foydalanuvchi tajribasi va interfeys dizayni tamoyillari.",
        },
      },
    },
    ru: {
      translation: {

        "projectsBtn": "Мои проекты",
        "stats": {
          "real": "Реальные проекты",
          "group": "Групповые проекты",
          "mini": "Мини проекты"
        },
        "projects": [
          {
            "title": "Статьи",
            "desc": "Вы можете найти статьи с известными людьми, всё бесплатно",
            "viewDetails": "Посмотреть детали"
          },
          {
            "title": "Рамадан",
            "desc": "Считает, сколько постов вы соблюдали в Рамадан, и даёт точную информацию",
            "viewDetails": "Посмотреть детали"
          },
          {
            "title": "Rockpaper",
            "desc": "Отличная игра с друзьями для развлечения",
            "viewDetails": "Посмотреть детали"
          },
          {
            "title": "Statisda",
            "desc": "Платформа, похожая на CRM. Очень продвинутая",
            "viewDetails": "Посмотреть детали"
          },
          {
            "title": "Testify",
            "desc": "Веб-сайт для определения уровня английского языка за несколько часов дома",
            "viewDetails": "Посмотреть детали"
          },
          {
            "title": "Laptop",
            "desc": "Сайт магазина ноутбуков с большим выбором",
            "viewDetails": "Посмотреть детали"
          }
        ],

        hello: "Привет! Я",
        roles: ["Разработчик", "Дизайнер", "Творец", "Блогер"],
        desc: "Фронтенд разработчик и дизайнер. Создаю современные, быстрые и удобные для пользователя сайты. Сейчас учусь в IT центре Ilmla.",
        aboutBtn: "Обо мне",
        projectsBtn: "Мои проекты",
        flipName: "Юсуф Аминов",
        flipBirthday: "📅 2010",
        flipAge: "🎂 Возраст: 16",
        flipDev: "💻 Frontend разработчик",
        flipDesigner: "🎨 Дизайнер",

        nav: {
          about: "Обо мне",
          experience: "Опыт",
          projects: "Проекты",
          contact: "Контакты",
        },

        about: {
          title: "Обо мне",
          name: "Имя",
          birth: "Год рождения",
          profession: "Профессия",
          education: "Образование",
          info: {
            name: "Юсуф Аминов",
            birth: "2010",
            profession: "Frontend разработчик & дизайнер",
            education: "IT центр Ilmla"
          },
          roles: [
            {
              title: "UX / UI Дизайнер",
              desc: "Проектирую интерфейсы, удобные, эстетичные и понятные пользователю."
            },
            {
              title: "Software разработчик",
              desc: "Создаю быстрые, надежные и масштабируемые веб-приложения на JavaScript."
            },
            {
              title: "Творец",
              desc: "Вношу креатив и уникальные идеи в каждый проект."
            },
            {
              title: "Студент",
              desc: "Учусь в IT центре Ilmla и постоянно повышаю свои навыки."
            }
          ]
        },
        contact: {
          title: "Связаться",
          desc: "Оставьте сообщение, если есть вопросы",
          name: "Имя",
          phone: "Телефон",
          message: "Сообщение",
          send: "Отправить",
          sending: "Отправка...",
          successTitle: "Сообщение отправлено",
          successDesc: "Пришло на почту 📩",
          phoneError: "Телефон должен содержать 9 цифр"
        },




        skills: {
          title: "Мои навыки в IT и дизайне 💻🎨",
          itTitle: "IT навыки",
          designTitle: "Дизайн навыки",
          html: "Основной язык разметки для создания структуры веб-страницы.",
          css: "Стилизация и адаптация веб-страниц с красивым дизайном.",
          scss: "Расширенный синтаксис для более удобного и упорядоченного CSS.",
          js: "Язык программирования для интерактивных и динамичных веб-страниц.",
          node: "Платформа для запуска JavaScript на серверной стороне.",
          python: "Удобный язык для бэкенда, автоматизации и AI проектов.",
          sql: "Язык для работы с базами данных и написания запросов.",
          react: "Библиотека для создания современных и быстрых интерфейсов.",
          reactRouter: "Навигация между страницами в проектах на React.",
          ts: "Добавляет типы в JavaScript для уменьшения ошибок.",
          tailwind: "Быстрый и красивый дизайн с помощью utility классов.",
          flask: "Легкий и быстрый backend-фреймворк на Python.",
          figma: "Инструмент для проектирования интерфейсов и прототипирования.",
          canva: "Платформа для быстрых графических дизайнов и постов.",
          adobe: "Инструмент для создания визуального контента и простых дизайнов.",
          uxui: "Принципы UX/UI дизайна и опыта пользователя.",
        },
      },
    },
  },

  lng: "uz",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
