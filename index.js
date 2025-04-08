import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import BookRoutes from "./src/books/book.route.js";
import OrderRoutes from "./src/orders/order.route.js";
import userRoutes from "./src/users/user.route.js";
import adminRoutes from "./src/stats/admin.stats.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: ['http://localhost:5173', 'https://book-store-front-smoky.vercel.app/'],  // 정확하게 프론트 주소
    credentials: true                // 쿠키, 토큰 주고 받을 수 있게
  }));
app.use(express.json());
app.use("/api/books", BookRoutes);
app.use("/api/orders", OrderRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("asfa");
})

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Mongo DB is Connected');
        app.listen(PORT, (req, res) => {
            console.log(`server is running port: localhost:${PORT}`)
        });
    })
    .catch((error) => {
        console.log(error);
    });

export default app;