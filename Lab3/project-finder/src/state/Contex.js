import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

// https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon
export const ListOfStudentsContext = createContext();

export const ListOfStudentsProvider = ({ children }) => {
  const [students, setStudents] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/studentsData.json")
      .then((response) => {
        setStudents(response.data);
      });
  }, []);

  return (
    <ListOfStudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </ListOfStudentsContext.Provider>
  );
};

export const ListOfGroupsContext = createContext();

export const ListOfGroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/data/groupsData.json").then((response) => {
      setGroups(response.data);
    });
  }, []);

  return (
    <ListOfGroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </ListOfGroupsContext.Provider>
  );
};

export const UsersContext = createContext();
export const LoggedUser = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/defaultUsers.json")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const defaultUserData = {
    uuid: 0,
    email: "",
    login: "",
    password: "",
  };
  const [loggedUser, setLoggedUser] = useState(defaultUserData);

  const login = (uuid) => {
    let loginUser = users.find((user) => user.uuid === uuid);
    setLoggedUser(loginUser);
  };

  const logout = () => {
    setLoggedUser(defaultUserData);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <LoggedUser.Provider value={{ loggedUser, login, logout }}>
        {children}
      </LoggedUser.Provider>
    </UsersContext.Provider>
  );
};
