import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"


function TrendingStory({ story }) {
  const [storyBookmarks, setStoryBookmarks] = useState(story.bookmarks) 
  const [trendingStorySnaps, setTrendingStorySnaps] = useState(story.snaps)

  const handleSnapClick = () => {
    setTrendingStorySnaps(trendingStorySnaps + 1);

    fetch(`http://localhost:3000/stories/${story.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        snaps: parseInt(trendingStorySnaps),
      }),
    })
      .then((r) => r.json())
      .then(console.log)
  };


  return (
    <div className="trending-story">
      <Card>
        <Card.Header as="h5">username</Card.Header>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Topic | Read Time</Card.Text>
          <Button variant="primary">View Story</Button>
          <div className="profile-snap-div">
            <em>{trendingStorySnaps ? trendingStorySnaps : 0}</em>
            <Button onClick={handleSnapClick} variant="light">
              <img className="snap-img" src="../snapfinger.jpg" alt="snaps"></img>
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrendingStory