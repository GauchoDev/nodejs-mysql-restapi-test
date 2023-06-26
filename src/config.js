import { config } from "dotenv";

config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DATABASE);

export const PORT = process.env.PORT || 3000;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "GauchoMySQL";
export const DATABASE =
  process.env.DATABASE || "companydb_Nodejs_Rest_API_project";

/*Con estas 2 lineas ya estoy leyendo variables de entorno (environment variables ) */

/*process es un objeto global de node. env almacena tods las variables que
 tiene mi computadora. PORT ES UNA DE ESAS VARIABLES */

// Use the environment variable or default to 3000
