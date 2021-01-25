import React from "react";

//will eventually remove the h5 headers for title and story
function StoryContent({storyContent, setStoryContent}) {
    return (
        <div className="story-content-input">
        <h3>Content</h3>
        <input
          type="text"
          name="content"
          placeholder="Your Story Here"
          value={storyContent}
          onChange={(e) => setStoryContent(e.target.value)}
        />
    </div>
    )
}

export default StoryContent;