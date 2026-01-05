import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                    >
                        {t.contact.title}
                    </motion.h2>
                    <p className="text-gray-400 mt-4 text-base md:text-lg">{t.contact.touch}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img src="/images/cont.png" alt="Contact" className="w-64 md:w-full md:max-w-md mx-auto" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center h-full text-center md:text-left"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{t.contact.subtitle}</h3>
                        <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed">
                            {t.contact.desc}
                        </p>

                        <div className="space-y-6 flex flex-col items-center md:items-start">
                            <a href="mailto:afrahsaud36@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                    <Mail />
                                </div>
                                <span className="text-lg md:text-xl">afrahsaud36@gmail.com</span>
                            </a>

                            <a href="tel:+966506025451" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                    <Phone />
                                </div>
                                <span className="text-lg md:text-xl">+966 50 602 5451</span>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                    <MapPin />
                                </div>
                                <span className="text-lg md:text-xl">{t.contact.location}</span>
                            </div>

                            <a href="https://www.linkedin.com/in/afrah-alharbi36/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                    <Linkedin />
                                </div>
                                <span className="text-lg md:text-xl">{t.contact.linkedin}</span>
                            </a>

                            <a href="https://wa.me/966506025451" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                                    <img src="/images/WhatsApp.png" className="w-6 h-6" alt="WhatsApp" />
                                </div>
                                <span className="text-xl">{t.contact.whatsapp}</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
