import jwt from "jsonwebtoken";
import User from "../Model/usermodel.js";
const JWTKEY=""+process.env.REACT_APP_JWTKEY;
function admin_middleware(req, res, next) {
    const decode=jwt.verify(req.header('Authorization'),JWTKEY);
    User.findById(decode._id).then(
        (result)=>{
            console.log(result);
            if(result.role)
            {
            if(result.role=="admin"){
                console.log("admin working")
            next()
            }
        }
            else{
             return res.json({message:"You are not admin"});
            }
          })
                

}
export default admin_middleware;