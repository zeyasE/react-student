export const addStudent = (name, id) => ({
    type: "ADD_STUDENT",
    payload: {
        id, name
    }
});

export const delStudent = (id) => ({
    type: "DEL_STUDENT",
    payload: { id }
});