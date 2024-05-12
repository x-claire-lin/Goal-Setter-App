import express from 'express';
import router from express.Router();
import { registerUser, loginUser, getMe } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';
 from 
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;