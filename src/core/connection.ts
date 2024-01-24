import { createClient } from "redis";

export const connect =async () => {
    const client =createClient();
    client.on("error", err=> console.log("Redis client error", err));
    console.log("Success");
    await client.connect();
    return client
    
}