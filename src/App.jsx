import "./App.css";
import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context/MyContext";
import { Homepage } from "./components/Homepage";
import { Login } from "./components/Login";
import { ErrorPage } from "./components/ErrorPage";
import { Profile } from "./components/Profile";
import { Edit } from "./components/Edit";

function App() {
  
  
  return (
    <MyContextProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile/:username" element={<Profile/>}></Route>
          <Route path="/profile/:username/edit" element={<Edit/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </MyContextProvider>
  );
}

export default App;
