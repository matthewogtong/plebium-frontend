import React from "react";
import Topic from "./Topic"

function TopicList({topics}) {
    const topicItems = topics.map((topic) => (
        <Topic key={topic.id} topic={topic} />
    ))
    return (
        <div className="topic-list">
            {topicItems}
        </div>
    )
}

export default TopicList;