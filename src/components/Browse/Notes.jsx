import { useState } from "react"
import './Notes.css'
const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))

    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
       <div className="Notes-container">
        <p id="All-notes">All notes</p>
        <textarea className="Text-area" value={text} onChange={(e)=>handleChange(e)}/>
       </div>
    )
}

export default Notes