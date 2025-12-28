import { motion } from 'framer-motion';
import { Shield, Cpu, Users, BookOpen, Heart, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Volunteering = () => {
    const { t } = useLanguage();
    const volunteering = t.volunteering.items;

    const getImage = (index) => {
        if (index === 0) return "/images/blackhat.jpg";
        if (index === 1) return "/images/scai.png";
        return null;
    };

    const getIcon = (index) => {
        if (index === 0) return <Shield size={20} className="text-primary" />;
        if (index === 1) return <Cpu size={20} className="text-primary" />;
        return <Heart size={20} className="text-primary" />;
    };

    return (
        <section id="volunteering" className="py-20">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                >
                    {t.volunteering.title}
                </motion.h2>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-8">
                    {volunteering.map((item, index) => {
                        // Special layout for items with images
                        const image = getImage(index);

                        if (image) {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-dark rounded-3xl overflow-hidden shadow-xl border border-gray-800 flex flex-col md:flex-row"
                                >
                                    <div className="md:w-2/5 h-48 md:h-auto relative">
                                        <img src={image} alt={item.organization} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                                    </div>
                                    <div className="p-6 md:w-3/5 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            {getIcon(index)}
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.organization}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        }

                        // Default card for items without images (e.g. GDSC)
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-dark rounded-3xl overflow-hidden shadow-xl border border-gray-800 p-6 flex flex-col justify-center md:col-span-2 lg:col-span-1"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary">
                                        {getIcon(index)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.organization}</span>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Volunteering;
