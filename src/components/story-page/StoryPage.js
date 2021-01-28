import React from "react";
import MainHeader from "../MainHeader"
import UserInfo from "../UserInfo"
import Snaps from "./Snaps"
import Story from "./Story"
import CommentsList from "./CommentsList"
// import NavBar from "../NavBar";

function StoryPage({responses, storyTitle, storyContent, readTime, snaps, newResponse, setNewResponse, currentUser, handleResponseSubmit}) {
    // const {title, content, snaps, read_time, date_created} = story 

    return (
        <div>
            <MainHeader currentUser={currentUser}/>
            <UserInfo currentUser={currentUser}/>
            <Snaps snaps={snaps} />
            <Story storyTitle={storyTitle} storyContent={storyContent} readTime={readTime} />
            <CommentsList responses={responses} newResponse={newResponse} setNewResponse={setNewResponse} handleResponseSubmit={handleResponseSubmit} />            
        </div>
    )

}

export default StoryPage;