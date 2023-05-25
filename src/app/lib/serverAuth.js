import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import prismadb from './prismadb'

const serverAuth = async (request) => {
    const session = getServerSession(authOptions)
}