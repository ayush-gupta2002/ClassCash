import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentProfile from "./pages/StudentProfile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.currentUser);
  const routes = [
    { path: "/register", element: <Register></Register> },
    { path: "/login", element: <Login></Login> },
    { path: "/home", element: <Home></Home> },
    { path: "/studentprofile", element: <StudentProfile></StudentProfile> },
  ];
  const renderedRoutes = routes.map((r) => {
    if (user) {
      return <Route path={r.path} element={r.element}></Route>;
    } else {
      return <Route path={r.path} element={<Login></Login>}></Route>;
    }
  });
  return (
    <div className="flex w-full min-h-screen h-fit bg-black">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="w-full">
        <Navbar></Navbar>
        <Router>
          <Routes>{renderedRoutes}</Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
