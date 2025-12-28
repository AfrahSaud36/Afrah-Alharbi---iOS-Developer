import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ strings, speed = 50, pause = 1500 }) => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentString = strings[currentStringIndex];

        // Determine the timeout based on whether we are typing or deleting
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setCurrentText(currentString.substring(0, currentText.length + 1));

                // Finished typing the current string
                if (currentText.length + 1 === currentString.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                // Deleting
                setCurrentText(currentString.substring(0, currentText.length - 1));

                // Finished deleting
                if (currentText.length === 0) {
                    setIsDeleting(false);
                    setCurrentStringIndex((prev) => (prev + 1) % strings.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentStringIndex, strings, speed, pause]);

    return (
        <span className="inline-block text-primary">
            {currentText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 inline-block w-[2px] h-[1em] bg-primary align-middle"
            />
        </span>
    );
};

export default Typewriter;
