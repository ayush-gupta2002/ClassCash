import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex w-full min-h-screen h-fit bg-black">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="w-full">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
