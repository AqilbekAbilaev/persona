import { createContext, useState } from "react";

const CollectionsContext = createContext("collections");

export const CollectionsProvider = ({ children }) => {
  const [collections, setCollections] = useState();

  return (
    <CollectionsContext.Provider value={{ collections, setCollections }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsContext;