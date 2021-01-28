import React from "react";
import MainHeader from "../MainHeader"
import UserInfo from "../UserInfo"
import Story from "./Story"
import CommentsList from "./CommentsList"
// import NavBar from "../NavBar";

function StoryPage({
  responses,
  storyTitle,
  storyContent,
  readTime,
  newResponse,
  setNewResponse,
  currentUser,
  handleResponseSubmit,
  storySnaps,
  setStorySnaps,
  storyId,
  setStoryId
}) {
  return (
    <div>
      <MainHeader currentUser={currentUser} />
      <UserInfo currentUser={currentUser} />
      <Story
        storyTitle={storyTitle}
        storyContent={storyContent}
        readTime={readTime}
        storySnaps={storySnaps}
        setStorySnaps={setStorySnaps}
        storyId={storyId}
        setStoryId={setStoryId}
      />
      <CommentsList
        responses={responses}
        newResponse={newResponse}
        setNewResponse={setNewResponse}
        handleResponseSubmit={handleResponseSubmit}
      />
    </div>
  );
}

export default StoryPage;