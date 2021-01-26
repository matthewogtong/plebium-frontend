import React from "react";

function ProfileStory({story, onDeleteStory}) {
    const {id, title, content} = story
    //also needs to pass down claps prop 

    function handleStoryDelete() {
        fetch(`http://localhost:3000/${id}`, {
          method: "DELETE",
        });
        onDeleteStory(id);
      }

    return (
        <div>
            <h3>{title}</h3>
            <h5>{content}</h5>
            <button className="delete-story-button" onClick={handleStoryDelete}>Delete Story</button>
        </div>
    )
}

export default ProfileStory;