import React from "react";

function Story({storyTopic, storyTitle, storyContent, readTime}) {
    // const {title, content, snaps, read_time, date_created} = story 

    return (
        <div className="story-div">
            <h1 className="story-title">{storyTitle}</h1>
            <p className="story-read-time">{readTime} minutes </p>
            <p className="story-read-time">{storyTopic} </p>
            <h4 className="story-page-content">{storyContent}</h4>

        </div>
    )
}

export default Story;