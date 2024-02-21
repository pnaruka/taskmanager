export const getTasks = (data) => {
    return {
        type: "GETTASKS",
        payload: data
    }
}