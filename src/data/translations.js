export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            hello: "Hello, my name is",
            im: "And I'm",
            roles: [
                "an iOS Developer",
                "a Software Developer",
                "a UI/UX Designer",
                "an Entrepreneur"
            ],
            desc: "I build smart, innovative iOS applications that merge advanced AI with premium design, driven by an entrepreneurial spirit to create impactful digital solutions."
        },
        about: {
            title: "About Me",
            im: "I'm",
            bio: "Fresh Computer Science graduate and a software developer specialized in developing iOS applications. I have experience in application development as well as in designing user interfaces and user experiences (UI/UX). I graduated from the Apple Developer Academy and currently work as a tech entrepreneur leading innovative projects at my startup Shohna Plus and a Board Member at Tech Pioneers Association, with a record of achievements in various exhibitions and competitions. I strive to deliver high-quality digital solutions that combine innovation, ease of use, and modern best practices in software development.",
            downloadCv: "Download Resume"
        },
        education: {
            title: "My Education",
            degree: "Bachelor degree in Computer Science",
            uni: "Qassim University | Saudi Arabia",
            gpa: "GPA: 4.21 / 5",
            talentUnit: "Talent & Innovation Unit Member",
            deanship: "Deanship of Student Affairs",
            firstPlace: "First Place",
            competition: "English Oral Presentation Competition",
            seniorProject: "Senior Project",
            projectDesc: "Face Detection & Recognition System"
        },
        experience: {
            title: "My Experience",
            apple: {
                role: "iOS Developer & UI/UX Designer",
                company: "Apple Developer Academy | TUWAIQ",
                type: "iOS Development",
                details: [
                    "Developed iOS apps using Swift and SwiftUI, adhering to Apple's UI/UX standards.",
                    "Improved app performance using asynchronous programming and Xcode profiling, resulting in a smoother user experience."
                ]
            },
            techp: {
                role: "Board Member",
                company: "Tech Pioneers | Association",
                type: "Leadership",
                details: [
                    "Contributing to strategic decision-making and governance to drive the association's mission.",
                    "Collaborating with industry leaders to foster innovation and technological advancement in the region."
                ]
            },
            shohna: {
                role: "Co-Founder & CTO",
                company: "Shohna Plus",
                type: "Startup",
                details: [
                    "Co-founded and led technical development of logistics platform connecting e-commerce with shipping companies.",
                    "Won second place in logistics sector competition, honored by multiple ministers and received 250K SAR investment bank support.",
                    "Architected scalable technical solutions and led product development from concept to market-ready platform."
                ]
            },
            nidlp: {
                role: "Entrepreneur & Technical Lead",
                company: "1K Mile Program | NIDLP",
                type: "Entrepreneurship",
                details: [
                    "Drive product vision and business strategy while architecting the entire technical stack for our startup within the 1K Mile entrepreneurial program.",
                    "Lead cross-functional teams (design, development, marketing) to deliver user-centric solutions that align with market needs and program milestones.",
                    "Implement cutting-edge technologies to accelerate MVP development and ensure scalability."
                ]
            }
        },
        projects: {
            title: "My Projects",
            viewProject: "View Project",
            items: [
                {
                    title: "Shohna Plus",
                    description: "Led end-to-end technical architecture and development of an enterprise-grade logistics platform connecting e-commerce businesses with shipping providers. Built with Swift and SwiftUI using Apple's latest frameworks and design principles, ensuring seamless performance and exceptional user experience across iOS devices.",
                    image: "/images/shohna.png",
                    type: "iOS App"
                },
                {
                    title: "UI/UX Enhancement for Barq Wallet",
                    description: "Improved Barq Wallet's UI/UX by simplifying the transfer process and reducing unnecessary screens. Added AI-powered tools for budget management and spending tracking.",
                    image: "/images/Barq.jpg",
                    type: "iOS App",
                    links: [
                        { text: "Case Study", url: "https://www.behance.net/gallery/218496981/BARQ-UX" }
                    ]
                },
                {
                    title: "Sanam Game",
                    description: "An exciting Saudi adventure! Help Saif escape a hilarious camel chase through stunning desert landscapes in this fun, culturally-inspired mobile game.",
                    image: "/images/Sanam.jpg",
                    type: "iOS Game",
                    links: [
                        { text: "App Store", url: "https://apps.apple.com/sa/app/%D8%B3-%D9%86%D8%A7%D9%85/id6748068199" },
                        { text: "View Code", url: "https://github.com/AfrahSaud36/SanamGame" }
                    ]
                },
                {
                    title: "WETHAQ",
                    description: "A platform that connects people who need services with those who offer them. It creates a supportive community fostering collaboration and trust.",
                    image: "/images/WETHAQQ.png",
                    type: "iOS App",
                    links: [
                        { text: "TestFlight", url: "https://testflight.apple.com/join/w1E3AGfa" },
                        { text: "View Code", url: "https://github.com/AfrahSaud36/WETHAQ" }
                    ]
                },
                {
                    title: "Hydrate 💧",
                    description: "A simple SwiftUI app designed to help you track your daily water intake based on your individual needs.",
                    image: "/images/Hydrate.png",
                    type: "iOS App",
                    links: [
                        { text: "View Code", url: "https://github.com/AfrahSaud36/Hydrate" }
                    ]
                },
                {
                    id: "face-detection",
                    title: "Face Detection & Recognition System",
                    description: "Developed a Python-based system using InceptionResNetV1 for Facial Recognition and MTCNN for Face Detection to count and identify known and unknown individuals in real-time video streams. Implemented real-time database connectivity for updating and querying face recognition results.",
                    image: "/images/P1.png",
                    type: "AI & Computer Vision",
                    links: [
                        { text: "View Code", url: "https://github.com/AfrahSaud36/FDR-System" },
                        { text: "Live Demo", url: "https://youtu.be/LlPWWpNDRnc" }
                    ]
                },
                {
                    title: "Pong Game Project",
                    description: "Created a Pong game in C# with Windows Forms, featuring paddle and ball movement, collision detection, scoring, and optimized for smooth gameplay. This project was part of a visual programming course.",
                    image: "/images/P2.png",
                    type: "Game Development",
                    links: [
                        { text: "View Code", url: "https://github.com/ShathaAltassan/PongGame" },
                        { text: "Live Demo", url: "https://github.com/ShathaAltassan/PongGame" }
                    ]
                }
            ]
        },
        achievements: {
            title: "My Achievements",
            viewDetails: "View Details",
            items: [
                {
                    title: "MVPLAB",
                    description: "Selected for the MVPLAB program by the National Technology Development Program (NTDP), designed to empower technology entrepreneurs and accelerate the development of Minimum Viable Products (MVPs).",
                    badge: "MVPLAB",
                    date: "2024",
                    link: "https://ntdp.gov.sa/"
                },
                {
                    title: "Apple Developer Academy Scholarship ",
                    description: "Accepted into a competitive scholarship and intensive training program at the Apple Developer Academy (TUWAIQ) to master iOS development and UI/UX design.",
                    badge: "Scholarship Recipient",
                    date: "Sep 2024",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_appleacademy-tuwaiq-ios-activity-7235905102627106816-XkMo"
                },
                {
                    title: "Misk Initiatives Incubator",
                    description: "Our initiative was selected among the top 12 out of 600 applicants to graduate from the Misk Initiatives Incubator (Tech Pioneers Initiative).",
                    badge: "Top 12 of 600",
                    date: "Dec 2025",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_%D9%85%D9%86-%D8%AD%D8%A7%D8%B6%D9%86%D8%A9-%D9%85%D8%B3%D9%83-%D9%84%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA-%D9%86%D8%A8%D8%AF%D8%A3-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D9%81%D8%B5%D9%84%D8%A7-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7-activity-7409835664260677632-UdFF"
                },
                {
                    title: "1K Mile Entrepreneurship Program",
                    description: "Shohna Plus won 2nd place in the 1K Mile Program supervised by NIDLP, receiving ministerial recognition and a 250,000 SAR financial grant.",
                    badge: "🥈 2nd Place",
                    date: "Oct 2024",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_aeqaezaeuaepaetaeuabraepaesaepabraetaeyaes-activity-7367940658306633729-mnB7"
                },
                {
                    title: "Saudi Global Exhibition (SGiE)",
                    description: "Awarded the Silver Medal at the Saudi Global Exhibition for Inventions & Innovations.",
                    badge: "🥈 Silver Medal",
                    date: "Nov 2025",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_i-am-proud-to-have-won-the-silver-medal-at-activity-7396526158445662208-Hb4w"
                },
                {
                    title: "NASA Space Apps Hackathon",
                    description: "First Place Winner in the Space Apps Challenge (NASA & CST partnership) for the 'AI-powered Fire Detection System' project.",
                    badge: "🥇 First Place",
                    date: "Oct 2023",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_aeuaepaetaehaerabraepaesaeqaedaeyaet-aesaevaexaeyabraesaefaeqaeyaeqaepaesabraepaesaepaeeaepaej-activity-7131317158311014402-dgXx"
                },
                {
                    title: "Tech Founders Program",
                    description: "Our startup was selected among the top tech startups in Saudi Arabia and joined the Tech Founders program by the Ministry of Communications and Information Technology.",
                    badge: "Top Founder",
                    date: "Aug 2025",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_techfounders-mcit-activity-7363572956280549377-T_EN"
                }
            ]
        },
        contact: {
            title: "Contact Me",
            touch: "Get In Touch",
            subtitle: "Let's Get in Touch",
            desc: "I'm always excited to connect and explore new opportunities! Whether you have a project in mind, a question about my work, or want to discuss potential collaborations, please reach out.",
            location: "Riyadh, Saudi Arabia",
            whatsapp: "Chat on WhatsApp",
            linkedin: "LinkedIn Profile"
        },
        skills: {
            title: "My Skills",
            categories: [
                {
                    title: "iOS Development",
                    skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "UI/UX Design", "Git & GitHub", "CloudKit", "App Store Connect"]
                },
                {
                    title: "UI/UX Design",
                    skills: ["User Interface", "User Experience", "Wireframing", "Prototyping", "Figma", "Mobile Design"]
                },
                {
                    title: "AI & Computer Vision",
                    skills: ["Machine Learning", "Computer Vision", "OpenCV", "PyTorch", "Deep Learning"]
                },
                {
                    title: "Development Expertise",
                    skills: ["iOS App Development", "Software Testing", "Database Management", "Debugging"]
                },
                {
                    title: "Soft Skills",
                    skills: ["Teamwork", "Communication", "Problem Solving", "Time Management"]
                },
                {
                    title: "Drone Skills",
                    skills: ["Drone Assembly", "Hardware Integration", "Flight Controller", "Propeller Balancing", "Sensor Calibration", "Flight Testing"]
                }
            ]
        },
        volunteering: {
            title: "Volunteering",
            items: [
                {
                    role: "Cybersecurity Volunteer",
                    organization: "Black Hat",
                    description: "Assisted participants in bug bounty programs by providing support in identifying and reporting security vulnerabilities."
                },
                {
                    role: "AI Volunteer",
                    organization: "SCAI",
                    description: "Volunteered in artificial intelligence projects, supporting research initiatives and developing innovative solutions."
                }
            ]
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "عني",
            education: "التعليم",
            experience: "الخبرات",
            projects: "المشاريع",
            contact: "تواصل معي"
        },
        hero: {
            hello: "أهلاً، اسمي",
            im: "وأنا",
            roles: [
                "مطورة تطبيقات iOS",
                "مطورة برمجيات",
                "مصممة واجهة وتجربة مستخدم",
                "رائدة أعمال"
            ],
            desc: "أبني تطبيقات iOS مبتكرة تدمج الذكاء الاصطناعي بجماليات التصميم، وأقود حلولاً ريادية تحول الرؤى التقنية إلى واقع ملموس."
        },
        about: {
            title: "نبذة عني",
            im: "أنا",
            bio: "خريجة علوم حاسب ومطورة برمجيات متخصصة في تطوير تطبيقات iOS. لدي خبرة في تطوير التطبيقات وكذلك في تصميم واجهات المستخدم وتجربة المستخدم (UI/UX). تخرجت من أكاديمية أبل للمطورين وأعمل حاليًا كرائدة أعمال تقنية أقود مشاريع مبتكرة في شركتي الناشئة شحنة بلس وعضو مجلس إدارة في جمعية رواد التقنية، ولدي سجل حافل بالإنجازات في مختلف المعارض والمسابقات. أسعى لتقديم حلول رقمية عالية الجودة تجمع بين الابتكار وسهولة الاستخدام وأفضل الممارسات الحديثة في تطوير البرمجيات.",
            downloadCv: "تحميل السيرة الذاتية"
        },
        education: {
            title: "التعليم",
            degree: "بكالوريوس في علوم الحاسب",
            uni: "جامعة القصيم | المملكة العربية السعودية",
            gpa: "المعدل: ٤.٢١ / ٥",
            talentUnit: "عضو وحدة الموهبة والابتكار",
            deanship: "عمادة شؤون الطلاب",
            firstPlace: "المركز الأول",
            competition: "مسابقة العرض الشفهي باللغة الإنجليزية",
            seniorProject: "مشروع التخرج",
            projectDesc: "نظام كشف والتعرف على الوجه"
        },
        experience: {
            title: "خبراتي",
            apple: {
                role: "مطورة iOS ومصممة UI/UX",
                company: "أكاديمية مطوري أبل | طويق",
                type: "تطوير iOS",
                details: [
                    "تطوير تطبيقات iOS باستخدام Swift و SwiftUI، مع الالتزام بمعايير تصميم أبل.",
                    "تحسين أداء التطبيقات باستخدام البرمجة غير المتزامنة وتوصيف Xcode، مما أدى إلى تجربة مستخدم أكثر سلاسة."
                ]
            },
            techp: {
                role: "عضو مجلس إدارة",
                company: "جمعية رواد التقنية",
                type: "قيادة",
                details: [
                    "المساهمة في صنع القرارات الاستراتيجية والحوكمة لدفع رسالة الجمعية.",
                    "التعاون مع قادة الصناعة لتعزيز الابتكار والتقدم التكنولوجي في المنطقة."
                ]
            },
            shohna: {
                role: "شريك مؤسس ومدير تقني",
                company: "شحنة بلس",
                type: "شركة ناشئة",
                details: [
                    "تأسيس وقيادة التطوير التقني لمنصة لوجستية تربط التجارة الإلكترونية بشركات الشحن.",
                    "الفوز بالمركز الثاني في مسابقة القطاع اللوجستي، وتكريم من عدة وزراء والحصول على منحة مالية بقيمة 250 ألف ريال.",
                    "هندسة حلول تقنية قابلة للتوسع وقيادة تطوير المنتج من الفكرة إلى منصة جاهزة للسوق."
                ]
            },
            nidlp: {
                role: "رائدة أعمال وقائدة تقنية",
                company: "برنامج الألف ميل | ندلب",
                type: "ريادة أعمال",
                details: [
                    "قيادة رؤية المنتج واستراتيجية العمل مع هندسة البنية التقنية الكاملة لشركتنا الناشئة ضمن برنامج الألف ميل.",
                    "تطبيق أحدث التقنيات لتسريع تطوير النموذج الأولي وضمان القابلية للتوسع."
                ]
            }
        },
        projects: {
            title: "مشاريعي",
            viewProject: "عاين المشروع",
            items: [
                {
                    title: "شحنة بلس",
                    description: "قيادة الهندسة المعمارية التقنية الشاملة وتطوير منصة لوجستية احترافية تربط أعمال التجارة الإلكترونية بمزودي خدمات الشحن. تم بناؤها باستخدام Swift و SwiftUI مع أحدث تقنيات وأدوات أبل ومبادئ التصميم، لضمان أداء سلس وتجربة مستخدم استثنائية عبر أجهزة iOS.",
                    image: "/images/shohna.png",
                    type: "تطبيق iOS"
                },
                {
                    title: "تحسين واجهة وتجربة المستخدم لمحفظة برق",
                    description: "تحسين واجهة وتجربة المستخدم لمحفظة برق من خلال تبسيط عملية التحويل وتقليل الشاشات غير الضرورية. إضافة أدوات مدعومة بالذكاء الاصطناعي لإدارة الميزانية وتتبع الإنفاق.",
                    image: "/images/Barq.jpg",
                    type: "تطبيق iOS",
                    links: [
                        { text: "دراسة الحالة", url: "https://www.behance.net/gallery/218496981/BARQ-UX" }
                    ]
                },
                {
                    title: "لعبة سنام",
                    description: "مغامرة سعودية مثيرة! ساعد سيف للهروب من مطاردة جمل مرحة عبر مناظر صحراوية خلابة في هذه اللعبة المستوحاة من الثقافة المحلية.",
                    image: "/images/Sanam.jpg",
                    type: "لعبة iOS",
                    links: [
                        { text: "متجر التطبيقات", url: "https://apps.apple.com/sa/app/%D8%B3-%D9%86%D8%A7%D9%85/id6748068199" },
                        { text: "عرض الكود", url: "https://github.com/AfrahSaud36/SanamGame" }
                    ]
                },
                {
                    title: "وثاق",
                    description: "منصة تربط الأشخاص الذين يحتاجون إلى خدمات بمن يقدمونها. تخلق مجتمعًا داعمًا يعزز التعاون والثقة.",
                    image: "/images/WETHAQQ.png",
                    type: "تطبيق iOS",
                    links: [
                        { text: "TestFlight", url: "https://testflight.apple.com/join/w1E3AGfa" },
                        { text: "عرض الكود", url: "https://github.com/AfrahSaud36/WETHAQ" }
                    ]
                },
                {
                    title: "روي 💧",
                    description: "تطبيق SwiftUI بسيط مصمم لمساعدتك على تتبع استهلاكك اليومي من الماء بناءً على احتياجاتك الفردية.",
                    image: "/images/Hydrate.png",
                    type: "تطبيق iOS",
                    links: [
                        { text: "عرض الكود", url: "https://github.com/AfrahSaud36/Hydrate" }
                    ]
                },
                {
                    id: "face-detection",
                    title: "نظام كشف والتعرف على الوجه",
                    description: "تم تطوير نظام قائم على بايثون باستخدام InceptionResNetV1 للتعرف على الوجه و MTCNN للكشف عن الوجه لعد وتحديد هوية الأشخاص المعروفين والمجهولين في تدفقات الفيديو المباشرة. تم تنفيذ اتصال بقاعدة بيانات في الوقت الفعلي لتحديث واستعلام نتائج التعرف على الوجه.",
                    image: "/images/P1.png",
                    type: "الذكاء الاصطناعي والرؤية الحاسوبية",
                    links: [
                        { text: "عرض الكود", url: "https://github.com/AfrahSaud36/FDR-System" },
                        { text: "عرض حي", url: "https://youtu.be/LlPWWpNDRnc" }
                    ]
                },
                {
                    title: "مشروع لعبة بونغ",
                    description: "تم إنشاء لعبة بونغ باستخدام C# و Windows Forms، وتتميز بحركة المضرب والكرة، واكتشاف التصادم، وحساب النتائج، وتحسينها لضمان سلاسة اللعب. كان هذا المشروع جزءًا من دورة البرمجة المرئية.",
                    image: "/images/P2.png",
                    type: "تطوير ألعاب",
                    links: [
                        { text: "عرض الكود", url: "https://github.com/ShathaAltassan/PongGame" },
                        { text: "عرض حي", url: "https://github.com/ShathaAltassan/PongGame" }
                    ]
                }
            ]
        },
        achievements: {
            title: "إنجازاتي",
            viewDetails: "عرض التفاصيل",
            items: [
                {
                    title: "MVPLAB",
                    description: "تم اختياري في برنامج MVPLAB من البرنامج الوطني لتنمية قطاع تقنية المعلومات (NTDP) لدعم رواد الأعمال التقنيين وتسريع تطوير النماذج الأولية للمنتجات.",
                    badge: "MVPLAB",
                    date: "٢٠٢٤",
                    link: "https://ntdp.gov.sa/"
                },
                {
                    title: "منحة أكاديمية أبل للمطورين ",
                    description: "القبول في منحة ريادية وتدريبية مكثفة في أكاديمية شركة أبل للمطورين (Apple Developer Academy | TUWAIQ) لتطوير مهارات البرمجة والتصميم.",
                    badge: "مقبول في المنحة",
                    date: "سبتمبر ٢٠٢٤",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_appleacademy-tuwaiq-ios-activity-7235905102627106816-XkMo"
                },
                {
                    title: "حاضنة مسك للمبادرات",
                    description: "تم اختيار مبادرتنا ضمن أفضل ١٢ مبادرة من أصل ٦٠٠ متقدم للتخرج من حاضنة مسك للمبادرات (مبادرة رواد التقنية).",
                    badge: "أفضل ١٢ من أصل ٦٠٠",
                    date: "ديسمبر ٢٠٢٥",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_%D9%85%D9%86-%D8%AD%D8%A7%D8%B6%D9%86%D8%A9-%D9%85%D8%B3%D9%83-%D9%84%D9%84%D9%85%D8%A8%D8%A7%D8%AF%D8%B1%D8%A7%D8%AA-%D9%86%D8%A8%D8%AF%D8%A3-%D8%A7%D9%84%D9%8A%D9%88%D9%85-%D9%81%D8%B5%D9%84%D8%A7-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A7-activity-7409835664260677632-UdFF"
                },
                {
                    title: "برنامج ألف ميل لريادة الأعمال",
                    description: "حصول 'شحنة بلس' على المركز الثاني في برنامج 'ألف ميل' بإشراف (ندلب) ودعم وزاري، مع منحة مالية بقيمة 250,000 ريال.",
                    badge: "🥈 المركز الثاني",
                    date: "أكتوبر ٢٠٢٤",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_aeqaezaeuaepaetaeuabraepaesaepabraetaeyaes-activity-7367940658306633729-mnB7"
                },
                {
                    title: "المعرض السعودي الدولي (SGiE)",
                    description: "الحصول على الميدالية الفضية في المعرض السعودي الدولي للاختراع والابتكار.",
                    badge: "🥈 ميدالية فضية",
                    date: "نوفمبر ٢٠٢٥",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_i-am-proud-to-have-won-the-silver-medal-at-activity-7396526158445662208-Hb4w"
                },
                {
                    title: "هاكاثون تطبيقات الفضاء من ناسا",
                    description: "المركز الأول في هاكاثون تحدي تطبيقات الفضاء (بشراكة بين ناسا وهيئة الاتصالات) عن مشروع 'نظام كشف الحرائق بالذكاء الاصطناعي'.",
                    badge: "🥇 المركز الأول",
                    date: "أكتوبر ٢٠٢٣",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_aeuaepaetaehaerabraepaesaeqaedaeyaet-aesaevaexaeyabraesaefaeqaeyaeqaepaesabraepaesaepaeeaepaej-activity-7131317158311014402-dgXx"
                },
                {
                    title: "برنامج رواد التقنية",
                    description: "تم اختيار شركتنا الناشئة ضمن أفضل الشركات التقنية الناشئة في المملكة والانضمام لبرنامج رواد التقنية من قبل وزارة الاتصالات وتقنية المعلومات.",
                    badge: "أفضل مؤسس",
                    date: "أغسطس ٢٠٢٥",
                    link: "https://www.linkedin.com/posts/afrah-alharbi36_techfounders-mcit-activity-7363572956280549377-T_EN"
                }
            ]
        },
        contact: {
            title: "تواصل معي",
            touch: "ابقى على تواصل",
            subtitle: "دعنا نتواصل",
            desc: "أنا متحمسة دائمًا للتواصل واستكشاف فرص جديدة! سواء كان لديك مشروع في ذهنك، أو سؤال حول عملي، أو ترغب في مناقشة تعاون محتمل، فلا تتردد في التواصل.",
            location: "الرياض، المملكة العربية السعودية",
            whatsapp: "محادثة واتساب",
            linkedin: "ملف لينكد إن"
        },
        skills: {
            title: "مهاراتي",
            categories: [
                {
                    title: "تطوير iOS",
                    skills: ["Swift", "SwiftUI", "UIKit", "Core Data", "UI/UX Design", "Git & GitHub", "CloudKit", "App Store Connect"]
                },
                {
                    title: "تصميم UI/UX",
                    skills: ["User Interface", "User Experience", "Wireframing", "Prototyping", "Figma", "Mobile Design"]
                },
                {
                    title: "الذكاء الاصطناعي والرؤية الحاسوبية",
                    skills: ["Machine Learning", "Computer Vision", "OpenCV", "PyTorch", "Deep Learning"]
                },
                {
                    title: "خبرات تطويرية",
                    skills: ["iOS App Development", "Software Testing", "Database Management", "Debugging"]
                },
                {
                    title: "المهارات الشخصية",
                    skills: ["العمل الجماعي", "التواصل", "حل المشكلات", "إدارة الوقت"]
                },
                {
                    title: "مهارات الدرون",
                    skills: ["تجميع الدرون", "تكامل الأجهزة", "وحدة التحكم في الطيران", "توازن المراوح", "معايرة الحساسات", "اختبار الطيران"]
                }
            ]
        },
        volunteering: {
            title: "التطوع",
            items: [
                {
                    role: "متطوع في الأمن السيبراني",
                    organization: "بلاك هات",
                    description: "مساعدة المشاركين في برامج مكافئات الثغرات من خلال تقديم الدعم في تحديد الثغرات الأمنية والإبلاغ عنها."
                },
                {
                    role: "متطوع في الذكاء الاصطناعي",
                    organization: "سكاي (SCAI)",
                    description: "التطوع في مشاريع الذكاء الاصطناعي، ودعم المبادرات البحثية وتطوير حلول مبتكرة."
                }
            ]
        }
    }
};
