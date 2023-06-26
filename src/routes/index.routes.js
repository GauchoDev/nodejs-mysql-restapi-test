import { Router } from "express";

import { ping } from "../contollers/index.controllers.js";

const router = Router();

router.get("/ping", ping);

export default router;
