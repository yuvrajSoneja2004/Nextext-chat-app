import { connectionURI } from "@/lib/dbConnect";
import { TestModel } from "@/lib/models/test";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET (req , res){
   
    try {
        await mongoose.connect(connectionURI);
        console.log("Suceess");



        return NextResponse.json({
            msg: "Works"
        }, {status: 200})
    } catch (error) {
        console.log("Error" + error)
    }
}