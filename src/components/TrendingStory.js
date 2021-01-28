import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap"
import UseAnimations from "react-useanimations"
import bookmark from 'react-useanimations/lib/bookmark'


function TrendingStory({ story, userBookmarks, setUserBookmarks, currentUser }) {
  const [storyBookmarks, setStoryBookmarks] = useState(story.bookmarks) 
  const [trendingStorySnaps, setTrendingStorySnaps] = useState(story.snaps)
  const [checked, setChecked] = useState(false);

  let history = useHistory();

  const handleSnapClick = () => {
    setTrendingStorySnaps(trendingStorySnaps + 1);
    console.log(parseInt(trendingStorySnaps))

    fetch(`http://localhost:3000/stories/${story.id}/add_snap`, {
      method: "PATCH"
    })
  };

  function handleViewTrendingStory(story) {
    console.log("view trending", story)
    history.push(`/story/${story.id}`);
  }

  const handleBookmarkClick = () => {

    const newBookmark = {user_id: currentUser.id, story_id: story.id}

    fetch(`http://localhost:3000//users/${currentUser.id}/bookmarks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newBookmark)
    })
      .then(r => r.json())
      .then(newBookmark => {
        const updatedBookmarks = [...userBookmarks, newBookmark]
        return (
          setUserBookmarks(updatedBookmarks)
        )
      })
    // console.log("bookmark clicked")
    // console.log(story.id)
    // console.log(userBookmarks)
    // console.log(currentUser.id)
  }


  return (
    <div className="trending-story">
      <Card>
        <Card.Header as="h5">{story.user.username}</Card.Header>
        <Card.Body>
          <Card.Title>{story.title}</Card.Title>
          <Card.Text>
            {story.topic.name} | {story.read_time} min
          </Card.Text>
          <Button onClick={handleViewTrendingStory} variant="outline-primary">View Story</Button>
          <div className="trending-story-bookmark-div">
              <UseAnimations
                reverse={checked}
                onClick={handleBookmarkClick}
                size={40}
                wrapperStyle={{ marginTop: "5px" }}
                animation={bookmark}
              />
          </div>
          <div className="profile-snap-div">
            <em>{trendingStorySnaps ? trendingStorySnaps : 0}</em>
            <Button onClick={handleSnapClick} variant="light">
              <img
                className="snap-img"
                src="../snapfinger.jpg"
                alt="snaps"
              ></img>
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrendingStory