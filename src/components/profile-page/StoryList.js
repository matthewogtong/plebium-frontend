import React from "react";
import ProfileStory from "./ProfileStory"

function StoryList({stories}) {
    return (
        <div>
             {stories.map((story) => 
            <ProfileStory key={story.id} story={story} />)}
        </div>
    )
}

export default StoryList;