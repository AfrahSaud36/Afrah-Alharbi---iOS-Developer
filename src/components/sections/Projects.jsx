import { motion } from 'framer-motion';
import { Github, ExternalLink, Download, AppWindow } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = t.projects.items;

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block border-b-4 border-primary pb-2"
                    >
                        {t.projects.title}
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects && projects.map((project, index) => (
                        <motion.div
                            key={index}
                            id={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark rounded-3xl overflow-hidden shadow-xl border border-gray-800 hover:border-primary/50 transition-all group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-3 mb-4">
                                    {project.links && project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary/20 text-primary rounded-lg transition-colors border border-primary/20 text-sm font-medium"
                                        >
                                            {link.text.includes("Code") || link.text.includes("الكود") ? <Github size={18} /> : <ExternalLink size={18} />}
                                            <span>{link.text}</span>
                                        </a>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags && project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                    {project.type && (
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                                            {project.type}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
