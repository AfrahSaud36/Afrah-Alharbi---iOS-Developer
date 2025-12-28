import { motion } from 'framer-motion';
import { GraduationCap, Star, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Education = () => {
    const { t } = useLanguage();

    return (
        <section id="education" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                    >
                        {t.education.title}
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark p-8 rounded-3xl shadow-2xl border border-gray-800 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/20 bg-white flex items-center justify-center shrink-0 shadow-lg shadow-primary/10">
                            <img src="/images/QU.jpg" alt="Qassim University" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">{t.education.degree}</h3>
                            <h4 className="text-xl text-primary mb-3">{t.education.uni}</h4>
                            <div className="flex flex-wrap items-center justify-center gap-4 mb-2">
                                <p className="text-gray-500 font-medium">2019 - 2024</p>
                                <span className="text-gray-700 hidden sm:block">|</span>
                                <p className="text-white font-bold bg-primary/10 px-4 py-1.5 rounded-full border border-primary/30 shadow-lg shadow-primary/5">{t.education.gpa}</p>
                            </div>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-gradient-to-br from-white/5 to-white/0 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-primary/30 group/item relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity opacity-0 group-hover/item:opacity-100"></div>
                                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
                                    <Star className="text-primary" size={20} />
                                </div>
                                <h5 className="font-bold text-white text-sm mb-1">{t.education.talentUnit}</h5>
                                <p className="text-gray-400 text-xs">{t.education.deanship}</p>
                            </motion.div>

                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-gradient-to-br from-white/5 to-white/0 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-yellow-500/30 group/item relative overflow-hidden flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity opacity-0 group-hover/item:opacity-100"></div>
                                <div className="w-10 h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                                    <Award className="text-yellow-500" size={20} />
                                </div>
                                <h5 className="font-bold text-white text-sm mb-1">{t.education.firstPlace}</h5>
                                <p className="text-gray-400 text-xs">{t.education.competition}</p>
                            </motion.div>

                            <motion.a
                                href="#face-detection"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="bg-gradient-to-br from-white/5 to-white/0 p-4 rounded-2xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/30 group/item block relative overflow-hidden cursor-pointer flex flex-col items-center text-center"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity opacity-0 group-hover/item:opacity-100"></div>
                                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    <GraduationCap className="text-blue-500" size={20} />
                                </div>
                                <h5 className="font-bold text-white text-sm mb-1">{t.education.seniorProject}</h5>
                                <p className="text-gray-400 text-xs">{t.education.projectDesc}</p>
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
