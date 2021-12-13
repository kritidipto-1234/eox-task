import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import { actionCreators } from "./store";
import { SpinnerCircular } from "spinners-react";
import Home from "./pages/Home";
import Publisher from "./pages/Publisher";

function App() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //load data and then hide loading spinner
        //API fetched only once and data stored in redux
        dispatch(actionCreators.fetchNewsData()).then(() =>
            setIsLoading(false)
        );
    }, [dispatch]);

    if (isLoading)
        return (
            <div className="App">
                <SpinnerCircular className="spinner" />
            </div>
        );

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:publisher" exact component={Publisher} />
            </Switch>
        </div>
    );
}

export default App;
