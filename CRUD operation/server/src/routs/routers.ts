import express from "express";
import {
  deleteContact,
  getContact,
  postContact,
  putContact,
  updateContact,
} from "../controllers/userRouter";
const router = express.Router();

// Home pages
router.get("/", getContact);

//create user
router.post("/user", postContact);

// delete user
router.delete("/userRemove/:id", deleteContact);

// Update user
router.get("/update/:id", updateContact);
router.put("/update/:id", putContact);

export default router;
