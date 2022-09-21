import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveThinks from "./components/GiveThinks";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} exact element={<Home/>} />
            <Route path={"/login"} exact element={<Login/>} />
            <Route path={"/register"} exact element={<Register/>} />
            <Route path={"/logout"} exact element={<Logout/>}/>
            <Route path={"/GiveThinks"} exact element={<GiveThinks/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
