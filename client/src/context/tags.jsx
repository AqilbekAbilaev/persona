import { createContext, useState } from "react";

const TagsContext = createContext("tags");

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState();

  return (
    <TagsContext.Provider value={{ tags, setTags }}>
      {children}
    </TagsContext.Provider>
  );
};

export default TagsContext;