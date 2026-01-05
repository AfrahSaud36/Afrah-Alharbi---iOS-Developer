import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal, ExternalLink, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Achievements = () => {
    const { t } = useLanguage();
    const achievements = t.achievements.items;

    const getIcon = (index) => {
        const icons = [
            <Star size={32} className="text-yellow-400" />,
            <Award size={32} className="text-blue-400" />,
            <Trophy size={32} className="text-primary" />,
            <Medal size={32} className="text-gray-300" />
        ];
        return icons[index] || <Award size={32} className="text-primary" />;
    };

    return (
        <section id="achievements" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                    >
                        {t.achievements.title}
                    </motion.h2>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-dark p-4 md:p-6 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group flex flex-col items-center text-center h-full"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all group-hover:bg-primary/20"></div>

                            <div className="flex justify-between items-start w-full mb-6 relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    {getIcon(index)}
                                </div>
                                {achievement.date && (
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 backdrop-blur-sm shadow-sm">
                                        <Calendar size={10} />
                                        <span className="uppercase tracking-wider">{achievement.date}</span>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 text-center">{achievement.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">{achievement.description}</p>

                            <div className="flex flex-col gap-4 w-full mt-auto">
                                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30 text-center">
                                    {achievement.badge}
                                </span>

                                {achievement.link && (
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-xl border border-white/10 transition-all group/btn"
                                    >
                                        <span>{t.achievements.viewDetails}</span>
                                        <ExternalLink size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
