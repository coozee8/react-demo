const defaultState = {
    flag:false
};

export default (state = defaultState,action)=>{
    //console.log(action);
    /*const newState = JSON.parse(JSON.stringify(state));
    if(action.type === 'input_focus'){
        newState.flag = true;
        return newState;
    }else if(action.type === 'input_blur'){
        newState.flag = false;
        return newState;
    }*/
    //可以把if语句修改成switch
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'input_focus':
            newState.flag = true;
            return newState;
        case 'input_blur':
            newState.flag = false;
            return newState;
        default:
            return state;
    }
}