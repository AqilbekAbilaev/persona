import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserContext from "./context/user";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Admin from "./routes/admin/admin";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";

import "./App.css";

function App() {
  const { usr } = useContext(UserContext);
  console.log(usr);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
