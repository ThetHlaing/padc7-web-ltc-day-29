const departments = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_DEPARTMENTS':
            return action.departments;
        case 'ADD_DEPARTMENT':
            return [...state, action.department];
        default:
            return state;

    }
}

export default departments;