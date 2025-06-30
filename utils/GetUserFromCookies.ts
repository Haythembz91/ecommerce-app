import {cookies} from "next/headers";
import jwt, {JwtPayload} from "jsonwebtoken";
import {getDb} from "@/utils/mongodb";
import {ObjectId} from "mongodb";


const GetUserFromCookies = async ()=> {
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get('token')?.value
        if (!token) {
            throw new Error('No token found')
        }
        let decodedToken
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET as string)
        } catch (e) {
            const error = e as Error
            console.error(error)
        }
        const userId = (decodedToken as JwtPayload & { userId: string }).userId;
        if (!userId) {
            throw new Error('Invalid token payload')
        }
        const db = await getDb()
        if (!db) {
            throw new Error('Database connection failed')
        }
        const usersCollection = db.collection('users')
        const user = await usersCollection.findOne({_id: new ObjectId(userId)}, {projection: {hashedPassword: 0}})
        if (!user) {
            throw new Error('User not found');
        }
        return user
    }catch(e){
        const error = e as Error
        console.error(error.message)
    }
}

export default GetUserFromCookies