const initialState = []
const loadTasks = (state = initialState, action) =>{
    switch(action.type){
        case "GETTASKS":
            return action.payload;
        default:
            return state;
    }
     
}
export default loadTasks;