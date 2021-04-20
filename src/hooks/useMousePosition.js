import React from "react";
import { windowEvents } from '../utils/constants';

function useMousePosition() {
    const [mousePosition, setMousePosition] = React.useState({ x: null, y: null });

    const updateMousePosition = (event) => setMousePosition({ x: event.clientX, y: event.clientY });

    React.useEffect(() => {
        window.addEventListener(windowEvents.MOUSEMOVE, updateMousePosition);

        return () => window.removeEventListener(windowEvents.MOUSEMOVE, updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;