import React, {useState} from "react";
import StoryTitle from "./StoryTitle"
import StoryContent from "./StoryContent"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

function NewStoryForm({ storyTitle, setStoryTitle, storyContent, setStoryContent }) {
    const [readTime, setReadTime] = useState([])
    // condense storytitle and storycontent 
    return (
        <div>
            <StoryTitle storyTitle={storyTitle} setStoryTitle={setStoryTitle}/>
            <StoryContent storyContent={storyContent} setStoryContent={setStoryContent}/>
            <h5>Story Inputs</h5>
        <form>
            <input 
            type="number"
            name="read-time"
            value={readTime}
            onChange={(e) => setReadTime(parseInt(e.target.value))}>
            </input> minutes
        </form>
        <DropdownButton
            menuAlign="right"
            title="Dropdown right"
            id="dropdown-menu-align-right"
            >
            <Dropdown.Item eventKey="1">Arts & Entertainment</Dropdown.Item>
            <Dropdown.Item eventKey="2">Culture</Dropdown.Item>
            <Dropdown.Item eventKey="3">Equality</Dropdown.Item>
            <Dropdown.Item eventKey="4">Health</Dropdown.Item>
            <Dropdown.Item eventKey="5">Industry</Dropdown.Item>
            <Dropdown.Item eventKey="6">Personal Development</Dropdown.Item>
            <Dropdown.Item eventKey="7">Politics</Dropdown.Item>
            <Dropdown.Item eventKey="8">Programming</Dropdown.Item>
            <Dropdown.Item eventKey="9">Science</Dropdown.Item>
            <Dropdown.Item eventKey="10">Self</Dropdown.Item>
            <Dropdown.Item eventKey="11">Society</Dropdown.Item>
            <Dropdown.Item eventKey="12">Technology</Dropdown.Item>
            <Dropdown.Divider />
            </DropdownButton>
        </div>
    )

}

export default NewStoryForm;