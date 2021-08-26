import React from 'react';
import Store from "../store";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "../styles/theme";
import {Provider} from "react-redux";
import App from "./App";

const Root = () => (<Provider store={Store}>
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
</Provider>);

export default Root