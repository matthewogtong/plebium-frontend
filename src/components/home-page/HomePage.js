import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"

function HomePage({ topics, currentUser }) {

  return (
    <div id="home-page">
      <MainHeader currentUser={currentUser}/>
      <TopicList topics={topics} currentUser={currentUser}/>
      <TrendingList />
      <BookmarkList />
    </div>
  );
}

export default HomePage;