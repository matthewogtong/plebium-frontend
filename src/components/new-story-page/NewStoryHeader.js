import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Route, Redirect, Link } from "react-router-dom"

function NewStoryHeader() {
    function handlePublishButton() {
        // <Route >
        // <Redirect to="/publish-story" />
        // </Route>
        <Link to="/publish-story" className="link">
            </Link>
    }

    return (
        <div className="new-story-header">
        <Jumbotron>
        <Button className="story-header-publish" variant="success" onClick={handlePublishButton}>Publish</Button>
        </Jumbotron>
      </div>
    )
}

export default NewStoryHeader;