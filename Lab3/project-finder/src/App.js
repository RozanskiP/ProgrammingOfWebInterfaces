import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./components/Header";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListOfStudents from "./Student/ListOfStudents";
import AddStudent from "./Student/AddStudent";
import ListOfGroups from "./Group/ListOfGroups";
import AddGroup from "./Group/AddGroup";
import SendMessageStudent from "./components/SendMessageStudent";
import SendMessageGroup from "./components/SendMessageGroup";

const App = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/listofstudents" element={<ListOfStudents />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route
            path="/listofstudents/:idStudent/contact"
            element={<SendMessageStudent />}
          />
          <Route path="/listofgroups" element={<ListOfGroups />} />
          <Route path="/addgroup" element={<AddGroup />} />
          <Route
            path="/listofgroups/:idGroup/contact"
            element={<SendMessageGroup />}
          />
          <Route path="*" element={<p>Incorrect page</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
