// import { connect } from "react-redux"
import { useState } from "react"

const AddStudent = () => {
    const [name, setname] = useState('')
    const submitt = (e) => {
        e.preventDefault()
        if (!name) {
            alert("Please full fill")
            return
        }
        setname('')
    }
    return (
        <div className="AddTodo">
            <input type="text" onChange={e => setname(e.target.value)} value={name}></input>
            <button type="submit" onClick={submitt}>Add</button>
        </div>
    )
}

export default AddStudent;