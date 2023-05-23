import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentProfile from "./pages/StudentProfile";

function App() {
  return (
    <div className="flex w-full min-h-screen h-fit bg-black">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="w-full">
        <Navbar></Navbar>
        {/* <Home></Home> */}
        {/* <StudentProfile></StudentProfile>
        <Footer></Footer> */}
        <Register></Register>
      </div>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
