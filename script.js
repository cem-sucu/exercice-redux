//action
const BUY_PHONE = "BUY_PHONE";

function buyPhone() {
    return {
        type: "buyPhone",
    };
}

//reducer
//(prevState, action ) => newState

const initialState = {
    phones: 5,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state, // ce ...state dans ce cas dz figue n'est pas utile car il n'ya qu'une propriété phone, mais s'il y avait plusuieur propriété elle serais utiles..
                phones: state.phones - 1,
            };

        default:
            return state;
    }
};
