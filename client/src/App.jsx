import Login from "./components/login/login";
import SignUp from "./components/sign-up/sign-up";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div><Link to="/login">Hello</Link></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
