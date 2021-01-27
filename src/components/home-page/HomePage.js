import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"
// import NavBar from "../NavBar";

function HomePage({ topics, currentUser, stories }) {

  return (
    <div id="home-page">
      <MainHeader currentUser={currentUser} />
      <TopicList topics={topics} currentUser={currentUser}/>
      <TrendingList currentUser={currentUser} stories={stories}/>
      <BookmarkList currentUser={currentUser}/>
    </div>
  );
}

export default HomePage;