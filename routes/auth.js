import express from 'express';
import { signUp } from '../contollers/signUp.js';

const router = express.Router();

router.post('/signup', signUp);

export default router;