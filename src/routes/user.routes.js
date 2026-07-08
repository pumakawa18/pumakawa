import { Router } from "express";
import { getData, postData, putData } from "../../controladores.js";

const router = Router();

router.get("/", getData);
router.post("/", postData);
router.put("/:id", putData);

export default router;




