import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentProfile from "./pages/StudentProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import TeacherProfile from "./pages/TeacherProfile";
import Batch from "./pages/Batch";
import AddAttendance from "./pages/AddAttendance";
import QRCodePage from "./pages/QRCodePage";
import OutletRegister from "./pages/OutletRegister";
import OutletLogin from "./pages/OutletLogin";
import OutletProfile from "./pages/OutletProfile";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  const outlet = useSelector((state) => state.outlet.currentOutlet);

  const routes = [
    { path: "/register", element: <Register></Register> },
    { path: "/login", element: <Login></Login> },
    { path: "/home", element: <Home></Home> },
    { path: "/studentprofile", element: <StudentProfile></StudentProfile> },
    { path: "/teacherprofile", element: <TeacherProfile></TeacherProfile> },
    { path: "/batch/:id", element: <Batch></Batch> },
    { path: "/addattendance/:id", element: <AddAttendance></AddAttendance> },
    { path: "/qrcodescanning", element: <QRCodePage></QRCodePage> },
    { path: "/outletregister", element: <OutletRegister></OutletRegister> },
    { path: "/outletlogin", element: <OutletLogin></OutletLogin> },
    { path: "/outletprofile", element: <OutletProfile></OutletProfile> },
  ];
  const renderedRoutes = routes.map((r) => {
    return <Route path={r.path} element={r.element}></Route>;
  });
  console.log(renderedRoutes);
  return (
    <div className="flex w-full min-h-screen h-fit bg-black">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="w-full">
        <Router>
          <Routes>{renderedRoutes}</Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
