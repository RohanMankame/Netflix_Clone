import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';

import prismadb from '@/lib/prismadb';
import serverAuth from '@/lib/serverAuth';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method == 'POST') {
        console.log("IM IN POST");
        const  {currentUser}  = await serverAuth(req);
        console.log("OUT OF POST 1");
        const { movieId } = req.body;

        

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });
      

      if (!existingMovie) {
        throw new Error('Invalid ID');
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: {
            push: movieId,
          }
        }
      });

      return res.status(200).json(user);
    }

    console.log("OUT OF POST");

    if (req.method == 'DELETE') {
      const  {currentUser}  = await serverAuth(req);
      const { movieId } = req.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });

      if (!existingMovie) {
        throw new Error('Invalid ID');
      }

      const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email || '',
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        }
      });

      return res.status(200).json(updatedUser);
    }

  } catch (error) {
    console.log(error);

    return res.status(400).end();
  }
}