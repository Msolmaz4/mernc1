
const authReducer = (state = {auth:null},action )=>{
    switch (action.type) {
        case 'REGISTER':
            //loaclstore kayetmek icin 
            localStorage.setItem('auth',JSON.stringify(action.payload))
            return{
                ...state,//tum state dolasmak gerekir
                auth:action.payload
            }
            case 'LOGIN':
                
                localStorage.setItem('auth',JSON.stringify(action.payload))
                return{
                     ...state,
                    auth:action.payload
                }

         case 'LOGOUT':
                //loaclstore temiyleriz
                localStorage.clear()
                return{
                     ...state,
                    auth:null
                }
                
        default:
            return state
    }
}
export default authReducer