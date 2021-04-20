import React from 'react';

function useToggle(initialValue) {
    const [value, setValue] = React.useState(initialValue);
    const toggleValue = () => setValue(!value);

    return [value, toggleValue];
}

export default useToggle;
