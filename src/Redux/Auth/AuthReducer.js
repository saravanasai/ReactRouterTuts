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
             ...state,is_auth:true
        }
        default : return state
    }
}

export default AuthReducer