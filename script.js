//action
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";

function buyPhone() {
    return {
        type: BUY_PHONE,
    };
}

function buyTablet() {
    return {
        type: BUY_TABLET,
    };
}

//reducer


const initialState = {
    phones: 5,
    tablet: 10,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state, // ce ...state dans ce cas dz figue n'est pas utile car il n'ya qu'une propriété phone, mais s'il y avait plusuieur propriété elle serais utiles..
                phones: state.phones - 1,
            };
            break;
        case BUY_TABLET:
            return {
                ...state, // ce ...state dans ce cas dz figue n'est pas utile car il n'ya qu'une propriété phone, mais s'il y avait plusuieur propriété elle serais utiles..
                tablet: state.tablet - 1,
            };

        default:
            return state;
    }
};

const store = Redux.createStore(reducer);
const availablePhones = document.getElementById("count");
const availableTablet = document.getElementById("count-tab");

availablePhones.innerHTML = store.getState().phones; // le innerHTML permet d'afficher la donnee
availableTablet.innerHTML = store.getState().tablet;

// le click sur phone 
document.getElementById("buy-phone").addEventListener("click", function () {
    store.dispatch(buyPhone());
    console.log(store.getState());
});
// Le click sur tablet
document.getElementById("buy-tablet").addEventListener("click", function () {
    store.dispatch(buyTablet());
    console.log(store.getState());
});


store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
    availableTablet.innerHTML = store.getState().tablet;
    console.log("mon nvo store", store.getState());
});
