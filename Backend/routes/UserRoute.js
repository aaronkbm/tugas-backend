import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/notes', getUsers);
router.get('/notes/:id', getUserById);
router.post('/notes', createUser);
router.patch('/notes/:id', updateUser);
router.delete('/notes/:id', deleteUser);

export default router;