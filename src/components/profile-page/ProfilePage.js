import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"

function ProfilePage({stories}) {
    // {users.map((user) => (
    //<UserInfo key={user.id} user={user} />
    //))}
    return (
        <div>
            <MainHeader />
            <StoryList stories={stories} />
            <UserInfo  />
        </div>
    )

}

export default ProfilePage;