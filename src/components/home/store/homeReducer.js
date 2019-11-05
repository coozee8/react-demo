const defaultState = {
    topicList:[],
    list:[]
};

export default (state = defaultState,action)=>{
    //console.log(action);
    if(action.type === 'init_home_data'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.topicList = action.data.topicList;
        newState.list = action.data.list;
        return newState;
    }
    return state;
}