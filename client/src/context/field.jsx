import { createContext, useState } from "react";

const FieldsContext = createContext("fields");

export const FieldsProvider = ({ children }) => {
  const [fields, setFields] = useState([
    { name: "id", type: "string" },
    { name: "name", type: "string" },
    { name: "tag", type: "string" },
  ]);

  return (
    <FieldsContext.Provider value={{ fields, setFields }}>
      {children}
    </FieldsContext.Provider>
  );
};

export default FieldsContext;
