import { useLayoutEffect, useState } from 'react';

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useLayoutEffect(() => {
        const handleScroll = () => {
            const scrollY = document.documentElement.scrollTop;
            setScrollY(scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return scrollY;
};

export default useScroll;
