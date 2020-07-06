export const chunk = (input, size) => {
    // Reducer takes 4 arguments, accumlator, current value, current index (optional), src array (optional)
    // Reducer's return value is assigned to accumulator whose value is rembmered across each iteration and becomes the single final value
    return input.reduce((arr, item, idx) => {
        return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
};