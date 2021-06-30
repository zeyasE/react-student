const visibility = (state = "ALL", action) => {
    switch (action.type) {
        case "VISBILITY_FILTER": {
            return action.payload;
        }
        default: {
            return state;
        }
    }
};

export default visibility;
