import React from 'react';
import { windowEvents } from '../utils/constants';

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        return { width, height };
    }

    React.useEffect(() => {
        if (hasWindow) {
            const handleResize = () => setWindowDimensions(getWindowDimensions());

            window.addEventListener(windowEvents.RESIZE, handleResize);
            return () => window.removeEventListener(windowEvents.RESIZE, handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}