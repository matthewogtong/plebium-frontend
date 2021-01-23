import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"

function ProfilePage() {
    return (
        <div>
            <MainHeader />
            <StoryList />
            <UserInfo />
        </div>
    )

}

export default ProfilePage;