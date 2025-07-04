import {cookies} from "next/headers";
import jwt, {JwtPayload} from "jsonwebtoken";
import {getDb} from "@/utils/mongodb";
import {ObjectId} from "mongodb";
import {tokens} from "@/utils/enums";


const GetUserFromCookies = async (token:tokens)=> {
    try {
        const cookieStore = await cookies()
        const authToken = cookieStore.get(token)?.value
        const secret = token===tokens.ACCESS_TOKEN ? process.env.JWT_SECRET : process.env.JWT_REFRESH_SECRET
        if (!authToken) {
            throw new Error('No token found')
        }
        let decodedToken
        try {
            decodedToken = jwt.verify(authToken, secret as string)
        } catch (e) {
            const error = e as Error
            console.error(error)
            if (error.name === 'TokenExpiredError') {
                throw new Error('Token expired')
            }
            throw new Error('Invalid token')
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