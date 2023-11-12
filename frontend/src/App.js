import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import NotFoundPage from "./components/NotFoundPage";
import Changepassword from "./components/changepassword/Changepassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "./components/userlist/UserList";
import Test from "./components/Test";
import Test2 from "./components/Test2";

function App() {
  const [user, setUser] = useState(null);
  console.log('test mesut 1')
  console.log('test mesut 2')
  console.log('test mesut 3')




  return (
    <div>
      <BrowserRouter>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/logout" element={<Logout user={user} />} />
          <Route index element={<Home user={user} />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/changepassword" element={<Changepassword /> } />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/test" index element={<Test />} />
          <Route path="/test2" index element={<Test2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
