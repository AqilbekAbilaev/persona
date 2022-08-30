import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Admin from "./routes/admin/admin";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";
import Create from "./routes/create/create";

import "./App.css";

function App() {
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
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
