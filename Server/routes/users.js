import express from "express";
const router = express.Router();

import { signin, signup, updateUser } from "../controllers/users.js";

router.get("/signin", signin);
router.post("/signup", signup);
router.patch("/updateuser", updateUser);

export default router;