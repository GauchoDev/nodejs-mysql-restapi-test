import { pool } from "../database/db.js"; /*.. es para subir un nivel */

export const ping = async (req, res) => {
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
};
