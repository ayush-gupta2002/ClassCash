import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home";

function App() {
  return (
    <div className="flex w-full min-h-screen bg-black h-fit">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="w-full">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
