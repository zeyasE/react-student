// import { connect } from "react-redux"
import { useState } from "react"
import { connect } from "react-redux"
import { addStudent } from "../redux/actions"
import { Button } from "react-bootstrap"

const AddStudent = ({ addStudent }) => {
    const [name, setname] = useState('')
    const submitt = (e) => {
        e.preventDefault()
        if (!name) {
            alert("Please full fill")
            return
        }
        addStudent(name, new Date().getTime().toString())
        setname('')
    }
    return (
        <form>
            <div className="AddStudent">
                <input type="text" maxLength="8" onChange={e => setname(e.target.value)} value={name}></input>
                <Button variant="outline-dark" type="submit" onClick={submitt}>Add</Button>
            </div>
        </form>
    )
}

export default connect(null, { addStudent })(AddStudent);