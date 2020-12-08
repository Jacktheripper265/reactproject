
const { connect } = require("react-redux")
const { SignUp } = require("../component/SignUp")
const { RegisterUser } = require("../call/UserCall")


const MapStatetoProps=(state)=>{
    return{
        msg:state.msg
    }
}



const containSign=connect(MapStatetoProps)(SignUp);



export default containSign;
