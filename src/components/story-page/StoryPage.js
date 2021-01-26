import React from "react";
import MainHeader from "../MainHeader"
import UserInfo from "../UserInfo"
import Snaps from "./Snaps"
import Story from "./Story"
import CommentsList from "./CommentsList"
// import NavBar from "../NavBar";

function StoryPage({currentUser}) {
    // const {title, content, snaps, read_time, date_created} = story 

    return (
        <div>
            <MainHeader currentUser={currentUser}/>
            <UserInfo  />
            <Snaps  />
            <Story  />
            <CommentsList />            
        </div>
    )

}

export default StoryPage;