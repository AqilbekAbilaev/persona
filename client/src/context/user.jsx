import { createContext, useState } from "react";

const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  const [usr, setUsr] = useState({email: "aqilbek"});
  console.log("Use context")

  return (
    <UserContext.Provider value={{ usr, setUsr }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;