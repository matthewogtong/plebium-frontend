import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"

//thinking we can find minimal icons to use for the buttons?
function TitleHeader({ loginUsername, setLoginUsername, handleLoginSubmit }) {
    const [showSignIn, setShowSignIn] = useState(false)
    const handleCloseSignIn = () => setShowSignIn(false)
    const handleShowSignIn = () => setShowSignIn(true)

    const [showGetStarted, setShowGetStarted] = useState(false)
    const handleCloseGetStarted = () => setShowGetStarted(false)
    const handleShowGetStarted = () => setShowGetStarted(true)

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
              <Button
                type="submit"
                variant="primary"
                onClick={handleLoginSubmit}
              >
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
            <Modal.Body>Create an Account</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseGetStarted}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseGetStarted}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );

}

export default TitleHeader