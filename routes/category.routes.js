import { createBulk } from "../controller/category.controller.js";
import express from 'express';
const router = express.Router();

router.post('/create-bulk', createBulk);

export default router;