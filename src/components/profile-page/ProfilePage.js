import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"

function ProfilePage({currentUser, handleDeleteProfileStory}) {

    return (
      <div>
        <MainHeader currentUser={currentUser} />
        <div className="profile-container">
          <StoryList currentUser={currentUser} handleDeleteProfileStory={handleDeleteProfileStory} />
          <UserInfo currentUser={currentUser} />
        </div>
      </div>
    );

}

export default ProfilePage;