import { pool } from "../database/db.js";

export const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows <= 0) {
      res.json({ message: "employee not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const createEmployees = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO employee (name, salary) VALUES (?, ?)",
      [name, salary]
    );
    res.send({ id: rows.insertId, name, salary });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const result = await pool.query(
      "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id]
    );
    console.log(`Affected rows: ${result[0].affectedRows}`);
    if (result[0].affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "DELETE FROM employee WHERE id = ?";
    const results = await pool.query(query, [id]);
    if (results[0].affectedRows <= 0) {
      res.json({ message: "Employee not found" });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Failed to delete employee" });
  }
};
