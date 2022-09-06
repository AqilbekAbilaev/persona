import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import useCollections from "./hooks/useCollections";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Admin from "./routes/admin/admin";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";
import Create from "./routes/create/create";
import Collections from "./routes/collections/collections";
import Collection from "./components/collection/collection";
import Item from "./components/item/item";

import "./App.css";

function App() {
  const { setCollections } = useCollections();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/collections`).then((data) => {
      setCollections(data.data.collection);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="create" element={<Create />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:id" element={<Collection />} />
          <Route path="collections/:id/:itemId" element={<Item />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
