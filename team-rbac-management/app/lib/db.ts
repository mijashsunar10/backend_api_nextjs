import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
export const prisma = new PrismaClient({ adapter });

export async function checkDatabseConnection():Promise<Boolean>

{

    try{
        await prisma.$queryRaw`Select 1`;
        return true;
    }catch(error)
    {
        console.error(`Database connection failed: ${error}`);
        return false;
    }
}