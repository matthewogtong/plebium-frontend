import React from "react";

function StoryTitle({storyTitle, setStoryTitle}) {
    return (
        <div className="new-plant-form">
          <h3>Title</h3>
          <input
              type="text"
              name="title"
              placeholder="Title..."
              value={storyTitle}
              onChange={(e) => setStoryTitle(e.target.value)}
            />
        </div>
    )
}

export default StoryTitle;