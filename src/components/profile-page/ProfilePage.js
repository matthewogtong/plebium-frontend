import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"

function ProfilePage({stories}) {
    return (
        <div>
            <MainHeader />
            <StoryList stories={stories} />
            <UserInfo />
        </div>
    )

}

export default ProfilePage;