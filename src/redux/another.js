export const filterStudent = (store, visibility) => {
    switch (visibility.state) {
        case "Complete": {
            console.log("Complete");
            return store.filter(student => student.status);
        }
        case "Not Complete": {
            console.log("Not Complete");
            return store.filter(student => !student.status);
        }
        case "ALL":
        default:
            return store;
    }
}