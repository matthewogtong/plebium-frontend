import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function NewStoryHeader({ handleSubmit }) {
    // function handlePublishButton() {
    //     // <Route >
    //     // <Redirect to="/publish-story" />
    //     // </Route>
    //     <Link to="/publish-story" className="link">
    //         </Link>
    // }
    return (
      <Jumbotron>
        <h1>new story time</h1>
        <br />
        <p>"Start before you’re ready."</p>
        <p> - Steven Pressfield</p>
        <hr />
        <br />

        <div>
          <Link to="/home">
            <Button variant="light">Home</Button>
          </Link>
        </div>
        <br />
        <div>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="outline-success"
          >
            Publish
          </Button>
        </div>
      </Jumbotron>
    );
}

export default NewStoryHeader;