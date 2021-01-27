import React from "react";

function StoryTitle({storyTitle, setStoryTitle}) {
    return (
        <div className="story-title-input">
          <h3>article title</h3>
          <input
              type="text"
              name="title"
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
            />
        </div>
    )
}

export default StoryTitle;