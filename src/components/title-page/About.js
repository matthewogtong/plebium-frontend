import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap"

function About() {

    const [showGetStarted, setShowGetStarted] = useState(false)
    const handleCloseGetStarted = () => setShowGetStarted(false)
    const handleShowGetStarted = () => setShowGetStarted(true)

    return (
      <div className="title-about">
        <h1 className="about-h2">Where good ideas find you</h1>
        <p className="about-p">
          Read and share new perspectives on just about any topic. Medium for
          plebs!
        </p>
        <>
          <Button
            className="about-get-started"
            variant="dark"
            onClick={handleShowGetStarted}
          >
            Start
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

export default About;