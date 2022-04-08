import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListOfStudentsContext } from "../state/Contex";

const AddStudent = () => {
  const { students, setStudents } = useContext(ListOfStudentsContext);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [tags, setTags] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [subject, setSubject] = useState();
  const [group, setGroup] = useState();

  const handleSetName = (e) => setName(e.target.value);
  const handleSetTags = (e) => setTags(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetDescription = (e) => setDescription(e.target.value);
  const handleSetSubject = (e) => setSubject(e.target.value);
  const handleSetGroup = (e) => setGroup(e.target.value);

  // dodanie studenta
  const handleSetStudents = () => {
    if (
      tags === undefined ||
      name === undefined ||
      email === undefined ||
      description === undefined ||
      subject === undefined ||
      group === undefined
    ) {
      return;
    }

    let newStudent = {
      id: Number(
        Math.max.apply(
          Math,
          students.map((value) => {
            return value.id;
          })
        ) + 1
      ),
      name: name,
      email: email,
      description: description,
      subject: subject,
      group: group,
      image: "",
    };

    newStudent.tags = tags.split(",");

    const updateStudents = [...students, newStudent];
    setStudents(updateStudents);

    // clear inputs
    setName("");
    setTags("");
    setEmail("");
    setDescription("");
    setSubject("");
    setGroup("");

    navigate("/listofstudents", { replace: true });
  };

  return (
    <div>
      <NavLink className="btn btn-secondary m-2" to="/listofstudents">
        Szukaj studenta
      </NavLink>
      <NavLink className="btn btn-secondary m-2" to="/addstudent">
        Dodaj nowego studenta
      </NavLink>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Nazwa</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nazwa"
                onChange={handleSetName}
              />
              <small id="emailHelp" className="form-text text-muted">
                Ta nazwa będzie sie pojawiała jako twój identyfikator na stronie
                - Imie
              </small>
            </div>
            <div className="form-group m-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Wprowadz Email"
                onChange={handleSetEmail}
              />
              <small id="emailHelp" className="form-text text-muted">
                Nigdy nie udostepnimy swojego emaila innym osoba
              </small>
            </div>
            <div className="form-group m-3">
              <label>Wprowadz nazwe przedmiotu</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Nazwa przedmiotu"
                onChange={handleSetSubject}
              />
            </div>
            <div className="form-group m-3">
              <label>Wprowadz dzień i godzinę zajęć</label>
              <input
                type="text"
                className="form-control"
                name="group"
                placeholder="Kiedy"
                onChange={handleSetGroup}
              />
            </div>
            <div className="form-group m-3">
              <label>
                Wprowadz Tagi ułatwiające wyszukiwanie (po przecinku)
              </label>
              <input
                type="text"
                className="form-control"
                name="tags"
                placeholder="Tagi"
                onChange={handleSetTags}
              />
            </div>
            <div className="form-group m-3">
              <label>Opisz Siebie</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                onChange={handleSetDescription}
              ></textarea>
            </div>
            <button className="btn btn-success" onClick={handleSetStudents}>
              Dodaj swoje zgłoszenie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
