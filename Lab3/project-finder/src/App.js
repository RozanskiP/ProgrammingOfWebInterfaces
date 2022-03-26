import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./components/Header";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListOfStudents from "./Student/ListOfStudents";
import AddStudent from "./Student/AddStudent";
import ListOfGroups from "./Group/ListOfGroups";
import AddGroup from "./Group/AddGroup";
import temporaryDataStudents from "./Student/temporaryDataStudents";

const App = () => {
  // lista studentow
  const [students, setStudents] = useState(temporaryDataStudents);

  // student w inpucie
  const [student, setStudent] = useState({});

  const handleSetStudentInputsValue = (event) => {
    console.log(student);
    const { name, value } = event.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // dodanie studenta
  const handleSetStudents = () => {
    if (
      student === "" ||
      student.tags === undefined ||
      student.name === undefined ||
      student.email === undefined ||
      student.description === undefined ||
      student.subject === undefined ||
      student.group === undefined
    ) {
      return;
    }
    let studentToChange = student;
    studentToChange.id = Number(
      Math.max.apply(
        Math,
        students.map((value) => {
          return value.id;
        })
      ) + 1
    );

    studentToChange.tags = student.tags.split(",");

    const updateStudents = [...students, studentToChange];
    setStudents(updateStudents);
    setStudent("");
  };

  // checkboxs
  const [radioCheckbox, setRadioCheckbox] = useState("radioDescription");
  // checkbox zmiana
  const handleSetRadioCheckbox = (event) => {
    setRadioCheckbox(event.target.value);
  };

  // filer do inputa
  const [filter, setFilter] = useState("");
  // zmiana filta do inputa
  const handleSetFilter = (event) => {
    setFilter(event.target.value);
  };

  // tymczasowa lista do sortowania
  const filterListStudents = students.filter((student) => {
    return radioCheckbox === "radioDescription"
      ? student.description.toLowerCase().includes(filter.toLowerCase())
      : radioCheckbox === "radioTags"
      ? student.tags.toString().toLowerCase().includes(filter.toLowerCase())
      : student.subject.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/listofstudents"
            element={
              <ListOfStudents
                radioCheckbox={radioCheckbox}
                handleSetRadioCheckbox={handleSetRadioCheckbox}
                students={filterListStudents}
                handleSetFilter={handleSetFilter}
              />
            }
          />
          <Route
            path="/addstudent"
            element={
              <AddStudent
                student={student}
                handleSetStudent={handleSetStudents}
                handleSetStudentInputsValue={handleSetStudentInputsValue}
                key={student.id}
              />
            }
          />
          <Route path="/listofgroups" element={<ListOfGroups />} />
          <Route path="/addgroup" element={<AddGroup />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
