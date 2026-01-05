import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
    const { t } = useLanguage();
    const skillCategories = t.skills.categories;

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                >
                    {t.skills.title}
                </motion.h2>
            </div>

            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark p-4 md:p-6 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-primary pl-3">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-lg hover:bg-primary/20 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
