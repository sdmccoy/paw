export default (state = 'search', action) => {
    const { type, payload } = action;
console.log({payload}, {state})
    switch (type) {
        case 'SET_MODULE':
            return payload;
        default:
            return state;
    }
}