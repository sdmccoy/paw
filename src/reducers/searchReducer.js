export default (state = [], action) => {
    const { type, payload } = action;
    
    switch (type) {
        case 'PET_LIST_SET':
            return payload;
        default:
            return state;
    }
}