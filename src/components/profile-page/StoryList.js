import React from "react";
import ProfileStory from "./ProfileStory"

function StoryList({stories}) {
    const profileStoryCards = stories.map((story) => (
        <ProfileStory key={story.id} story={story} />
    ))
    return (
        <div>
            {profileStoryCards}
        </div>
    )
}

export default StoryList;