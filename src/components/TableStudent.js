import { connect } from "react-redux"
import Students from "./Students"
import { filterStudent } from "../redux/another"

const TableStudent = ({ listStudent }) => {
    return (
        <div className="TableStudent">
            {listStudent.length ? listStudent.map((student, index) => {
                return <Students listname={student} key={student.id} />
            }) : "No student in class now."}
        </div>
    )
}

const mapStateToProps = state => {
    const { students, visibility } = state
    const listStudent = filterStudent(students.students, visibility)
    return { listStudent }
}

export default connect(mapStateToProps)(TableStudent)