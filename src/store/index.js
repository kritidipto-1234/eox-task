import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import axios from "axios";

const actions = {
    SET_DATA: "set_data",
};

const actionCreators = {
    fetchNewsData: () => {
        return async (dispatch, getState) => {
            const res = await axios(
                "https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json"
            );

            dispatch({
                type: actions.SET_DATA,
                data: res.data,
            });
        };
    },
};

function reducer(state = { publisherData: {} }, action) {
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actions.SET_DATA:
            for (const news of action.data) {
                if (!newState.publisherData[news.PUBLISHER])
                    newState.publisherData[news.PUBLISHER] = [];
                newState.publisherData[news.PUBLISHER].push(news);
            }
            break;

        default:
    }
    return newState;
}

const reduxDevToolEnabler =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), reduxDevToolEnabler)
);

export default store;
export { actions, actionCreators };
