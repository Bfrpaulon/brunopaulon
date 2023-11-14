import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TextAnimatedSectionHero() {
    const [currentWord, setCurrentWord] = useState(0);
    const words = ['DESIGNER', 'FULL STACK DEVELOPER', 'FREELANCER'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [words]);

    const wordVariants = {
        hidden: {
            x: '-100%',
            opacity: 0,
        },
        visible: {
            x: '0%',
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
            },
        },
        exit: {
            x: '100%',
            opacity: 0,
        },
    };

    return (

        <AnimatePresence mode='wait'>
            <motion.h1
                key={currentWord}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ fontSize: '55px', color: 'white' , fontWeight: 'bold'}}    
            >
                {words[currentWord]}
            </motion.h1>
        </AnimatePresence>
    );
}