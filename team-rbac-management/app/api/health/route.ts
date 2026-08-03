import { NextResponse } from "next/server";
import { checkDatabseConnection } from "../../lib/db";

export async function GET() {
    const isConnected = await checkDatabseConnection();
    if(!isConnected)
    {
        return NextResponse.json({status:"error status:", message:"Database connection failed"},
            {status:503}
        );
    }
    return NextResponse.json({status:"success",message:"Database connection successful"},
        {status:200}
    );
}