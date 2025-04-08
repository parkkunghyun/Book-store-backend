import { Book } from "./book.model.js";

export const postBook = async(req, res) => {
    try {
        const newBook = await Book({...req.body});
        await newBook.save();

        res.status(201).send({message: "Book posted successfully", book: newBook});
    }  catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error Book post"});
    }
}

export const getAllBooks = async(req, res) => {
    try {
        const allBook = await Book.find();

        res.status(200).send({message: "Get All Books successfully", book: allBook});
    }  catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error Get All Books"});
    }
}

export const getBook = async(req, res) => {
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(400).send({message: "Error No Book ID"});
        }
        res.status(200).send({message: "Get Single Book successfully", book: book});
    }  catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error Get No Book"});
    }
}

export const updateBook = async(req, res) => {
    try {
        const {id} = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedBook) {
            return res.status(400).send({message: "Error No Book ID"});
        }
        res.status(200).send({message: "Update a Book successfully", book: updatedBook});
    }  catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error  Update Book"});
    }
}

export const deleteBook = async(req, res) => {
    try {
        const {id} = req.params;
        await Book.findByIdAndDelete(id);
        
        res.status(200).send({message: "Delete a Book successfully"});
    }  catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error  Delete Book"});
    }
}