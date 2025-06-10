import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/HomePage/Home";
import ReportFoundPage from "./Pages/Forms/ReportFoundPage";
import ReportLostPage from "./Pages/Forms/ReportLostPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/report-found" element=<ReportFoundPage /> />
        <Route path="/report-lost" element=<ReportLostPage /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
