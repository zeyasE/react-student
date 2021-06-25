const initialState = {
    students: [
        { id: '1', name: 'Numbey', status: true },
        { id: '2', name: 'Zenamo', status: true }
    ]
}

const students = (state = initialState, action) => {
    // const allStudent = [...state.students];
    switch (action.type) {
        case "ADD_STUDENT": {
            const { id, name } = action.payload;
            const addState = {
                ...state,
                students: [{ id: `${id}`, name: `${name}`, status: false }, ...state.students]
            }
            return addState;
        }
        case "DEL_STUDENT": {
            const newState = {
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
            return newState;
        }
        default:
            break;
    }
    return state;
}

export default students;