"use client";

import React from "react";
import "./page.css";
import "tachyons";
import App from "../components/App.js";
import reportWebVitals from "../reportWebVitals.js";
import {createLogger} from "redux-logger";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from "../reducers.js";
import {thunk} from "redux-thunk";
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';
// import {configureStore} from 'reduxjs/toolkit'; // to replace createStore as it became deprecated

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default function Page() {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();

