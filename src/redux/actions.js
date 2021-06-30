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

export const toggleStudent = (id) => ({
    type: "TOGGLE_STUDENT",
    payload: { id }
});

export const visibilitys = (state) => ({
    type: "VISBILITY_FILTER",
    payload: { state }
})