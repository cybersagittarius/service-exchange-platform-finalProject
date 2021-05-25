import ReactDOM from "react-dom";
import Routes from "./Components/Routing/Routes";

import "./styles/scss/mainStyle.scss";

ReactDOM.render(<Routes />, document.getElementById("root"));

// in a separate file called index.js at top level in the original example
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import { Chat } from './chat/Chat';

// ReactDOM.render(
//   <React.StrictMode>
//     <Chat />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

