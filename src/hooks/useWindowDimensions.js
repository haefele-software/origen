import React from 'react';
import { windowEvents } from '../utils/constants';

function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';

    const getWindowDimensions = () => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;

        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

    React.useEffect(() => {
        if (hasWindow) {
            const handleResize = () => setWindowDimensions(getWindowDimensions());

            window.addEventListener(windowEvents.RESIZE, handleResize);
            return () => window.removeEventListener(windowEvents.RESIZE, handleResize);
        }
    }, [hasWindow]);

    return windowDimensions;
}

export default useWindowDimensions;