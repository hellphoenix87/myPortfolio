import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/landing/landing.css";
import "./pages/about/about.css";
import "./pages/portfolio/portfolio.css";
import "./pages/contact/contact.css";

import App from "./App";

import { BrowserRouter, HashRouter } from 'react-router-dom';
const RouterComponent = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <RouterComponent>
      <App />
    </RouterComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
