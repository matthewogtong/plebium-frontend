import React from "react";
import ProfileStory from "./ProfileStory"

function StoryList({ currentUser, handleDeleteProfileStory, userStories }) {
  // let userStories;
  // if (currentUser.stories) {
  //   userStories = currentUser.stories.map((story) => <ProfileStory key={story.id} story={story} handleDeleteProfileStory={handleDeleteProfileStory}/>);
  // } else {
  //   userStories = <p>No stories to display!</p>;
  // }

  const displayUserStories = userStories.map(story => <ProfileStory key={story.id} story={story} handleDeleteProfileStory={handleDeleteProfileStory} />)
  return (
    <div className="profile-story-container">
      <h1>{displayUserStories}</h1>
    </div>
  );
}

export default StoryList;