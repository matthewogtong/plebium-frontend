import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"

function HomePage({ topics }) {
return (
        <div id="home-page">
            <MainHeader />
            <TopicList topics={topics} />
            <TrendingList />
            <BookmarkList />
        </div>
    )

}

export default HomePage;