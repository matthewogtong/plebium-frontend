import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"

//thinking we can find minimal icons to use for the buttons?
function TitleHeader({
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
  const [showSignIn, setShowSignIn] = useState(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);

  const [showGetStarted, setShowGetStarted] = useState(false);
  const handleCloseGetStarted = () => setShowGetStarted(false);
  const handleShowGetStarted = () => setShowGetStarted(true);

  return (
    <div className="title-header">
      <h2 className="title-name">Plebium</h2>
      <>
        <Button
          className="sign-in"
          variant="transparent"
          onClick={handleShowSignIn}
        >
          Sign In
        </Button>

        <Modal centered show={showSignIn} onHide={handleCloseSignIn}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome Back.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h3>Log In</h3>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                name="username"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseSignIn}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleLoginSubmit}>
              Log In
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <>
        <Button
          className="get-started"
          variant="dark"
          onClick={handleShowGetStarted}
        >
          Get Started
        </Button>

        <Modal centered show={showGetStarted} onHide={handleCloseGetStarted}>
          <Modal.Header closeButton>
            <Modal.Title>Join Pleblium</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <h3>Create an Account</h3>
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                id="username"
                name="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <br></br>
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
              <br></br>
              <label htmlFor="lastname">Last Name: </label>
              <input
                type="text"
                id="lastname"
                name="lasname"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
              <br></br>
              <label htmlFor="bio">Bio: </label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseGetStarted}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleCreateAccountSubmit}>
              Create Account
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default TitleHeader