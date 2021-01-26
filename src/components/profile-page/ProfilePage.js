import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"
// import NavBar from "../NavBar";

function ProfilePage({currentUser, onDeleteStory}) {

let userStories;
  if (currentUser.stories) {
    userStories = currentUser.stories.map((story) => console.log(story));
  } else {
    userStories = <p>No stories to display!</p>;
  }

    return (
        <div>
            <MainHeader currentUser={currentUser}/>
            <StoryList currentUser={currentUser} onDeleteStory={onDeleteStory} />
            <UserInfo  />
        </div>
    )

}

export default ProfilePage;