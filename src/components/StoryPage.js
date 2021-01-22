import React from "react";
import MainHeader from "./MainHeader"
import UserInfo from "./UserInfo"
import Snaps from "./Snaps"
import Story from "./Story"
import CommentsList from "./CommentsList"

function StoryPage() {
    return (
        <div>
            <MainHeader />
            <UserInfo />
            <Snaps />
            <Story />
            <CommentsList />            
        </div>
    )

}

export default StoryPage;