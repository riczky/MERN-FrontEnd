const initialState = {
    // dataBlogs: [],
    name: 'riczky'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'riczkydev'
        }
            
    }
    return state;
}


export default globalReducer;