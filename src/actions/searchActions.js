export const petListSet = petList => ({
    type: 'PET_LIST_SET',
    payload: petList,
});

export const filterPetList = petId => ({
    type: 'FILTER_PET_LIST',
    payload: petId,
});

export const addToSavedList = petId => ({
    type: 'ADD_TO_SAVED_LIST',
    payload: petId,
});