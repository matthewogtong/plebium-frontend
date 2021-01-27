import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function NewStoryInputs({readTime, setReadTime, topics, storyTopic, setStoryTopic}) {

    const addStoryTopic = topics.map((topic) => {
        return <Dropdown.Item key={topic.id} topic={topic}>{topic.name}</Dropdown.Item>
      })

    console.log(storyTopic)

        return (
          <div className="story-readtime-input">
            <p>read time</p>
            <input
              type="number"
              name="readtime"
              placeholder="mins"
              value={readTime}
              onChange={(e) => setReadTime(parseInt(e.target.value))}
            />{" "}
            <br />
            <div className="story-topic-list">
              <p className="topic-header">choose a topic</p>
              <div className="dropdown-topic-add">
                <DropdownButton value={storyTopic} onChange={e => setStoryTopic(e.target.value)} id="dropdown-basic-button" title={storyTopic}>
                  {addStoryTopic}
                </DropdownButton>
              </div>
            </div>
          </div>
        );
}

export default NewStoryInputs;