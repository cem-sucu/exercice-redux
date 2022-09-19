//action
const BUY_PHONE = "BUY_PHONE";
const BUY_TABLET = "BUY_TABLET";
const BUY_TV = "BUY_TV";

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

function buyTv() {
    return {
        type: BUY_TV,
    };
}

//reducer

const initialStatePhone = {
    phones: 5,
    tablet: 10,
};

const initialStateTv = {
    tv: 20,
};

const phoneReducer = (state = initialStatePhone, action) => {
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

const tvReducer = (state = initialStateTv, action) => {
    switch (action.type) {
        case BUY_TV:
            return {
                ...state, // ce ...state dans ce cas de figure n'est pas utile car il n'ya qu'une propriété phone, mais s'il y avait plusuieur propriété elle serais utiles..
                tv: state.tv - 1,
            };
        default:
            return state;
    }
};

//Combiner reducer
const rootReducer = Redux.combineReducers({
    phone: phoneReducer,
    tv: tvReducer,
});

// CREE LE STORE
const store = Redux.createStore(rootReducer);

// Récupérer la data
const availablePhones = document.getElementById("count");
const availableTablet = document.getElementById("count-tab");
const availableTv = document.getElementById("count-tv");

availablePhones.innerHTML = store.getState().phone.phones; // le innerHTML permet d'afficher la donnee
availableTablet.innerHTML = store.getState().phone.tablet;
availableTv.innerHTML = store.getState().tv.tv;
console.log("Initial State", store.getState());

// effectue le dispatch d'une action
document.getElementById("buy-phone").addEventListener("click", function () {
    store.dispatch(buyPhone());
    console.log(store.getState());
});

document.getElementById("buy-tablet").addEventListener("click", function () {
    store.dispatch(buyTablet());
});

document.getElementById("buy-tv").addEventListener("click", function () {
    store.dispatch(buyTv());
});

// Listener
store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phone.phones;
    availableTablet.innerHTML = store.getState().phone.tablet;
    availableTv.innerHTML = store.getState().tv.tv;
    console.log("Update State", store.getState());
});
