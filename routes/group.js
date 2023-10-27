import express from 'express';
import { verifyToken } from '../contollers/verifyToken.js';
import { createGroup } from '../contollers/groups.js';

const router = express.Router();

router.post('/', verifyToken, createGroup);

export default router;