import React from "react";
import { Button, Jumbotron} from "react-bootstrap"

function Story({
  storyTitle,
  storyContent,
  readTime,
  storySnaps,
  setStorySnaps,
  storyId,
  setStoryId
}) {


    const handleSnapClick = () => {
        setStorySnaps(storySnaps + 1);
        console.log(parseInt(storySnaps))
    
        fetch(`http://localhost:3000/stories/${storyId}/add_snap`, {
          method: "PATCH"
        })
      };

  return (
    <div className="story-page-div">
      <Jumbotron>
        <h1 className="story-title">{storyTitle}</h1>
        <h4 className="story-read-time">{readTime} minutes</h4>
        <p>{storyContent}</p>

        <div className="story-snap-div">
          <em className="snap-count">{storySnaps ? storySnaps : 0}</em>
          <Button onClick={handleSnapClick} variant="light">
            <img className="snap-img" src="../snapfinger.jpg" alt="snaps"></img>
          </Button>{" "}
        </div>
      </Jumbotron>
    </div>
  );
}

export default Story;