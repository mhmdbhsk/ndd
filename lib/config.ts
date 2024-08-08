import dotenv from "dotenv";

dotenv.config({ path: ".env.local " });

export const config = {
	DB_URL: process.env.DATABASE_URL as string,
};
