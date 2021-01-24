import React from "react";

//will eventually remove the h5 headers for title and story
function StoryContent() {
    return (
        <div className="story-content-input">
        <h5>Story Content</h5>
        <form className="story-content">
            <input
            type="text"
            placeholder="Tell your story here">
            </input>
        </form>
    </div>
    )
}

export default StoryContent;