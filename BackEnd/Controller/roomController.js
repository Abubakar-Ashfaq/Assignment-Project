import Room from '../Model/mongoose.js';
import fs from 'fs';
const path = "public/roomimages/";
export const homepage=(req,res)=>{
    res.send('Welcome to Hostel Management System');
}

export const getroomslists=async(req,res)=>{
    try{
        const roomslist=await Room.find();
        res.json(roomslist);
    }
    catch(err){
        res.json({message:err});
    }
}

export const getrooombyid=async (req,res)=>{
    try{
        const room=await Room.findById(req.params.id);
        res.json(room);
    }
    catch(err){
        res.json({message:err});
    }
}

export const addroom=(req,res)=>{
    const room=new Room(
        {
        roomdescription:req.body.roomdescription,
        roomno:req.body.roomno,
        floorno:req.body.floorno,
        roomtype:req.body.roomtype,
        roomcapacity:req.body.roomcapacity,
        roomstatus:req.body.roomcapacity,
        roomprice:req.body.roomprice,
        ac:req.body.ac,
        image:req.file ? req.file.filename : req.body.image,
        
        }
    )
    room.save().then(
        (result)=>{
            res.json({message:'Room added successfully'});
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }    )
}


export const updateroom=(req,res)=>{
    const id=req.query.id;
    const updateroom=
        {
        roomdescription:req.body.roomdescription,
        roomno:req.body.roomno,
        floorno:req.body.floorno,
        roomtype:req.body.roomtype,
        roomcapacity:req.body.roomcapacity,
        roomstatus:req.body.roomcapacity,
        roomprice:req.body.roomprice,
        image:req.file ? req.file.filename : req.body.image,
        }
    Room.findByIdAndUpdate(id,updateroom,{new:true}).then(
        (result)=>{
            res.json({message:'Room updated successfully'});
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    )
        req.file?fs.unlink(path+req.query.image,(err)=>{
            if(err) throw err;
        }):null;

}

export const deleteroom=(req,res)=>{
    const id=req.query.id;
    Room.findByIdAndDelete(id).then(
        (result)=>{
            res.json({message:'Room deleted successfully'});
        }
    ).catch(
        (error)=>{
            res.json({message:error});
        }
    ) 
   fs.unlinkSync(path+req.query.image)   
}
