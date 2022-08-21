import { Routes, Route, Link } from "react-router-dom";

import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";

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
          .
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
