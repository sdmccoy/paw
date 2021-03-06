export default (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'PET_LIST_SET':
            return payload;
        case 'FILTER_PET_LIST':
            return state.filter(pet => pet.id !== payload);
        default:
            return state;
    }
}