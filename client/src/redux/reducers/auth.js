
const authReducer = (state ={auth:null},action )=>{
    switch (action.type) {
        case 'REGISTER':
            //loaclstore kayetmek icin 
            localStorage.setItem('auth',JSON.stringify(action.payload))
            return{
                auth:action.payload
            }
    
        default:
            return
    }
}
export default authReducer