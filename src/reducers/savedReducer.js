export default (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_SAVED_LIST':
        const combinedList = [...state, payload]
            localStorage.setItem('savedPets', JSON.stringify(combinedList));
            return [...state, payload];
        default:
            return state;
    }
}