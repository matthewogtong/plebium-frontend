import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function NewStoryInputs({readTime, setReadTime, topics, storyTopic, setStoryTopic}) {

    const addStoryTopic = topics.map((topic) => {
        return <Dropdown.Item key={topic.id} topic={topic}>{topic.name}</Dropdown.Item>
      })

        return (
            <div className="story-readtime-input">
              <input
                  type="number"
                  name="readtime"
                  placeholder="Read Time"
                  value={readTime} 
                  onChange={(e) => setReadTime(parseInt(e.target.value))}
                /> Minutes To Read

                <div className="topic-list">
                    <p className="topic-header">add topic to story</p>
                    <div className="topics-container"></div>
                    <div className="dropdown-topic-add">
                        <DropdownButton id="dropdown-basic-button" title="add topic">

                        </DropdownButton>
                    </div>
                    </div>
            </div>
        )
}

export default NewStoryInputs;