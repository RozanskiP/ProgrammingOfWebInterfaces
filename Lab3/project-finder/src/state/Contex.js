import React, { useState, createContext } from "react";
import temporaryDataGroups from "./temporaryDataGroups";
import temporaryDataStudents from "./temporaryDataStudents";

// https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon
export const ListOfStudentsContext = createContext();

export const ListOfGroupsContext = createContext();

export const ListOfStudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(temporaryDataStudents);

  return (
    <ListOfStudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </ListOfStudentsContext.Provider>
  );
};

export const ListOfGroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState(temporaryDataGroups);

  return (
    <ListOfGroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </ListOfGroupsContext.Provider>
  );
};
