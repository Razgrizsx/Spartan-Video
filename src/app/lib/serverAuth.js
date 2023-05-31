import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prismadb from './prismadb'

const serverAuth = async (request) => {
    const session = getServerSession(authOptions)

    if (!session?.user?.email) {
        throw new Error('Not signed in');
      }
    
      const currentUser = await prismadb.user.findUnique({
        where: {
          email: session.user.email,
        }
      });
      
      if (!currentUser) {
        throw new Error('Not signed in');
      }
    
      return { currentUser };
}

export default serverAuth