export type LangType = 'en' | 'hu';

export const skills = [
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
            { name: "Symfony", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg" },
            { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
            { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
            { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
            { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" }
        ]
    },
    {
        category: "Database & DevOps",
        items: [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "RabbitMQ", icon: "https://cdn.simpleicons.org/rabbitmq/FF6600" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
        ]
    }
];

export const content = {
    en: {
        nav: {
            title: "VIKTOR",
            titleHighlight: "TOMÁN",
            contactBtn: "Contact Me"
        },
        hero: {
            role: "Senior Web Developer",
            mainTitle: "Code that ",
            mainTitleHighlight: "matters.",
            tagline: "Building robust systems & sleek interfaces.",
            about: "I am a highly skilled and experienced web developer with a strong passion for creating innovative and user-friendly websites. I have honed my skills in front-end and back-end development, mastering various frameworks like Laravel, Symfony, and Vue.js.",
            btnPortfolio: "View Portfolio",
            btnCv: "Download CV"
        },
        sectionTitles: {
            skills: "Technical Stack",
            skillsSub: "Constant learning & improvement",
            experience: "Work Experience",
            projects: "GitHub Portfolio"
        },
        experience: [
            {
                company: "MP Solutions Kft. / Devoralime",
                period: "2023 Jan - Present",
                role: "Web Developer",
                desc: "Individual backend developments in a custom framework for an external project (Instructure). Designing scalable architecture and optimizing database performance."
            },
            {
                company: "SKVAD Digital / Senso Media",
                period: "2022 Jan - 2022 Jun",
                role: "Web Developer",
                desc: "Frontend development for an external project using Angular framework, integrated with complex Laravel backend solutions."
            },
            {
                company: "Trendency Online Zrt.",
                period: "2021 Apr - 2022 Jan",
                role: "Web Developer",
                desc: "Unique backend developments in Laravel (NodeJS, Symfony integrations) and custom frontend interfaces built with Vue.js."
            },
            {
                company: "CodingLab Kft.",
                period: "2021 Jan - 2021 Apr",
                role: "Web Developer",
                desc: "Frontend implementation of unique client orders using the Angular framework, ensuring responsive and interactive designs."
            },
            {
                company: "Adroit Group Kft.",
                period: "2018 Oct - 2021 Jan",
                role: "Web Developer",
                desc: "Backend development of high-traffic news portals in Symfony. Creating custom frontend modules in Angular and Vue.js."
            },
            {
                company: "Zengo Kft.",
                period: "2018 Jan - 2018 May",
                role: "Web Developer",
                desc: "Individual PHP development, building a proprietary system within a custom framework tailored to client needs."
            },
            {
                company: "Online Üzleti Inteligencia Kft.",
                period: "2017 Jan - 2018 Jan",
                role: "Web Developer",
                desc: "Full-cycle development of an internal corporate system using the Laravel framework."
            }
        ],
        projects: [
            {
                title: "InsightHub Analytics",
                tags: ["Next.js", "Express", "Fullstack"],
                desc: "A comprehensive analytics dashboard application built with Next.js for the frontend and Express for the backend API.",
                link: "https://github.com/viktortoman/portfolio-insighthub-nextjs-express",
                viewText: "View Code",
                color: "bg-gradient-to-br from-slate-800 to-blue-900"
            },
            {
                title: "Microservice URL Shortener",
                tags: ["Vue.js", "Microservices", "Scalability"],
                desc: "A modern URL shortening service designed with microservice architecture, featuring a Vue.js frontend interface.",
                link: "https://github.com/viktortoman/portfolio-microservice-url-shortener-vue",
                viewText: "View Code",
                color: "bg-gradient-to-br from-emerald-800 to-teal-900"
            },
            {
                title: "Realtime Poll App",
                tags: ["Node.js", "Angular", "Socket.io"],
                desc: "Interactive polling application allowing users to vote and see results update in real-time using WebSockets.",
                link: "https://github.com/viktortoman/portfolio-realtime-poll-app-node-angular",
                viewText: "View Code",
                color: "bg-gradient-to-br from-red-800 to-rose-900"
            },
            {
                title: "E-commerce Minicart",
                tags: ["Alpine.js", "Vite", "Express"],
                desc: "A lightweight and interactive shopping cart component designed for seamless e-commerce experiences.",
                link: "https://github.com/viktortoman/portfolio-minicart",
                viewText: "View Code",
                color: "bg-gradient-to-br from-orange-800 to-amber-900"
            },
            {
                title: "Fullstack Kanban Board",
                tags: ["Laravel", "React", "Management"],
                desc: "Project management tool implementing Kanban methodology with a robust Laravel API and reactive React frontend.",
                link: "https://github.com/viktortoman/portfolio-fullstack-kanban-laravel-react",
                viewText: "View Code",
                color: "bg-gradient-to-br from-indigo-800 to-purple-900"
            }
        ],
        footer: {
            text: "Creating web solutions with passion and precision since 2018.",
            navigate: "Navigate",
            contact: "Contact",
            rights: "All rights reserved.",
            home: "Home",
            portfolio: "Portfolio"
        },
        contactInfo: {
            phone: "+36 (30) 225 4993",
            email: "viktor.toman19@gmail.com",
            location: "Hungary"
        },
        contactForm: {
            title: "Get in Touch",
            name: "Name",
            email: "Email",
            message: "Message",
            btnSend: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "Something went wrong. Please try again."
        },
    },
    hu: {
        nav: {
            title: "TOMÁN",
            titleHighlight: "VIKTOR",
            contactBtn: "Kapcsolat"
        },
        hero: {
            role: "Senior Web Fejlesztő",
            mainTitle: "Kód, aminek ",
            mainTitleHighlight: "súlya van.",
            tagline: "Robusztus rendszerek és letisztult felületek.",
            about: "Tapasztalt webfejlesztőként szenvedélyem az innovatív és felhasználóbarát weboldalak készítése. Jártas vagyok mind a frontend, mind a backend fejlesztésben, olyan keretrendszerek mély ismeretével, mint a Laravel, Symfony és Vue.js.",
            btnPortfolio: "Portfólió Megtekintése",
            btnCv: "Önéletrajz Letöltése"
        },
        sectionTitles: {
            skills: "Technikai Tudás",
            skillsSub: "Folyamatos tanulás és fejlődés",
            experience: "Szakmai Tapasztalat",
            projects: "GitHub Portfólió"
        },
        experience: [
            {
                company: "MP Solutions Kft. / Devoralime",
                period: "2023 Jan - Jelenleg",
                role: "Web Fejlesztő",
                desc: "Önálló backend oldali fejlesztések egyedi keretrendszerben egy külső projekt (Instructure) számára. Skálázható architektúra tervezése és adatbázis-optimalizálás."
            },
            {
                company: "SKVAD Digital / Senso Media",
                period: "2022 Jan - 2022 Jún",
                role: "Web Fejlesztő",
                desc: "Külső projekt frontend oldali fejlesztése Angular keretrendszerben, komplex Laravel backend megoldásokkal integrálva."
            },
            {
                company: "Trendency Online Zrt.",
                period: "2021 Ápr - 2022 Jan",
                role: "Web Fejlesztő",
                desc: "Egyedi backend fejlesztések Laravel környezetben (NodeJS, Symfony integrációk) és egyedi frontend felületek építése Vue.js segítségével."
            },
            {
                company: "CodingLab Kft.",
                period: "2021 Jan - 2021 Ápr",
                role: "Web Fejlesztő",
                desc: "Egyedi megrendelések frontend oldali megvalósítása Angular keretrendszerben, reszponzív és interaktív design biztosítása."
            },
            {
                company: "Adroit Group Kft.",
                period: "2018 Okt - 2021 Jan",
                role: "Web Fejlesztő",
                desc: "Nagy forgalmú hírportálok backend fejlesztése Symfony keretrendszerben. Egyedi frontend modulok készítése Angular és Vue.js alapokon."
            },
            {
                company: "Zengo Kft.",
                period: "2018 Jan - 2018 Máj",
                role: "Web Fejlesztő",
                desc: "Önálló PHP fejlesztések, saját rendszer építése az ügyfél igényeire szabott egyedi keretrendszerben."
            },
            {
                company: "Online Üzleti Inteligencia Kft.",
                period: "2017 Jan - 2018 Jan",
                role: "Web Fejlesztő",
                desc: "Belső vállalati rendszer teljes körű fejlesztése Laravel keretrendszer használatával."
            }
        ],
        projects: [
            {
                title: "InsightHub Analytics",
                tags: ["Next.js", "Express", "Fullstack"],
                desc: "Átfogó analitikai alkalmazás, Next.js frontenddel és Express backend API-val.",
                link: "https://github.com/viktortoman/portfolio-insighthub-nextjs-express",
                viewText: "Kód Megtekintése",
                color: "bg-gradient-to-br from-slate-800 to-blue-900"
            },
            {
                title: "Microservice URL Shortener",
                tags: ["Vue.js", "Microservices", "Scalability"],
                desc: "Modern URL rövidítő szolgáltatás mikroszolgáltatás architektúrával és Vue.js felhasználói felülettel.",
                link: "https://github.com/viktortoman/portfolio-microservice-url-shortener-vue",
                viewText: "Kód Megtekintése",
                color: "bg-gradient-to-br from-emerald-800 to-teal-900"
            },
            {
                title: "Realtime Poll App",
                tags: ["Node.js", "Angular", "Socket.io"],
                desc: "Interaktív szavazó alkalmazás, ahol a felhasználók valós időben láthatják az eredményeket WebSocket segítségével.",
                link: "https://github.com/viktortoman/portfolio-realtime-poll-app-node-angular",
                viewText: "Kód Megtekintése",
                color: "bg-gradient-to-br from-red-800 to-rose-900"
            },
            {
                title: "E-commerce Minicart",
                tags: ["Alpine.js", "Vite", "Express"],
                desc: "Könnyű és interaktív bevásárlókosár komponens, amelyet zökkenőmentes e-kereskedelmi élményekhez terveztek.",
                link: "https://github.com/viktortoman/portfolio-minicart",
                viewText: "Kód Megtekintése",
                color: "bg-gradient-to-br from-orange-800 to-amber-900"
            },
            {
                title: "Fullstack Kanban Board",
                tags: ["Laravel", "React", "Management"],
                desc: "Projektmenedzsment eszköz Kanban módszertannal, robusztus Laravel API-val és reaktív React frontenddel.",
                link: "https://github.com/viktortoman/portfolio-fullstack-kanban-laravel-react",
                viewText: "Kód Megtekintése",
                color: "bg-gradient-to-br from-indigo-800 to-purple-900"
            }
        ],
        footer: {
            text: "Webes megoldások készítése szenvedéllyel és precizitással 2018 óta.",
            navigate: "Navigáció",
            contact: "Kapcsolat",
            rights: "Minden jog fenntartva.",
            home: "Főoldal",
            portfolio: "Portfólió"
        },
        contactInfo: {
            phone: "+36 (30) 225 4993",
            email: "viktor.toman19@gmail.com",
            location: "Magyarország"
        },
        contactForm: {
            title: "Írj Üzenetet",
            name: "Név",
            email: "Email",
            message: "Üzenet",
            btnSend: "Üzenet Küldése",
            sending: "Küldés...",
            success: "Üzenet sikeresen elküldve!",
            error: "Hiba történt. Kérlek próbáld újra."
        },
    }
};