import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Profile from "./pages/Profile";
import TaskNew from "./pages/TaskNew";
import TaskEdit from "./pages/TaskEdit";
import Task from "./pages/Task";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/task" element={<Task />} />
            <Route path="/task-new" element={<TaskNew />} />
            <Route path="/task-edit/:id" element={<TaskEdit />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="ac/reset/:id/:token" element={<Reset />} />
        </Routes>
        </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
