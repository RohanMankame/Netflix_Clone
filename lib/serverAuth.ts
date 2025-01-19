import {NextApiRequest} from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/lib/prismadb';

const serverAuth = async (req:NextApiRequest)=>{
    
    //console.log("Request Headers:", req.headers);//log req

    const session = await getSession({ req });
    //console.log("Session:", session);

    //console.log("user email:", session?.user?.email);

    if(!session?.user?.email){
        throw new Error('Not signed in')

    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        }
    });
    console.log("CurrentUser:", currentUser);//log req

    if(!currentUser){
        throw new Error('Not signed in')
    }

    return {currentUser};

};

export default serverAuth;
