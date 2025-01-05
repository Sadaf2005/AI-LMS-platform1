"use client"
import React, { useEffect } from 'react'
import { useUser } from "@clerk/nextjs";
// import { eq } from 'drizzle-orm';
// import { db } from "@/configs/db";
// import { USER_TABLE } from "@/configs/schema";
import axios from 'axios';

function Provider({children}) {
    const { user } = useUser();

    // Declare CheckIsNewUser before useEffect
    const CheckIsNewUser = async () => {
        // Check if user already exists
        // const result = await db.select().from(USER_TABLE)
        //     .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));
        
        // console.log(result);
        
        // if (result?.length === 0) {
        //     // User does not exist, so insert new user
        //     const userResp = await db.insert(USER_TABLE).values({
        //         name: user?.fullName,
        //         email: user?.primaryEmailAddress?.emailAddress
        //     }).returning({ id: USER_TABLE.id });

        //     console.log(userResp);
        // }
        // const resp = await axios.post('/api/create-user',{user:user});
        // console.log('User Data:', user);
        // console.log('API Endpoint:', '/api/create-user');
        const resp = await axios.post('/api/create-user', { user:user },{
            headers:{
                'Content-Type':'application/json'
            }
        });
        console.log(resp.data);
    };

    useEffect(() => {
        if (user) CheckIsNewUser();
    }, [user]);

    return (
        <div>
            {children}
        </div>
    );
}

export default Provider;
