import { motion } from 'framer-motion';
import Typewriter from '../ui/Typewriter';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="grid md:grid-cols-2 gap-10 items-center w-full">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left order-2 md:order-1"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-2">{t.hero.hello}</h2>
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">Afrah Alharbi</h1>
                    <div className="text-xl md:text-3xl font-bold text-white mb-6 flex gap-2 justify-center md:justify-start">
                        <span>{t.hero.im}</span>
                        <Typewriter
                            strings={t.hero.roles}
                        />
                    </div>
                    <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
                        {t.hero.desc}
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://www.linkedin.com/in/afrah-alharbi36/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <img src="/images/linkedin icon.png" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a href="mailto:afrahsaud36@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <img src="/images/email icon.png" alt="Email" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a href="tel:+966506025451" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <img src="/images/phone icon.png" alt="Phone" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a href="https://github.com/afrahsaud36" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <img src="/images/github icon.png" alt="GitHub" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                        <a href="https://wa.me/966506025451" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all transform hover:-translate-y-1">
                            <img src="/images/WhatsApp.png" alt="WhatsApp" className="w-6 h-6 md:w-8 md:h-8" />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center md:justify-end order-1 md:order-2"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                        <img
                            src="/images/hi.png"
                            alt="Afrah Alharbi"
                            className="relative z-10 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
