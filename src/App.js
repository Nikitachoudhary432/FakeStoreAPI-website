import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProducts from "./Componnts/AllProducts";
import SingleProducts from "./Componnts/SingleProducts";
import AllCart from "./Componnts/AllCart";
import User from "./Componnts/User";
import Login from "./Componnts/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<AllProducts />} />
          <Route path="/single/:id" element={<SingleProducts />} />
          <Route path="/allCart" element={<AllCart />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
