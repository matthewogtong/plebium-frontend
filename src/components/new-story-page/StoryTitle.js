import React from "react";

function StoryTitle({title, setTitle}) {
    return (
        <div className="story-title-input">
            <h5>Story Title</h5>
            <form className="story-title">
                <input
                type="text"
                placeholder="Title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                </input>
            </form>
        </div>
    )
}

export default StoryTitle;