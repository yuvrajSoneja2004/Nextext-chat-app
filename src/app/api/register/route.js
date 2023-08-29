import { connectionURI } from "@/lib/dbConnect";
import { UsersModel } from "@/lib/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt")

// Register
export async function POST (req , res){
   
    try {
        let body = await req.json();
       const conn =  await mongoose.connect(connectionURI);
        console.log("Suceess");
        console.log("the boody" , body)

        
            // Checking if the username already exists in db
        const checkUserName = await UsersModel.findOne({userName: body.userName});
        if(checkUserName){
            return NextResponse.json({
                msg: "User with this username already exists",
                res: false
            } , {status: 404})
        }
        // Checking if the username already exists in db
        const checkUserEmail = await UsersModel.findOne({userEmail: body.userEmail});
        if(checkUserEmail){
            return NextResponse.json({
                msg: "User with this email already exists",
                res: false
            } , {status: 404})
        }
        if(!checkUserEmail && !checkUserName){
            const hashedPassword = bcrypt.hash(body.userPassword, 10)
            const newUser = await UsersModel.create({
                userName: body.userName,
                userEmail: body.userEmail,
                userPass: body.userPassword
            });
            // delete body.userPassword;
            return NextResponse.json({
                msg: ":(",
                res: false
            })
        }
        



        return NextResponse.json({
            msg: "Successfully created resource in db",
            res: true
        }, {status: 200})
    } catch (error) {
        console.log("Error" + error)
    }
}