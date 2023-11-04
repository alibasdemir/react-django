import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Container>
      <h1>Home</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>
            <Link to="/signup">Sign up</Link>
          </p>
          <p>
            <Link to="/logout">Logout</Link>
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
