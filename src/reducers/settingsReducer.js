export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER_SETTINGS':
            return payload;
        case 'SAVE_USER_SETTINGS':
            const profile = Object.assign(state, payload)
            delete profile.max;
            delete profile.min;
            return profile;
        default:
            return state;
    }
}