//action
const BUY_PHONE = "BUY_PHONE";

function buyPhone() {
    return {
        type: BUY_PHONE,
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

const store = Redux.createStore(reducer);
const availablePhones = document.getElementById("count");
availablePhones.innerHTML = store.getState().phones;

document.getElementById("buy-phone").addEventListener("click", function () {
    store.dispatch(buyPhone());
    console.log(store.getState());
});

store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
    console.log("mon nvo store",store.getState());
});
