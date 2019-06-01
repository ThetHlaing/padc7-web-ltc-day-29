const token = (state = null, action) => {
    switch (action.type) {
        case 'GET_TOKEN':
            return state;
        case 'ADD_TOKEN':
            return action.token;
        default:
            return state;

    }
}

export default token;