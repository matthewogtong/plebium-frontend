import React from "react";
import MainHeader from "../MainHeader"
import UserInfo from "../UserInfo"
import Snaps from "./Snaps"
import Story from "./Story"
import CommentsList from "./CommentsList"

function StoryPage({user, story}) {
    // const {title, content, snaps, read_time, date_created} = story 
    // const {first_name, last_name, bio } = user;
    return (
        <div>
            <MainHeader />
            <UserInfo  />
            <Snaps  />
            <Story  />
            <CommentsList />            
        </div>
    )

}

export default StoryPage;