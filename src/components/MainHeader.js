import React from "react";
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
          <h1 className="main-header-title">Plebium</h1>
          <h4 className="main-header-welcome">Welcome Back</h4>
          <h3 className="main-header-name">{currentUser.first_name} {currentUser.last_name}</h3>
        <Button className="main-header-write" variant="success" onClick={handleWriteStory}>Write</Button>
        <Button className="main-header-profile" variant="success"onClick={handleViewProfile}>Profile</Button>
      </div>
    );
        
}

export default MainHeader;