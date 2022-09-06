import { useContext } from "react";
import TagsContext from "../context/tags";

const useTags = () => {
  return useContext(TagsContext);
};

export default useTags;
