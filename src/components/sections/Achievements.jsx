import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
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
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
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
                            className="bg-dark p-6 rounded-3xl border border-gray-800 shadow-xl relative overflow-hidden group flex flex-col items-center text-center h-full"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full transition-all group-hover:bg-primary/20"></div>

                            <div className="mb-6 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                {getIcon(index)}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3">{achievement.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">{achievement.description}</p>

                            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full border border-primary/30 mt-auto">
                                {achievement.badge}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
