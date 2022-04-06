import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ListOfGroupsProvider, ListOfStudentsProvider } from "./state/Contex";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListOfStudentsProvider>
        <ListOfGroupsProvider>
          <App />
        </ListOfGroupsProvider>
      </ListOfStudentsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

