const initialState = {
    students: [
        { id: '1', name: 'Numbey', status: true },
        { id: '2', name: 'Zenamo', status: true }
    ]
}

const students = (state = initialState, action) => {
    const allStudent = [...state.students];
    switch (action.type) {
        case "ADD_STUDENT": {
            const { id, name } = action.payload;
            // if (!(state.students.find(objname => objname.name === `${name}`))) return 0;
            const addState = {
                ...state,
                students: [{ id: `${id}`, name: `${name}`, status: false }, ...state.students]
            }
            return addState;
        }
        case "DEL_STUDENT": {
            const { id } = action.payload
            const newState = {
                ...state,
                students: state.students.filter(item => item.id !== id)
            }
            return newState;
        }
        case "TOGGLE_STUDENT": {
            const { id } = action.payload
            const index = allStudent.findIndex((item) => { return item.id === id })
            allStudent[index] = {
                ...allStudent[index],
                status: !allStudent[index].status
            }
            const toggle = {
                ...state,
                students: allStudent
            }
            return toggle;
        }
        default:
            break;
    }
    return state;
}

export default students;