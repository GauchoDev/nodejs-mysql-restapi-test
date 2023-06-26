import { Router } from "express";
import {
  getEmployee,
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} from "../contollers/employees.controllers.js";

const router = Router();
router.get("/employees/:id", getEmployee);
router.get("/employees", getEmployees);
router.post("/employees", createEmployees);
router.patch("/employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;
/* default allows me to call it whatever I want when I import it;
 in this case in index.js I call it employeesRoutes */
