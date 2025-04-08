import { Order } from "./order.model.js";

export const createOrder = async(req, res) => {
    try {
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        
        res.status(201).send({order: savedOrder});
    } catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error Order POST"});
    }
}

export const getOrders = async(req, res) => {
    try {
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt: -1});

        if (!orders) {
            res.status(400).send({message: "Order not found"});
        }
        res.json(orders);
    } catch(e) {
        console.log(e.message);
        res.status(500).send({message: "Error Orders GET"});
    }
}

