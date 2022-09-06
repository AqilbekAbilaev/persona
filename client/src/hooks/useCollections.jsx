import { useContext } from "react";
import CollectionsContext from "../context/collections";

const useCollections = () => {
  return useContext(CollectionsContext);
};

export default useCollections;
