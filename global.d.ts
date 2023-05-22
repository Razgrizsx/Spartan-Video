const { PrismaClient } = require("@prisma/client");

declare global {
    namespace globalthis{
        var prismadb: PrismaClient
    }
}