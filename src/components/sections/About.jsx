import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const About = () => {
    const { t, language } = useLanguage();

    return (
        <section id="about" className="py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                >
                    {t.about.title}
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="/images/about.png"
                        alt="About Me"
                        className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:grayscale-0 transition-all duration-500"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-4">{t.about.im} <span className="text-primary">Afrah Alharbi</span></h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-8 text-justify">
                        {language === 'ar' ? (
                            <>
                                خريجة <span className="text-primary font-bold">علوم حاسب</span> ومطورة برمجيات متخصصة في تطوير تطبيقات <span className="text-primary font-bold">iOS</span>.
                                لدي خبرة في تطوير التطبيقات وكذلك في تصميم واجهات المستخدم وتجربة المستخدم (<span className="text-primary font-bold">UI/UX</span>).
                                تخرجت من <span className="text-primary font-bold">أكاديمية أبل للمطورين</span> وأعمل حاليًا كرائدة أعمال تقنية أقود مشاريع مبتكرة في شركتي الناشئة <span className="text-primary font-bold">شحنة بلس</span> وعضو مجلس إدارة في <span className="text-primary font-bold">جمعية رواد التقنية</span>،
                                ولدي سجل حافل بالإنجازات في مختلف المعارض والمسابقات. أسعى لتقديم حلول رقمية عالية الجودة تجمع بين الابتكار وسهولة الاستخدام وأفضل الممارسات الحديثة في تطوير البرمجيات.
                            </>
                        ) : (
                            <>
                                Fresh <span className="text-primary font-bold">Computer Science</span> graduate and a software developer specialized in developing <span className="text-primary font-bold">iOS</span> applications.
                                I have experience in application development as well as in designing user interfaces and user experiences (<span className="text-primary font-bold">UI/UX</span>).
                                I graduated from the <span className="text-primary font-bold">Apple Developer Academy</span> and currently work as a tech entrepreneur leading innovative projects at my startup <span className="text-primary font-bold">Shohna Plus</span> and a Board Member at <span className="text-primary font-bold">Tech Pioneers Association</span>,
                                with a record of achievements in various exhibitions and competitions. I strive to deliver high-quality digital solutions that combine innovation, ease of use, and modern best practices in software development.
                            </>
                        )}
                    </p>
                    <a
                        href="/files/CV.pdf"
                        download
                        className="inline-block px-8 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1"
                    >
                        {t.about.downloadCv}
                    </a>
                </motion.div>
            </div>
        </section >
    );
};

export default About;
