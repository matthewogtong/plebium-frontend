import React from "react";

function StoryTitle() {
    return (
        <div className="story-title-input">
            <h5>Story Title</h5>
            <form className="story-title">
                <input
                type="text"
                placeholder="Title...">
                </input>
            </form>
        </div>
    )
}

export default StoryTitle;