import express from 'express';
import { verifyToken } from '../contollers/verifyToken.js';
import { createGame } from '../contollers/game.js';
const router = express.Router();

router.post('/', verifyToken, createGame);

export default router;