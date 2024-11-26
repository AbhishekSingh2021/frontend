import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}
export default App;   
