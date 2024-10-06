import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
     
        <Routes>

          <Route element ={<PrivateComponent/>}>
          <Route path="/" element={<h1>Product Listing</h1>} />
          <Route path="/add" element={<h1><AddProduct/></h1>} />
          <Route path="/update" element={<h1>Update Listing Component</h1>} />
          <Route path="/logout" element={<h1>Logout Component</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          
          </Route>


          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
