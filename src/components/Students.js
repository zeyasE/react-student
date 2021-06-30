import { delStudent, toggleStudent } from "../redux/actions"
import { connect } from "react-redux";
import { Button } from "react-bootstrap"

const Students = ({ listname, delStudent, toggleStudent }) => {
    return (
        <li className="Students">
            <p onClick={() => toggleStudent(listname.id)}>{listname.status ? "✔️" : "❌"}</p>
            <span>{listname.name}</span>
            <Button variant="outline-dark" onClick={() => delStudent(listname.id)}>X</Button>
        </li>
    )
}

export default connect(null, { delStudent, toggleStudent })(Students);