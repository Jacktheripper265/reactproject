
const init={msg:'hi'}
const UserReducer=(state=init,action)=>
{
    
    switch(action.type)
    {
        case "SET_MSG":
            return{
                ...state,msg:action.msg
            }
        default:
            return state;
    }

}

export default UserReducer;