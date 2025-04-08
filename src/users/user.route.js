import express from 'express';
import { User } from './user.model.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const router = express.Router();

router.post("/admin", async(req, res) => {
    const {username, password} = req.body;
    try {
        const admin = await User.findOne({username});

        if (!admin) {
            return res.status(404).send({message: "Admin not found"});
        }

        if (password !== admin.password) {
            return res.status(404).send({message: "Invalid password"});
        }

        const token = jwt.sign({id: admin._id, username: admin.username, role: admin.role},
            JWT_SECRET_KEY, {expiresIn: "1h"}
        );
        return res.json({token, message: "Authentication Success", user: {username: admin.username, role: admin.role}})

    } catch(e) {
        console.log("Failed to login as admin", e);
        res.status(500).send({message: "Invalid to login"});
    }
})

export default router;