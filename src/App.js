import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/Register";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="container h-screen max-w-full bg-slate-50">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
