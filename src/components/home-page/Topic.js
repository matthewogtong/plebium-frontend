import React from "react";

function Topic({ topic }) {
    return (
        <h5 className="topic-item">{topic.name}</h5>
    )
}

export default Topic;