import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./features/UserAlbums/store/store";
import { App } from "./features/UserAlbums/App";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
);