import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"


function TrendingStory({ story }) {
  const [storyBookmarks, setStoryBookmarks] = useState(story.bookmarks) 
  const [trendingStorySnaps, setTrendingStorySnaps] = useState(story.snaps)

  const handleSnapClick = () => {
    setTrendingStorySnaps(trendingStorySnaps + 1);
    console.log(parseInt(trendingStorySnaps))

    fetch(`http://localhost:3000/stories/${story.id}/add_snap`, {
      method: "PATCH"
    })
  };


  return (
    <div className="trending-story">
      <Card>
        <Card.Header as="h5">{story.user.username}</Card.Header>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Card.Text>{story.topic.name} | {story.read_time} min</Card.Text>
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