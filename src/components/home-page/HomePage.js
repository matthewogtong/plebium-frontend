import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"

function HomePage() {
return (
        <div>
            <MainHeader />
            <TrendingList />
            <BookmarkList />
            <TopicList />
        </div>
    )

}

export default HomePage;