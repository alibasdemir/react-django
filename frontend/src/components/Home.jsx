import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    console.log(storedUser);
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <Container>
      <h1>Home</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p> {/* USERNAME GÖRÜNMÜYOR BU DURUMU ÇÖZ */}
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/signup">Sign up</Link>
          </p>
          <p>
            <Link to="/logout">Logout</Link>
          </p>
          <p>
            <Link to="/changepassword">Change Password</Link>
          </p>
          <p>
            <Link to="/userlist">User List</Link>
          </p>
        </div>
      ) : (
        <div>
          <p>Welcome, Guest!</p>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      )}
    </Container>
  );
}

export default Home;
