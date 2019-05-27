export default (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_SAVED_LIST':
            return [...state, payload];
        default:
            return state;
    }
}