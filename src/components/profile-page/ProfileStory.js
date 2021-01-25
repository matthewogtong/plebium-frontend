import React from "react";

function ProfileStory({story}) {
    const {title, content} = story
    return (
        <div>
            <h3>{title}</h3>
            <h5>{content}</h5>
        </div>
    )
}

export default ProfileStory;