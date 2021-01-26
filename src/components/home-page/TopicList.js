import React from "react"
import Topic from "./Topic"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function TopicList({ topics, currentUser }) {
  const topicItems = topics.map((topic) => (
    <Topic key={topic.id} topic={topic} />
  ))

  console.log(currentUser.topics)
  let userTopics;
  if (currentUser.topics) {
    userTopics = currentUser.topics.map((topic) => <Topic key={topic.id} topic={topic}/>);
  } else {
    userTopics = <p>No topics to display!</p>;
  }

  const topicAddList = topics.map((topic) => {
    return <Dropdown.Item key={topic.id} topic={topic}>{topic.name}</Dropdown.Item>
  })
  return (
    <div className="topic-list">
      <p className="topic-header">TOPICS YOU FOLLOW</p>
      <div className="topics-container">{userTopics}</div>
      <div className="dropdown-topic-add">
        <DropdownButton id="dropdown-basic-button" title="ADD A TOPIC">
          {topicAddList}
        </DropdownButton>
      </div>
    </div>
  );
}

export default TopicList