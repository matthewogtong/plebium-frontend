import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Redirect } from "react-router-dom"

function MainHeader({ currentUser }) {

  function handleWriteStory() {
    <Redirect to="/new-story" />

  }

  function handleViewProfile(id) {
    <Redirect to="/profile/:id" />
  }

  const userStories = currentUser.stories

  console.log(userStories)

    return (
      <div className="main-header">
        <Jumbotron>
          <h1 className="main-header-title">Plebium</h1><h2>Welcome Back {currentUser.first_name} {currentUser.last_name}</h2>
        <Button className="main-header-write" variant="success" onClick={handleWriteStory}>Write</Button>
        <Button className="main-header-profile" variant="success"onClick={handleViewProfile}>View Profile</Button>
        </Jumbotron>
      </div>
    );
        
}

export default MainHeader;