import React from 'react';

function useBoolValue(initialValue) {
    const [value, setValue] = React.useState(initialValue);
    const toggleValue = () => setValue(!value);

    return [value, toggleValue];
}

export default useBoolValue;
