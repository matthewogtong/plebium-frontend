import React from "react";
import TitleHeader from "./TitleHeader"
import About from "./About"
import TrendingList from "../TrendingList"

function TitlePage({
  loginUsername,
  setLoginUsername,
  handleLoginSubmit,
  newUsername,
  setNewUsername,
  newFirstName,
  setNewFirstName,
  newLastName,
  setNewLastName,
  newBio,
  setNewBio,
  handleCreateAccountSubmit
}) {
  return (
    <div id="title-page">
      <TitleHeader
        loginUsername={loginUsername}
        setLoginUsername={setLoginUsername}
        handleLoginSubmit={handleLoginSubmit}
        newUsername={newUsername}
        setNewUsername={setNewUsername}
        newFirstName={newFirstName}
        setNewFirstName={setNewFirstName}
        newLastName={newLastName}
        setNewLastName={setNewLastName}
        newBio={newBio}
        setNewBio={setNewBio}
        handleCreateAccountSubmit={handleCreateAccountSubmit}
      />
      <About />
      <TrendingList />
    </div>
  );
}

export default TitlePage;