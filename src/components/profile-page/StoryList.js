import React from "react";
import ProfileStory from "./ProfileStory"

function StoryList({stories, onDeleteStory}) {
    return (
        <div>
             {stories.map((story) => 
            <ProfileStory key={story.id} story={story} onDeleteStory={onDeleteStory} />)}
        </div>
    )
}

export default StoryList;