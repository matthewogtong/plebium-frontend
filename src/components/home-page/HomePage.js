import React from "react";
import MainHeader from "../MainHeader"
import TrendingList from "../TrendingList"
import BookmarkList from "./BookmarkList"
import TopicList from "./TopicList"

function HomePage({ topics }) {
return (
        <div>
            <MainHeader />
            <TrendingList />
            <BookmarkList />
            <TopicList topics={topics} />
        </div>
    )

}

export default HomePage;