import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
 dbCredentials:{
    url:'postgresql://neondb_owner:Cn6GHlKui0QL@ep-twilight-king-a53o47ev.us-east-2.aws.neon.tech/AI-Study-Material_Generator?sslmode=require'
 }
});
