import React from "react";
import { Button, Card } from "react-bootstrap/"

function Bookmark({ story, userBookmarks, setUserBookmarks, handleDeleteBookmark, bookmark }) {

  


  return (
    <div className="trending-story">
      <Card>
        <Card.Header as="h5">{bookmark.user.username}</Card.Header>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Button variant="outline-primary">View Story</Button>
          <br />
          <div className="bookmark-delete-button">
            <Button onClick={e => handleDeleteBookmark(bookmark.id)} variant="danger">
              Delete Bookmark
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Bookmark;