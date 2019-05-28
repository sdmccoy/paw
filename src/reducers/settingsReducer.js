export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER_SETTINGS':
            return payload;
        case 'SAVE_USER_SETTINGS':
        console.log(payload)
            const profile = Object.assign({}, payload, {
                ageRange: {
                    max: payload.max,
                    min: payload.min,
                }
            })
            delete profile.max;
            delete profile.min;
            return profile;
        default:
            return state;
    }
}