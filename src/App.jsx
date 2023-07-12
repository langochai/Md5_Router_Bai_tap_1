import {Login} from "./components/Login.jsx";
import {Home} from "./components/Home.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
