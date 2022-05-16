import express from 'express';
import mongoose from 'mongoose';

import Card from '../models/card.js';

const router = express.Router();

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createCards = async (req, res) => {
    const card = req.body;
    console.log(card)
    const newCard = new Card({...card})
    try {
        await newCard.save();
        res.status(200).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCards = async (req, res) => {
    const {id} =  req.params;
    const { category, question, options } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);
    const updatedCard = { category, question, options, _id:id } 
    await Card.findByIdAndUpdate(id, updatedCard, {new:true});
    res.json(updatedCard);
}

export const deleteCards = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No card with id: ${id}`);

    await Card.findByIdAndRemove(id);

    res.json({ message: "Card deleted successfully." });
}


export default router;