import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
        if (req.method !== 'GET') {
            return res.status(405).end();
        }

        try {
                
          const itemsNumber = await prismadb.movie.count();
            
          const mov = await prismadb.movie.findMany({
                      take: 1,
                       skip: Math.floor(Math.random() * (itemsNumber - 1)),
                    });
                    console.log("randomMovies:", mov[0]);
            
                if (mov) {
                        console.log(`found.`);
                  return res.status(200).json(mov[0]);
                } else {
                  console.log(`Movie with ID  not found.`);
                  return res
                    .status(404)
                    .json({ message: 'No movie found (but database connection OK)' });
                }
              } catch (error) {
                console.error("Database connection or query error:", error);
                return res.status(500).json({ message: 'Database error' });
              }
            }
