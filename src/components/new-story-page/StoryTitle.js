import React, {useState} from "react";

function StoryTitle({storyTitle, setStoryTitle}) {
    return (
        <div className="new-plant-form">
      <h3>Title</h3>
      <form className="story-title">
      <input
          type="text"
          name="title"
          placeholder="Title..."
          value={storyTitle}
          onChange={(e) => setStoryTitle(e.target.value)}
        />
      </form>
    </div>
    )
}

export default StoryTitle;