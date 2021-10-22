import { AuthAction } from "./AuthConstant"



const initialSate={
    is_auth:false,
    username:"",
    password:""
}


const AuthReducer = (state=initialSate,action)=>
{
    
    switch(action.type)
    {
        case AuthAction.LOGIN:return{
             ...state,is_auth:true,username:action.payload.username
        }
        case AuthAction.LOGOUT:return{
            ...state,is_auth:false
       }
        default : return state
    }
}

export default AuthReducer