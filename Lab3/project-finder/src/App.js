import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./components/Header";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListOfStudents from "./Student/ListOfStudents";
import AddStudent from "./Student/AddStudent";
import ListOfGroups from "./Group/ListOfGroups";
import AddGroup from "./Group/AddGroup";
import temporaryDataStudents from "./Student/temporaryDataStudents";
import temporaryDataGroups from "./Group/temporaryDataGroups";

const App = () => {
  const history = useNavigate();

  // -------------------- STUDENT
  // lista studentow
  const [students, setStudents] = useState(temporaryDataStudents);

  // student w inpucie
  const [student, setStudent] = useState({});

  const handleSetStudentInputsValue = (event) => {
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
    setStudent({
      id: "",
      name: "",
      email: "",
      description: "",
      tags: "",
      subject: "",
      group: "",
    });

    history("/listofstudents", { replace: true });
  };

  // checkboxs
  const [radioCheckboxStudent, setRadioCheckboxStudent] = useState(
    "radioDescriptionStudent"
  );
  // checkbox zmiana
  const handleSetRadioCheckboxStudent = (event) => {
    setRadioCheckboxStudent(event.target.value);
  };

  // filter do inputa
  const [filter, setFilter] = useState("");
  // zmiana filtra do inputa
  const handleSetFilter = (event) => {
    setFilter(event.target.value);
  };

  // tymczasowa lista do sortowania studentow
  const filterListStudents = students.filter((student) => {
    return radioCheckboxStudent === "radioDescriptionStudent"
      ? student.description.toLowerCase().includes(filter.toLowerCase())
      : radioCheckboxStudent === "radioTagsStudent"
      ? student.tags.toString().toLowerCase().includes(filter.toLowerCase())
      : student.subject.toLowerCase().includes(filter.toLowerCase());
  });
  // -------------------- STUDENT

  // -------------------- GRUPA
  // lista grup
  const [groups, setGroups] = useState(temporaryDataGroups);

  // lista checkbox grup
  const [radioCheckboxGroup, setRadioCheckboxGroup] = useState(
    "radioDescriptionGroup"
  );

  const handleSetRadioCheckboxGroup = (event) => {
    setRadioCheckboxGroup(event.target.value);
  };

  // filter do inputa grup
  const [filterGroup, setFilterGroup] = useState("");
  // zmiana filtra do inputa grup
  const handleSetFilterGroup = (event) => {
    setFilterGroup(event.target.value);
  };

  // tymczasowa lista do sortowania grup
  const filterListGroup = groups.filter((group) => {
    return radioCheckboxGroup === "radioDescriptionGroup"
      ? group.description.toLowerCase().includes(filterGroup.toLowerCase())
      : group.subject.toLowerCase().includes(filterGroup.toLowerCase());
  });

  // grupa w inpucie
  const [group, setGroup] = useState({});

  const handleSetGroupInputsValue = (event) => {
    const { name, value } = event.target;
    setGroup((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // set członka grupy
  const [member, setMember] = useState({});

  const handleSetMember = (event) => {
    const {name, value} = event.target;
    setMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // dodanie grupy
  const handleSetGroups = () => {
    if (
      group === "" ||
      group.name === undefined ||
      group.description === undefined ||
      group.subject === undefined
    ) {
      return;
    }
    let groupToChange = group;
    groupToChange.id = Number(
      Math.max.apply(
        Math,
        groups.map((value) => {
          return value.id;
        })
      ) + 1
    );
    
    let temporaryGroupOfMembers = []
    for(let i = 0; i < Object.keys(member).length/3; i++){
      let memberNew = {
        id: 1,
        studentName: member["studentName-" + i],
        email: member["email-" + i],
        whatStudentTo: member["whatStudentTo-" + i]
      }
      temporaryGroupOfMembers.push(memberNew);
    }
    setGroup("");
    setMember("");
    groupToChange.members = temporaryGroupOfMembers;

    const updateGroup = [...groups, groupToChange];
    setGroups(updateGroup);

    history("/listofgroups", { replace: true });
  };
  // -------------------- GRUPA

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
                radioCheckbox={radioCheckboxStudent}
                handleSetRadioCheckbox={handleSetRadioCheckboxStudent}
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
          <Route
            path="/listofgroups"
            element={
              <ListOfGroups
                groups={filterListGroup}
                radioCheckboxGroup={radioCheckboxGroup}
                handleSetRadioCheckboxGroup={handleSetRadioCheckboxGroup}
                handleSetFilterGroup={handleSetFilterGroup}
              />
            }
          />
          <Route
            path="/addgroup"
            element={
              <AddGroup
                group={group}
                handleSetGroups={handleSetGroups}
                handleSetGroupInputsValue={handleSetGroupInputsValue}
                key={group.id}
                member={member}
                handleSetMember={handleSetMember}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
