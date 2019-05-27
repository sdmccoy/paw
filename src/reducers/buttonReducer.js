export default (state = 'search', action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_MODULE':
            return payload;
        default:
            return state;
    }
}