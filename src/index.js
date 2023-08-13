import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="12c487ef-497f-4640-a792-9b3337d69bb8" language="en-US">
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root'));