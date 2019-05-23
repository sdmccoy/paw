export default (state = [], action) => {
    const { type, payload } = action;
    console.log({payload})
    switch (type) {
        case 'SET_USER_SETTINGS':
            return payload;
        default:
            return state;
    }
}