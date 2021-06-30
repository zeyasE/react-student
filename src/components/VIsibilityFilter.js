import { Nav } from "react-bootstrap"
import { connect } from "react-redux"
import { visibilitys } from "../redux/actions"

const VisibilityFilter = ({ visibilitys }) => {
    return (
        <div className="VisibilityFilter">
            <Nav as="ul">
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" onClick={() => visibilitys("ALL")}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" onClick={() => visibilitys("Complete")}>Complete</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" onClick={() => visibilitys("Not Complete")}>
                    <Nav.Link eventKey="link-2" >Not Complete</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default connect(null, { visibilitys })(VisibilityFilter)