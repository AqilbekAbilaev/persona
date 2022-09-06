import { useContext } from "react";
import FieldsContext from "../context/field";

const useField = () => {
  return useContext(FieldsContext);
};

export default useField;
