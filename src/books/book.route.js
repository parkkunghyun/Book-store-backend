import express from 'express';
import { Book } from './book.model.js';
import { deleteBook, getAllBooks, getBook, postBook, updateBook } from './book.controller.js';
import { verifyAdminToken } from '../middleware/verifyAdmin.js';


const router = express.Router();

router.post("/create-book", verifyAdminToken ,postBook);
router.get("/", getAllBooks);
router.get("/:id", getBook);
router.put("/edit/:id", verifyAdminToken ,updateBook);
router.delete("/delete/:id", verifyAdminToken ,deleteBook);

export default router;