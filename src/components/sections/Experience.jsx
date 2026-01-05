import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();

    const experiences = [
        {
            ...t.experience.apple,
            period: "Aug 2024 – Jun 2025",
            image: "/images/applelogo.png"
        },
        {
            ...t.experience.techp,
            period: "Aug 2025 – Present",
            image: "/images/techp.jpeg"
        },
        {
            ...t.experience.shohna,
            period: "2024 – Present",
            image: "/images/winshohna.png"
        },
        {
            ...t.experience.nidlp,
            period: "Mar 2025 – Aug 2025",
            image: "/images/nidlp.jpeg"
        }
    ];

    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                    >
                        {t.experience.title}
                    </motion.h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary to-transparent" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark z-10" />

                            <div className="md:w-1/2 p-4"></div> {/* Spacer */}

                            <div className="md:w-1/2 p-4 pl-6 md:pl-8 md:pr-4">
                                <div className="bg-dark p-4 md:p-6 rounded-2xl shadow-xl hover:shadow-primary/20 transition-all border border-gray-800 hover:border-primary/50 group">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white flex-shrink-0 flex items-center justify-center border-2 border-primary/20">
                                            <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <span className="text-primary text-sm font-bold uppercase tracking-wider">{exp.type}</span>
                                            <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                                            <h4 className="text-gray-400 text-sm">{exp.company}</h4>
                                            <h5 className="text-gray-500 text-xs italic">{exp.period}</h5>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
