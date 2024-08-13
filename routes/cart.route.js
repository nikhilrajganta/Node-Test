import express from "express";
import { auth } from "../middleware/auth.middleware.js";
import {
  createNewCart,
  getCart,
  deleteCartItem,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").post(auth, createNewCart);

router.route("/:id").get(auth, getCart).delete(auth, deleteCartItem);

export default router;
