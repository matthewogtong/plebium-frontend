import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function NewStoryInputs({readTime, setReadTime, topics, storyTopic, setStoryTopic}) {

    const addStoryTopic = topics.map((topic) => {
        return <Dropdown.Item key={topic.id} topic={topic}>{topic.name}</Dropdown.Item>
      })

        return (
            <div className="story-readtime-input">
              <h3>Title</h3>
              <input
                  type="number"
                  name="title"
                  placeholder="Read Time"
                  value={readTime} 
                  onChange={(e) => setReadTime(e.target.value)}
                /> Minutes To Read

                <div className="topic-list">
                    <p className="topic-header">TOPICS YOU FOLLOW</p>
                    <div className="topics-container"></div>
                    <div className="dropdown-topic-add">
                        <DropdownButton id="dropdown-basic-button" title="ADD A TOPIC">
                        {addStoryTopic}
                        </DropdownButton>
                    </div>
                    </div>
            </div>
        )
}

export default NewStoryInputs;