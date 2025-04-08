import express from "express";
import { createOrder, getOrders } from "./order.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/email/:email", getOrders);

export default router;