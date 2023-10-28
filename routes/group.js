import express from 'express';
import { verifyToken } from '../contollers/verifyToken.js';
import { createGroup, deleteGroup } from '../contollers/group.js';

const router = express.Router();

router.post('/', verifyToken, createGroup);
router.delete('/:id', verifyToken, deleteGroup);

export default router;