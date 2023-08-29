import { connectionURI } from "@/lib/dbConnect";
import { UsersModel } from "@/lib/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")

// Login
export async function POST (req , res){
   
    try {
        let body = await req.json();
        await mongoose.connect(connectionURI);
        console.log("Suceess");
        console.log("the boody" , body)

        
            // Checking if the username already exists in db
        const checkUserName = await UsersModel.findOne({userName: body.userName});
        if(!checkUserName){
            return NextResponse.json({
                msg: "Invalid username or password",
                res: false
            } , {status: 404})
        }
        // Checking if the username already exists in db
        const checkUserPass = await UsersModel.findOne({userEmail: body.userPassword});
        if(!checkUserPass){
            return NextResponse.json({
                msg: "Invalid email for password",
                res: false
            } , {status: 404})
        }
        if(checkUserName && checkUserPass){
            const hashedPassword = await bcrypt.compare(body.userPassword, checkUserPass.userPass);
           if(hashedPassword){
            return NextResponse.json({
                msg: `Operation Successful. Hey!`,
                res: true
            })
           }
            delete body.userPassword;
            return NextResponse.json({
                msg: ":(",
                res: false
            })
        }
        
       
    } catch (error) {
        console.log("Error" + error)
    }
}