import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Logout from "./components/logout/Logout";
import NotFoundPage from "./components/NotFoundPage";
import Changepassword from "./components/changepassword/Changepassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "./components/userlist/UserList";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import { useSelector } from "react-redux";
import CategoryPage from './components/CategoryPage';
import EventDetails from "./components/Events/EventDetails";
import FinishedEventsPage from "./components/Events/FinishedEventsPage";
import SearchResults from "./components/SearchResults";


function App() {
  const { user } = useSelector((state) => state);

  return (
    <div>
      <BrowserRouter>
        <ToastContainer hideProgressBar={true} newestOnTop={true} />
        <Routes>
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/finishedevents" element={<FinishedEventsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/logout" element={<Logout user={user} />} />
          <Route index element={<Home user={user} />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/test" index element={<Test />} />
          <Route path="/test2" index element={<Test2 />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/events/:eventId" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
