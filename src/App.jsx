import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import  HomePage  from "./components/pages/HomePage";
import {Header} from "./components/organisms/Header";
import {Footer} from "./components/organisms/Footer";

import Box from '@mui/material/Box';
const App = () => (
<Box sx={{ flexGrow: 1 }}>
<Header  label={"Miro"}/>
<HomePage />
<Footer label={"footer label"}/>
</Box>
);
ReactDOM.render(<App />, document.getElementById("app"));
