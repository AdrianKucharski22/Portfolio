import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/Home";
import Login from "./components/Login";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} exact element={<Home/>} />
            <Route path={"/login"} exact element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
