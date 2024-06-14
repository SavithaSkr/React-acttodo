import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
const App = () => {
  const [users, setUsers] = useState([
    {
      userName: "abc",
      password: "123",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login users={users} setUsers={setUsers} />} />
        <Route
          path="/signup"
          element={<Signup users={users} setUsers={setUsers} />}
        />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
