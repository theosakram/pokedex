import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { gqlClient } from "./config/gqlclient";
import { ApolloProvider } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import {
    MyPokemonProvider,
    ThemeProvider,
    NotifyProvider,
    ResponsiveProvider,
} from "./bloc/contexts";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={gqlClient}>
            <ResponsiveProvider>
                <ThemeProvider>
                    <NotifyProvider>
                        <MyPokemonProvider>
                            <App />
                        </MyPokemonProvider>
                    </NotifyProvider>
                </ThemeProvider>
            </ResponsiveProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
