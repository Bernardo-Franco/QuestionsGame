import express from 'express';

import { getCards, createCards, updateCards, deleteCards } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.get('/:id', getCards);

router.post('/', createCards);
router.patch('/:id', updateCards);
router.delete('/:id', deleteCards);

export default router;