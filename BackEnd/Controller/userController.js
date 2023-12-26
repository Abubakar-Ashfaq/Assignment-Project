import User from '../Model/usermodel.js';
import jwt from 'jsonwebtoken'; 
const JWTKEY=""+process.env.REACT_APP_JWTKEY
export const getallusers=(req,res)=>{
    User.find().then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const deleteuser=(req,res)=>{
    User.findByIdAndDelete(req.params.id).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const updateuser=(req,res)=>{
    User.findByIdAndUpdate(req.params.id,req.body).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const getuserbyid=(req,res)=>{
    User.findById(req.params.id).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const adduser=(req,res)=>{
    User.create(req.body).then(
        (result)=>{
            res.json(result);
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
}
export const userLogin=async (req,res)=>{
    const user=await User.findOne({email:req.body.email});
    if(!user){
       return res.json({message:'User not found'});
    }
    else{
        const isMatch=await User.findOne({email:req.body.email,password:req.body.password});
        if(!isMatch){
           return res.json({message:'Wrong password'});
        }
        const isUser = await User.findOne({email:req.body.email,role:'user'});
        if(isUser){
            console.log("user found ")
            const token=jwt.sign({_id:user._id},JWTKEY);
            return res.json({token:token,user:user});
        }
        const isAdmin   = await User.findOne({email:req.body.email,role:'admin'});
        if(isAdmin){
            console.log('admin found');
            const token=jwt.sign({_id:user._id},JWTKEY);
            return  res.json({token:token,user:user});
        }
        else{
            return res.json({message:'You do not have Admin privelage'});
        }

    }

}
