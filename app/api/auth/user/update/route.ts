import {NextRequest, NextResponse} from "next/server";
import {getDb} from "@/utils/mongodb";
import {UploadToCloudinary} from "@/utils/UploadToCloudinary";
import cloudinary from "@/utils/cloudinary";

export async function PUT (req:NextRequest) {
    if(!req.cookies.get('token'))
        return NextResponse.json({message:'Unauthorized'}, {status:401})
    const db = await getDb()
    if(!db){
        return NextResponse.json({message:'Database connection failed'},{ status: 500 })
    }
    try{
        const formData = await req.formData();
        for (const [key, value] of formData.entries()) {
            const url = await UploadToCloudinary(value as File, `users/avatar/${key}`)
            console.log(url)
            const usersCollection = db.collection('users')
            const result = await usersCollection.updateOne({username:key.split('_')[0]},{$set:{avatar:url.url}})
            if (result.acknowledged)
                return NextResponse.json({message:'User updated successfully'})
        }
    }catch(e){
        const error = e as Error
        console.error(error)
        return NextResponse.json({message:error.message})
    }
}