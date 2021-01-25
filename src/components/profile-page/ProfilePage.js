import React from "react";
import MainHeader from "../MainHeader"
import StoryList from "./StoryList"
import UserInfo from "../UserInfo"

function ProfilePage({users, stories}) {
    // {users.map((user) => (
    //<UserInfo key={user.id} user={user} />
    //))}
    return (
        <div>
            <MainHeader />
            <StoryList stories={stories} />
            {users.map((user) => (
             <UserInfo key={user.id} user={user} />
            ))}
        </div>
    )

}

export default ProfilePage;