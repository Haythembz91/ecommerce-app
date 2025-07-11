import {cookies} from "next/headers";
import {JwtPayload} from "jsonwebtoken";
import {getDb} from "@/utils/mongodb";
import {ObjectId} from "mongodb";
import {tokens} from "@/utils/enums";
import {jwtVerify} from "jose";
import bcrypt from "bcryptjs";

const GetUserFromCookies = async (token:tokens)=> {

        const cookieStore = await cookies()
        const authToken = cookieStore.get(token)?.value
        const secret = token===tokens.ACCESS_TOKEN ? process.env.JWT_SECRET : process.env.JWT_REFRESH_SECRET
        if (!authToken) {
            throw new Error('Token not found or expired')
        }
        let decodedToken
        try {
            const {payload} = await jwtVerify(authToken, new TextEncoder().encode(secret as string));
            decodedToken = payload;
        } catch (e) {
            const error = e as Error
            console.error(error)
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
        if(authToken===cookieStore.get(tokens.REFRESH_TOKEN)?.value){
            const userToken = await db.collection('refreshTokens').findOne({userId: user._id})
            if(!userToken){
                throw new Error('Refresh token not found')
            }
            const isValid = await bcrypt.compare(authToken,userToken.token)
            if(!isValid){
                throw new Error('Invalid refresh token')
            }
        }
        return user
}

export default GetUserFromCookies