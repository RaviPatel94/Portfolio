import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings, typeSpeed = 50, backSpeed = 30, loop = true, backDelay = 2000 }) => {
    const typedElement = useRef(null);
    const typedInstance = useRef(null);
    const [inView, setInView] = useState(false);

    const handleObserver = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setInView(true); 
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, {
            threshold: 0.2, 
        });

        if (typedElement.current) {
            observer.observe(typedElement.current);
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    useEffect(() => {
        if (inView) {
            typedInstance.current = new Typed(typedElement.current, {
                strings,
                typeSpeed,
                backSpeed,
                loop,
                backDelay, 
                onComplete: () => {
                    console.log('Completed typing all strings');
                },
            });
        }

        return () => {
            if (typedInstance.current) {
                typedInstance.current.destroy();
            }
        };
    }, [inView, strings, typeSpeed, backSpeed, loop, backDelay]);

    return (
        <div>
            <span ref={typedElement}></span>
        </div>
    );
};

export default TypedText;
